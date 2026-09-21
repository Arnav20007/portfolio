"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Briefcase,
  Download,
  FileText,
  CheckCircle2,
  Copy,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  ShieldCheck,
  Cpu,
  BookOpen,
  Check,
  Calendar,
} from "lucide-react";
import { personal, projects, experience } from "@/lib/data";

/* ─── GitHub icon ─── */
function GithubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ─── Abstract system-architecture visual anchor ─── */
function SystemAnchor() {
  return (
    <div
      className="relative w-full flex items-center justify-center select-none pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[340px] sm:max-w-[360px]"
      >
        {/* Background micro grid points */}
        {Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 7 }, (_, c) => (
            <circle
              key={`g${r}-${c}`}
              cx={24 + c * 52}
              cy={20 + r * 68}
              r={1}
              fill="#ffffff"
              fillOpacity={0.12}
            />
          ))
        )}

        {/* Technical framing lines */}
        <line x1="16" y1="12" x2="344" y2="12" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="0.75" />
        <line x1="16" y1="308" x2="344" y2="308" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="0.75" />
        <line x1="16" y1="12" x2="16" y2="308" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="0.75" />
        <line x1="344" y1="12" x2="344" y2="308" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="0.75" />

        {/* Corner alignment crosses */}
        <path d="M12 12 H20 M16 8 V16" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="0.75" />
        <path d="M340 12 H348 M344 8 V16" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="0.75" />
        <path d="M12 308 H20 M16 304 V312" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="0.75" />
        <path d="M340 308 H348 M344 304 V312" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="0.75" />

        {/* LAYER 1: CLIENT / INTERFACES */}
        <rect x="28" y="26" width="138" height="58" rx="6"
          stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.8"
          fill="#161619" fillOpacity="0.7" />
        <text x="40" y="44" fontSize="7" fontFamily="monospace"
          fill="#ededef" fillOpacity="0.7" letterSpacing="0.14em">CLIENT / UI</text>
        <circle cx="152" cy="41" r="2" fill="#22c55e" fillOpacity="0.7" />
        <rect x="40" y="52" width="46" height="4" rx="2" fill="#ffffff" fillOpacity="0.18" />
        <rect x="40" y="60" width="76" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
        <rect x="40" y="67" width="58" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />

        {/* LAYER 1: AI / INFERENCE */}
        <rect x="194" y="26" width="138" height="58" rx="6"
          stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.8"
          fill="#161619" fillOpacity="0.7" />
        <text x="206" y="44" fontSize="7" fontFamily="monospace"
          fill="#ededef" fillOpacity="0.7" letterSpacing="0.14em">AI / INFERENCE</text>
        <circle cx="318" cy="41" r="2" fill="#ffffff" fillOpacity="0.4" />
        <rect x="206" y="52" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.18" />
        <rect x="206" y="60" width="88" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.1" />
        <rect x="206" y="67" width="44" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.08" />

        {/* BUS CONNECTORS */}
        <line x1="97" y1="84" x2="97" y2="124" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="97" cy="124" r="2" fill="#ffffff" fillOpacity="0.25" />
        <line x1="263" y1="84" x2="263" y2="124" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="263" cy="124" r="2" fill="#ffffff" fillOpacity="0.25" />
        <line x1="97" y1="124" x2="263" y2="124" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.75" />

        {/* LAYER 2: CORE SERVICES / API */}
        <rect x="28" y="132" width="304" height="74" rx="6"
          stroke="#ffffff" strokeOpacity="0.22" strokeWidth="0.8"
          fill="#141417" fillOpacity="0.7" />
        <text x="42" y="151" fontSize="7" fontFamily="monospace"
          fill="#ededef" fillOpacity="0.7" letterSpacing="0.14em">CORE SERVICES &amp; PIPELINES</text>

        {/* Service chip 1: Edge Router */}
        <rect x="42" y="160" width="84" height="34" rx="4"
          stroke="#ffffff" strokeOpacity="0.12" strokeWidth="0.75" fill="#1b1b1f" />
        <text x="50" y="174" fontSize="6.5" fontFamily="monospace" fill="#a1a1aa">Edge Router</text>
        <rect x="50" y="180" width="48" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

        {/* Service chip 2: LLM Engine */}
        <rect x="136" y="160" width="88" height="34" rx="4"
          stroke="#ffffff" strokeOpacity="0.12" strokeWidth="0.75" fill="#1b1b1f" />
        <text x="144" y="174" fontSize="6.5" fontFamily="monospace" fill="#a1a1aa">LLM Engine</text>
        <rect x="144" y="180" width="54" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

        {/* Service chip 3: Task Queue */}
        <rect x="234" y="160" width="86" height="34" rx="4"
          stroke="#ffffff" strokeOpacity="0.12" strokeWidth="0.75" fill="#1b1b1f" />
        <text x="242" y="174" fontSize="6.5" fontFamily="monospace" fill="#a1a1aa">Async Queue</text>
        <rect x="242" y="180" width="46" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.12" />

        {/* CONNECTOR TO DATA */}
        <line x1="180" y1="206" x2="180" y2="232" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="180" cy="232" r="2" fill="#ffffff" fillOpacity="0.25" />

        {/* LAYER 3: PERSISTENCE & VECTOR */}
        <rect x="28" y="240" width="304" height="54" rx="6"
          stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.8"
          fill="#161619" fillOpacity="0.7" />
        <text x="42" y="258" fontSize="7" fontFamily="monospace"
          fill="#ededef" fillOpacity="0.7" letterSpacing="0.14em">STORAGE · EMBEDDINGS · CACHE</text>
        <rect x="42" y="267" width="64" height="3.5" rx="1.75" fill="#ffffff" fillOpacity="0.16" />
        <rect x="114" y="267" width="80" height="3.5" rx="1.75" fill="#ffffff" fillOpacity="0.12" />
        <rect x="202" y="267" width="60" height="3.5" rx="1.75" fill="#ffffff" fillOpacity="0.1" />
        <rect x="42" y="276" width="92" height="3.5" rx="1.75" fill="#ffffff" fillOpacity="0.08" />
        <rect x="142" y="276" width="56" height="3.5" rx="1.75" fill="#ffffff" fillOpacity="0.08" />

        {/* Technical annotation metadata */}
        <text x="328" y="303" fontSize="6" fontFamily="monospace"
          fill="#ffffff" fillOpacity="0.3" textAnchor="end">SYS.ARCH // IND</text>
      </svg>
    </div>
  );
}

/* ─── Truthful Technical Case Study Data ─── */
interface CaseStudyData {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  architecture: string;
  challenge: string;
  alternatives: { name: string; whyRejected: string }[];
  decision: string;
  metrics: string[];
  testingFrameworks: string[];
}

const caseStudies: Record<string, CaseStudyData> = {
  moodmate: {
    id: "moodmate",
    name: "MoodMate",
    tagline: "Hackathon AI Mental Wellness Companion",
    overview:
      "An AI-assisted mental wellness project built for a hackathon, combining journaling, sentiment analysis, mood tracking, and conversational experiences with an India-focused approach.",
    architecture:
      "Next.js Frontend ➔ Flask API Proxy ➔ OpenAI API Interactions ➔ Client-Side Reflection Dashboard",
    challenge:
      "Connecting conversational AI prompts to journal reflections while structuring user reflections cleanly without exposing API credentials on the client.",
    alternatives: [
      {
        name: "Direct Client-Side API Keys",
        whyRejected: "Exposing OpenAI API keys inside client code is insecure and vulnerable.",
      },
      {
        name: "Static Rule-Based Prompts",
        whyRejected: "Lacks adaptive empathy and unable to analyze journal mood patterns.",
      },
    ],
    decision:
      "Built a lightweight Flask backend proxy that securely communicates with the OpenAI API, returning structured prompts and sentiment reflections back to the Next.js frontend.",
    metrics: [
      "Built and presented during hackathon demo",
      "Interactive sentiment reflection flow",
      "Clean client-side state and journal storage",
    ],
    testingFrameworks: [
      "Manual API testing & endpoint validation",
      "React component testing with mock inputs",
      "Git version control with clear commit history",
    ],
  },
  pdflex: {
    id: "pdflex",
    name: "PDFlex",
    tagline: "Client-Side In-Browser PDF Utility",
    overview:
      "A browser-based PDF utility focused on common operations such as merging, splitting, compression, conversion, and other PDF workflows while keeping file processing on the client where supported.",
    architecture:
      "Browser UI (React) ➔ Web Worker Pool ➔ PDF.js & pdf-lib (Local Processing) ➔ Direct In-Browser Download",
    challenge:
      "Performing file operations like page merging and splitting directly in the browser without UI freezes.",
    alternatives: [
      {
        name: "Server-Side Upload & Process",
        whyRejected: "Uploading files requires server infrastructure and transfers user documents unnecessarily.",
      },
      {
        name: "Single-Threaded Main Thread Parsing",
        whyRejected: "Can cause UI stutter on larger multi-page documents.",
      },
    ],
    decision:
      "Utilized Web Workers to offload PDF parsing and manipulation using PDF.js and pdf-lib, keeping operations responsive and localized to the user's browser.",
    metrics: [
      "100% in-browser processing without file uploads",
      "Zero server hosting requirements for file processing",
      "Instant client-side download generation",
    ],
    testingFrameworks: [
      "Local testing with sample multi-page PDFs",
      "Browser console memory verification",
      "Strict TypeScript checks for component props",
    ],
  },
  financecalc: {
    id: "financecalc",
    name: "FinanceCalc",
    tagline: "Interactive Personal Finance Planning Utility",
    overview:
      "A web-based financial calculator covering common calculations such as SIP, EMI, and other personal-finance planning utilities.",
    architecture:
      "User Parameter Sliders ➔ Mathematical Calculation Functions (TypeScript) ➔ Chart.js Visualization ➔ Instant UI Updates",
    challenge:
      "Structuring financial formulas accurately and updating calculation charts immediately as users adjust inputs.",
    alternatives: [
      {
        name: "Static Non-Interactive Tables",
        whyRejected: "Hard for users to visualize the impact of interest rates and tenure changes.",
      },
      {
        name: "Server-Side Calculation Endpoints",
        whyRejected: "Adds unnecessary network roundtrips for straightforward mathematical formulas.",
      },
    ],
    decision:
      "Implemented pure TypeScript calculation functions on the client side, allowing dynamic recalculation and responsive chart updates with zero network delay.",
    metrics: [
      "Instant client-side formula evaluation",
      "Clean visual breakdown of principal vs. interest",
      "100% client-side execution",
    ],
    testingFrameworks: [
      "Unit formula testing with manual verification against standard financial formulas",
      "Cross-browser testing on mobile and desktop",
      "TypeScript type checking for calculation inputs",
    ],
  },
  ascend: {
    id: "ascend",
    name: "ASCEND",
    tagline: "Gamified Task Progression System",
    overview:
      "A gamified productivity system that combines task management with RPG-style progression, helping users turn daily tasks into a structured progression system.",
    architecture:
      "Next.js App Router ➔ Zustand Client State ➔ Prisma ORM ➔ PostgreSQL Database",
    challenge:
      "Designing an engaging progression mechanic where completed tasks reward user experience points without overly complex workflows.",
    alternatives: [
      {
        name: "Simple Unstyled To-Do List",
        whyRejected: "Standard to-do lists can feel repetitive and lack motivating feedback loops.",
      },
      {
        name: "Overly Complex RPG Mechanics",
        whyRejected: "Too many mechanics distract users from actually getting tasks done.",
      },
    ],
    decision:
      "Balanced gamification with task utility: focused on clean daily quest lists, clear XP reward visual feedback, and reliable task storage using Prisma and PostgreSQL.",
    metrics: [
      "Working RPG-inspired task management loop",
      "Level progression and quest completion feedback",
      "Structured relational schema for task tracking",
    ],
    testingFrameworks: [
      "Database schema validation with Prisma",
      "Component testing for task status transitions",
      "Git branch workflow for feature additions",
    ],
  },
};

/* ─── Truthful Paths Data ─── */
const paths = [
  {
    num: "01",
    title: "A Friend",
    tag: "Personal · Stories · Vibe",
    description:
      "Get to know my journey as a student, curiosity projects, reading list, and life outside coursework.",
    href: "/friend",
    action: "Explore stories & world",
    isPrimary: false,
  },
  {
    num: "02",
    title: "HR / Recruiter",
    tag: "Professional · High Signal",
    description:
      "Quick overview of my projects, technical skills, education, and resume.",
    href: "/recruiter",
    action: "View recruiter brief",
    isPrimary: true,
  },
  {
    num: "03",
    title: "Collaborator",
    tag: "Projects · Building",
    description:
      "Explore projects, technical interests, and opportunities to build together.",
    href: "/collaborate",
    action: "Discuss a project",
    isPrimary: false,
  },
];

/* ─── Truthful Technical Skills Breakdown ─── */
const technicalHighlights = [
  {
    category: "Core & Problem Solving",
    items: "C++, Data Structures & Algorithms, Problem Solving, Object-Oriented Programming",
  },
  {
    category: "Web Development",
    items: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS",
  },
  {
    category: "Backend & Systems",
    items: "Python, Flask, Node.js, REST APIs",
  },
  {
    category: "Databases & Tools",
    items: "SQL, SQLite, PostgreSQL, Git, GitHub",
  },
];

/* ─── Truthful Student Highlights ─── */
const impactMetrics = [
  { value: "5th", label: "Semester", detail: "B.Tech CSE" },
  { value: "8.0 / 10", label: "CGPA", detail: "Computer Science Engineering" },
  { value: "DSA", label: "Primary Focus", detail: "C++ problem solving" },
  { value: "Projects", label: "Hands-on Building", detail: "Web · AI · Productivity" },
];

/* ─── Deep Technical Case Study Modal Component ─── */
function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudyData | null;
  onClose: () => void;
}) {
  if (!study) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.22 }}
          className="relative w-full max-w-3xl rounded-2xl border border-white/[0.12] bg-[#111114] text-[#ededef] shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#16161a] px-6 py-4">
            <div className="flex items-center gap-2.5">
              <Cpu className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                Project Overview — {study.name}
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-[#71717a] hover:bg-white/[0.08] hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-xs sm:text-sm">
            <div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold mb-2 inline-block">
                Project Architecture
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white">{study.name}: {study.tagline}</h2>
              <p className="text-[#a1a1aa] mt-2 leading-relaxed">{study.overview}</p>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-4 font-mono text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Implementation Flow:
              </span>
              <p className="text-[#d4d4d8] leading-relaxed break-words">{study.architecture}</p>
            </div>

            {/* The Engineering Challenge */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Problem &amp; Design Challenge
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                {study.challenge}
              </p>
            </div>

            {/* Alternatives Evaluated */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Approaches Considered
              </h3>
              <div className="space-y-2">
                {study.alternatives.map((alt, idx) => (
                  <div key={idx} className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5">
                    <span className="font-semibold text-[#f4f4f5] block text-xs">{alt.name}</span>
                    <span className="text-xs text-[#71717a] font-light mt-0.5 block leading-relaxed">
                      <strong className="text-red-400/90 font-mono text-[11px]">Trade-off / Limitation:</strong> {alt.whyRejected}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chosen Decision & Rationale */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Chosen Implementation
              </h3>
              <p className="text-[#d4d4d8] leading-relaxed bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl">
                {study.decision}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Key Features &amp; Outcomes
              </h3>
              <ul className="space-y-1.5 pl-1">
                {study.metrics.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testing & Verification */}
            <div className="border-t border-white/[0.08] pt-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Development &amp; Testing Practices
              </h3>
              <ul className="space-y-1 pl-1">
                {study.testingFrameworks.map((tf, idx) => (
                  <li key={idx} className="font-mono text-[11px] text-[#71717a] flex items-center gap-2">
                    <span className="text-emerald-400">▹</span> {tf}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#16161a] px-6 py-4">
            <span className="font-mono text-[11px] text-[#71717a]">
              Student Project Overview
            </span>
            <button
              onClick={onClose}
              className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-[#0c0c0e] hover:bg-[#e4e4e7] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ─── Truthful Student Quick Resume Modal Component ─── */
function ResumeQuickModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl rounded-2xl border border-white/[0.12] bg-[#111114] text-[#ededef] shadow-2xl overflow-hidden my-8"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#16161a] px-6 py-4">
            <div className="flex items-center gap-2.5">
              <FileText className="h-4 w-4 text-emerald-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                Resume Quick View — {personal.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={personal.resume}
                download="Arnav_Singh_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <Download className="h-3 w-3" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                className="rounded-full p-1 text-[#71717a] hover:bg-white/[0.08] hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Modal Content / Clean Printable Resume Preview */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-xs sm:text-sm">
            {/* Top Identity */}
            <div className="border-b border-white/[0.08] pb-5">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-1">{personal.name}</h2>
              <p className="text-[#a1a1aa] font-medium mb-3">
                B.Tech CSE Student (5th Semester) · Focused on C++, DSA &amp; Web Projects · {personal.location}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#71717a]">
                <span className="flex items-center gap-1 text-[#d4d4d8]">
                  <Mail className="h-3 w-3 text-emerald-400" /> {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-white transition-colors underline underline-offset-2 cursor-pointer"
                >
                  {copiedEmail ? "✓ Copied" : "Copy email"}
                </button>
                <span>·</span>
                <a
                  href={`https://linkedin.com/in/${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="h-2.5 w-2.5" />
                </a>
                <span>·</span>
                <a
                  href={`https://github.com/${personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2.5">
                Education
              </h3>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-white">B.Tech in Computer Science and Engineering</span>
                <span className="font-mono text-xs text-[#71717a]">2023 – Present (5th Semester)</span>
              </div>
              <p className="text-[#a1a1aa] text-xs leading-relaxed">
                XYZ Institute of Technology · <strong className="text-white">8.0 / 10 CGPA</strong>
              </p>
              <p className="text-[#71717a] text-[11px] mt-1 font-mono">
                Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Operating Systems, DBMS, Computer Networks
              </p>
            </div>

            {/* Learning & Building Experience */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                Learning &amp; Project Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-white">B.Tech CSE — Student</span>
                    <span className="font-mono text-xs text-[#71717a]">2023 – Present</span>
                  </div>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed">
                    Building software projects alongside coursework while developing problem-solving skills through C++ and DSA practice.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-white">Independent Projects</span>
                    <span className="font-mono text-xs text-[#71717a]">2025 – Present</span>
                  </div>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed">
                    Designing and building independent software projects to practice frontend development, backend systems, AI integrations, and product development.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-white">Personal Development</span>
                    <span className="font-mono text-xs text-[#71717a]">Ongoing</span>
                  </div>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed">
                    Actively improving programming fundamentals, DSA, software engineering, and project-building skills through consistent hands-on practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">MoodMate</span>
                    <span className="font-mono text-[10px] text-emerald-400">Hackathon Project</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[11px] leading-relaxed">
                    AI-assisted mental wellness hackathon project combining journaling, sentiment analysis, and conversational reflections.
                  </p>
                </div>
                <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">PDFlex</span>
                    <span className="font-mono text-[10px] text-emerald-400">Client-Side Processing</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[11px] leading-relaxed">
                    Browser-based PDF utility for merging, splitting, and converting PDFs on the client using Web Workers.
                  </p>
                </div>
                <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">FinanceCalc</span>
                    <span className="font-mono text-[10px] text-blue-400">Financial Tool</span>
                  </div>
                  <p className="text-[#a1a1aa] text-[11px] leading-relaxed">
                    Web-based financial calculator for SIP, EMI, and personal finance planning utilities built with Next.js &amp; TypeScript.
                  </p>
                </div>
                <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-3.5">
                  <span className="font-bold text-white">ASCEND</span>
                  <span className="font-mono text-[10px] text-purple-400 block float-right">Gamified Productivity</span>
                  <p className="text-[#a1a1aa] text-[11px] leading-relaxed mt-1">
                    Gamified productivity system combining task management with RPG-style progression mechanics.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                Technical Skills
              </h3>
              <div className="text-xs space-y-1 font-mono text-[#a1a1aa]">
                <p><span className="text-white font-semibold">Core:</span> C++, Data Structures &amp; Algorithms, Problem Solving</p>
                <p><span className="text-white font-semibold">Web Development:</span> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
                <p><span className="text-white font-semibold">Backend:</span> Python, Flask, Node.js, REST APIs</p>
                <p><span className="text-white font-semibold">Databases &amp; Tools:</span> SQL, SQLite, PostgreSQL, Git, GitHub</p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#16161a] px-6 py-4">
            <Link
              href="/recruiter"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Open Recruiter Overview <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <div className="flex items-center gap-2.5">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#a1a1aa] hover:text-white transition-colors"
              >
                Open in new tab <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={personal.resume}
                download="Arnav_Singh_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#0c0c0e] hover:bg-[#e4e4e7] transition-colors"
              >
                <Download className="h-3 w-3" /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ─── Main Landing Page ─── */
export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [activeTradeoff, setActiveTradeoff] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleTradeoff = (id: string) => {
    setActiveTradeoff((prev) => (prev === id ? null : id));
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#ededef] font-sans selection:bg-[#27272a] selection:text-white">
      {/* Resume Quick Preview Modal */}
      <ResumeQuickModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Technical Case Study Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.07] bg-[#0c0c0e]/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="text-sm font-semibold tracking-tight text-[#ededef] hover:text-white transition-colors">
            {personal.name}
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <a href="#experience" className="hidden sm:block text-xs font-medium text-[#71717a] hover:text-white transition-colors">Learning</a>
            <a href="#work" className="hidden sm:block text-xs font-medium text-[#71717a] hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hidden sm:block text-xs font-medium text-[#71717a] hover:text-white transition-colors">Skills</a>
            <a href="#paths" className="hidden sm:block text-xs font-medium text-[#71717a] hover:text-white transition-colors">Paths</a>

            {/* Recruiter direct highlight badge */}
            <Link
              href="/recruiter"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
            >
              <Briefcase className="h-3 w-3 text-emerald-400" />
              <span>Recruiter</span>
              <span className="hidden md:inline-block rounded bg-emerald-400/20 px-1 text-[9px] font-mono font-bold text-emerald-300">
                STUDENT BRIEF
              </span>
            </Link>

            {/* Direct Resume View Button */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/[0.08] hover:border-white/25 cursor-pointer"
              title="View single-page resume preview or download PDF"
            >
              <FileText className="h-3 w-3 text-[#8e8e93]" />
              <span>Resume</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* ── HERO ── */}
        <section className="pt-14 pb-14 sm:pt-18 sm:pb-16 lg:pt-20 lg:pb-18 border-b border-white/[0.07]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-center">

            {/* LEFT: Identity & Technical Positioning */}
            <div className="flex flex-col justify-center">
              {/* availability badge */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#71717a]">
                  Available — Open to Software Engineering Internships
                </span>
              </div>

              {/* name */}
              <h1
                className="font-serif-display font-medium tracking-tight text-[#f4f4f5] leading-[0.95] mb-6"
                style={{ fontSize: "clamp(2.75rem, 5.75vw, 5.25rem)" }}
              >
                Arnav Singh
              </h1>

              {/* main headline */}
              <p className="text-xl sm:text-2xl font-medium text-[#f4f4f5] tracking-tight max-w-xl mb-4 leading-snug">
                CSE Student building software, AI tools, and digital products.
              </p>

              {/* statement */}
              <p className="text-base font-light text-[#a1a1aa] leading-relaxed tracking-tight max-w-lg mb-6">
                B.Tech Computer Science Engineering student focused on DSA, software engineering, and building practical projects with modern technologies.
              </p>

              {/* tech identity tags */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {["C++", "DSA", "React", "Next.js", "Python", "TypeScript"].map((label) => (
                  <span
                    key={label}
                    className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#71717a] border border-white/[0.08] bg-white/[0.02] rounded-full px-3 py-1"
                  >
                    {label}
                  </span>
                ))}
                <span className="text-[10px] font-mono text-[#52525b] pl-1">· Based in India · Open to Software Engineering Internships</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#0c0c0e] transition-all duration-200 hover:bg-[#e4e4e7]"
                >
                  View Projects
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>

                {/* Recruiter Button */}
                <Link
                  href="/recruiter"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-500/60 shadow-[0_0_20px_rgba(34,197,94,0.12)]"
                >
                  <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Recruiter Brief</span>
                  <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-300 tracking-normal">
                    5TH SEM CSE
                  </span>
                </Link>

                {/* Quick Resume trigger */}
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#71717a] hover:text-white transition-colors duration-200 py-2 px-2 cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5 text-[#52525b]" />
                  <span>Quick Resume</span>
                </button>
              </div>
            </div>

            {/* RIGHT / MOBILE BOTTOM: Abstract System Anchor */}
            <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0 pt-4 lg:pt-0 border-t border-white/[0.04] lg:border-t-0">
              <SystemAnchor />
            </div>
          </div>
        </section>

        {/* ── METRIC / HIGHLIGHT CARDS (Truthful Student Highlights) ── */}
        <section className="py-10 border-b border-white/[0.07]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col justify-between p-4 rounded-xl border border-white/[0.05] bg-white/[0.015]"
              >
                <div>
                  <div className="font-serif-display text-2xl sm:text-3xl font-medium tracking-tight text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#a1a1aa] mb-1">
                    {metric.label}
                  </div>
                </div>
                <div className="text-[11px] text-[#52525b] font-light leading-snug">
                  {metric.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── §01: EXPERIENCE SECTION (Learning & Building) ── */}
        <section id="experience" className="py-20 sm:py-24 border-b border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#3f3f46] mb-2.5">§01 — Learning &amp; Building</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Projects, learning &amp; technical growth</h2>
            </div>
            <Link
              href="/recruiter#experience"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#52525b] hover:text-[#a1a1aa] transition-colors"
            >
              <span>Recruiter overview</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#111114] p-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#141418]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.05]">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                    <span className="text-[10px] font-mono text-[#71717a]">{exp.company}</span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-white mb-2">{exp.role}</h3>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-[#71717a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── §02: PROJECT SECTION (Projects I've built) ── */}
        <section id="work" className="py-20 sm:py-24 border-b border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#3f3f46] mb-2.5">§02 — Selected Work</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Projects I&apos;ve built</h2>
            </div>
            <Link
              href="/recruiter#projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#52525b] hover:text-[#a1a1aa] transition-colors"
            >
              <span>All projects</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {projects.slice(0, 4).map((project, idx) => {
              const study = caseStudies[project.id];
              const isExpanded = activeTradeoff === project.id;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#111114] p-7 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#141418]"
                >
                  <div>
                    {/* Header line: Category & Truthful Highlight Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#71717a]">
                        {project.category}
                      </span>
                      {project.achievement && (
                        <span className="text-[10px] font-mono text-emerald-400/90 shrink-0 text-right leading-relaxed font-semibold">
                          {project.achievement}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-white mb-2.5">{project.name}</h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed font-light mb-5">{project.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2.5 py-1 text-[10px] font-mono text-[#71717a]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Architecture & Case Study Access */}
                    {study && (
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => toggleTradeoff(project.id)}
                            className="flex-1 flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-left text-xs font-mono text-[#a1a1aa] hover:text-white hover:border-white/[0.18] transition-colors cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                              <span>Implementation &amp; Design Choices</span>
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="h-3.5 w-3.5 text-[#71717a]" />
                            ) : (
                              <ChevronDown className="h-3.5 w-3.5 text-[#71717a]" />
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => setSelectedCaseStudy(study)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-xs font-mono text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors cursor-pointer"
                            title="Open technical overview"
                          >
                            <BookOpen className="h-3.5 w-3.5 text-blue-400" />
                            <span className="hidden sm:inline">Overview</span>
                          </button>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden rounded-lg border border-white/[0.08] bg-[#0c0c0e] p-4 text-xs font-mono space-y-2.5 text-[#a1a1aa]"
                            >
                              <div>
                                <span className="text-white font-semibold block text-[11px] uppercase tracking-wider text-emerald-400 mb-0.5">
                                  Design Challenge:
                                </span>
                                <p className="font-sans text-xs text-[#a1a1aa] leading-relaxed">{study.challenge}</p>
                              </div>
                              <div>
                                <span className="text-white font-semibold block text-[11px] uppercase tracking-wider text-blue-400 mb-0.5">
                                  Alternative Approach:
                                </span>
                                <p className="font-sans text-xs text-[#71717a] leading-relaxed">
                                  {study.alternatives[0]?.name}: {study.alternatives[0]?.whyRejected}
                                </p>
                              </div>
                              <div>
                                <span className="text-white font-semibold block text-[11px] uppercase tracking-wider text-purple-400 mb-0.5">
                                  Chosen Implementation:
                                </span>
                                <p className="font-sans text-xs text-[#d4d4d8] leading-relaxed">{study.decision}</p>
                              </div>
                              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                                <span className="text-[10px] text-emerald-400/90 font-semibold">
                                  Focus: {study.testingFrameworks[0]}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setSelectedCaseStudy(study)}
                                  className="text-[10px] text-blue-400 hover:text-blue-300 font-bold underline underline-offset-2 cursor-pointer"
                                >
                                  Read Details →
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Actions: Source Code & Project Demo */}
                  <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/[0.05]">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#71717a] hover:text-white transition-colors"
                        title="View GitHub repository"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span />
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-white/75 transition-colors"
                      >
                        <span>Project Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ── §03: TECHNICAL FOUNDATION (Technical Skills) ── */}
        <section id="skills" className="py-20 sm:py-24 border-b border-white/[0.07]">
          <div className="mb-12">
            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#3f3f46] mb-2.5">§03 — Technical Skills</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Technologies I&apos;m learning and building with</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mb-8">
            {technicalHighlights.map((tech, idx) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-xl border border-white/[0.07] bg-[#111114] p-6"
              >
                <h3 className="text-sm font-semibold text-white mb-2">{tech.category}</h3>
                <p className="text-sm text-[#71717a] font-mono leading-relaxed">{tech.items}</p>
              </motion.div>
            ))}
          </div>

          {/* Factual Student Engineering Standards */}
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Learning Focus &amp; Engineering Habits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-500/40 pl-3">
                <span className="font-semibold text-white block mb-0.5">DSA in C++</span>
                <span className="text-[#71717a] font-mono text-[11px]">Practicing core data structures, algorithms, and problem-solving patterns.</span>
              </div>
              <div className="border-l-2 border-blue-500/40 pl-3">
                <span className="font-semibold text-white block mb-0.5">Client-Side Processing</span>
                <span className="text-[#71717a] font-mono text-[11px]">Exploring browser capabilities like Web Workers for offline-first utilities.</span>
              </div>
              <div className="border-l-2 border-purple-500/40 pl-3">
                <span className="font-semibold text-white block mb-0.5">Clean Code &amp; Structure</span>
                <span className="text-[#71717a] font-mono text-[11px]">Applying modular component design and organized, readable codebases.</span>
              </div>
              <div className="border-l-2 border-amber-500/40 pl-3">
                <span className="font-semibold text-white block mb-0.5">Version Control</span>
                <span className="text-[#71717a] font-mono text-[11px]">Using Git &amp; GitHub for daily commit tracking and project versioning.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── §04: PERSPECTIVE PATHS (Discovery) ── */}
        <section id="paths" className="py-20 sm:py-24 border-b border-white/[0.07]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#3f3f46] mb-2.5">§04 — Discovery</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Choose your perspective</h2>
            </div>
            <p className="text-sm text-[#71717a] max-w-xs font-light leading-relaxed">
              Explore my work, projects, and technical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {paths.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.09 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#111114] p-7 transition-all duration-300 hover:border-white/[0.18] hover:bg-[#141418]"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.05] mb-5">
                    <span className="font-mono text-[10px] text-[#3f3f46] tracking-widest">{item.num}</span>
                    {item.isPrimary && (
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white mb-1.5">{item.title}</h3>
                  <p className="text-[11px] font-mono text-[#52525b] tracking-wide mb-4">{item.tag}</p>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed font-light">{item.description}</p>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[#71717a] group-hover:text-emerald-400 transition-colors duration-200 pt-5 mt-6 border-t border-white/[0.04]"
                >
                  <span>{item.action}</span>
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── §05: CONTACT ── */}
        <section id="contact" className="py-20 sm:py-24">
          <div className="rounded-2xl border border-white/[0.07] bg-[#111114] p-8 sm:p-12 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#3f3f46] mb-5">§05 — Contact</p>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-medium tracking-tight text-white mb-4">
                Let&apos;s connect.
              </h2>
              <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                Open to software engineering internships, project opportunities, and technical collaborations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#0c0c0e] transition-all hover:bg-[#e4e4e7]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email Arnav</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.03] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#a1a1aa] transition-all hover:border-white/25 hover:text-white cursor-pointer"
              >
                {copiedEmail ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
              </button>
              <Link
                href="/recruiter"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/60"
              >
                <span>Recruiter View</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* footer bar */}
          <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#3f3f46] font-mono">
            <div className="flex items-center gap-6">
              <a href={`https://github.com/${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#71717a] transition-colors">GitHub</a>
              <a href={`https://linkedin.com/in/${personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#71717a] transition-colors">LinkedIn</a>
              <Link href="/terminal" className="hover:text-[#71717a] transition-colors">Terminal</Link>
              <button onClick={() => setIsResumeModalOpen(true)} className="hover:text-[#71717a] transition-colors cursor-pointer">Resume View</button>
            </div>
            <div>&copy; {new Date().getFullYear()} {personal.name} · Built with Next.js &amp; TypeScript</div>
          </div>
        </section>
      </main>
    </div>
  );
}
