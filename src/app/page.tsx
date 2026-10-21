"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Code2,
  Layers,
  Cpu,
  Database,
  Zap,
} from "lucide-react";
import { personal } from "@/lib/data";

const resumeHref = personal.resume || "/resume.pdf";
const email = personal.email || "your_email_here";

/* ── Icons ─────────────────────────────────────────────────────── */
function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.77c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.05h4.35V23H.32V8.05ZM7.34 8.05h4.17v2.04h.06c.58-1.1 2-2.26 4.13-2.26 4.42 0 5.24 2.91 5.24 6.69V23h-4.35v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V23H7.34V8.05Z" />
    </svg>
  );
}

/* ── Data ───────────────────────────────────────────────────────── */
const metrics = [
  { icon: Code2, value: "5th Semester", label: "B.Tech CSE · BBDU Lucknow" },
  { icon: Zap,   value: "8.0 / 10",    label: "CGPA" },
  { icon: Cpu,   value: "C++ & DSA",   label: "Trees · Graphs · DP" },
  { icon: Layers,value: "4 Projects",  label: "Web, AI & Browser Tools" },
];

const techBadges = ["C++", "DSA", "React", "Next.js", "TypeScript", "Python", "Flask"];

const pdflex = {
  title: "PDFlex",
  subtitle: "In-Browser Local PDF Manipulation Utility",
  demo: "https://pd-flex.vercel.app",
  source: "https://github.com/arnavsingh/pdflex",
  summary:
    "Built an in-browser PDF manipulation tool using PDF.js and pdf-lib running inside Web Workers. All processing is client-side — zero server uploads, 100% private.",
  highlights: [
    "Web Workers: Heavy PDF rendering offloaded off main thread.",
    "Privacy-First: All data stays in browser memory — no uploads.",
    "Stack: React · PDF.js · pdf-lib · Web Workers · Tailwind CSS",
  ],
};

const selectedProjects = [
  {
    name: "PDFlex",
    badge: "Browser Tool",
    description: "In-browser PDF utility — merge and split documents locally via Web Workers and PDF.js. Zero server uploads.",
    stack: ["React", "PDF.js", "pdf-lib", "Web Workers"],
    demo: "https://pd-flex.vercel.app",
    source: "https://github.com/arnavsingh/pdflex",
  },
  {
    name: "FinanceCalc",
    badge: "Fintech",
    description: "Financial calculator with interactive charts for SIP returns, EMI schedules, and personal investment planning.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    demo: "https://financecalc0.vercel.app",
    source: "https://github.com/arnavsingh/financecalc",
  },
  {
    name: "MoodMate",
    badge: "AI / Web",
    description: "Journaling platform using Flask + OpenAI API to provide emotional reflection feedback and trend tracking.",
    stack: ["Next.js", "Python", "Flask", "OpenAI API"],
    source: "https://github.com/arnavsingh/moodmate",
    comingSoon: true,
  },
  {
    name: "ASCEND",
    badge: "Productivity",
    description: "Gamified task manager — XP gain, level progression, and quest mechanics layered over a clean todo workflow.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    source: "https://github.com/arnavsingh/ascend",
    comingSoon: true,
  },
];

const skillGroups = [
  { title: "Core CS",     icon: Cpu,      skills: ["C++", "DSA", "OOP", "C"] },
  { title: "Frontend",    icon: Layers,   skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { title: "Backend",     icon: Code2,    skills: ["Python", "Flask", "Node.js", "REST APIs"] },
  { title: "Data & Tools",icon: Database, skills: ["PostgreSQL", "SQLite", "Git", "GitHub", "Web Workers"] },
];

/* ── Background blobs — exactly like ToolForge ─────────────────── */
function BgBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Top-right large blob */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,200,100,0.18) 0%, rgba(0,180,90,0.08) 50%, transparent 75%)",
        }}
      />
      {/* Bottom-right medium blob */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-40px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,90,0.22) 0%, rgba(0,160,80,0.06) 60%, transparent 80%)",
        }}
      />
      {/* Top-left subtle blob */}
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "-100px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,200,100,0.10) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ── Hero visual — project card stack ──────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center select-none" aria-hidden="true">
      {/* Outer glow circle */}
      <div
        style={{
          position: "absolute",
          inset: "-20px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,200,100,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Stacked card visual */}
      <div className="relative w-full max-w-[340px]">
        {/* Back card */}
        <div
          className="absolute inset-0 rounded-2xl border border-emerald-200 bg-white/80"
          style={{ transform: "rotate(3deg) translate(8px, 8px)" }}
        />
        {/* Middle card */}
        <div
          className="absolute inset-0 rounded-2xl border border-emerald-200 bg-white/90"
          style={{ transform: "rotate(1deg) translate(4px, 4px)" }}
        />

        {/* Front card — the real one */}
        <div className="relative rounded-2xl border border-emerald-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,180,80,0.15)]">
          {/* Card header */}
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              Featured
            </span>
            <span className="text-xs font-mono text-slate-400">pd-flex.vercel.app</span>
          </div>

          <h3 className="text-xl font-black text-slate-900">PDFlex</h3>
          <p className="mt-1 text-sm text-slate-500">In-browser PDF utility</p>

          {/* Mini stat row */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { val: "100%", lbl: "Private" },
              { val: "0KB",  lbl: "Upload" },
              { val: "2 ops", lbl: "Merge/Split" },
            ].map((s) => (
              <div key={s.lbl} className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center">
                <div className="text-sm font-black text-emerald-600">{s.val}</div>
                <div className="text-[10px] text-slate-400">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Tech row */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {["React", "PDF.js", "pdf-lib", "Web Workers"].map((t) => (
              <span key={t} className="rounded-md border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                {t}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="mb-1 flex justify-between text-[11px] text-slate-400">
              <span>Build progress</span><span>100%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
            </div>
          </div>

          {/* Demo link */}
          <a
            href="https://pd-flex.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-black text-white transition hover:bg-emerald-700"
          >
            Live Demo
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Header ─────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
            <Code2 className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-black tracking-tight text-slate-900">Arnav Singh</span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-500 md:flex">
          <a href="#about"    className="transition hover:text-slate-900">About</a>
          <a href="#projects" className="transition hover:text-slate-900">Projects</a>
          <a href="#skills"   className="transition hover:text-slate-900">Skills</a>
          <a href="#contact"  className="transition hover:text-slate-900">Contact</a>
          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to Internships
          </span>
        </nav>

        {/* Resume CTA */}
        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
        >
          <Download className="h-3.5 w-3.5" />
          Resume
        </a>
      </div>
    </header>
  );
}

/* ── Hero ───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="grid gap-10 py-14 sm:py-18 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
      {/* LEFT */}
      <div>
        {/* Top badge — like ToolForge's "⚡ FREE ATS RESUME SCORE CHECKER" */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
          <span className="text-base">⚡</span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            B.Tech CSE · 5th Semester · BBDU Lucknow
          </span>
        </div>

        {/* Headline — dark line + green accent line (exactly like ToolForge) */}
        <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
          Full-Stack & AI
          <br />
          <span className="text-emerald-600">Engineer in the</span>
          <br />
          <span className="text-emerald-600">Making.</span>
        </h1>

        <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
          Building practical web applications and AI-powered tools —
          client-side performance, clean architecture, real user value.
          Currently mastering C++ DSA while shipping production projects.
        </p>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTAs — like ToolForge's Upload / Create buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
          >
            View My Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-200 bg-white px-6 py-3 text-sm font-black text-emerald-700 transition hover:border-emerald-400"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        {/* Subtle social proof line */}
        <p className="mt-5 text-xs text-slate-400">
          Or reach me at{" "}
          <a href={`mailto:${email}`} className="font-semibold text-emerald-600 hover:underline">
            {email}
          </a>{" "}
          · <a href={`https://github.com/${personal.github}`} className="font-semibold text-slate-600 hover:text-emerald-600" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
          · <a href={`https://linkedin.com/in/${personal.linkedin}`} className="font-semibold text-slate-600 hover:text-emerald-600" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>

      {/* RIGHT — visual */}
      <HeroVisual />
    </section>
  );
}

/* ── Metrics bar ────────────────────────────────────────────────── */
function MetricsBar() {
  return (
    <section className="border-y border-slate-200 py-8">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {metrics.map(({ icon: Icon, value, label }) => (
          <div key={value} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100">
              <Icon className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900">{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Section heading ────────────────────────────────────────────── */
function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-500">{text}</p>}
    </div>
  );
}

/* ── About ──────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeading eyebrow="About Me" title="Background & Technical Focus" />
      <div className="grid max-w-4xl gap-6 text-base leading-8 text-slate-600 md:grid-cols-2">
        <p>
          I&apos;m in my 5th semester of B.Tech Computer Science Engineering at Babu Banarasi Das
          University, Lucknow. My core focus is mastering C++ data structures and algorithms —
          tree traversals, graph algorithms, recursion, and dynamic programming.
        </p>
        <p>
          Rather than tutorial clones, I build practical utilities that solve real constraints —
          like heavy PDF processing entirely in the browser, or structuring clean Flask APIs with
          modular architecture. Every project I ship teaches me something production-relevant.
        </p>
      </div>
    </section>
  );
}

/* ── Projects ───────────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects with clear implementation details"
        text="A concise view of what each project does, the stack, and whether a live demo is available."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[300px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-[0_12px_40px_rgba(0,180,80,0.10)]"
          >
            <div>
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  {project.badge}
                </span>
                {project.comingSoon && (
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-400">
                    Demo Soon
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-slate-900">{project.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black transition ${
                  project.demo
                    ? "border border-slate-200 text-slate-600 hover:border-slate-400"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Skills ─────────────────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Stack"
        text="Grouped by area — coursework, DSA problem-solving, and project builds."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-[0_8px_30px_rgba(0,180,80,0.08)]"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                <Icon className="h-4 w-4 text-emerald-600" />
              </div>
              <h3 className="text-sm font-black text-slate-900">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Contact ────────────────────────────────────────────────────── */
function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <SectionHeading eyebrow="Contact" title="Let's Connect" />

      {/* CTA card — dashed border like ToolForge's upload card */}
      <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-emerald-50/40 p-8 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-black text-slate-900">
              Open for{" "}
              <span className="text-emerald-600">Internship Opportunities</span>
            </h3>
            <p className="mt-2 text-base text-slate-500">
              Software Engineering internships for 2025 / 2026. I respond to every message.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-200 bg-white px-6 py-3 text-sm font-black text-slate-900 transition hover:border-emerald-400"
            >
              {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-emerald-200 pt-6">
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-emerald-300"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-emerald-300"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-emerald-300"
          >
            <Download className="h-4 w-4" />
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <BgBlobs />
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-6xl px-5 sm:px-8">
          <Hero />
          <MetricsBar />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="border-t border-slate-200 py-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600">
                  <Code2 className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-bold text-slate-900">Arnav Singh</span>
              </div>
              <p className="text-xs text-slate-400">B.Tech CSE · BBDU Lucknow · Built with Next.js</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
