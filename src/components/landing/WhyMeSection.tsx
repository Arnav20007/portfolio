"use client";
import { motion } from "framer-motion";
import { Zap, Code2, Cpu, Rocket } from "lucide-react";

const stats = [
  {
    value: "15+",
    label: "Products Built",
    sub: "Web apps, AI tools & micro-SaaS",
    icon: Rocket,
    accent: "#FF8A00",
    glow: "rgba(255, 138, 0, 0.25)",
  },
  {
    value: "8+",
    label: "Core Technologies",
    sub: "Next.js, Python, React, AI/ML...",
    icon: Code2,
    accent: "#5B8CFF",
    glow: "rgba(91, 140, 255, 0.25)",
  },
  {
    value: "AI + Full Stack",
    label: "Specialized Focus",
    sub: "End-to-end intelligent products",
    icon: Cpu,
    accent: "#A855F7",
    glow: "rgba(168, 85, 247, 0.25)",
  },
  {
    value: "100%",
    label: "Dedication & Speed",
    sub: "Always learning & evolving fast",
    icon: Zap,
    accent: "#22C55E",
    glow: "rgba(34, 197, 94, 0.25)",
  },
];

export default function WhyMeSection() {
  return (
    <section id="why-me" className="relative z-10 py-24 px-6 md:px-12 max-w-[1280px] mx-auto w-full text-center">
      {/* Background Ambient Radial Light Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-20"
        style={{ background: "radial-gradient(circle, #FF8A00 0%, #A855F7 50%, transparent 80%)" }}
      />

      <div className="mb-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 text-[#FF8A00] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Zap className="w-3.5 h-3.5" /> WHY WORK WITH ME
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight max-w-3xl leading-tight"
        >
          Building products, <span className="text-[#FF8A00]">not just projects.</span>
        </motion.h2>
      </div>

      {/* Innovative Glassmorphism Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
        {stats.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col justify-between w-full max-w-[290px] h-[240px] p-7 rounded-3xl text-left transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(18, 16, 14, 0.92)",
                border: `1.5px solid ${stat.accent}40`,
                backdropFilter: "blur(24px)",
                boxShadow: `0 10px 30px -10px ${stat.glow}`,
              }}
            >
              {/* Top Accent Gradient Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
                }}
              />

              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${stat.accent}60`,
                    background: `${stat.accent}15`,
                    boxShadow: `0 0 15px ${stat.glow}`,
                  }}
                >
                  <IconComp className="w-6 h-6" style={{ color: stat.accent }} />
                </div>
                <span className="font-mono text-xs font-bold text-[#A0A0A0]/50">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <div
                  className="font-display font-extrabold text-3xl sm:text-4xl mb-1 tracking-tight"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </div>
                <div className="font-sans font-bold text-base text-[#F5F5F5] mb-1">
                  {stat.label}
                </div>
                <div className="font-sans text-xs text-[#A0A0A0] leading-relaxed">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
