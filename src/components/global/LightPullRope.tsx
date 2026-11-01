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

      // Sharp transient pulse
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.035);

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
    }, 240);
  };

  return (
    <div
      className={`pull-cord-fixed group ${isPulling ? "pulling" : ""}`}
      onClick={handlePull}
      title={isDark ? "Pull cord: Turn lights ON" : "Pull cord: Turn lights OFF"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePull();
        }
      }}
      aria-label="Pull ceiling cord to toggle lights"
    >
      {/* Ceiling Brass Mount Plate */}
      <div className="cord-ceiling-mount" />

      {/* Braided Hanging Rope Line */}
      <div className="cord-line-braided" />

      {/* Brass Connector Ring */}
      <div className="cord-ring" />

      {/* Turned Walnut Wood Acorn Tassel */}
      <div className="cord-acorn-wooden" />

      {/* Hover Tooltip Pill */}
      <span className="pull-cord-tooltip">
        {isDark ? "Turn Lights On" : "Turn Lights Off"}
      </span>
    </div>
  );
}
