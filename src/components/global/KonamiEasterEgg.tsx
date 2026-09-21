"use client";
import { useEffect, useState } from "react";

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export default function KonamiEasterEgg() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[progress]) {
        const next = progress + 1;
        setProgress(next);
        if (next === KONAMI.length) {
          setActive(true);
          setProgress(0);
        }
      } else {
        setProgress(0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [progress]);

  if (!active) return null;

  return (
    <div className="konami-overlay" onClick={() => setActive(false)}>
      <div className="text-center animate-fade-in">
        <div className="text-8xl mb-6">🎮</div>
        <h2 className="text-4xl font-bold gradient-text font-display mb-4">
          CHEAT CODE UNLOCKED!
        </h2>
        <p className="text-xl text-gray-400 mb-4">+30 lives. You&apos;re a legend.</p>
        <div className="text-5xl animate-bounce">🏆</div>
        <p className="text-gray-500 mt-8 text-sm">Click anywhere to close</p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          {["🎊","⭐","🚀","💎","🔥","✨","🎯","💡"].map((e, i) => (
            <span key={i} className="text-3xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
