"use client";
import { motion } from "framer-motion";
import { Radio } from "lucide-react";

const activeBuilds = [
  {
    status: "IN DEVELOPMENT",
    title: "Autonomous Coding Subagent Engine",
    desc: "Engineering self-healing AI subagents capable of continuous refactoring, automated unit test generation, and complex multi-file updates.",
    accent: "#FF8A00",
  },
  {
    status: "R&D PHASE",
    title: "Personalized Portfolio OS v2",
    desc: "Designing a multi-theme, high-performance web operating system with instant AI assistant context, command terminal, and 3D graphics.",
    accent: "#5B8CFF",
  },
];

export default function CurrentBuildsSection() {
  return (
    <section id="building" className="relative z-10 py-24 px-6 md:px-12 max-w-[1280px] mx-auto w-full text-center">
      {/* Background Radial Light Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, #FF8A00 0%, #5B8CFF 50%, transparent 80%)" }}
      />

      <div className="mb-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 text-[#FF8A00] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Radio className="w-3.5 h-3.5 animate-pulse" /> CURRENTLY BUILDING
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight max-w-3xl leading-tight"
        >
          Active <span className="text-[#FF8A00]">Innovations</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
        {activeBuilds.map((build, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="w-full p-8 rounded-3xl text-left bg-[#121110]/90 border backdrop-blur-2xl transition-all duration-300"
            style={{
              borderColor: `${build.accent}45`,
              boxShadow: `0 10px 30px -10px ${build.accent}25`,
            }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ background: build.accent }}
              />
              <span
                className="font-mono text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border"
                style={{
                  color: build.accent,
                  borderColor: `${build.accent}40`,
                  background: `${build.accent}15`,
                }}
              >
                {build.status}
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#F5F5F5] mb-3">
              {build.title}
            </h3>

            <p className="font-sans text-sm text-[#B5B5B5] leading-relaxed">
              {build.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
