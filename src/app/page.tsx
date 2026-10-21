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
  ShieldCheck,
  Check,
  Play,
  RotateCcw,
  Sparkles,
  MessageSquare,
  Compass,
  Laptop,
} from "lucide-react";
import { personal } from "@/lib/data";

const resumeHref = personal.resume || "/resume.pdf";
const email = personal.email;
const githubProfile = `https://github.com/${personal.github || "Arnav20007"}`;
const linkedinProfile = personal.linkedin ? `https://linkedin.com/in/${personal.linkedin}` : "";

/* ── SVG Brand Icons ────────────────────────────────────────────── */
function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.05h4.35V23H.32V8.05ZM7.34 8.05h4.17v2.04h.06c.58-1.1 2-2.26 4.13-2.26 4.42 0 5.24 2.91 5.24 6.69V23h-4.35v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V23H7.34V8.05Z" />
    </svg>
  );
}

/* ── Code Workbench Data (Arnav's Custom Engineering Tweak) ─────── */
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
      "[Worker] Thread initialized in browser memory.",
      "[Worker] Loaded 2 PDF binary buffers without network upload.",
      "[Worker] Merged 14 pages in 118ms on worker thread.",
      "✓ Output verified: 100% private client-side execution.",
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
  demo?: string;
  source: string;
  color: string;
}

const projectsList: SelectedProject[] = [
  {
    id: "toolforge",
    name: "ToolForge ATS",
    badge: "Flagship Web Utility",
    tagline: "In-Browser ATS Resume Score Checker & Keyword Matcher",
    description:
      "A 100% private in-browser ATS resume evaluator, Overleaf/LaTeX audit, and job keyword matcher with zero server uploads.",
    stack: ["React", "TypeScript", "Tailwind CSS", "PDF.js", "Web Workers"],
    demo: "https://toolforge-ats.vercel.app",
    source: "https://github.com/Arnav20007/ats",
    color: "#6E07F3",
  },
  {
    id: "pdflex",
    name: "PDFlex",
    badge: "Client-Side Utility",
    tagline: "Browser PDF Tool Powered by Web Workers",
    description:
      "An in-browser PDF manipulation utility that lets users merge, split, and convert documents locally without sending files to external servers.",
    stack: ["Next.js", "Web Workers", "pdf-lib", "PDF.js"],
    demo: "https://pd-flex.vercel.app",
    source: "https://github.com/Arnav20007/pdflex",
    color: "#2563EB",
  },
  {
    id: "financecalc",
    name: "FinanceCalc",
    badge: "Fintech Web App",
    tagline: "Investment & Loan Amortization Calculator",
    description:
      "A personal finance calculator for estimating SIP returns, EMI payments, and savings growth, with interactive charts to visualize compound growth.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    demo: "https://financecalc0.vercel.app",
    source: "https://github.com/Arnav20007/financecalc",
    color: "#059669",
  },
  {
    id: "moodmate",
    name: "MoodMate AI",
    badge: "AI Reflection Tool",
    tagline: "Journaling Platform with AI Mood Feedback",
    description:
      "A journaling app built during a hackathon. It uses a Flask API and OpenAI to offer reflections and sentiment tracking on journal entries.",
    stack: ["Next.js", "Python", "Flask", "OpenAI API"],
    source: "https://github.com/Arnav20007/moodmate",
    color: "#E11D48",
  },
  {
    id: "ascend",
    name: "ASCEND",
    badge: "Gamified Productivity",
    tagline: "Quest & XP Progression Task System",
    description:
      "A task management system that brings RPG-style experience points, leveling, and streak progression to daily developer habits.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    source: "https://github.com/Arnav20007/ascend",
    color: "#D97706",
  },
  {
    id: "dsa",
    name: "C++ DSA Repository",
    badge: "Algorithms & Systems",
    tagline: "500+ Solved Data Structures & Algorithms",
    description:
      "Comprehensive C++ implementations of self-balancing trees, graphs, dynamic programming, and greedy algorithms practiced for software engineering interviews.",
    stack: ["C++17", "STL", "Algorithms", "Data Structures"],
    source: "https://github.com/Arnav20007/cpp-practice",
    color: "#4F46E5",
  },
];

/* ── Code Workbench Component ───────────────────────────────────── */
function CodeWorkbench() {
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
    <div className="w-full max-w-4xl mx-auto mt-12 mb-0 select-none">
      <div className="overflow-hidden rounded-2xl border border-[#E6ECF8] bg-white shadow-xl">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between border-b border-[#E6ECF8] bg-slate-50/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            <span className="ml-2 font-mono text-xs font-bold text-slate-700">
              arnav-engineering-workbench
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#6E07F3] px-3.5 py-1 font-mono text-xs font-bold text-white shadow-sm transition hover:bg-[#5600c7] disabled:opacity-50 cursor-pointer"
            >
              <Play className="h-3 w-3" />
              {isSimulating ? "Running..." : "Run Simulation"}
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-[#E6ECF8] bg-slate-50/50">
          {workbenchSnippets.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSimulationLogs([]);
              }}
              className={`flex items-center gap-2 border-r border-[#E6ECF8] px-5 py-2.5 font-mono text-xs font-bold transition cursor-pointer ${
                activeTab === item.id
                  ? "bg-white text-[#6E07F3] border-b-2 border-b-[#6E07F3]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{item.filename}</span>
            </button>
          ))}
        </div>

        {/* Code View */}
        <div className="p-5 bg-slate-950 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed text-left">
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
          <div className="border-t border-[#E6ECF8] bg-purple-50/50 p-4 text-left animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-100">
              <span className="font-mono text-xs font-bold text-[#6E07F3]">
                Workbench Simulation Console
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
                  <span className="text-[#6E07F3] font-bold">›</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Window Bar */}
        <div className="flex items-center justify-between border-t border-[#E6ECF8] bg-slate-50 px-4 py-2.5 text-xs font-mono text-slate-600">
          <span className="flex items-center gap-1.5 text-[#6E07F3] font-semibold">
            <Check className="h-3.5 w-3.5" /> 5th Sem B.Tech CSE · C++ · React 19 · Next.js · Python
          </span>
          <span>8.0 CGPA · BBDU Lucknow</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Navbar ────────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5 group">
        <span className="w-10 h-10 rounded-xl bg-[#6E07F3] text-white flex items-center justify-center font-black text-sm shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
          AS
        </span>
        <span className="font-display font-extrabold text-xl text-[#141C3A] tracking-tight">
          Arnav Singh
        </span>
      </Link>

      <div className="flex items-center gap-3 sm:gap-6">
        <Link
          href="#projects"
          className="text-sm font-semibold text-[#5A6275] hover:text-[#6E07F3] transition-colors hidden sm:inline-block"
        >
          Projects
        </Link>
        <Link
          href="/recruiter"
          className="text-sm font-semibold text-[#5A6275] hover:text-[#6E07F3] transition-colors hidden md:inline-block"
        >
          Recruiter View
        </Link>
        <Link
          href="/friend"
          className="text-sm font-semibold text-[#5A6275] hover:text-[#6E07F3] transition-colors hidden md:inline-block"
        >
          Personal
        </Link>

        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border-2 border-[#6E07F3] text-[#6E07F3] font-bold text-sm hover:bg-[#6E07F3] hover:text-white transition-all shadow-xs"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}

/* ── Master Page Component ──────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#141C3A] font-sans selection:bg-[#EBD8FF] selection:text-[#5600C7]">
      <Navbar />

      {/* ── 1. HERO SECTION (Matt Farley Centered Style + Workbench) ── */}
      <section className="pt-16 pb-20 px-6 text-center max-w-5xl mx-auto">
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#141C3A] tracking-tight leading-[1.1] mb-5">
          Computer Science Student & <br />
          <span className="text-[#6E07F3]">Full-Stack Developer</span>
        </h1>

        <p className="text-lg sm:text-2xl text-[#5A6275] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          I solve DSA problems in C++ and build clean, privacy-first web utilities.
        </p>

        {/* Friendly Student Avatar with Academic Pill */}
        <div className="flex flex-col items-center justify-center gap-3 mb-4">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#6E07F3] to-[#8B5CF6] p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-5xl">
              👨‍💻
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6ECF8] bg-slate-50 px-4 py-1.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-xs font-bold text-slate-700">
              5th Sem B.Tech CSE · 8.0 CGPA · BBDU Lucknow
            </span>
          </div>
        </div>

        {/* Interactive Code Workbench Tweak */}
        <CodeWorkbench />
      </section>

      {/* ── 2. INTRO SECTION (Matt Farley's Iconic Purple Band) ── */}
      <section className="bg-[#6E07F3] text-white pt-28 pb-48 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-6">
            Hi, I’m Arnav. Nice to meet you.
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 font-normal leading-relaxed">
            I’m a 5th-semester B.Tech Computer Science Engineering student at Babu Banarasi Das University, Lucknow (8.0 CGPA). I’m passionate about building real, functional tools — from client-side Web Worker utilities like <span className="font-bold text-white underline decoration-white/40">ToolForge ATS</span> and <span className="font-bold text-white underline decoration-white/40">PDFlex</span> to full-stack React and Python web applications. I’m quietly confident, naturally curious, and actively seeking software engineering internships.
          </p>
        </div>
      </section>

      {/* ── 3. OVERLAPPING 3-COLUMN SKILLS BOX (Matt Farley Signature Box) ── */}
      <section className="px-6 -mt-36 relative z-10 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#E6ECF8] shadow-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6ECF8] text-center">
          
          {/* Column 1: C++ & DSA Problem Solving */}
          <div className="p-8 sm:p-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#5BE9B9]/20 text-emerald-800 flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-[#059669]" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-[#141C3A] mb-3">
              C++ & Problem Solving
            </h3>
            <p className="text-sm text-[#5A6275] leading-relaxed mb-8">
              I love breaking down complex algorithmic logic, optimizing time complexity, and working with memory-safe data structures.
            </p>

            <h4 className="font-bold text-sm text-[#6E07F3] uppercase tracking-wider mb-2">
              Topics I Practice:
            </h4>
            <p className="text-sm text-[#141C3A] mb-8 font-medium">
              Trees, Graphs, Recursion, Dynamic Programming, AVL Trees, STL
            </p>

            <h4 className="font-bold text-sm text-[#6E07F3] uppercase tracking-wider mb-2">
              Core Foundations:
            </h4>
            <ul className="text-sm text-[#5A6275] space-y-1.5 font-medium">
              <li>Object-Oriented Programming (OOP)</li>
              <li>Operating Systems (OS)</li>
              <li>Database Management (DBMS)</li>
              <li>Computer Networks (CN)</li>
            </ul>
          </div>

          {/* Column 2: Frontend & Modern Web */}
          <div className="p-8 sm:p-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-[#6E07F3] flex items-center justify-center mb-6">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-[#141C3A] mb-3">
              Frontend Engineering
            </h3>
            <p className="text-sm text-[#5A6275] leading-relaxed mb-8">
              I enjoy building clean, responsive user interfaces from scratch that solve real problems without unnecessary bloat.
            </p>

            <h4 className="font-bold text-sm text-[#6E07F3] uppercase tracking-wider mb-2">
              Languages & Frameworks:
            </h4>
            <p className="text-sm text-[#141C3A] mb-8 font-medium">
              React 19, Next.js App Router, TypeScript, JavaScript, Tailwind CSS
            </p>

            <h4 className="font-bold text-sm text-[#6E07F3] uppercase tracking-wider mb-2">
              Client-Side Power:
            </h4>
            <ul className="text-sm text-[#5A6275] space-y-1.5 font-medium">
              <li>In-Browser Web Workers</li>
              <li>PDF.js & pdf-lib Manipulation</li>
              <li>Interactive Chart.js Visuals</li>
              <li>HTML5 Canvas & Responsive Layouts</li>
            </ul>
          </div>

          {/* Column 3: Backend & Systems Architecture */}
          <div className="p-8 sm:p-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-[#2563EB]" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-[#141C3A] mb-3">
              Backend & Architecture
            </h3>
            <p className="text-sm text-[#5A6275] leading-relaxed mb-8">
              Designing secure RESTful endpoints, relational schemas, and client-side zero-server privacy models.
            </p>

            <h4 className="font-bold text-sm text-[#6E07F3] uppercase tracking-wider mb-2">
              Backend & APIs:
            </h4>
            <p className="text-sm text-[#141C3A] mb-8 font-medium">
              Python (Flask), RESTful APIs, Node.js, OpenAI API
            </p>

            <h4 className="font-bold text-sm text-[#6E07F3] uppercase tracking-wider mb-2">
              Databases & DevOps:
            </h4>
            <ul className="text-sm text-[#5A6275] space-y-1.5 font-medium">
              <li>PostgreSQL & SQLite</li>
              <li>Git & GitHub CI/CD</li>
              <li>Vercel Deployment Workflows</li>
              <li>100% In-Memory Local Privacy</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── 4. MY RECENT WORK (Matt Farley Projects Grid) ── */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#141C3A] tracking-tight mb-4">
          My Recent Work
        </h2>
        <p className="text-base sm:text-lg text-[#5A6275] max-w-xl mx-auto mb-16">
          Here are a few technical projects I’ve built. Want to see code or live demos? Check below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-[#E6ECF8] bg-white p-7 text-left shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${project.color}15`, color: project.color }}
                  >
                    {project.badge}
                  </span>
                  {project.demo && (
                    <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Demo
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-2xl text-[#141C3A] mb-2 group-hover:text-[#6E07F3] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono font-bold text-slate-500 mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#5A6275] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E6ECF8]">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6E07F3] text-white text-xs font-bold hover:bg-[#5600c7] transition-all shadow-xs"
                  >
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. BOTTOM CALLOUT BOX (Matt Farley's Call to Action) ── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="bg-[#141C3A] text-white rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-2">
              Interested in hiring me or collaborating?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I&apos;m actively preparing for software engineering internships and technical roles. Let&apos;s queue up a time to chat. I&apos;ll buy the coffee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {email ? (
              <a
                href={`mailto:${email}?subject=Software Engineering Opportunity`}
                className="px-8 py-3.5 rounded-full bg-[#5BE9B9] hover:bg-[#48d8a7] text-[#141C3A] font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                Let&apos;s do this
              </a>
            ) : (
              <Link
                href="/collaborate"
                className="px-8 py-3.5 rounded-full bg-[#5BE9B9] hover:bg-[#48d8a7] text-[#141C3A] font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                Let&apos;s do this
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── 6. FOOTER (Matt Farley Iconic Purple/Navy Footer) ── */}
      <footer className="bg-[#6E07F3] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <Link href="/" className="w-12 h-12 rounded-2xl bg-white text-[#6E07F3] flex items-center justify-center font-black text-xl shadow-lg hover:scale-105 transition-transform">
            AS
          </Link>

          <p className="text-xl sm:text-2xl font-light text-purple-100 max-w-md">
            Living, learning, & leveling up one day at a time.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            {linkedinProfile && (
              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>

          <div className="text-xs text-purple-200 pt-6 border-t border-purple-400/30 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Handcrafted by Arnav Singh © 2026</span>
            <span>B.Tech CSE · BBDU Lucknow (8.0 CGPA)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
