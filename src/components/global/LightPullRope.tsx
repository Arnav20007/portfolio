"use client";

import { useState, useEffect } from "react";

export default function LightPullRope() {
  const [isDark, setIsDark] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  // Initialize mode from document or localStorage
  useEffect(() => {
    const isCurrentlyDark =
      document.documentElement.getAttribute("data-mode") === "dark" ||
      localStorage.getItem("arnav-mode") === "dark";
    if (isCurrentlyDark) {
      document.documentElement.setAttribute("data-mode", "dark");
      requestAnimationFrame(() => setIsDark(true));
    }
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
    setIsPulling(true);
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

    setTimeout(() => {
      setIsPulling(false);
    }, 280);
  };

  return (
    <button
      type="button"
      className={`pull-cord-fixed group ${isPulling ? "pulling" : ""}`}
      onClick={handlePull}
      title={isDark ? "Pull cord to switch on Day lighting" : "Pull cord to switch off Night lighting"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      {/* Ceiling Mount Brass Rosette */}
      <div className="cord-ceiling-mount" />

      {/* Double Parallel Braided Cords */}
      <div className="cord-double-track">
        <span className="cord-strand" />
        <span className="cord-strand" />
      </div>

      {/* Brass Connector Collar Ring */}
      <div className="cord-brass-collar" />

      {/* Small brushed-brass bell pull */}
      <div className="cord-bell">
        <span className="cord-bell-highlight" />
      </div>

      {/* Hover Tooltip */}
      <span className="pull-cord-tooltip">
        {isDark ? "Lights On" : "Lights Off"}
      </span>
    </button>
  );
}
