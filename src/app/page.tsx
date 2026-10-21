"use client";

import Link from "next/link";
import {
  ExternalLink,
  Mail,
  Layers,
  Cpu,
  BookOpen,
  Check,
  Download,
  ArrowRight,
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

/* ── Selected Projects Data (Explained in Arnav's real student voice) ── */
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
    badge: "Web Project",
    tagline: "Resume Keyword Matcher & Scanner",
    description:
      "Built this so friends could check how well their resumes match job descriptions without paying for subscriptions or uploading personal documents to third-party servers. Everything runs client-side in React.",
    stack: ["React", "TypeScript", "Tailwind CSS", "PDF.js"],
    demo: "https://toolforge-ats.vercel.app",
    source: "https://github.com/Arnav20007/ats",
    color: "#6E07F3",
  },
  {
    id: "pdflex",
    name: "PDFlex",
    badge: "Browser Utility",
    tagline: "Client-Side PDF Merge & Split",
    description:
      "I wanted a simple way to merge and split PDFs without uploading them. PDFlex handles that work directly in the browser using PDF.js, pdf-lib, and Web Workers.",
    stack: ["React", "Web Workers", "pdf-lib", "PDF.js"],
    demo: "https://pd-flex.vercel.app",
    source: "https://github.com/Arnav20007/pdflex",
    color: "#2563EB",
  },
  {
    id: "financecalc",
    name: "FinanceCalc",
    badge: "Web App",
    tagline: "SIP & Loan EMI Calculator",
    description:
      "Built to bring common money calculations together. Uses Chart.js and Next.js to visualize SIP compounding returns and loan EMI payments clearly.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    demo: "https://financecalc0.vercel.app",
    source: "https://github.com/Arnav20007/financecalc",
    color: "#059669",
  },
  {
    id: "moodmate",
    name: "MoodMate",
    badge: "Hackathon Project",
    tagline: "Journaling App with API Reflections",
    description:
      "A hackathon project exploring Python and Flask. Users can jot down daily journal entries and get brief reflective prompts via an API.",
    stack: ["Next.js", "Python", "Flask", "OpenAI API"],
    source: "https://github.com/Arnav20007/moodmate",
    color: "#E11D48",
  },
  {
    id: "ascend",
    name: "ASCEND",
    badge: "Side Project",
    tagline: "Task Tracker with XP Progression",
    description:
      "A habit and task tracker that adds small RPG-style XP and levels to daily developer routines to make daily progress more motivating.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    source: "https://github.com/Arnav20007/ascend",
    color: "#D97706",
  },
  {
    id: "dsa",
    name: "C++ DSA Practice",
    badge: "Problem Solving",
    tagline: "Data Structures & Algorithms Repository",
    description:
      "Where I practice coding every day in C++. Covers trees, graphs, dynamic programming, and common interview problem patterns.",
    stack: ["C++17", "STL", "Algorithms", "Data Structures"],
    source: "https://github.com/Arnav20007/cpp-practice",
    color: "#4F46E5",
  },
];

/* ── Hero Desk Illustration ─────────────────────────────────────── */
function HeroIllustration() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 mb-0 select-none">
      <div className="relative rounded-3xl border border-[#E6ECF8] bg-gradient-to-b from-[#F9FAFC] to-white p-6 sm:p-10 shadow-xl overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Clean Monitor Mockup */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">
                  arnav-singh · ~/projects
                </span>
              </div>
              <span className="font-mono text-[10px] text-purple-300 font-semibold">
                VS Code + Browser
              </span>
            </div>

            {/* Split Screen: Code Editor & Web Tool */}
            <div className="grid grid-cols-1 md:grid-cols-2 text-left bg-slate-950 min-h-[200px]">
              {/* Left: Clean C++ snippet */}
              <div className="p-4 border-r border-slate-800/80 font-mono text-[11px] leading-relaxed text-slate-300">
                <div className="text-slate-500 mb-2">// TreeNode.cpp · Practice</div>
                <div><span className="text-blue-400">struct</span> <span className="text-yellow-300">TreeNode</span> &#123;</div>
                <div className="pl-3 text-slate-400">int val;</div>
                <div className="pl-3 text-slate-400">TreeNode *left, *right;</div>
                <div className="pl-3 text-slate-400">TreeNode(int x) : val(x), left(nullptr), right(nullptr) &#123;&#125;</div>
                <div>&#125;;</div>
                <div className="mt-3 text-slate-500">// Status</div>
                <div className="text-purple-300">B.Tech CSE · BBDU Lucknow</div>
              </div>

              {/* Right: ToolForge ATS Project Card */}
              <div className="p-4 bg-slate-900/60 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#6E07F3]/20 text-[#C4B5FD] font-mono text-[10px] font-bold mb-2">
                    FEATURED PROJECT
                  </div>
                  <h4 className="font-display font-bold text-white text-sm mb-1">
                    ToolForge ATS
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Resume keyword matcher that runs locally in your browser.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400">
                    ● Deployed on Vercel
                  </span>
                  <a
                    href="https://toolforge-ats.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A78BFA] hover:text-white transition-colors"
                  >
                    Open Tool <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stand */}
          <div className="w-16 h-3 bg-slate-400 mx-auto rounded-b-md shadow-sm" />
          <div className="w-32 h-1.5 bg-slate-300 mx-auto rounded-full shadow-md" />

          {/* Simple badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6ECF8] text-xs font-mono font-medium text-[#141C3A] shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#6E07F3]" /> C++ (Trees, Graphs, DP)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6ECF8] text-xs font-mono font-medium text-[#141C3A] shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#6E07F3]" /> React &amp; Next.js
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6ECF8] text-xs font-mono font-medium text-[#141C3A] shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#6E07F3]" /> Looking for Internships
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

      {/* ── 1. HERO SECTION (Simple, Personal & Grounded) ── */}
      <section className="pt-16 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#141C3A] tracking-tight leading-[1.15] mb-6">
          I’m Arnav, a CSE student who likes <span className="text-[#6E07F3]">building useful things.</span>
        </h1>

        <p className="text-lg sm:text-2xl text-[#5A6275] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          5th-semester B.Tech student at BBDU, Lucknow. I practise DSA in C++ and build web projects with React, Next.js, and Python.
        </p>

        {/* Action Buttons right in Hero */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-[#6E07F3] text-white font-bold text-sm hover:bg-[#5600c7] transition-all shadow-md shadow-purple-500/20"
          >
            View Projects
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border-2 border-[#E6ECF8] bg-white text-[#141C3A] font-bold text-sm hover:border-[#6E07F3] hover:text-[#6E07F3] transition-all"
          >
            Download Resume
          </a>
          {email && (
            <a
              href={`mailto:${email}`}
              className="px-7 py-3 rounded-full bg-slate-100 text-[#141C3A] font-bold text-sm hover:bg-slate-200 transition-all"
            >
              Contact Me
            </a>
          )}
        </div>

        {/* Friendly Student Avatar with Academic Pill */}
        <div className="flex flex-col items-center justify-center gap-3 mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6E07F3] to-[#8B5CF6] p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl">
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

      {/* ── 2. INTRO SECTION (Honest student story) ── */}
      <section className="bg-[#6E07F3] text-white pt-24 pb-44 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-5">
            Hi, I’m Arnav. Nice to meet you.
          </h2>
          <p className="text-base sm:text-lg text-purple-100 font-normal leading-relaxed">
            I’m a 5th-semester Computer Science student at Babu Banarasi Das University, Lucknow (8.0 CGPA). I spend most of my time practicing problem-solving in C++ and building tools I actually use—like ToolForge ATS for resume keyword checking and PDFlex for client-side PDF handling. I’m actively looking for a software engineering internship where I can learn from experienced engineers and contribute real code.
          </p>
        </div>
      </section>

      {/* ── 3. OVERLAPPING 3-COLUMN SKILLS BOX (Honest Categories: No Percent Bars!) ── */}
      <section className="px-6 -mt-32 relative z-10 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#E6ECF8] shadow-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6ECF8] text-center">
          
          {/* Column 1: Comfortable with */}
          <div className="p-8 sm:p-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#6E07F3] flex items-center justify-center mb-5">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-[#141C3A] mb-2">
              Comfortable With
            </h3>
            <p className="text-sm text-[#5A6275] leading-relaxed mb-6">
              Core technologies and languages I work with regularly for coursework and problem-solving.
            </p>

            <h4 className="font-bold text-xs text-[#6E07F3] uppercase tracking-wider mb-3">
              Languages &amp; Core:
            </h4>
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {["C++", "DSA", "React", "JavaScript", "HTML & CSS", "Git"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-purple-50 text-[#6E07F3] font-mono text-xs font-semibold border border-purple-100">
                  {t}
                </span>
              ))}
            </div>

            <h4 className="font-bold text-xs text-[#6E07F3] uppercase tracking-wider mb-2">
              Foundations:
            </h4>
            <ul className="text-sm text-[#5A6275] space-y-1 font-medium">
              <li>Object-Oriented Programming (OOP)</li>
              <li>Data Structures &amp; Algorithms</li>
              <li>Operating Systems concepts</li>
            </ul>
          </div>

          {/* Column 2: Used in projects */}
          <div className="p-8 sm:p-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#6E07F3] flex items-center justify-center mb-5">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-[#141C3A] mb-2">
              Used In Projects
            </h3>
            <p className="text-sm text-[#5A6275] leading-relaxed mb-6">
              Tools and libraries I’ve applied while building real working web utilities and side projects.
            </p>

            <h4 className="font-bold text-xs text-[#6E07F3] uppercase tracking-wider mb-3">
              Frameworks &amp; Tools:
            </h4>
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {["Next.js", "TypeScript", "Python (Flask)", "Tailwind CSS", "PDF.js", "Web Workers", "Chart.js"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-800 font-mono text-xs font-semibold border border-slate-200">
                  {t}
                </span>
              ))}
            </div>

            <h4 className="font-bold text-xs text-[#6E07F3] uppercase tracking-wider mb-2">
              Databases &amp; Deploy:
            </h4>
            <ul className="text-sm text-[#5A6275] space-y-1 font-medium">
              <li>PostgreSQL &amp; SQLite</li>
              <li>Prisma ORM</li>
              <li>Vercel deployments</li>
            </ul>
          </div>

          {/* Column 3: Currently learning */}
          <div className="p-8 sm:p-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#6E07F3] flex items-center justify-center mb-5">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-[#141C3A] mb-2">
              Currently Learning
            </h3>
            <p className="text-sm text-[#5A6275] leading-relaxed mb-6">
              Topics and skills I am actively studying and practicing right now.
            </p>

            <h4 className="font-bold text-xs text-[#6E07F3] uppercase tracking-wider mb-3">
              DSA Focus:
            </h4>
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {["Graph Algorithms", "Dynamic Programming", "Tree Traversals", "Binary Search"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-xs font-semibold border border-emerald-100">
                  {t}
                </span>
              ))}
            </div>

            <h4 className="font-bold text-xs text-[#6E07F3] uppercase tracking-wider mb-2">
              Systems &amp; Architecture:
            </h4>
            <ul className="text-sm text-[#5A6275] space-y-1 font-medium">
              <li>System design basics</li>
              <li>DBMS indexing &amp; normalization</li>
              <li>Clean REST API patterns</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── 4. MY RECENT WORK ── */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#141C3A] tracking-tight mb-3">
          Projects I&apos;ve Built
        </h2>
        <p className="text-base text-[#5A6275] max-w-xl mx-auto mb-14">
          A few tools and apps I’ve put together to learn new concepts and solve everyday problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-[#E6ECF8] bg-white p-7 text-left shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
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
                    <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Demo
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-2xl text-[#141C3A] mb-1 group-hover:text-[#6E07F3] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-slate-500 mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#5A6275] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs font-medium"
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
                    Visit App <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. GOAL-ALIGNED CALLOUT BOX (Looking for Internship) ── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="bg-[#141C3A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              ● AVAILABLE FOR INTERNSHIPS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Looking for a software engineering internship.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I’m available for software engineering internship opportunities. If you have an opening, or want to review my code and problem-solving, I’d love to connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {email ? (
              <a
                href={`mailto:${email}?subject=Software Engineering Internship`}
                className="px-8 py-3.5 rounded-full bg-[#5BE9B9] hover:bg-[#48d8a7] text-[#141C3A] font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                Contact Me
              </a>
            ) : (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#5BE9B9] hover:bg-[#48d8a7] text-[#141C3A] font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── 6. FOOTER ── */}
      <footer className="bg-[#6E07F3] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <Link href="/" className="w-12 h-12 rounded-2xl bg-white text-[#6E07F3] flex items-center justify-center font-black text-xl shadow-lg hover:scale-105 transition-transform">
            AS
          </Link>

          <p className="text-lg sm:text-xl font-light text-purple-100 max-w-md">
            Learning, building, and practicing every day.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            {linkedinProfile && (
              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="w-11 h-11 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>

          <div className="text-xs text-purple-200 pt-6 border-t border-purple-400/30 w-full flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Arnav Singh © 2026</span>
            <span>B.Tech CSE · BBDU Lucknow (8.0 CGPA)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
