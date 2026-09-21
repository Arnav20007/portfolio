"use client";
import { motion } from "framer-motion";
import { Milestone } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Started Programming",
    desc: "Discovered computer science fundamentals, algorithm design, data structures, and building first interactive web applications.",
    accent: "#FF8A00",
  },
  {
    year: "2025",
    title: "Full Stack Mastery",
    desc: "Mastered React, Next.js, Python Flask, and database architectures. Developed & deployed production full-stack platforms.",
    accent: "#5B8CFF",
  },
  {
    year: "2026",
    title: "AI Integration & Products",
    desc: "Engineered autonomous AI agent workflows, real-time LLM integrations, and micro-SaaS applications focused on user impact.",
    accent: "#FF5533",
  },
  {
    year: "Future",
    title: "Tech Startup & Innovations",
    desc: "Scaling high-impact technology products, building autonomous AI systems, and leading software engineering teams.",
    accent: "#22C55E",
  },
];

export default function JourneyTimelineSection() {
  return (
    <section id="timeline" className="relative z-10 max-w-[1240px] mx-auto w-full text-center">
      {/* Background Radial Light Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, #22C55E 0%, #FF8A00 50%, transparent 80%)" }}
      />

      {/* Header Container Box */}
      <div className="mb-16 p-8 md:p-10 rounded-3xl bg-[#0E1511]/80 border border-[#22C55E]/30 backdrop-blur-2xl max-w-3xl mx-auto flex flex-col items-center text-center shadow-[0_10px_30px_rgba(34,197,94,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/15 text-[#22C55E] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Milestone className="w-3.5 h-3.5" /> MY JOURNEY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          Growth & <span className="text-[#22C55E]">Milestones</span>
        </motion.h2>
      </div>

      {/* Main Timeline Box Container */}
      <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#0C120E]/90 border border-[#22C55E]/30 backdrop-blur-2xl max-w-4xl mx-auto relative text-center shadow-[0_20px_50px_rgba(34,197,94,0.12)]">
        {/* Glowing vertical connector line */}
        <div className="absolute left-6 md:left-1/2 top-12 bottom-12 w-[2.5px] bg-gradient-to-b from-[#FF8A00] via-[#5B8CFF] to-[#22C55E] opacity-40 -translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node Center Dot */}
              <div
                className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-[#080808] border-2 -translate-x-1/2 z-10"
                style={{
                  borderColor: item.accent,
                  boxShadow: `0 0 16px ${item.accent}`,
                }}
              />

              <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-6">
                <div
                  className="bg-[#121110]/95 border p-6 md:p-7 rounded-3xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg text-center"
                  style={{
                    borderColor: `${item.accent}40`,
                    boxShadow: `0 10px 30px -10px ${item.accent}25`,
                  }}
                >
                  <span
                    className="font-mono text-xs font-extrabold uppercase tracking-wider block mb-2 px-3 py-1 rounded-full w-fit mx-auto"
                    style={{
                      color: item.accent,
                      background: `${item.accent}15`,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
