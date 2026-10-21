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
  Terminal,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";
import { personal } from "@/lib/data";

const resumeHref = personal.resume || "/resume.pdf";
const email = personal.email || "your_email_here";

/* ── SVG Icons ─────────────────────────────────────────────────── */
function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.77c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        clipRule="evenodd"
      />
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

/* ── Metrics ────────────────────────────────────────────────────── */
const metrics = [
  { icon: Code2, value: "5th Semester", label: "B.Tech CSE · BBDU Lucknow" },
  { icon: Zap, value: "8.0 / 10.0", label: "Academic CGPA" },
  { icon: Cpu, value: "C++ & DSA", label: "Trees · Graphs · DP Problem Solving" },
  { icon: Layers, value: "4 Projects", label: "Web, AI & Browser Utilities" },
];

const techBadges = [
  "C++",
  "DSA",
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Flask",
  "Web Workers",
];

const selectedProjects = [
  {
    name: "PDFlex",
    badge: "In-Browser Utility",
    tagline: "Client-Side PDF Merge & Split Tool",
    description:
      "Engineered an in-browser PDF manipulation application leveraging PDF.js and pdf-lib running inside dedicated Web Workers. Performs document merges and splits with zero network uploads, keeping user documents 100% private in memory.",
    stack: ["React", "PDF.js", "pdf-lib", "Web Workers", "Tailwind CSS"],
    highlights: ["100% In-Browser Memory", "Zero Server Uploads", "Off-Main-Thread Web Workers"],
    demo: "https://pd-flex.vercel.app",
    source: "https://github.com/arnavsingh/pdflex",
  },
  {
    name: "FinanceCalc",
    badge: "Fintech Web App",
    tagline: "Interactive Investment & EMI Calculator",
    description:
      "Interactive financial modeling platform featuring real-time compound interest projections, SIP investment breakdowns, and complete loan amortization schedules with dynamic chart visualizations.",
    stack: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    highlights: ["Real-time SIP & EMI Math", "Interactive Visual Schedules", "Clean Type-Safe Architecture"],
    demo: "https://financecalc0.vercel.app",
    source: "https://github.com/arnavsingh/financecalc",
  },
  {
    name: "MoodMate",
    badge: "AI Reflection Tool",
    tagline: "AI Emotional Journaling & Sentiment Engine",
    description:
      "Journaling platform that structures user thoughts, connects to modular Flask backend endpoints, and queries the OpenAI API to provide empathetic cognitive reframing and emotional sentiment trends over time.",
    stack: ["Next.js", "Python", "Flask", "OpenAI API", "SQLite"],
    highlights: ["Flask REST API Architecture", "OpenAI Structured Output", "Sentiment Trend Tracking"],
    source: "https://github.com/arnavsingh/moodmate",
    comingSoon: true,
  },
  {
    name: "ASCEND",
    badge: "Gamified Productivity",
    tagline: "XP-Based Task & Milestone Manager",
    description:
      "Gamified productivity application mapping daily engineering tasks into quests with experience point (XP) progression, leveling up, and milestone streaks to counter task procrastination.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    highlights: ["PostgreSQL Schema Design", "XP Progression Mechanics", "Streak & Habit Tracking"],
    source: "https://github.com/arnavsingh/ascend",
    comingSoon: true,
  },
];

const skillGroups = [
  {
    title: "Core Computer Science",
    icon: Cpu,
    skills: ["C++", "Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "C Language", "Recursion & DP", "Graph Algorithms"],
  },
  {
    title: "Frontend Engineering",
    icon: Layers,
    skills: ["React", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Web Workers API"],
  },
  {
    title: "Backend & AI Services",
    icon: Code2,
    skills: ["Python", "Flask", "RESTful API Design", "Node.js", "OpenAI API Integration", "JSON Schema Validation"],
  },
  {
    title: "Databases & Systems",
    icon: Database,
    skills: ["PostgreSQL", "SQLite", "SQL Query Design", "Git & GitHub", "Vercel Deployment", "In-Browser Memory Management"],
  },
];

/* ── Ambient Gradient Blobs (ToolForge Style) ──────────────────── */
function BackgroundGradients() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Top right lush emerald aura */}
      <div
        className="absolute -top-24 -right-24 h-[550px] w-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.08) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Bottom right radiant glow */}
      <div
        className="absolute top-[600px] -right-20 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.14) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />
      {/* Mid left soft mint aura */}
      <div
        className="absolute top-48 -left-28 h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.10) 0%, rgba(45, 212, 191, 0.04) 50%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
      {/* Subtle fine dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16, 185, 129, 0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

/* ── Right Hero Visual (ToolForge-Style 3D Developer Mockup) ──── */
function HeroMockup() {
  return (
    <div className="relative select-none" aria-hidden="true">
      {/* Glowing radial backdrop */}
      <div
        className="absolute -inset-6 rounded-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(20, 184, 166, 0.08) 55%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* Main 3D Tilted Device Container */}
      <div className="relative mx-auto max-w-lg lg:max-w-none">
        {/* Floating badge 1 (Top Left) */}
        <div className="absolute -top-4 -left-3 z-30 flex items-center gap-2 rounded-full border border-emerald-200 bg-white/95 px-3.5 py-1.5 shadow-lg shadow-emerald-600/10 backdrop-blur-md animate-bounce [animation-duration:4s]">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-bold text-slate-800">8.0 CGPA · BBDU</span>
        </div>

        {/* Floating badge 2 (Top Right) */}
        <div className="absolute -top-5 right-4 z-30 hidden sm:flex items-center gap-1.5 rounded-full border border-teal-200 bg-white/95 px-3 py-1 shadow-md shadow-teal-600/10 backdrop-blur-md">
          <Zap className="h-3.5 w-3.5 text-teal-600" />
          <span className="font-mono text-[11px] font-bold text-teal-800">C++ · Trees · Graphs · DP</span>
        </div>

        {/* Floating badge 3 (Bottom Left) */}
        <div className="absolute -bottom-4 -left-2 z-30 flex items-center gap-2 rounded-full border border-emerald-200 bg-white/95 px-3.5 py-1.5 shadow-lg shadow-emerald-600/10 backdrop-blur-md">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span className="text-xs font-bold text-slate-800">PDFlex · 100% In-Browser Private</span>
        </div>

        {/* Floating badge 4 (Bottom Right) */}
        <div className="absolute -bottom-4 right-2 z-30 hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-900 px-3.5 py-1.5 text-white shadow-xl shadow-slate-900/20 backdrop-blur-md">
          <Code2 className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-mono text-[11px] font-bold text-slate-200">Next.js · Flask · AI</span>
        </div>

        {/* The 3D Mockup Card */}
        <div className="relative rounded-2xl border-2 border-slate-900/10 bg-slate-950 p-1.5 shadow-2xl shadow-emerald-950/20">
          <div className="rounded-xl border border-white/10 bg-[#0d1117] p-4 text-slate-300">
            {/* Window bar */}
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/90" />
                <span className="h-3 w-3 rounded-full bg-amber-500/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">
                  arnav-singh@bbdu: ~/projects/pdflex
                </span>
              </div>
              <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                ACTIVE
              </span>
            </div>

            {/* Code / Architecture preview */}
            <div className="space-y-1.5 font-mono text-[11px] leading-relaxed text-slate-300">
              <p className="text-slate-500">// B.Tech CSE (5th Sem) · In-Browser Worker Engine</p>
              <p>
                <span className="text-purple-400">const</span> worker ={" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-emerald-300">Worker</span>(
                <span className="text-amber-300">&apos;./pdf.worker.ts&apos;</span>);
              </p>
              <p>
                worker.<span className="text-blue-400">postMessage</span>({`{`}
              </p>
              <p className="pl-4">
                action: <span className="text-amber-300">&quot;MERGE_DOCUMENTS&quot;</span>,
              </p>
              <p className="pl-4">
                clientMemoryOnly: <span className="text-emerald-400 font-bold">true</span>,
              </p>
              <p className="pl-4">
                serverPayload: <span className="text-rose-400">null</span>{" "}
                <span className="text-slate-500">// 0KB network upload</span>
              </p>
              <p>{`});`}</p>

              <div className="my-2.5 border-t border-white/10 pt-2.5">
                <p className="text-slate-500">// C++ Problem Solving Benchmark</p>
                <p>
                  <span className="text-purple-400">template</span> &lt;
                  <span className="text-blue-400">typename</span> T&gt;
                </p>
                <p>
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-emerald-300 font-bold">AVLTree</span> {`{`}
                </p>
                <p className="pl-4 text-emerald-400">
                  int getBalance(Node* n) &#123; return height(n-&gt;left) - height(n-&gt;right); &#125;
                </p>
                <p>{`};`}</p>
              </div>
            </div>

            {/* Bottom mini status */}
            <div className="mt-3 flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-[10px]">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Check className="h-3 w-3" /> All test suites passing
              </span>
              <span className="text-slate-400 font-mono">BBDU Lucknow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Header ─────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20 transition-transform group-hover:scale-105">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-black tracking-tight text-slate-900 block leading-tight">
              Arnav Singh
            </span>
            <span className="text-[10px] font-bold text-emerald-700 tracking-wide block">
              B.Tech CSE · BBDU
            </span>
          </div>
        </Link>

        {/* Navigation items */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-emerald-700">
            About
          </a>
          <a href="#projects" className="transition hover:text-emerald-700">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-emerald-700">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-emerald-700">
            Contact
          </a>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to Internships
          </div>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
          >
            <Download className="h-3.5 w-3.5" />
            Resume PDF
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero Section (ToolForge Vibe adapted for B.Tech Engineer) ──── */
function Hero() {
  return (
    <section className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
      {/* Left Column — Content & ToolForge-like Action Card */}
      <div>
        {/* Top Eyebrow Pill — identical to ToolForge's ⚡ banner */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-sm shadow-emerald-500/10">
          <span className="text-amber-500 text-sm">⚡</span>
          <span className="uppercase tracking-wider">
            B.Tech CSE (5th Sem) · BBDU Lucknow
          </span>
        </div>

        {/* Two-Line High Impact Heading */}
        <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Computer Science Student &{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
            Full-Stack Systems Engineer.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          Building high-performance in-browser tools, responsive web applications, and AI integrations.
          Mastering core C++ Data Structures & Algorithms while shipping practical, privacy-first software.
        </p>

        {/* ToolForge-inspired Interactive Action Card */}
        <div className="mt-8 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/50 p-6 backdrop-blur-sm sm:p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/25">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900">
                Explore Engineering Work & Live Demos
              </h2>
              <p className="text-xs text-slate-500">
                Client-side Web Workers, interactive financial charts, and AI endpoints
              </p>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
            >
              <Zap className="h-4 w-4" />
              View Selected Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-300 bg-white px-5 py-3 text-sm font-black text-emerald-800 transition hover:border-emerald-500 hover:bg-emerald-50/50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Quick Profile Filter tags */}
          <div className="mt-5 border-t border-emerald-200/70 pt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500">Focus Areas:</span>
            {["C++ & DSA", "React 19 / Next.js", "Python & Flask", "100% In-Browser Privacy"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-emerald-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-emerald-800"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Right Column — 3D Developer Mockup */}
      <HeroMockup />
    </section>
  );
}

/* ── Metrics Bar ────────────────────────────────────────────────── */
function MetricsBar() {
  return (
    <section className="border-y border-emerald-100 bg-white/70 py-8 backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {metrics.map(({ icon: Icon, value, label }) => (
          <div
            key={value}
            className="flex items-center gap-3.5 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 transition hover:border-emerald-300 hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900">{value}</div>
              <div className="text-xs font-medium text-slate-500">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Section Header ─────────────────────────────────────────────── */
function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>}
    </div>
  );
}

/* ── About Section ──────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Background"
        title="B.Tech Computer Science & Engineering Focus"
      />
      <div className="grid max-w-5xl gap-6 text-base leading-8 text-slate-600 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Academic & DSA Foundation</h3>
          </div>
          <p>
            Currently in my 5th semester of B.Tech CSE at Babu Banarasi Das University, Lucknow (CGPA: 8.0/10).
            My primary algorithmic focus is mastering core C++ data structures and algorithms — specifically
            tree traversals, graph algorithms, recursion, and dynamic programming patterns.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Product Engineering Philosophy</h3>
          </div>
          <p>
            Rather than copying standard tutorial apps, I build practical utilities that solve genuine
            technical constraints: like processing heavy PDF files directly in browser memory with Web Workers
            (PDFlex) or structuring clean, modular Flask microservices with strict schema validation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Selected Work Section ──────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Selected Work"
        title="Four Systems Built with Production Focus"
        text="A detailed overview of each project, architecture choices, and live deployments."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[360px] flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-600/10"
          >
            <div>
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                  {project.badge}
                </span>
                {project.comingSoon ? (
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-400">
                    Deployment in Progress
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Production
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                {project.name}
              </h3>
              <p className="mt-1 text-xs font-bold text-emerald-700">
                {project.tagline}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-sm shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black transition ${
                  project.demo
                    ? "border border-slate-200 text-slate-700 hover:border-slate-400"
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                }`}
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub Repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Technical Stack Section ────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Technical Stack"
        title="Core Engineering Competencies"
        text="Tools, frameworks, and programming foundations practiced daily across coursework and shipping products."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-600/10"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 shadow-sm">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-black text-slate-900">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
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

/* ── Contact Section (ToolForge-Inspired Dashed Container) ──────── */
function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <SectionHeading eyebrow="Contact & Connect" title="Open for 2025/2026 Internships" />

      {/* ToolForge-inspired dashed emerald container */}
      <div className="rounded-3xl border-2 border-dashed border-emerald-300 bg-emerald-50/60 p-8 sm:p-12 backdrop-blur-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                impactful together.
              </span>
            </h3>
            <p className="mt-2 text-base text-slate-600">
              Seeking Software Engineering or Full-Stack Internship roles. Have questions about PDFlex,
              C++ problem solving, or upcoming projects? I respond to every message.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
            >
              <Mail className="h-4 w-4" />
              Email Me Directly
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-300 bg-white px-6 py-3 text-sm font-black text-slate-900 transition hover:border-emerald-500 hover:bg-emerald-50"
            >
              {copied ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-emerald-200/80 pt-6">
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-emerald-400"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub Profile
          </a>
          <a
            href={`https://linkedin.com/in/${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-emerald-400"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn Profile
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-emerald-400"
          >
            <Download className="h-4 w-4" />
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Main Page Component ────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fafcfb] text-slate-900 selection:bg-emerald-200 selection:text-emerald-950">
      <BackgroundGradients />
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
        <footer className="border-t border-emerald-100 bg-white/80 py-8 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Code2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-black text-slate-900">Arnav Singh</span>
              </div>
              <p className="text-xs text-slate-500">
                B.Tech Computer Science Engineering · Babu Banarasi Das University, Lucknow · Built with Next.js
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
