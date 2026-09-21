"use client";
import { motion } from "framer-motion";
import { Orbit, Cpu } from "lucide-react";

const orbitInner = [
  { name: "React 19", color: "#61DAFB" },
  { name: "Next.js 16", color: "#F5F5F5" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
];

const orbitOuter = [
  { name: "OpenAI / LLMs", color: "#10A37F" },
  { name: "Flask", color: "#FF8A00" },
  { name: "Node.js", color: "#68A063" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Firebase", color: "#FFCA28" },
];

export default function OrbitTechSection() {
  return (
    <section id="orbit-tech" className="relative z-10 max-w-[1240px] mx-auto w-full text-center">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-20"
        style={{ background: "radial-gradient(circle, #5B8CFF 0%, #FF8A00 60%, transparent 80%)" }}
      />

      {/* Header Container Box */}
      <div className="mb-16 p-8 md:p-10 rounded-3xl bg-[#0E131F]/80 border border-[#5B8CFF]/30 backdrop-blur-2xl max-w-3xl mx-auto flex flex-col items-center text-center shadow-[0_10px_30px_rgba(91,140,255,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5B8CFF]/40 bg-[#5B8CFF]/15 text-[#5B8CFF] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Orbit className="w-3.5 h-3.5 animate-spin" /> ORBITAL TECH ECOSYSTEM
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          Interactive <span className="text-[#5B8CFF]">Skill Orbit</span>
        </motion.h2>
      </div>

      {/* Main Orbit Box Container */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0C101A]/90 border border-[#5B8CFF]/30 backdrop-blur-2xl max-w-4xl mx-auto flex flex-col items-center justify-center relative overflow-hidden shadow-[0_20px_50px_rgba(91,140,255,0.15)]">
        
        {/* Central Core Node */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="z-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#1E1915] via-[#120F0D] to-[#0A0807] border-2 border-[#5B8CFF] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(91,140,255,0.4)] mb-10 cursor-pointer"
        >
          <Cpu className="w-8 h-8 text-[#5B8CFF] mb-1" />
          <span className="font-mono text-xs font-extrabold text-[#F5F5F5]">ARNAV.OS</span>
          <span className="font-mono text-[9px] text-[#5B8CFF] tracking-widest uppercase">CORE</span>
        </motion.div>

        {/* Contained Skill Pills Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl z-30">
          {[...orbitInner, ...orbitOuter].map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="flex min-w-0 items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-[#121110]/95 border border-white/10 hover:border-[#5B8CFF]/70 backdrop-blur-xl transition-all shadow-xl cursor-pointer"
              style={{
                boxShadow: `0 0 15px ${skill.color}20`,
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
                style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
              />
              <span className="font-mono text-xs font-bold text-[#F5F5F5] text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
