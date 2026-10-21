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

/* ── Selected Projects (Honest & Accurate Data) ────────────────── */
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

/* ── Ambient Background (ToolForge Freshness) ─────────────────── */
function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Top right soft emerald glow */}
      <div
        className="absolute -top-32 -right-32 h-[550px] w-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.05) 45%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
      {/* Mid right mint glow */}
      <div
        className="absolute top-[650px] -right-24 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(52, 211, 153, 0.12) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />
      {/* Top left soft cyan aura */}
      <div
        className="absolute top-36 -left-32 h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.10) 0%, rgba(16, 185, 129, 0.03) 50%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
      {/* Subtle fine dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16, 185, 129, 0.20) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

/* ── Restrained & Clean Code Workbench ──────────────────────────── */
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
      {/* Single clean floating badge */}
      <div className="absolute -top-3.5 -left-2 z-20 flex items-center gap-2 rounded-full border border-emerald-300 bg-white/95 px-3 py-1 shadow-sm backdrop-blur-md">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-xs font-bold text-slate-800">8.0 CGPA · BBDU Lucknow</span>
      </div>

      {/* Main Workbench Window */}
      <div className="relative rounded-2xl border border-slate-800 bg-[#0d1117] p-1 shadow-xl text-slate-200 overflow-hidden">
        {/* Terminal Header & File Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-2.5 gap-2">
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
                    ? "bg-[#0d1117] text-emerald-400 font-bold border border-white/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <Code2 className="h-3 w-3 text-emerald-500" />
                {item.filename}
              </button>
            ))}
          </div>
        </div>

        {/* Descriptor Bar with Clearly Labeled Simulation Button */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#0f141c] px-4 py-2 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
              {snippet.tag}
            </span>
            <span className="text-slate-400 hidden sm:inline truncate max-w-xs">
              {snippet.summary}
            </span>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-2.5 py-1 font-mono text-[11px] font-bold text-white shadow-sm transition hover:bg-emerald-500 active:scale-95 disabled:opacity-50 cursor-pointer"
            title="Runs simulated execution output in the console below"
          >
            <Play className="h-3 w-3" />
            {isSimulating ? "Simulating..." : "▶ Run Simulation"}
          </button>
        </div>

        {/* Code Body — Breathable line height */}
        <div className="p-4 font-mono text-[12px] leading-relaxed overflow-x-auto max-h-[270px]">
          {snippet.code.map((line, i) => (
            <div key={i} className="flex gap-3 hover:bg-white/[0.03] px-1 rounded">
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
                    ? "text-blue-400"
                    : line.includes("DONE") || line.includes("total") || line.includes("true")
                    ? "text-emerald-400 font-semibold"
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
          <div className="border-t border-white/10 bg-[#080b0f] p-3 animate-in fade-in duration-150">
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
        <div className="flex items-center justify-between border-t border-white/10 bg-[#161b22] px-4 py-2 text-[10px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Check className="h-3 w-3" /> C++ · React · Next.js · TypeScript
          </span>
          <span>B.Tech CSE (5th Sem)</span>
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
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm transition-transform group-hover:scale-105">
            <Code2 className="h-4 w-4" />
          </div>
          <div>
            <span className="text-sm font-black tracking-tight text-slate-900 block leading-tight">
              Arnav Singh
            </span>
            <span className="text-[10px] font-bold text-emerald-700 tracking-wide block">
              B.Tech CSE · BBDU
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-emerald-700">
            About
          </a>
          <a href="#focus" className="transition hover:text-emerald-700">
            Technical Focus
          </a>
          <a href="#projects" className="transition hover:text-emerald-700">
            Selected Projects
          </a>
          <a href="#skills" className="transition hover:text-emerald-700">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-emerald-700">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open for Internships
          </div>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero Section (Tightened & Believable) ───────────────────────── */
function Hero() {
  return (
    <section className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
      {/* Left Column — Clean Headline & Realistic Student Identity */}
      <div>
        {/* Subtle pill banner */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 shadow-sm shadow-emerald-500/10">
          <span className="text-amber-500 text-xs">⚡</span>
          <span className="uppercase tracking-wider">
            B.Tech CSE (5th Sem) · BBDU Lucknow
          </span>
        </div>

        {/* Tightened 2-Line Headline */}
        <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Computer Science Student &{" "}
          <span className="text-emerald-600 block sm:inline">
            Full-Stack Developer
          </span>
        </h1>

        {/* Believable Description */}
        <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
          5th-semester B.Tech CSE student at Babu Banarasi Das University. Focused on C++ Data Structures &
          Algorithms problem-solving while building practical, client-side web utilities with React, Next.js, and Python.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
          >
            <Zap className="h-4 w-4" />
            View Selected Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-white px-5 py-3 text-sm font-black text-emerald-800 transition hover:border-emerald-500 hover:bg-emerald-50/50"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        {/* Stats Row */}
        <div className="mt-8 border-t border-emerald-200/80 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: "8.0 / 10.0", label: "Academic CGPA", sub: "BBDU Lucknow" },
            { val: "5th Sem", label: "B.Tech CSE", sub: "2023 - Present" },
            { val: "C++ & DSA", label: "Problem Solving", sub: "Trees & Graphs" },
            { val: "4 Projects", label: "Web Utilities", sub: "React & Next.js" },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-emerald-500 pl-3">
              <div className="text-base font-black text-slate-900">{stat.val}</div>
              <div className="text-[11px] font-bold text-slate-700">{stat.label}</div>
              <div className="text-[10px] text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column — Clean Workbench */}
      <CleanWorkbench />
    </section>
  );
}

/* ── Technical Focus & Academic Background ──────────────────────── */
function TechnicalFocus() {
  return (
    <section id="focus" className="py-12 sm:py-16">
      <div className="mb-9 max-w-3xl">
        <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Technical Focus
          </span>
        </div>
        <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Core Fundamentals & Practical Implementation
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Balancing theoretical computer science coursework with hands-on web and AI tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: DSA Coursework */}
        <div className="rounded-2xl border border-emerald-200/90 bg-white p-6 shadow-sm md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">
                  Data Structures & Algorithms Coursework
                </h3>
                <p className="text-xs text-slate-500">
                  Babu Banarasi Das University, Lucknow (8.0 CGPA)
                </p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
              8.0 CGPA
            </span>
          </div>

          <p className="text-sm leading-6 text-slate-600 mb-4">
            Focused study of standard computer science structures in C++: Tree traversals (Binary & AVL Trees),
            Graph algorithms (BFS, DFS, Dijkstra), recursion, and dynamic programming patterns.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 border-t border-slate-100 pt-3 text-center">
            <div className="rounded-lg bg-slate-50 p-2">
              <div className="text-xs font-bold text-slate-900">Data Structures</div>
              <div className="text-[11px] text-emerald-700 font-mono">Trees, Graphs, DP</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-2">
              <div className="text-xs font-bold text-slate-900">Primary Language</div>
              <div className="text-[11px] text-emerald-700 font-mono">C++ (STL)</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-2">
              <div className="text-xs font-bold text-slate-900">Paradigms</div>
              <div className="text-[11px] text-emerald-700 font-mono">OOP Concepts</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-2">
              <div className="text-xs font-bold text-slate-900">Coursework</div>
              <div className="text-[11px] text-emerald-700 font-mono">OS, DBMS, CN</div>
            </div>
          </div>
        </div>

        {/* Card 2: Privacy Architecture */}
        <div className="rounded-2xl border border-emerald-200/90 bg-white p-6 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 mb-3">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <h3 className="text-base font-black text-slate-900 mb-2">
            Client-Side Architecture
          </h3>
          <p className="text-xs leading-6 text-slate-600 mb-3">
            In PDFlex, files stay in browser memory. Using Web Workers for PDF rendering avoids sending user
            documents over the wire, protecting privacy while offloading compute from the main thread.
          </p>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5 font-mono text-xs text-emerald-900">
            ⚡ In-browser Web Workers
          </div>
        </div>

        {/* Card 3: AI Tooling */}
        <div className="rounded-2xl border border-emerald-200/90 bg-white p-6 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 border border-teal-100 text-teal-700 mb-3">
            <Cpu className="h-4 w-4" />
          </div>
          <h3 className="text-base font-black text-slate-900 mb-2">
            AI & API Integrations
          </h3>
          <p className="text-xs leading-6 text-slate-600">
            Connecting OpenAI endpoints to modular Flask backends (MoodMate) to handle structured prompt
            responses, sentiment tracking, and clean JSON payloads.
          </p>
        </div>

        {/* Card 4: Web Stack */}
        <div className="rounded-2xl border border-emerald-200/90 bg-white p-6 shadow-sm md:col-span-2">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">
                Web Engineering & Project Builds
              </h3>
              <p className="text-xs text-slate-500">
                React, Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL
              </p>
            </div>
          </div>
          <p className="text-xs leading-6 text-slate-600 mb-3">
            Structuring modular code with type safety, responsive design, and automated Vercel continuous deployment.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Python (Flask)", "PostgreSQL", "Tailwind CSS", "Git & GitHub"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700"
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

/* ── Selected Projects (Honest & Detailed) ──────────────────────── */
function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="mb-9 max-w-3xl">
        <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Selected Projects
          </span>
        </div>
        <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Four Projects Built with Clean Architecture
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Practical web utilities and tools developed during coursework and self-directed learning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[350px] flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-lg"
          >
            <div>
              <div className="mb-3.5 flex items-start justify-between gap-3">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                  {project.badge}
                </span>
                {project.comingSoon ? (
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-400">
                    In Development
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Demo Available
                  </span>
                )}
              </div>

              <h3 className="text-xl font-black tracking-tight text-slate-900">
                {project.name}
              </h3>
              <p className="mt-1 text-xs font-bold text-emerald-700">
                {project.tagline}
              </p>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-3.5 space-y-1">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition ${
                  project.demo
                    ? "border border-slate-200 text-slate-700 hover:border-slate-400"
                    : "bg-slate-900 text-white hover:bg-slate-800"
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

/* ── Technical Stack Section ────────────────────────────────────── */
function SkillsSection() {
  const categories = [
    {
      title: "Core Programming & CS",
      icon: Cpu,
      skills: ["C++", "DSA (Trees & Graphs)", "OOP", "C Language", "Recursion & DP"],
    },
    {
      title: "Frontend Development",
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
    <section id="skills" className="py-12 sm:py-16">
      <div className="mb-9 max-w-3xl">
        <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Skills Matrix
          </span>
        </div>
        <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Technologies Practiced Daily
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Tools and languages used across coursework, algorithmic practice, and project builds.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map(({ title, icon: Icon, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-3.5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-black text-slate-900">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-600"
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
    <section id="contact" className="py-12 sm:py-16">
      <div className="mb-8 max-w-3xl">
        <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Contact
          </span>
        </div>
        <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Open for Software Engineering Internships
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Looking for internship opportunities for 2025/2026. Feel free to reach out about projects, coursework, or collaboration.
        </p>
      </div>

      <div className="rounded-3xl border-2 border-dashed border-emerald-300 bg-emerald-50/50 p-7 sm:p-10 backdrop-blur-sm shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-xl font-black text-slate-900 sm:text-2xl">
              Let&apos;s connect and discuss opportunities.
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              I check my inbox daily and respond promptly to all messages.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-emerald-700"
            >
              <Mail className="h-4 w-4" />
              Email Me Directly
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-white px-5 py-2.5 text-sm font-black text-slate-900 transition hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer"
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

        <div className="mt-7 flex flex-wrap gap-3 border-t border-emerald-200/80 pt-5">
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:border-emerald-400"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub: Arnav20007
          </a>
          <a
            href={linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:border-emerald-400"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
            LinkedIn Profile
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:border-emerald-400"
          >
            <Download className="h-3.5 w-3.5" />
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Main Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fafcfb] text-slate-900 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      <AmbientBackground />
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-6xl px-5 sm:px-8">
          <Hero />
          <TechnicalFocus />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <footer className="border-t border-emerald-100 bg-white/80 py-7 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-600 text-white">
                  <Code2 className="h-3 w-3" />
                </div>
                <span className="text-xs font-bold text-slate-900">Arnav Singh</span>
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
