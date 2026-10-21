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
  ShieldCheck,
  Check,
  Play,
  RotateCcw,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { personal } from "@/lib/data";

const resumeHref = personal.resume || "/resume.pdf";
const email = personal.email;
const githubProfile = `https://github.com/${personal.github || "Arnav20007"}`;
const linkedinProfile = personal.linkedin ? `https://linkedin.com/in/${personal.linkedin}` : "";

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

/* ── Code Workbench Data ────────────────────────────────────────── */
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
    summary: "Merge PDF files in the browser without uploading them.",
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
      "✓ Example output: files stay in the browser and are not uploaded.",
    ],
  },
  {
    id: "avltree",
    filename: "AVLTree.cpp",
    tag: "C++ / DSA",
    summary: "A C++ example of keeping a search tree balanced.",
    code: [
      "// Self-balancing AVL Tree implementation",
      "template <typename T>",
      "class AVLTree {",
      "    struct Node { T val; int height; Node *left, *right; };",
      "    int balanceFactor(Node* n) {",
      "        return n ? getHeight(n->left) - getHeight(n->right) : 0;",
      "    }",
      "    Node* rotateRight(Node* y) {",
      "        Node* x = y->left; Node* T2 = x->right;",
      "        x->right = y; y->left = T2;",
      "        updateHeight(y); updateHeight(x);",
      "        return x;",
      "    }",
      "};",
    ],
    simulationOutput: [
      "[Compiler] g++ -O3 -Wall AVLTree.cpp -o avl_demo",
      "[Execution] Inserted 1,000 randomized integer nodes.",
      "[Verification] Max tree depth = 11. Balance factor in [-1, 1].",
      "✓ All lookup and re-balancing operations completed in O(log n).",
    ],
  },
  {
    id: "finance",
    filename: "FinanceMath.ts",
    tag: "TypeScript / Math",
    summary: "SIP compounding and amortized loan calculation logic.",
    code: [
      "// Compound interest and loan calculation functions",
      "export function calculateSIP(P: number, r: number, n: number) {",
      "  const i = r / 12 / 100;",
      "  return P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);",
      "}",
      "",
      "export function calculateEMI(principal: number, annualRate: number, months: number) {",
      "  const monthlyRate = annualRate / 12 / 100;",
      "  const factor = Math.pow(1 + monthlyRate, months);",
      "  return (principal * monthlyRate * factor) / (factor - 1);",
      "}",
    ],
    simulationOutput: [
      "[Math Engine] Calculating: SIP ₹5,000/mo @ 12% p.a. for 10 years.",
      "[Math Engine] Invested Amount : ₹6,00,000",
      "[Math Engine] Estimated Returns: ₹5,61,695",
      "✓ Total Maturity Value : ₹11,61,695 calculated accurately.",
    ],
  },
];

/* ── Selected Projects Data ─────────────────────────────────────── */
interface SelectedProject {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  demo?: string;
  source: string;
  comingSoon?: boolean;
}

const selectedProjects: SelectedProject[] = [
  {
    id: "toolforge",
    name: "ToolForge ATS",
    badge: "Flagship Web Utility",
    tagline: "In-Browser ATS Resume Score Checker & Keyword Matcher",
    description:
      "A 100% private in-browser ATS resume evaluator, Overleaf/LaTeX audit, and job keyword matcher with zero server uploads.",
    stack: ["React", "TypeScript", "Tailwind CSS", "PDF.js", "Web Workers"],
    highlights: ["100% Client-Side Privacy", "Instant ATS Keyword Scoring", "Zero Telemetry Uploads"],
    demo: "https://toolforge-ats.vercel.app",
    source: "https://github.com/Arnav20007/ats",
  },
  {
    id: "pdflex",
    name: "PDFlex",
    badge: "Client-Side Utility",
    tagline: "Browser PDF Tool Powered by Web Workers",
    description:
      "An in-browser PDF manipulation utility that lets users merge, split, and convert documents locally without sending files to an external server.",
    stack: ["Next.js", "Web Workers", "pdf-lib", "PDF.js"],
    highlights: ["In-browser processing", "Web Worker parallel execution", "Local document privacy"],
    demo: "https://pd-flex.vercel.app",
    source: "https://github.com/Arnav20007/pdflex",
  },
  {
    id: "financecalc",
    name: "FinanceCalc",
    badge: "Fintech Web App",
    tagline: "Investment & Loan Amortization Calculator",
    description:
      "A personal finance calculator for estimating SIP returns, EMI payments, and savings growth, with interactive charts to make the results easy to understand.",
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
      "A journaling app built during a hackathon. It uses a Flask API and OpenAI to offer reflections on journal entries.",
    stack: ["Next.js", "Python", "Flask", "OpenAI API"],
    highlights: ["Flask REST API flow", "OpenAI structured responses", "Sentiment tracking"],
    source: "https://github.com/Arnav20007/moodmate",
    comingSoon: true,
  },
];

/* ── Ambient ToolForge Rose Background ─────────────────────────── */
function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top subtle blush glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full opacity-40 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #ffe4e6 0%, #fecdd3 30%, rgba(255, 241, 242, 0) 70%)",
        }}
      />
      {/* Subtle fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

/* ── Code Workbench (ToolForge Light Card Aesthetic) ─────────────── */
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
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            <span className="ml-2 font-mono text-xs font-bold text-slate-700">
              engineering-workbench
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1 font-mono text-xs font-bold text-white shadow-xs transition hover:bg-rose-700 disabled:opacity-50 cursor-pointer"
            >
              <Play className="h-3 w-3" />
              {isSimulating ? "Running..." : "Run Simulation"}
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200/80 bg-slate-50/50">
          {workbenchSnippets.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSimulationLogs([]);
              }}
              className={`flex items-center gap-2 border-r border-slate-200 px-4 py-2.5 font-mono text-xs font-bold transition cursor-pointer ${
                activeTab === item.id
                  ? "bg-white text-rose-600 border-b-2 border-b-rose-600"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{item.filename}</span>
            </button>
          ))}
        </div>

        {/* Code Content View (Dark IDE inside Clean Light Card) */}
        <div className="p-4 bg-slate-950 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
          <div className="space-y-1">
            {snippet.code.map((line, index) => (
              <div key={index} className="flex">
                <span className="w-8 select-none text-right pr-4 text-slate-600 text-[11px]">
                  {index + 1}
                </span>
                <span className="whitespace-pre">{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Simulation Output Area */}
        {simulationLogs.length > 0 && (
          <div className="border-t border-slate-200 bg-rose-50/50 p-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-rose-100">
              <span className="font-mono text-xs font-bold text-rose-800">
                Simulation Logs
              </span>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" /> Clear
              </button>
            </div>
            <div className="space-y-1 font-mono text-xs">
              {simulationLogs.map((log, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    log.includes("✓") ? "text-emerald-700 font-bold" : "text-slate-700"
                  }`}
                >
                  <span className="text-rose-600 font-bold">›</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Window Bar */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs font-mono text-slate-600">
          <span className="flex items-center gap-1.5 text-rose-700 font-semibold">
            <Check className="h-3.5 w-3.5" /> C++ · React · Next.js · TypeScript
          </span>
          <span>B.Tech CSE (5th Sem)</span>
        </div>
      </div>
    </div>
  );
}

/* ── Top Floating Switcher Header ───────────────────────────────── */
function Header() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/95 border border-slate-200/80 backdrop-blur-xl shadow-lg shadow-slate-200/50">
        <Link
          href="/"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <span className="w-5 h-5 rounded-md bg-rose-600 text-white flex items-center justify-center text-[10px] font-black">
            AS
          </span>
          <span>Arnav Singh</span>
        </Link>
        <div className="h-4 w-px bg-slate-200" />

        <nav className="hidden md:flex items-center gap-1">
          {[
            { id: "hero", label: "Home" },
            { id: "focus", label: "About" },
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
              className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50/50 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="h-4 w-px bg-slate-200 hidden md:block" />

        {/* Scene Switcher Links */}
        <div className="flex items-center gap-1">
          <Link
            href="/collaborate"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all"
          >
            Collaborate
          </Link>
          <Link
            href="/recruiter"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all hidden sm:inline-block"
          >
            Recruiter
          </Link>
          <Link
            href="/friend"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all hidden sm:inline-block"
          >
            Friend
          </Link>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-600 text-white hover:bg-rose-700 shadow-xs transition-all"
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
          {/* Status Pill (ToolForge ATS style) */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider text-rose-700 uppercase">
              B.Tech CSE Student · 5th Semester · BBDU Lucknow
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Computer Science Student &{" "}
            <span className="text-rose-600 block sm:inline">
              Full-Stack Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            5th-semester B.Tech CSE student (8.0 CGPA) at Babu Banarasi Das University. Passionate about solving DSA problems in C++, building client-side Web Worker utilities like ToolForge & PDFlex, and modern React full-stack tools.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3.5 text-sm font-mono font-bold text-white shadow-sm shadow-rose-500/20 transition hover:bg-rose-700 cursor-pointer"
            >
              <Zap className="h-4 w-4" />
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-mono font-bold text-slate-800 shadow-2xs transition hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Clean Focus Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-5 border-t border-slate-200">
            <span className="text-xs font-mono font-bold text-slate-500 mr-1">Focus:</span>
            {["8.0 CGPA · BBDU", "C++ & DSA", "React & Next.js", "Python & Flask", "In-Browser Privacy"].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold text-slate-700 shadow-2xs"
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
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
            Technical Focus
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          What I&apos;m Learning and Building
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          I apply academic theory from my CS degree directly into production-grade web utilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: DSA Coursework */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Data Structures & Algorithms
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  Babu Banarasi Das University, Lucknow
                </p>
              </div>
            </div>
            <span className="rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-mono text-xs font-bold text-rose-700">
              8.0 CGPA
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 mb-5">
            Practicing C++ problem solving in trees, graphs, recursion, and dynamic programming as part of core coursework and competitive programming practice.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-100 pt-4 text-center">
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <div className="text-xs font-bold text-slate-900">Data Structures</div>
              <div className="text-xs text-rose-600 font-mono font-bold mt-0.5">Trees, Graphs, DP</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <div className="text-xs font-bold text-slate-900">Language</div>
              <div className="text-xs text-rose-600 font-mono font-bold mt-0.5">C++ (STL)</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <div className="text-xs font-bold text-slate-900">Paradigms</div>
              <div className="text-xs text-rose-600 font-mono font-bold mt-0.5">OOP Concepts</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <div className="text-xs font-bold text-slate-900">Coursework</div>
              <div className="text-xs text-rose-600 font-mono font-bold mt-0.5">OS, DBMS, CN</div>
            </div>
          </div>
        </div>

        {/* Card 2: Privacy Architecture */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200 mb-4">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Client-Side Architecture
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 mb-4">
            ToolForge and PDFlex handle heavy processing in-browser via Web Workers, ensuring user documents are never uploaded to a backend.
          </p>
          <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3 font-mono text-xs font-bold text-rose-800">
            ⚡ Web Workers · 0KB Server Upload
          </div>
        </div>

        {/* Card 3: AI Tooling */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200 mb-4">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            AI & API Integrations
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">
            In MoodMate, I designed a Flask backend integrated with OpenAI API to provide empathetic emotional reflection on user journal entries.
          </p>
        </div>

        {/* Card 4: Web Stack */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Web Development Stack
              </h3>
              <p className="text-xs font-mono text-slate-500">
                React, Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 mb-4">
            Building responsive, fast, and accessible web experiences using modern frontend architecture and clean design standards.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React 19", "Next.js App Router", "TypeScript", "Python (Flask)", "PostgreSQL", "Tailwind CSS", "Git & GitHub"].map((t) => (
              <span
                key={t}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-semibold text-slate-700"
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
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
            Selected Projects
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Projects I&apos;ve Built
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          A collection of functional web applications, developer utilities, and AI hackathon submissions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[360px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition hover:border-rose-300 hover:shadow-md"
          >
            <div>
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 font-mono text-xs font-bold text-rose-700">
                  {project.badge}
                </span>
                {project.comingSoon ? (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-500">
                    In Development
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-rose-700">
                    <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
                    Live Demo Available
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                {project.name}
              </h3>
              <p className="mt-1 text-xs font-mono font-bold text-rose-600">
                {project.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-rose-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700"
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
                  className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 px-5 py-2 text-xs font-mono font-bold text-white shadow-xs transition hover:bg-rose-700"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2 text-xs font-mono font-bold text-slate-700 hover:bg-slate-50 transition"
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
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
            Skills Matrix
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Tools I Use
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Technologies and developer environments I use across academic work and software projects.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {categories.map(({ title, icon: Icon, skills }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700"
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
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
            Contact
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Open to Software Engineering Internships
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          I am actively preparing for software engineering roles and internships. If you&apos;d like to discuss an opportunity, feel free to get in touch.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Let&apos;s build something meaningful.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              You can check my latest code repositories on GitHub or download my verified resume.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-sm font-mono font-bold text-white shadow-xs transition hover:bg-rose-700"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            )}
            {email && (
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-mono font-bold text-slate-800 transition hover:bg-slate-100 cursor-pointer"
              >
                {copied ? (
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-mono font-bold text-slate-700 hover:text-rose-600 hover:border-rose-300 transition"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub: Arnav20007
          </a>
          {linkedinProfile && (
            <a
              href={linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-mono font-bold text-slate-700 hover:text-rose-600 hover:border-rose-300 transition"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              LinkedIn Profile
            </a>
          )}
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-mono font-bold text-slate-700 hover:text-rose-600 hover:border-rose-300 transition"
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
    <div className="relative min-h-screen bg-[#faf8f9] text-[#0f172a] selection:bg-rose-100 selection:text-rose-950 font-sans overflow-x-hidden">
      <AmbientBackground />
      <Header />
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full flex flex-col items-center">
        <Hero />
        <TechnicalFocus />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 border-t border-slate-200 bg-white/80 py-8 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span className="text-slate-900 font-bold">Arnav Singh</span>
            <span>· B.Tech CSE (5th Sem) · BBDU Lucknow</span>
          </div>
          <span>ToolForge Rose Design System</span>
        </div>
      </footer>
    </div>
  );
}
