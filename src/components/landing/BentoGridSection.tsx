"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Layers3, TimerReset } from "lucide-react";

const projects = [
  {
    kicker: "Flagship AI product",
    title: "MoodMate AI",
    desc: "A mental wellness companion that reads emotional context, turns journals into insight, and gives users a calmer way to understand themselves.",
    tags: ["Next.js", "Flask", "LLM agents", "Sentiment AI"],
    href: "/recruiter#projects",
    cta: "View project",
    accent: "#FF8A00",
    Icon: BrainCircuit,
    visualTitle: "Emotion engine",
    visualLines: ["Mood check", "Journal pulse", "Care prompt"],
  },
  {
    kicker: "Productivity operating system",
    title: "ASCEND",
    desc: "A focused work OS built around task clarity, energy management, and daily execution loops instead of another noisy to-do list.",
    tags: ["React 19", "TypeScript", "Zustand", "Focus loops"],
    href: "/collaborate",
    cta: "Explore workflow",
    accent: "#5B8CFF",
    Icon: TimerReset,
    visualTitle: "Focus protocol",
    visualLines: ["Plan", "Ship", "Review"],
  },
  {
    kicker: "Portfolio experience",
    title: "Arnav.OS",
    desc: "An interactive personal interface where recruiters, friends, and collaborators can enter different modes of the same story.",
    tags: ["Next.js 16", "Three.js", "Framer Motion", "AI guide"],
    href: "/terminal",
    cta: "Open terminal",
    accent: "#22C55E",
    Icon: Layers3,
    visualTitle: "Personal system",
    visualLines: ["Identity", "Projects", "Signal"],
  },
];

function ProductVisual({
  project,
  index,
  reversed,
}: {
  project: (typeof projects)[number];
  index: number;
  reversed: boolean;
}) {
  const Icon = project.Icon;

  if (project.title === "MoodMate AI") {
    return (
      <div className={`relative min-h-[460px] ${reversed ? "md:col-start-1 md:row-start-1" : ""}`}>
        <div
          className="absolute inset-x-6 top-10 h-80 blur-[90px]"
          style={{ background: "linear-gradient(135deg, rgba(255,138,0,0.45), rgba(34,197,94,0.18), transparent 72%)" }}
        />

        <motion.div
          whileHover={{ y: -10, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="relative mx-auto max-w-[560px] overflow-hidden bg-[#F7F1E8] text-[#201814] shadow-[0_44px_100px_rgba(0,0,0,0.42),0_0_90px_rgba(255,138,0,0.24)]"
        >
          <div className="flex items-center justify-between bg-[#EEE3D5] px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E7765]">
              moodmate.app
            </span>
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="flex min-h-[310px] flex-col justify-between bg-[#211914] p-6 text-[#FFF7EF]">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <Icon className="h-9 w-9 text-[#FF8A00]" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFB36A]">
                    Live mood
                  </span>
                </div>
                <div className="font-display text-7xl font-black leading-none">82</div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[#FFB36A]">
                  calmer than yesterday
                </p>
              </div>

              <div className="space-y-3">
                {["Anxious", "Focused", "Hopeful"].map((mood, moodIndex) => (
                  <div key={mood} className="flex items-center gap-3">
                    <span className="w-16 font-mono text-[10px] uppercase tracking-[0.14em] text-[#CBB9A7]">
                      {mood}
                    </span>
                    <span className="h-1.5 flex-1 bg-white/10">
                      <span
                        className="block h-full bg-[#FF8A00]"
                        style={{ width: `${[38, 72, 58][moodIndex]}%` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white p-5 shadow-[0_20px_50px_rgba(57,31,13,0.12)]">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#B06A22]">
                  Journal insight
                </p>
                <p className="mt-4 text-left text-2xl font-bold leading-tight text-[#211914]">
                  You are most stressed before deadlines, but your recovery window is improving.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["Sleep", "Energy", "Clarity"].map((item, itemIndex) => (
                  <div key={item} className="bg-[#EFE6DB] p-4 text-center">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-[#211914] text-center font-display text-2xl font-black leading-[48px] text-[#FFB36A]">
                      {[7, 8, 6][itemIndex]}
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6F5A4A]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#FFE6C7] p-5 text-left">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A4E08]">
                  AI prompt
                </p>
                <p className="mt-2 text-sm leading-6 text-[#3A2415]">
                  Take a five minute reset. Write one fear, one fact, and one next action.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-[440px] ${reversed ? "md:col-start-1 md:row-start-1" : ""}`}>
      <div
        className="absolute inset-x-8 top-8 h-72 blur-[85px]"
        style={{ background: `linear-gradient(135deg, ${project.accent}55, transparent 72%)` }}
      />

      <motion.div
        whileHover={{ y: -10, rotate: reversed ? -1 : 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        className="relative mx-auto max-w-[540px] overflow-hidden bg-[#0E0D0C] p-7 shadow-[0_38px_90px_rgba(0,0,0,0.42)]"
      >
        <div className="mb-10 flex items-center justify-between">
          <Icon className="h-11 w-11" style={{ color: project.accent }} />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#AFA8A0]">
            0{index + 1}
          </span>
        </div>

        <div className="space-y-5">
          {project.visualLines.map((line, lineIndex) => (
            <div key={line} className="flex items-center gap-4 bg-white/[0.04] px-5 py-4">
              <span className="h-2 w-2 shrink-0" style={{ background: project.accent }} />
              <span className="font-display text-3xl font-bold leading-tight text-[#F5F5F5]">
                {line}
              </span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-xs text-[#8F8982]">
                {String(lineIndex + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-9 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em]" style={{ color: project.accent }}>
              {project.visualTitle}
            </p>
            <p className="mt-2 max-w-xs text-left text-sm leading-6 text-[#AFA8A0]">
              A live interface snapshot built from the product system instead of a placeholder.
            </p>
          </div>
          <div className="h-20 w-20 rounded-full" style={{ background: project.accent, opacity: 0.18 }} />
        </div>
      </motion.div>
    </div>
  );
}

export default function BentoGridSection() {
  return (
    <section id="featured-work" className="relative z-10 w-full max-w-none overflow-hidden py-12 md:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="ml-auto mr-0 mt-8 mb-24 max-w-3xl text-center md:translate-x-28 md:text-right lg:translate-x-40"
        >
          <h2 className="font-display text-4xl font-extrabold leading-tight text-[#F5F5F5] sm:text-5xl md:text-6xl">
            Projects that feel like products, not thumbnails.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32 md:gap-44">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.7 }}
                className={`grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16 ${
                  reversed ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={reversed ? "md:col-start-2" : ""}>
                  <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.24em]" style={{ color: project.accent }}>
                    {project.kicker}
                  </p>

                  <h3 className="font-display text-5xl font-black leading-none text-[#F5F5F5] sm:text-6xl md:text-7xl">
                    {project.title}
                  </h3>

                  <p className="mt-7 max-w-xl text-base leading-8 text-[#B8B1A8] sm:text-lg">
                    {project.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#D7D0C8]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="mt-10 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#F5F5F5] transition-colors hover:text-[#FF8A00]"
                  >
                    {project.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <ProductVisual project={project} index={index} reversed={reversed} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
