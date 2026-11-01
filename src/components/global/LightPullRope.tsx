"use client";

import { useState, useEffect, useRef } from "react";

export default function LightPullRope() {
  const [isDark, setIsDark] = useState(false);
  const ropeRef = useRef<SVGSVGElement>(null);
  const pullRef = useRef<SVGGElement>(null);
  const ropeMotion = useRef({
    angle: 0,
    angularVelocity: 0,
    cursorX: 0,
    cursorTime: 0,
    cursorSpeedX: 0,
    frame: 0,
  });

  // Initialize mode from document or localStorage
  useEffect(() => {
    const syncMode = (mode: string | null) => {
      const dark = mode === "dark";
      document.documentElement.toggleAttribute("data-mode", false);
      if (dark) document.documentElement.dataset.mode = "dark";
      setIsDark(dark);
    };
    const savedMode = document.documentElement.dataset.mode || localStorage.getItem("arnav-mode");
    syncMode(savedMode);
    const handleModeChange = (event: Event) => {
      syncMode((event as CustomEvent<string>).detail);
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "arnav-mode") syncMode(event.newValue);
    };
    window.addEventListener("arnav-mode-change", handleModeChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("arnav-mode-change", handleModeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    const state = ropeMotion.current;
    const ropeLength = 307;
    const maxAngle = 0.68;
    const animateRope = () => {
      state.angularVelocity += -Math.sin(state.angle) * 0.008 + state.cursorSpeedX * 0.018;
      state.angularVelocity *= 0.992;
      state.angle += state.angularVelocity;
      state.cursorSpeedX *= 0.76;
      if (state.angle > maxAngle || state.angle < -maxAngle) {
        state.angle = Math.max(-maxAngle, Math.min(maxAngle, state.angle));
        state.angularVelocity *= -0.28;
      }

      const bounds = ropeRef.current?.getBoundingClientRect();
      const unitX = (bounds?.width || 54) / 54;
      const endX = 27 + (ropeLength * Math.sin(state.angle)) / unitX;
      const endY = ropeLength * Math.cos(state.angle);
      const bend = endX - 27;
      const path = `M 27 0 C ${27 + bend * 0.08} 98, ${27 + bend * 0.82} 226, ${endX} ${endY}`;
      ropeRef.current?.querySelectorAll<SVGPathElement>(".cord-rope-path").forEach((strand) => {
        strand.setAttribute("d", path);
      });
      const bellAngle = (state.angle * 180) / Math.PI;
      pullRef.current?.setAttribute(
        "transform",
        `translate(${endX - 27} ${endY}) rotate(${bellAngle} 27 0)`,
      );

      const settled =
        Math.abs(state.angle) < 0.001 &&
        Math.abs(state.angularVelocity) < 0.001 &&
        Math.abs(state.cursorSpeedX) < 0.001;
      if (settled) {
        state.angle = 0;
        state.angularVelocity = 0;
        state.frame = 0;
        return;
      }
      state.frame = window.requestAnimationFrame(animateRope);
    };

    const scheduleRope = () => {
      if (!state.frame) state.frame = window.requestAnimationFrame(animateRope);
    };
    const resetRope = () => {
      state.cursorSpeedX = 0;
    };

    const followPointer = (event: PointerEvent) => {
      const rope = ropeRef.current;
      if (!rope) return;

      const bounds = rope.getBoundingClientRect();
      const now = performance.now();
      const elapsed = state.cursorTime ? Math.max(8, now - state.cursorTime) : 16;
      const speedX = state.cursorTime ? (event.clientX - state.cursorX) / elapsed : 0;
      state.cursorX = event.clientX;
      state.cursorTime = now;
      const anchorX = bounds.left + bounds.width / 2;
      const unitX = bounds.width / 54;
      const unitY = bounds.height / 400;
      const jointX = anchorX + ropeLength * Math.sin(state.angle) * unitX;
      const jointY = bounds.top + ropeLength * Math.cos(state.angle) * unitY;
      const progress = Math.max(0, Math.min(1, (event.clientY - bounds.top) / Math.max(1, jointY - bounds.top)));
      const cordX = anchorX + (jointX - anchorX) * progress * progress;
      const cordY = bounds.top + (jointY - bounds.top) * progress;
      const distance = Math.min(
        Math.hypot(event.clientX - jointX, event.clientY - jointY),
        Math.hypot(event.clientX - cordX, event.clientY - cordY),
      );
      const influence = Math.max(0, 1 - distance / 150);
      state.cursorSpeedX = Math.max(-3, Math.min(3, speedX)) * influence;
      if (influence > 0) scheduleRope();
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) resetRope();
    };

    window.addEventListener("pointermove", followPointer, { passive: true });
    window.addEventListener("blur", resetRope);
    window.addEventListener("pointerout", handlePointerOut);
    return () => {
      window.removeEventListener("pointermove", followPointer);
      window.removeEventListener("blur", resetRope);
      window.removeEventListener("pointerout", handlePointerOut);
      if (state.frame) window.cancelAnimationFrame(state.frame);
    };
  }, []);

  // Web Audio synthesizer for crisp mechanical light switch pull-click sound
  const playSwitchSound = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Sharp mechanical transient click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const handlePull = () => {
    playSwitchSound();

    const nextMode = !isDark;
    setIsDark(nextMode);

    if (nextMode) {
      document.documentElement.setAttribute("data-mode", "dark");
      localStorage.setItem("arnav-mode", "dark");
    } else {
      document.documentElement.removeAttribute("data-mode");
      localStorage.setItem("arnav-mode", "light");
    }
    window.dispatchEvent(new CustomEvent("arnav-mode-change", { detail: nextMode ? "dark" : "light" }));

  };

  return (
    <button
      type="button"
      className="pull-cord-fixed group"
      onClick={handlePull}
      title={isDark ? "Pull cord to switch on Day lighting" : "Pull cord to switch off Night lighting"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      {/* Ceiling Mount Brass Rosette */}
      <div className="cord-ceiling-mount" />

      <svg ref={ropeRef} className="cord-rope-svg" viewBox="0 0 54 400" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="cord-fiber-base" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#68481f" />
            <stop offset=".28" stopColor="#d0b27d" />
            <stop offset=".5" stopColor="#f4e5c1" />
            <stop offset=".72" stopColor="#b08a50" />
            <stop offset="1" stopColor="#59401e" />
          </linearGradient>
          <pattern id="cord-fiber-weave" width="8" height="12" patternUnits="userSpaceOnUse">
            <path d="M-2 12 6 0M2 12 10 0" fill="none" stroke="#fff0c9" strokeOpacity=".72" strokeWidth="1.4" />
            <path d="M-2 0 6 12M2 0 10 12" fill="none" stroke="#63451f" strokeOpacity=".82" strokeWidth="1.2" />
          </pattern>
          <linearGradient id="collar-metal" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#765521" />
            <stop offset=".38" stopColor="#f0d28d" />
            <stop offset=".58" stopColor="#fff0bf" />
            <stop offset="1" stopColor="#72501d" />
          </linearGradient>
          <linearGradient id="bronze-metal" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#33271d" />
            <stop offset=".22" stopColor="#776044" />
            <stop offset=".43" stopColor="#c1a77d" />
            <stop offset=".52" stopColor="#e3d0ad" />
            <stop offset=".7" stopColor="#90734d" />
            <stop offset="1" stopColor="#30251b" />
          </linearGradient>
          <linearGradient id="bronze-edge" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#b3986b" />
            <stop offset=".5" stopColor="#71593c" />
            <stop offset="1" stopColor="#31271d" />
          </linearGradient>
        </defs>
        <path className="cord-rope-path cord-rope-shadow" d="M 27 0 C 27 98, 27 226, 27 320" />
        <path className="cord-rope-path cord-rope-base" d="M 27 0 C 27 98, 27 226, 27 320" />
        <path className="cord-rope-path cord-rope-weave" d="M 27 0 C 27 98, 27 226, 27 320" />
        <path className="cord-rope-path cord-rope-glint" d="M 27 0 C 27 98, 27 226, 27 320" />
        <g ref={pullRef} className="cord-bronze-pull" transform="translate(0 307)">
          <g transform="translate(27 0) scale(.84) translate(-27 0)">
            <rect className="cord-brass-collar" x="19" y="0" width="16" height="6" rx="2" fill="url(#collar-metal)" stroke="#6e4e1f" strokeWidth=".7" />
            <path d="M27 5v6" fill="none" stroke="url(#bronze-metal)" strokeWidth="3" />
            <path d="M27 5c4 7 15 15 17 28 3 18-5 31-17 35C15 64 7 51 10 33 12 20 23 12 27 5Z" fill="url(#bronze-metal)" stroke="#30251a" strokeWidth="1.2" />
            <path d="M12 48c8 4 22 4 30 0M15 57c7 4 17 4 24 0" fill="none" stroke="url(#bronze-edge)" strokeWidth="1.3" />
            <path d="M23 18c-5 9-7 20-5 31" fill="none" stroke="#f2e2c3" strokeOpacity=".62" strokeLinecap="round" strokeWidth="1.6" />
            <path d="M34 17c6 11 8 24 4 36" fill="none" stroke="#30251a" strokeOpacity=".44" strokeLinecap="round" strokeWidth="1.3" />
          </g>
        </g>
      </svg>

      {/* Hover Tooltip */}
      <span className="pull-cord-tooltip">
        {isDark ? "Lights On" : "Lights Off"}
      </span>
    </button>
  );
}
