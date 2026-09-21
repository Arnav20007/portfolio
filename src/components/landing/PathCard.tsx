"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PathCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  gradient: string;
  glowColor: string;
  id: string;
  delay?: number;
}

export default function PathCard({
  emoji, title, subtitle, description, href, gradient, glowColor, id, delay = 0
}: PathCardProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={id}
      className="path-card glass rounded-2xl p-8 text-center"
      style={{
        animationDelay: `${delay}s`,
        boxShadow: hovered ? `0 24px 60px ${glowColor}` : "var(--shadow-card)",
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(href)}
    >
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 transition-all duration-300"
        style={{
          background: gradient,
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          boxShadow: hovered ? `0 12px 30px ${glowColor}` : "none",
        }}
      >
        {emoji}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold font-display mb-1">{title}</h3>
      <p className="text-sm font-mono mb-4" style={{ color: "var(--text-secondary)" }}>
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>

      {/* CTA arrow */}
      <div
        className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300"
        style={{ color: hovered ? "white" : "var(--text-muted)", opacity: hovered ? 1 : 0.5 }}
      >
        Enter
        <span
          className="transition-transform duration-300"
          style={{ transform: hovered ? "translateX(6px)" : "translateX(0)" }}
        >
          →
        </span>
      </div>
    </div>
  );
}
