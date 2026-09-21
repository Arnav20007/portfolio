"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "MoodMate",
    tagline: "AI Mental Wellness Platform",
    desc: "Real-time AI sentiment analysis, mood tracking, and personalized mental health guidance powered by LLM agents.",
    tags: ["Next.js", "OpenAI", "TailwindCSS"],
    accent: "#FF8A00",
    cardBg: "rgba(22, 16, 12, 0.94)",
    glow: "rgba(255, 138, 0, 0.35)",
    href: "/recruiter#projects",
  },
  {
    title: "ASCEND",
    tagline: "Productivity OS & Workspace",
    desc: "All-in-one task management, focus timer, habit tracker, and command-line search engine for power users.",
    tags: ["React", "TypeScript", "Zustand"],
    accent: "#5B8CFF",
    cardBg: "rgba(12, 16, 26, 0.94)",
    glow: "rgba(91, 140, 255, 0.35)",
    href: "/recruiter#projects",
  },
  {
    title: "FinanceCalc",
    tagline: "Modern Wealth & Finance Analytics",
    desc: "Interactive compound interest calculator, investment portfolio modeling, and real-time chart visualizations.",
    tags: ["Python", "Flask", "Recharts"],
    accent: "#FF5533",
    cardBg: "rgba(26, 14, 14, 0.94)",
    glow: "rgba(255, 85, 51, 0.35)",
    href: "/recruiter#projects",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-12 max-w-[1280px] mx-auto w-full text-center">
      {/* Background Radial Light Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, #5B8CFF 0%, #FF8A00 50%, transparent 80%)" }}
      />

      <div className="mb-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5B8CFF]/30 bg-[#5B8CFF]/10 text-[#5B8CFF] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <FolderGit2 className="w-3.5 h-3.5" /> FEATURED WORK
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight max-w-3xl leading-tight"
        >
          Handcrafted <span className="text-[#5B8CFF]">Digital Products</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative flex flex-col justify-between w-full max-w-[370px] min-h-[420px] p-8 rounded-3xl text-left transition-all duration-300 overflow-hidden"
            style={{
              background: proj.cardBg,
              border: `1.5px solid ${proj.accent}45`,
              backdropFilter: "blur(24px)",
              boxShadow: `0 15px 40px -15px ${proj.glow}`,
            }}
          >
            {/* Top Glow Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, transparent, ${proj.accent}, transparent)`,
              }}
            />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-mono text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border"
                  style={{
                    color: proj.accent,
                    borderColor: `${proj.accent}50`,
                    background: `${proj.accent}15`,
                    boxShadow: `0 0 12px ${proj.glow}`,
                  }}
                >
                  {proj.tagline}
                </span>

                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${proj.accent}40`,
                    background: `${proj.accent}10`,
                  }}
                >
                  <ArrowUpRight className="w-5 h-5" style={{ color: proj.accent }} />
                </div>
              </div>

              <h3 className="font-display text-3xl font-extrabold text-[#F5F5F5] mb-3 group-hover:text-white transition-colors">
                {proj.title}
              </h3>

              <p className="font-sans text-sm text-[#B5B5B5] leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tags.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs text-[#E0E0E0] bg-[#1A1A1A] border border-white/5 px-3 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={proj.href}
                className="w-full h-11 rounded-full flex items-center justify-center gap-2 px-6 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300"
                style={{
                  background: `${proj.accent}20`,
                  color: proj.accent,
                  border: `1.5px solid ${proj.accent}`,
                  boxShadow: `0 0 15px ${proj.glow}`,
                }}
              >
                <span>EXPLORE PROJECT</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
