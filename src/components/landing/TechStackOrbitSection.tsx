"use client";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const skills = [
  { name: "React", category: "Frontend Core", color: "#61DAFB" },
  { name: "Next.js 16", category: "App Router / Turbopack", color: "#F5F5F5" },
  { name: "Python", category: "Backend & Data", color: "#3776AB" },
  { name: "Flask", category: "REST APIs", color: "#FF8A00" },
  { name: "Node.js", category: "Server Runtime", color: "#68A063" },
  { name: "MongoDB", category: "NoSQL Database", color: "#47A248" },
  { name: "OpenAI / LLMs", category: "AI Agent Workflows", color: "#10A37F" },
  { name: "Firebase", category: "Auth & Realtime DB", color: "#FFCA28" },
  { name: "TypeScript", category: "Type Safety", color: "#3178C6" },
  { name: "TailwindCSS", category: "Design System", color: "#38BDF8" },
];

export default function TechStackOrbitSection() {
  return (
    <section id="tech-stack" className="relative z-10 py-24 px-6 md:px-12 max-w-[1280px] mx-auto w-full text-center">
      {/* Background Radial Light Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, #FF5533 0%, #38BDF8 50%, transparent 80%)" }}
      />

      <div className="mb-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF5533]/30 bg-[#FF5533]/10 text-[#FF5533] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Layers className="w-3.5 h-3.5" /> TECH ECOSYSTEM
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight max-w-3xl leading-tight"
        >
          Technologies & <span className="text-[#FF5533]">Tools</span>
        </motion.h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#121110]/90 border border-white/10 hover:border-[#FF5533]/60 backdrop-blur-xl transition-all duration-300 shadow-xl cursor-pointer"
            style={{
              boxShadow: `0 8px 25px -10px ${skill.color}30`,
            }}
          >
            <span
              className="w-3.5 h-3.5 rounded-full shrink-0 animate-pulse"
              style={{ background: skill.color, boxShadow: `0 0 12px ${skill.color}` }}
            />
            <div className="text-left">
              <div className="font-sans font-bold text-base text-[#F5F5F5]">
                {skill.name}
              </div>
              <div className="font-mono text-[11px] text-[#A0A0A0]">
                {skill.category}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
