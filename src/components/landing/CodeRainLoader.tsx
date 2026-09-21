"use client";
import { useEffect, useRef } from "react";

export default function CodeRainLoader({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const fontSize = 13;
    let cols = Math.floor(w / fontSize);
    let drops: number[] = Array(cols).fill(1);
    const chars = "アイウエオカキクケコABCDEF01234567!@#$%";

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / fontSize);
      drops = Array(cols).fill(1);
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      // Warm dark fade
      ctx.fillStyle = "rgba(14, 12, 9, 0.07)";
      ctx.fillRect(0, 0, w, h);

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const bright = Math.random();
        if (bright > 0.96) {
          ctx.fillStyle = "#f2ebe0"; // cream highlight
        } else if (i % 5 === 0) {
          ctx.fillStyle = "#fbbf24"; // gold
        } else {
          ctx.fillStyle = "rgba(249, 115, 22, 0.65)"; // amber
        }
        ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 40);
    const timer = setTimeout(() => {
      clearInterval(interval);
      window.removeEventListener("resize", onResize);
      onDone();
    }, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [onDone]);

  return (
    <div className="code-rain-root">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-display font-black tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              color: "#f2ebe0",
              textShadow: "0 0 60px rgba(249,115,22,0.5)",
            }}
          >
            Arnav Singh
          </span>
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(251,191,36,0.6)" }}
          >
            Loading...
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="w-48 h-px rounded-full overflow-hidden"
          style={{ background: "rgba(242,235,224,0.08)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #c2410c, #f97316, #fbbf24)",
              animation: "shimmerBar 2.6s linear forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}
