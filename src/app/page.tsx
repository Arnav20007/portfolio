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
  Terminal as TerminalIcon,
  ShieldCheck,
  Check,
  Play,
  RotateCcw,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { personal } from "@/lib/data";

const resumeHref = personal.resume || "/resume.pdf";
const email = personal.email || "arnav@example.com";
const githubProfile = `https://github.com/${personal.github || "Arnav20007"}`;
const linkedinProfile = `https://linkedin.com/in/${personal.linkedin || "arnav-singh"}`;

/* ── SVG Brand Icons ────────────────────────────────────────────── */
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

/* ── Code Workbench Data (Clean & Concise) ─────────────────────── */
interface CodeSnippet {
  id: string;
  filename: string;
  tag: string;
  summary: string;
  code: string[];
  simulationOutput: string[];
}

const workbenchSnippets: CodeSnippet[] = [
  {
    id: "pdflex",
    filename: "PDFlex.worker.ts",
    tag: "Web Workers",
    summary: "Client-side PDF merging with zero server payload.",
    code: [
      "// In-browser Web Worker PDF pipeline",
      "import { PDFDocument } from 'pdf-lib';",
      "",
      "self.onmessage = async ({ data: { files } }) => {",
      "  const merged = await PDFDocument.create();",
      "  for (const buffer of files) {",
      "    const src = await PDFDocument.load(buffer);",
      "    const pages = await merged.copyPages(src, src.getPageIndices());",
      "    pages.forEach(p => merged.addPage(p));",
      "  }",
      "  const bytes = await merged.save();",
      "  self.postMessage({ bytes, status: 'DONE' });",
      "};",
    ],
    simulationOutput: [
      "[Worker] Thread ready in local browser memory.",
      "[Worker] Loaded 2 PDF buffers without network transfer.",
      "[Worker] Merged 14 pages in 118ms off main UI thread.",
      "✓ Simulation complete: zero server upload, 100% private in memory.",
    ],
  },
  {
    id: "avltree",
    filename: "AVLTree.cpp",
    tag: "C++ / DSA",
    summary: "Self-balancing tree algorithm ensuring O(log n) operations.",
    code: [
      "// Self-balancing AVL Tree implementation",
      "template <typename T>",
      "class AVLTree {",
      "    struct Node { T val; int height; Node *left, *right; };",
      "    int balanceFactor(Node* n) {",
      "        return n ? height(n->left) - height(n->right) : 0;",
      "    }",
      "    Node* rotateRight(Node* y) {",
      "        Node* x = y->left; y->left = x->right; x->right = y;",
      "        updateHeight(y); updateHeight(x); return x;",
      "    }",
      "};",
    ],
    simulationOutput: [
      "[C++ STL] Initialized AVLTree with dynamic rotations.",
      "[Benchmark] Inserted 10,000 keys, height bounded to 14.",
      "✓ Simulation complete: verified balanced search in O(log n).",
    ],
  },
  {
    id: "finance",
    filename: "FinanceMath.ts",
    tag: "TypeScript",
    summary: "Compound wealth and loan amortization formulas.",
    code: [
      "// SIP & compound return calculation",
      "export function calcReturns(monthly: number, r: number, yrs: number) {",
      "  const i = r / 12 / 100, n = yrs * 12;",
      "  const invested = monthly * n;",
      "  const future = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);",
      "  return { invested, wealthGained: future - invested, total: future };",
      "}",
    ],
    simulationOutput: [
      "[FinanceCalc] Monthly ₹10,000 @ 12% over 10 Years.",
      "[Math] Invested: ₹12,00,000 | Estimated Growth: ₹11,23,700.",
      "✓ Simulation complete: Chart schedule rendered.",
    ],
  },
];

/* ── Selected Projects Data ─────────────────────────────────────── */
const selectedProjects = [
  {
    id: "pdflex",
    name: "PDFlex",
    badge: "In-Browser Utility",
    tagline: "Client-Side Document Merge & Split Tool",
    description:
      "An in-browser PDF tool built with PDF.js and pdf-lib in client Web Workers. All document merging and splitting runs locally without uploading files to any remote server.",
    stack: ["React", "PDF.js", "pdf-lib", "Web Workers", "Tailwind CSS"],
    highlights: ["In-browser processing", "Zero server uploads", "Off-main-thread Web Workers"],
    demo: "https://pd-flex.vercel.app",
    source: "https://github.com/Arnav20007/pdflex",
  },
  {
    id: "financecalc",
    name: "FinanceCalc",
    badge: "Fintech Web App",
    tagline: "Investment & Loan Amortization Calculator",
    description:
      "A client-side personal finance calculator covering SIP compound returns, EMI schedules, and savings projections with clean interactive Chart.js visualizations.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    highlights: ["Real-time SIP & EMI formulas", "Interactive visual charts", "Type-safe implementation"],
    demo: "https://financecalc0.vercel.app",
    source: "https://github.com/Arnav20007/financecalc",
  },
  {
    id: "moodmate",
    name: "MoodMate",
    badge: "AI Reflection Tool",
    tagline: "Journaling Platform with AI Mood Feedback",
    description:
      "A hackathon journaling app where users write daily reflections, structured via Flask backend endpoints with OpenAI API prompts to highlight emotional patterns.",
    stack: ["Next.js", "Python", "Flask", "OpenAI API"],
    highlights: ["Flask REST API flow", "OpenAI structured responses", "Sentiment tracking"],
    source: "https://github.com/Arnav20007/moodmate",
    comingSoon: true,
  },
  {
    id: "ascend",
    name: "ASCEND",
    badge: "Productivity",
    tagline: "Gamified Quest & Task Progression",
    description:
      "A task management web application that introduces XP progression, levels, and milestone rewards over a structured todo workflow.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    highlights: ["PostgreSQL schema design", "XP reward mechanics", "Streak tracking"],
    source: "https://github.com/Arnav20007/ascend",
    comingSoon: true,
  },
];

/* ── Ambient Emerald Glow Orbs (Exact /collaborate match) ──────── */
function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Center Massive Emerald/Cyan Orb */}
      <div
        className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] rounded-full opacity-25 blur-[190px]"
        style={{
          background: "radial-gradient(circle, #10B981 0%, #06B6D4 40%, #047857 70%, transparent 85%)",
        }}
      />
      {/* Bottom Right Cyan/Teal Orb */}
      <div
        className="absolute bottom-1/4 right-0 w-[700px] h-[700px] rounded-full opacity-15 blur-[180px]"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, #0891B2 50%, transparent 80%)",
        }}
      />
      {/* Fine subtle matrix */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

/* ── Code Workbench (Dark Glass Aesthetic) ───────────────────────── */
function CleanWorkbench() {
  const [activeTab, setActiveTab] = useState<string>("pdflex");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);

  const snippet =
    workbenchSnippets.find((s) => s.id === activeTab) || workbenchSnippets[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationLogs(["Initializing simulation..."]);

    snippet.simulationOutput.forEach((log, index) => {
      setTimeout(() => {
        setSimulationLogs((prev) => [...prev, log]);
        if (index === snippet.simulationOutput.length - 1) {
          setIsSimulating(false);
        }
      }, (index + 1) * 300);
    });
  };

  const handleReset = () => {
    setSimulationLogs([]);
    setIsSimulating(false);
  };

  return (
    <div className="relative select-none">
      {/* Subtle top badge */}
      <div className="absolute -top-3.5 -left-2 z-20 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#09120F]/95 px-3 py-1 shadow-md backdrop-blur-md">
        <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
        <span className="font-mono text-xs font-bold text-emerald-400">8.0 CGPA · BBDU Lucknow</span>
      </div>

      {/* Main Workbench Window */}
      <div className="relative rounded-2xl border border-white/10 bg-[#09120F]/90 p-1 shadow-2xl backdrop-blur-2xl text-slate-200 overflow-hidden">
        {/* Terminal Header & File Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#050B08]/90 px-4 py-2.5 gap-2">
          {/* Window Dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
              code-workbench
            </span>
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1">
            {workbenchSnippets.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  handleReset();
                }}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
                  activeTab === item.id
                    ? "bg-[#10B981]/15 text-[#10B981] font-bold border border-[#10B981]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Code2 className="h-3 w-3 text-emerald-400" />
                {item.filename}
              </button>
            ))}
          </div>
        </div>

        {/* Descriptor Bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#060D0A]/70 px-4 py-2 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#10B981]/15 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
              {snippet.tag}
            </span>
            <span className="text-slate-400 hidden sm:inline truncate max-w-xs">
              {snippet.summary}
            </span>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 rounded-md bg-[#10B981] px-2.5 py-1 font-mono text-[11px] font-bold text-[#050807] shadow-sm transition hover:bg-emerald-400 active:scale-95 disabled:opacity-50 cursor-pointer"
            title="Runs simulated execution output in the console below"
          >
            <Play className="h-3 w-3" />
            {isSimulating ? "Simulating..." : "▶ Run Simulation"}
          </button>
        </div>

        {/* Code Body */}
        <div className="p-4 font-mono text-[12px] leading-relaxed overflow-x-auto max-h-[260px]">
          {snippet.code.map((line, i) => (
            <div key={i} className="flex gap-3 hover:bg-white/[0.04] px-1 rounded">
              <span className="w-5 text-right text-slate-600 select-none text-[11px]">
                {i + 1}
              </span>
              <span
                className={`${
                  line.startsWith("//")
                    ? "text-slate-500 italic"
                    : line.includes("template") || line.includes("import") || line.includes("export") || line.includes("const")
                    ? "text-purple-400"
                    : line.includes("class") || line.includes("function")
                    ? "text-cyan-400"
                    : line.includes("DONE") || line.includes("total") || line.includes("true")
                    ? "text-[#10B981] font-semibold"
                    : "text-slate-300"
                }`}
              >
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Simulation Output Console */}
        {simulationLogs.length > 0 && (
          <div className="border-t border-white/10 bg-[#030605] p-3 animate-in fade-in duration-150">
            <div className="mb-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <TerminalIcon className="h-3 w-3" />
                SIMULATED CONSOLE OUTPUT
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-slate-400 hover:text-white cursor-pointer"
              >
                <RotateCcw className="h-2.5 w-2.5" /> Clear
              </button>
            </div>
            <div className="space-y-1 font-mono text-[11px]">
              {simulationLogs.map((log, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    log.includes("✓") ? "text-emerald-400 font-bold" : "text-slate-300"
                  }`}
                >
                  <span className="text-emerald-500 font-bold">›</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Window Bar */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#050B08]/90 px-4 py-2 text-[10px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Check className="h-3 w-3" /> C++ · React · Next.js · TypeScript
          </span>
          <span>B.Tech CSE (5th Sem)</span>
        </div>
      </div>
    </div>
  );
}

/* ── Top OS Floating Scene Switcher Header ──────────────────────── */
function Header() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#09120F]/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
        <Link
          href="/"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-white hover:bg-white/5 transition-colors"
        >
          <Code2 className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Arnav Singh</span>
        </Link>
        <div className="h-4 w-px bg-white/10" />

        <nav className="hidden md:flex items-center gap-1">
          {[
            { id: "hero", label: "Overview" },
            { id: "focus", label: "Focus" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#CBD5E1] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="h-4 w-px bg-white/10 hidden md:block" />

        {/* Scene Switcher Links */}
        <div className="flex items-center gap-1">
          <Link
            href="/collaborate"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/20 transition-all"
          >
            Collaborate
          </Link>
          <Link
            href="/recruiter"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#CBD5E1] hover:text-white hover:bg-white/5 transition-all hidden sm:inline-block"
          >
            Recruiter
          </Link>
          <Link
            href="/friend"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-[#CBD5E1] hover:text-white hover:bg-white/5 transition-all hidden sm:inline-block"
          >
            Friend
          </Link>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#10B981] text-[#050807] hover:bg-emerald-400 transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero Section ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 w-full">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center w-full">
        {/* Left Column */}
        <div>
          {/* Status Pill (Exact /collaborate style) */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#10B981]/40 bg-[#10B981]/10 px-4 py-1.5 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#34D399] uppercase">
              B.Tech CSE (5th Sem) · BBDU Lucknow
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-[#F4EFEA] sm:text-5xl lg:text-6xl">
            Computer Science Student &{" "}
            <span className="text-[#10B981] block sm:inline">
              Full-Stack Developer.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-lg text-base leading-7 text-[#94A3B8] sm:text-lg">
            Building client-side web tools, interactive applications, and AI endpoints. Practicing
            C++ Data Structures & Algorithms with an 8.0 CGPA at Babu Banarasi Das University.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-6 py-3 text-sm font-mono font-bold text-[#050807] shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 cursor-pointer"
            >
              <Zap className="h-4 w-4" />
              View Selected Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-mono font-bold text-white transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Clean Understated Focus Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-5 border-t border-white/10">
            <span className="text-xs font-mono font-semibold text-[#64748B] mr-1">Focus:</span>
            {["8.0 CGPA · BBDU", "C++ & DSA", "React & Next.js", "Python & Flask", "In-Browser Privacy"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-[#CBD5E1]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column — Workbench */}
        <CleanWorkbench />
      </div>
    </section>
  );
}

/* ── Technical Focus & Credentials ──────────────────────────────── */
function TechnicalFocus() {
  return (
    <section id="focus" className="py-20 w-full">
      <div className="mb-12 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399]">
            Technical Focus
          </span>
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#F4EFEA] sm:text-4xl">
          Core Fundamentals & Practical Implementation
        </h2>
        <p className="mt-3 text-base leading-7 text-[#94A3B8]">
          Balancing theoretical computer science coursework with hands-on web and AI tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: DSA Coursework */}
        <div className="rounded-2xl border border-white/10 bg-[#09120F]/80 p-7 shadow-2xl backdrop-blur-xl md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  Data Structures & Algorithms Coursework
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Babu Banarasi Das University, Lucknow (8.0 CGPA)
                </p>
              </div>
            </div>
            <span className="rounded-full bg-[#10B981]/20 border border-[#10B981]/40 px-3 py-1 font-mono text-xs font-bold text-[#34D399]">
              8.0 CGPA
            </span>
          </div>

          <p className="text-sm leading-6 text-[#94A3B8] mb-5">
            Focused study of standard computer science structures in C++: Tree traversals (Binary & AVL Trees),
            Graph algorithms (BFS, DFS, Dijkstra), recursion, and dynamic programming patterns.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10 pt-4 text-center">
            <div className="rounded-xl bg-white/[0.03] p-3 border border-white/5">
              <div className="text-xs font-bold text-white">Data Structures</div>
              <div className="text-[11px] text-[#34D399] font-mono">Trees, Graphs, DP</div>
            </div>
            <div className="rounded-xl bg-white/[0.03] p-3 border border-white/5">
              <div className="text-xs font-bold text-white">Language</div>
              <div className="text-[11px] text-[#34D399] font-mono">C++ (STL)</div>
            </div>
            <div className="rounded-xl bg-white/[0.03] p-3 border border-white/5">
              <div className="text-xs font-bold text-white">Paradigms</div>
              <div className="text-[11px] text-[#34D399] font-mono">OOP Concepts</div>
            </div>
            <div className="rounded-xl bg-white/[0.03] p-3 border border-white/5">
              <div className="text-xs font-bold text-white">Coursework</div>
              <div className="text-[11px] text-[#34D399] font-mono">OS, DBMS, CN</div>
            </div>
          </div>
        </div>

        {/* Card 2: Privacy Architecture */}
        <div className="rounded-2xl border border-white/10 bg-[#09120F]/80 p-7 shadow-2xl backdrop-blur-xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 mb-4">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-black text-white mb-2">
            Client-Side Architecture
          </h3>
          <p className="text-xs leading-6 text-[#94A3B8] mb-4">
            In PDFlex, files stay in browser memory. Using Web Workers for PDF rendering avoids sending user
            documents over the wire, protecting privacy while offloading compute from the main thread.
          </p>
          <div className="rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 p-3 font-mono text-xs text-[#34D399]">
            ⚡ In-browser Web Workers · 0KB upload
          </div>
        </div>

        {/* Card 3: AI Tooling */}
        <div className="rounded-2xl border border-white/10 bg-[#09120F]/80 p-7 shadow-2xl backdrop-blur-xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30 mb-4">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-black text-white mb-2">
            AI & API Integrations
          </h3>
          <p className="text-xs leading-6 text-[#94A3B8]">
            Connecting OpenAI endpoints to modular Flask backends (MoodMate) to handle structured prompt
            responses, sentiment tracking, and clean JSON payloads.
          </p>
        </div>

        {/* Card 4: Web Stack */}
        <div className="rounded-2xl border border-white/10 bg-[#09120F]/80 p-7 shadow-2xl backdrop-blur-xl md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">
                Web Engineering & Project Builds
              </h3>
              <p className="text-xs font-mono text-slate-400">
                React, Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL
              </p>
            </div>
          </div>
          <p className="text-xs leading-6 text-[#94A3B8] mb-4">
            Structuring modular code with type safety, responsive design, and automated continuous deployment.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React 19", "Next.js App Router", "TypeScript", "Python (Flask)", "PostgreSQL", "Tailwind CSS", "Git & GitHub"].map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs font-semibold text-[#CBD5E1]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Selected Projects ──────────────────────────────────────────── */
function ProjectsSection() {
  return (
    <section id="projects" className="py-20 w-full">
      <div className="mb-12 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399]">
            Selected Projects
          </span>
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#F4EFEA] sm:text-4xl">
          Four Projects Built with Clean Architecture
        </h2>
        <p className="mt-3 text-base leading-7 text-[#94A3B8]">
          Practical web utilities and tools developed during coursework and self-directed learning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[360px] flex-col justify-between rounded-2xl border border-white/10 bg-[#09120F]/80 p-7 shadow-2xl backdrop-blur-xl transition hover:border-[#10B981]/50"
          >
            <div>
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 font-mono text-xs font-bold text-[#34D399]">
                  {project.badge}
                </span>
                {project.comingSoon ? (
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-500">
                    In Development
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#34D399]">
                    <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                    Live Demo Available
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white">
                {project.name}
              </h3>
              <p className="mt-1 text-xs font-mono font-bold text-emerald-400">
                {project.tagline}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-[#CBD5E1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981] px-5 py-2 text-xs font-mono font-bold text-[#050807] shadow-sm transition hover:bg-emerald-400"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-mono font-bold transition ${
                  project.demo
                    ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    : "bg-white text-slate-900 hover:bg-slate-200"
                }`}
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Technical Stack ────────────────────────────────────────────── */
function SkillsSection() {
  const categories = [
    {
      title: "Core Programming & CS",
      icon: Cpu,
      skills: ["C++", "DSA (Trees & Graphs)", "OOP", "C Language", "Recursion & DP"],
    },
    {
      title: "Frontend Engineering",
      icon: Layers,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Web Workers"],
    },
    {
      title: "Backend & APIs",
      icon: Code2,
      skills: ["Python", "Flask", "RESTful APIs", "Node.js", "OpenAI API"],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["PostgreSQL", "SQLite", "Git & GitHub", "Vercel", "SQL Querying"],
    },
  ];

  return (
    <section id="skills" className="py-20 w-full">
      <div className="mb-12 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399]">
            Skills Matrix
          </span>
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#F4EFEA] sm:text-4xl">
          Technologies Practiced Daily
        </h2>
        <p className="mt-3 text-base leading-7 text-[#94A3B8]">
          Tools and languages used across coursework, algorithmic practice, and project builds.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {categories.map(({ title, icon: Icon, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-[#09120F]/80 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-black text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-[#CBD5E1]"
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

/* ── Contact Section ────────────────────────────────────────────── */
function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="py-20 w-full">
      <div className="mb-10 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399]">
            Contact
          </span>
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#F4EFEA] sm:text-4xl">
          Open for Software Engineering Internships
        </h2>
        <p className="mt-3 text-base leading-7 text-[#94A3B8]">
          Looking for internship opportunities for 2025/2026. Feel free to reach out about projects, coursework, or collaboration.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#09120F]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              Let&apos;s connect and discuss opportunities.
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
              I check my inbox daily and respond promptly to all messages.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-6 py-3 text-sm font-mono font-bold text-[#050807] shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <Mail className="h-4 w-4" />
              Email Me Directly
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-mono font-bold text-white transition hover:bg-white/10 cursor-pointer"
            >
              {copied ? (
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-mono font-bold text-[#CBD5E1] hover:text-white hover:border-[#10B981]/50 transition"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub: Arnav20007
          </a>
          <a
            href={linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-mono font-bold text-[#CBD5E1] hover:text-white hover:border-[#10B981]/50 transition"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
            LinkedIn Profile
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-mono font-bold text-[#CBD5E1] hover:text-white hover:border-[#10B981]/50 transition"
          >
            <Download className="h-3.5 w-3.5" />
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Main Home Page Component ───────────────────────────────────── */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050807] text-[#F4EFEA] selection:bg-[#10B981] selection:text-white font-sans overflow-x-hidden">
      <AmbientBackground />
      <Header />
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full flex flex-col items-center">
        <Hero />
        <TechnicalFocus />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-[#09120F]/60 py-8 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-white font-bold">Arnav Singh</span>
            <span>· B.Tech CSE (5th Sem) · BBDU Lucknow</span>
          </div>
          <span>Built with Next.js App Router & Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}
