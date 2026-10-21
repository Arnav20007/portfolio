"use client";

import Link from "next/link";
import {
  ExternalLink,
  Mail,
  Layers,
  Cpu,
  ShieldCheck,
  Check,
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

/* ── Hero Desk Illustration (Matt Farley Signature Vector Style) ── */
function HeroIllustration() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 mb-0 select-none">
      <div className="relative rounded-3xl border border-[#E6ECF8] bg-gradient-to-b from-[#F9FAFC] to-white p-6 sm:p-10 shadow-xl overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Clean Monitor / Workspace Mockup */}
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Monitor Frame */}
          <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">
                  arnav-singh.dev · ~/projects/toolforge-ats
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#5BE9B9] font-bold">
                ● LIVE
              </span>
            </div>

            {/* Split Screen: Code Editor & Web App Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 text-left bg-slate-950 min-h-[220px]">
              {/* Left: Clean C++ / TypeScript Code */}
              <div className="p-4 border-r border-slate-800/80 font-mono text-[11px] leading-relaxed text-slate-300">
                <div className="text-slate-500 mb-2">// AVLTree.cpp · O(log n) Balanced</div>
                <div className="text-purple-400">template &lt;typename T&gt;</div>
                <div><span className="text-blue-400">class</span> <span className="text-yellow-300">AVLTree</span> &#123;</div>
                <div className="pl-3 text-slate-400">Node* root;</div>
                <div className="pl-3"><span className="text-purple-400">int</span> <span className="text-blue-300">getBalance</span>(Node* n);</div>
                <div className="pl-3"><span className="text-blue-400">void</span> <span className="text-emerald-400">insert</span>(T value);</div>
                <div>&#125;;</div>
                <div className="mt-3 text-slate-500">// In-Browser Privacy</div>
                <div className="text-emerald-400 font-bold">✓ 100% Zero-Server Upload</div>
              </div>

              {/* Right: ToolForge ATS Preview Card */}
              <div className="p-4 bg-slate-900/60 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#6E07F3]/20 text-[#A78BFA] font-mono text-[10px] font-bold mb-2">
                    FLAGSHIP UTILITY
                  </div>
                  <h4 className="font-display font-bold text-white text-sm mb-1">
                    ToolForge ATS
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Client-side PDF parsing & keyword score evaluator powered by Web Workers.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>ATS Score: 92/100</span>
                  </div>
                  <a
                    href="https://toolforge-ats.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#6E07F3] hover:text-[#A78BFA] transition-colors"
                  >
                    Open App <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor Stand */}
          <div className="w-16 h-4 bg-slate-400 mx-auto rounded-b-md shadow-sm" />
          <div className="w-32 h-2 bg-slate-300 mx-auto rounded-full shadow-md" />

          {/* Desk Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6ECF8] text-xs font-mono font-bold text-[#141C3A] shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#6E07F3]" /> C++ & DSA Practicing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6ECF8] text-xs font-mono font-bold text-[#141C3A] shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#6E07F3]" /> React 19 / Next.js
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6ECF8] text-xs font-mono font-bold text-[#141C3A] shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#6E07F3]" /> 100% In-Browser Privacy
            </span>
          </div>
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

      {/* ── 1. HERO SECTION (Matt Farley Centered Style) ── */}
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

        {/* Clean Hero Desk Illustration */}
        <HeroIllustration />
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
