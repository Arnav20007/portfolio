"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Download,
  Mail,
  Sun,
  Moon,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import { personal } from "@/lib/data";

/* ── SKILLS TICKER LIST FOR 3D FLIP CALENDAR ────────────────── */
const CAL_SKILLS = [
  { title: "CSE Student", no: "01" },
  { title: "C++ & DSA Builder", no: "02" },
  { title: "Web Developer", no: "03" },
  { title: "Project Builder", no: "04" },
  { title: "API Developer", no: "05" },
];

/* ── 4 HONEST STUDENT BUILDER DOORS ──────────────────────────── */
interface ProjectItem {
  id: string;
  name: string;
  role: string;
  tagline: string;
  desc: string;
  contribution: string[];
  tech: string[];
  demo?: string;
  demoLabel?: string;
  source?: string;
  highlight?: string;
  availability?: string;
}

interface DoorData {
  id: string;
  plate: string;
  plateLines: [string, string];
  badge: string;
  title: string;
  tagline: string;
  color: string;
  accent: string;
  projects: ProjectItem[];
}

const DOORS: DoorData[] = [
  {
    id: "browser-tools",
    plate: "BROWSER TOOLS",
    plateLines: ["BROWSER", "TOOLS"],
    badge: "Door 01 · Browser Utilities",
    title: "Client-Side Tools & Document Engines",
    tagline: "Zero-server file manipulation & private local processing",
    color: "#1E2C48",
    accent: "#3E5785",
    projects: [
      {
        id: "atscheck",
        name: "ATSCheck",
        role: "Built independently",
        tagline: "Resume keyword matching in the browser",
        desc: "Built to solve a real student problem: evaluating resumes against job requirements without paying expensive subscriptions or uploading private PDFs to third-party servers.",
        contribution: [
          "Extracts resume text in the browser with PDF.js and a Web Worker",
          "Compares resume keywords with the job description locally",
          "Shows matched and missing skills to help guide edits",
          "Available at atscheck.tech",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PDF.js", "Web Workers"],
        demo: "https://atscheck.tech/",
        demoLabel: "Open atscheck.tech ↗",
        source: "https://github.com/Arnav20007/ats",
        highlight: "Local document processing",
      },
      {
        id: "pdflex",
        name: "PDFlex",
        role: "Built independently",
        tagline: "Merge and split PDFs in the browser",
        desc: "I built PDFlex to merge and split PDFs locally, without uploading files to a server.",
        contribution: [
          "PDF.js renders document pages for preview in the browser",
          "pdf-lib handles PDF operations in a Web Worker",
          "Processed documents stay on the user's device",
          "Built the interface with React and Tailwind CSS",
        ],
        tech: ["React", "TypeScript", "PDF.js", "pdf-lib", "Web Workers"],
        demo: "https://pd-flex.vercel.app",
        demoLabel: "Open PDFlex ↗",
        source: "https://github.com/Arnav20007/pdflex",
        highlight: "Multi-threaded Web Workers",
      },
    ],
  },
  {
    id: "web-apps",
    plate: "WEB APPS",
    plateLines: ["WEB", "APPS"],
    badge: "Door 02 · Web Applications",
    title: "FinTech Tools & Interactive Systems",
    tagline: "Financial modeling visualizers & modular database systems",
    color: "#412F3D",
    accent: "#7A4E6B",
    projects: [
      {
        id: "financecalc",
        name: "FinanceCalc",
        role: "Built independently",
        tagline: "Compound returns, SIP wealth forecasting & EMI amortization",
        desc: "An interactive FinTech application helping students and young professionals forecast mutual fund compounding returns and visualize loan repayment schedules.",
        contribution: [
          "Calculates estimated SIP growth and monthly EMI payments",
          "Shows repayment details and investment estimates with charts",
          "Built the interface with Next.js, TypeScript, and Tailwind CSS",
          "Available as a live web app",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
        demo: "https://financecalc0.vercel.app",
        demoLabel: "Open FinanceCalc ↗",
        source: "https://github.com/Arnav20007/financecalc",
        highlight: "Interactive FinTech Analytics",
      },
      {
        id: "ascend",
        name: "ASCEND",
        role: "Personal project",
        tagline: "Gamified task progression & XP leveling platform",
        desc: "A productivity application that turns daily engineering to-dos into an engaging progression system with XP points and tier unlocks.",
        contribution: [
          "Full-stack CRUD architecture built with PostgreSQL and Prisma ORM",
          "XP leveling algorithm with streak tracking and achievement triggers",
          "Modular components with responsive dark & stone interface",
          "Designed to make a regular task list feel more like a progression system",
        ],
        tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
        source: "https://github.com/Arnav20007/ascend",
        highlight: "Full-Stack PostgreSQL + Prisma",
      },
    ],
  },
  {
    id: "ai-systems",
    plate: "AI SYSTEMS",
    plateLines: ["AI", "SYSTEMS"],
    badge: "Door 03 · AI & Hackathons",
    title: "AI Microservices & Hackathon Builds",
    tagline: "Python Flask APIs & generative reflection prompts",
    color: "#667B68",
    accent: "#8FA391",
    projects: [
      {
        id: "moodmate",
        name: "MoodMate",
        role: "Hackathon project",
        tagline: "Mental wellness & structured journal reflection assistant",
        desc: "Created during a university hackathon to provide a supportive reflective journal where users can write freely and receive empathetic, structured perspectives.",
        contribution: [
          "Engineered Python Flask REST API connecting Next.js frontend with OpenAI API",
          "Connected the Next.js interface to a Flask API for journal reflections",
          "Added prompts that help users reflect on their journal entries",
          "Built during a university hackathon with a small team",
        ],
        tech: ["Next.js", "Python Flask", "OpenAI API", "REST APIs", "Tailwind CSS"],
        source: "https://github.com/Arnav20007/moodmate",
        highlight: "University Hackathon Build",
        availability: "Demo coming soon",
      },
    ],
  },
  {
    id: "algorithms",
    plate: "C++ / DSA CORE",
    plateLines: ["C++ / DSA", "CORE"],
    badge: "Door 04 · Systems & DSA",
    title: "C++ Algorithmic Core & In-Browser Shell",
    tagline: "Data structures, problem solving & command-line interface",
    color: "#A86438",
    accent: "#CF8855",
    projects: [
      {
        id: "terminal",
        name: "Interactive Web CLI Terminal",
        role: "Personal project",
        tagline: "In-browser Unix/Linux shell environment with dynamic command parsing",
        desc: "An interactive portfolio terminal where visitors can use a small set of commands to explore my projects, skills, and background.",
        contribution: [
          "A small command set for browsing portfolio information",
          "Supports command history with the up and down arrow keys",
          "Built in Next.js with keyboard-friendly controls",
          "Includes help text and clear terminal feedback",
        ],
        tech: ["React", "TypeScript", "Terminal Shell UX", "JetBrains Mono"],
        demo: "/terminal",
        demoLabel: "Launch Interactive Terminal ↗",
        source: "https://github.com/Arnav20007",
        highlight: "In-Browser Shell UX",
      },
      {
        id: "dsa-core",
        name: "C++ DSA Repository & Coursework",
        role: "Coursework & practice",
        tagline: "Algorithmic problem-solving in C++ at BBDU Lucknow",
        desc: "I use this repository to practise core data structures and algorithms in C++ as part of my coursework.",
        contribution: [
          "Binary Trees, BSTs, Graph traversals (BFS/DFS), and Dijkstra's algorithm",
          "Recursion, backtracking, and Dynamic Programming memoization patterns",
          "Strong OOP foundation: Inheritance, Polymorphism, and Memory Management",
          "Maintained 8.0 / 10 CGPA through 5 semesters of B.Tech CSE coursework",
        ],
        tech: ["C++", "STL", "Data Structures", "Algorithms", "OOP"],
        source: "https://github.com/Arnav20007",
        highlight: "Trees, Graphs & Dynamic Programming",
      },
    ],
  },
];

/* ── STORY CHAPTERS FOR ROLLING TIMELINE ─────────────────────── */
interface StoryChapter {
  year: string;
  period: string;
  role: string;
  org: string;
  bullets: string[];
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    year: "2026",
    period: "Oct 2026 — Present",
    role: "Independent Software Builder & Web Utilities",
    org: "atscheck.tech & Client-Side Tools",
    bullets: [
      "Engineered ATSCheck on its dedicated domain (atscheck.tech) with client-side Web Workers, zero server uploads, and local privacy.",
      "Architected PDFlex for multi-threaded in-browser PDF manipulation and memory-efficient page compilation.",
      "Actively seeking software engineering internship opportunities to contribute production code.",
    ],
  },
  {
    year: "2026",
    period: "Jul 2026 — Sep 2026",
    role: "B.Tech Computer Science & Engineering",
    org: "Babu Banarasi Das University, Lucknow · 5th Semester",
    bullets: [
      "Maintained an 8.0 / 10 CGPA through 5 semesters of rigorous undergraduate computer science coursework.",
      "Core curriculum: Operating Systems, Database Management Systems (DBMS), Computer Networks, and OOP.",
      "Hands-on coursework in database indexing, relational schemas, and Unix environment diagnostics.",
    ],
  },
  {
    year: "2025",
    period: "Jan 2025 — Jun 2025",
    role: "Full-Stack Engineer & Hackathons",
    org: "FinanceCalc & University Hackathons",
    bullets: [
      "Built MoodMate backend during a university hackathon using Python Flask REST APIs and prompt engineering.",
      "Engineered FinanceCalc for interactive compounding curves, SIP forecasting, and loan amortization with Chart.js.",
      "Developed modular data layers with Next.js 14, PostgreSQL database, and Prisma ORM.",
    ],
  },
  {
    year: "2024",
    period: "Jan 2024 — Dec 2024",
    role: "C++ Algorithmic Core & Problem Solving",
    org: "Daily Problem Solving & Data Structures",
    bullets: [
      "Practiced algorithmic problem solving covering binary trees, graphs (BFS/DFS), and dynamic programming in C++.",
      "Built strong command over memory pointers, time/space complexity optimization, and the C++ STL.",
      "Developed in-browser Unix CLI shell (/terminal) to showcase command-line interaction and systems thinking.",
    ],
  },
  {
    year: "2022",
    period: "Jul 2022 — Dec 2023",
    role: "Engineering Coursework Inception",
    org: "BBDU Lucknow, Uttar Pradesh",
    bullets: [
      "Began Bachelor of Technology degree in Computer Science and Engineering.",
      "Started core programming foundations in C and C++, focusing on memory layout, functions, and structured problem solving.",
    ],
  },
];

function ProjectPreview({ project }: { project: ProjectItem }) {
  const line = "h-1.5 rounded-full bg-[var(--line)]";
  const chip = "rounded-md border border-[var(--line)] bg-[var(--surface-2)] px-2 py-1 text-[9px] font-mono text-[var(--muted)]";

  let preview: React.ReactNode;

  switch (project.id) {
    case "atscheck":
      preview = (
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
            <div className="mb-3 text-[10px] font-semibold text-[var(--foreground)]">Resume match</div>
            <div className={`${line} w-full`} />
            <div className={`${line} mt-2 w-4/5`} />
            <div className={`${line} mt-2 w-3/5`} />
          </div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
            <div className="mb-2 text-[9px] font-mono text-[var(--muted)]">Matched skills</div>
            <div className="flex flex-wrap gap-1"><span className={chip}>React</span><span className={chip}>SQL</span><span className={chip}>APIs</span></div>
          </div>
        </div>
      );
      break;
    case "pdflex":
      preview = (
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold text-[var(--foreground)]">PDFlex</span>
            <div className="flex gap-1"><span className={chip}>Merge</span><span className={chip}>Split</span></div>
          </div>
          <div className="flex gap-2">
            {["Page 1", "Page 2", "Page 3"].map((page) => <div key={page} className="flex h-12 flex-1 items-end rounded border border-[var(--line)] bg-[var(--surface-2)] p-1.5 text-[8px] font-mono text-[var(--muted)]">{page}</div>)}
          </div>
        </div>
      );
      break;
    case "financecalc":
      preview = (
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
          <div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-semibold text-[var(--foreground)]">FinanceCalc</span><span className={chip}>SIP · EMI</span></div>
          <svg viewBox="0 0 320 72" className="h-14 w-full" aria-hidden="true">
            <path d="M0 60H320M0 38H320M0 16H320" stroke="currentColor" className="text-[var(--line)]" strokeWidth="1" />
            <path d="M4 58C42 54 54 47 82 49S126 41 154 38 203 33 226 23 278 18 316 5" fill="none" stroke="currentColor" className="text-[var(--accent)]" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );
      break;
    case "ascend":
      preview = (
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
          <div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-semibold text-[var(--foreground)]">Today&apos;s tasks</span><span className={chip}>Progress</span></div>
          <div className="space-y-2"><div className="flex items-center gap-2 text-[9px] text-[var(--muted)]"><span className="h-3 w-3 rounded border border-[var(--accent)]" />Plan the day</div><div className="flex items-center gap-2 text-[9px] text-[var(--muted)]"><span className="h-3 w-3 rounded border border-[var(--accent)] bg-[var(--accent)]" />Finish a task</div></div>
        </div>
      );
      break;
    case "moodmate":
      preview = (
        <div className="grid grid-cols-[1fr_1fr] gap-3">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3"><div className="mb-2 text-[10px] font-semibold text-[var(--foreground)]">Daily journal</div><div className={`${line} w-full`} /><div className={`${line} mt-2 w-4/5`} /><div className="mt-3 flex gap-1"><span className="h-2 w-2 rounded-full bg-rose-300"/><span className="h-2 w-2 rounded-full bg-amber-300"/><span className="h-2 w-2 rounded-full bg-emerald-300"/></div></div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3"><div className="mb-2 text-[9px] font-mono text-[var(--muted)]">Reflection prompt</div><div className={`${line} w-full`} /><div className={`${line} mt-2 w-3/4`} /></div>
        </div>
      );
      break;
    case "terminal":
      preview = (
        <div className="rounded-lg border border-[var(--line)] bg-[#1d1b1a] p-3 font-mono text-[9px] text-stone-200">
          <div className="mb-3 flex gap-1"><span className="h-2 w-2 rounded-full bg-rose-400"/><span className="h-2 w-2 rounded-full bg-amber-300"/><span className="h-2 w-2 rounded-full bg-emerald-400"/></div>
          <div><span className="text-emerald-300">arnav@portfolio</span>:~$ help</div><div className="mt-1 text-stone-400">about&nbsp;&nbsp; projects&nbsp;&nbsp; skills&nbsp;&nbsp; contact</div>
        </div>
      );
      break;
    default:
      preview = (
        <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3">
          <div className="mb-3 text-[10px] font-semibold text-[var(--foreground)]">C++ practice</div>
          <div className="grid grid-cols-3 gap-2 text-center text-[8px] font-mono text-[var(--muted)]"><span className="rounded border border-[var(--line)] p-2">Tree</span><span className="rounded border border-[var(--line)] p-2">Graph</span><span className="rounded border border-[var(--line)] p-2">DP</span></div>
          <div className="mt-3 flex items-center justify-center gap-2 text-[8px] text-[var(--accent)]"><span className="rounded-full border border-[var(--line)] px-2 py-1">left</span><span>→</span><span className="rounded-full border border-[var(--line)] px-2 py-1">root</span><span>→</span><span className="rounded-full border border-[var(--line)] px-2 py-1">right</span></div>
        </div>
      );
  }

  return (
    <div className="mb-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-3 sm:p-4" aria-label={`${project.name} illustrative interface preview`} role="img">
      <div className="mb-2 flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-[var(--muted)]">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
        Interface sketch
      </div>
      {preview}
    </div>
  );
}

export default function HomePage() {
  /* ── Dark Mode State ── */
  const [isDark, setIsDark] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const syncMode = (mode: string | null) => {
      const dark = mode === "dark";
      document.documentElement.removeAttribute("data-mode");
      if (dark) document.documentElement.dataset.mode = "dark";
      setIsDark(dark);
    };
    syncMode(document.documentElement.dataset.mode || localStorage.getItem("arnav-mode"));
    const handleModeChange = (event: Event) => {
      syncMode((event as CustomEvent<string>).detail);
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "arnav-mode") syncMode(event.newValue);
    };
    window.addEventListener("arnav-mode-change", handleModeChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("arnav-mode-change", handleModeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.dataset.mode = "dark";
      localStorage.setItem("arnav-mode", "dark");
    } else {
      document.documentElement.removeAttribute("data-mode");
      localStorage.setItem("arnav-mode", "light");
    }
    window.dispatchEvent(new CustomEvent("arnav-mode-change", { detail: next ? "dark" : "light" }));
  };

  /* ── 3D Desk-Calendar Flip Loop ── */
  const [calIndex, setCalIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    let flipTimeout: number | undefined;
    const timer = setInterval(() => {
      setIsFlipping(true);
      flipTimeout = window.setTimeout(() => {
        setCalIndex((prev) => (prev + 1) % CAL_SKILLS.length);
        setIsFlipping(false);
      }, 180);
    }, 2800);
    return () => {
      clearInterval(timer);
      if (flipTimeout) clearTimeout(flipTimeout);
    };
  }, []);

  /* ── Active Door State ── */
  const [activeDoor, setActiveDoor] = useState(0);
  const [hoveredDoor, setHoveredDoor] = useState(-1);
  const [selectedDoor, setSelectedDoor] = useState(-1);

  // Web Audio synthesizer for tactile wooden latch click when opening a door
  const playDoorLatchSound = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Warm wooden acoustic thud
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(340, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.05);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.055);

      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.055);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);

      // Delicate brass latch release click
      const latch = ctx.createOscillator();
      const latchGain = ctx.createGain();
      latch.type = "sine";
      latch.frequency.setValueAtTime(950, ctx.currentTime + 0.008);
      latch.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.035);

      latchGain.gain.setValueAtTime(0.06, ctx.currentTime + 0.008);
      latchGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

      latch.connect(latchGain);
      latchGain.connect(ctx.destination);
      latch.start(ctx.currentTime + 0.008);
      latch.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  /* ── Rolling Story Chapter Index State ── */
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeStoryDotY, setActiveStoryDotY] = useState(0);
  const storyTimelineRef = useRef<HTMLDivElement>(null);
  const storyChapterRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      const date = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(now);
      setLocalTime(`${time} · ${date}`);
    };

    updateTime();
    const timer = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeline = storyTimelineRef.current;
    if (!timeline) return;

    const chapters = Array.from(timeline.querySelectorAll<HTMLElement>("[data-story-index]"));
    const observer = new IntersectionObserver((entries) => {
      const visibleChapters = entries.filter((entry) => entry.isIntersecting);
      if (!visibleChapters.length) return;

      const focusLine = window.innerHeight * 0.42;
      const currentChapter = visibleChapters.reduce((closest, entry) =>
        Math.abs(entry.boundingClientRect.top - focusLine) < Math.abs(closest.boundingClientRect.top - focusLine)
          ? entry
          : closest,
      );

      setActiveStoryIdx(Number((currentChapter.target as HTMLElement).dataset.storyIndex));
    }, { rootMargin: "-30% 0px -45% 0px", threshold: 0 });

    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeline = storyTimelineRef.current;
    const chapter = storyChapterRefs.current[activeStoryIdx];
    if (!timeline || !chapter) return;

    const updateDotPosition = () => {
      setActiveStoryDotY(
        chapter.getBoundingClientRect().top - timeline.getBoundingClientRect().top + timeline.scrollTop + 6,
      );
    };

    updateDotPosition();
    window.addEventListener("resize", updateDotPosition);
    return () => window.removeEventListener("resize", updateDotPosition);
  }, [activeStoryIdx]);

  return (
    <div className="min-h-screen bg-transparent text-[var(--foreground)] selection:bg-[#C4B0B0] selection:text-[#1A1818] font-sans antialiased transition-colors duration-400">
      
      {/* ═══════════════════════════════════════════════════════════════
          1. HEADER / NAVIGATION
      ═══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
        <div className="w-full border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 pr-12 sm:px-6 sm:pr-6 lg:px-8">
          <div className="flex min-h-[68px] items-center justify-between gap-3 py-2">
            {/* Left Brand Badge */}
            <Link
              href="#home"
              className="flex items-center gap-2 font-bold text-sm tracking-tight text-[var(--foreground)] whitespace-nowrap"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Arnav Singh</span>
              <span className="hidden sm:inline-block text-xs font-mono text-[var(--muted)] font-normal">
                · BBDU CSE
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium">
              {[
                { label: "Home", href: "#home" },
                { label: "Works", href: "#works" },
                { label: "My Story", href: "#about" },
                { label: "Recruiter Dossier", href: "/recruiter" },
                { label: "Terminal", href: "/terminal" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-2.5 lg:px-3 py-2 text-[var(--foreground)]/85 hover:text-[var(--foreground)] transition-colors whitespace-nowrap ${
                    item.label === "Recruiter Dossier" || item.label === "Terminal" ? "hidden lg:inline-flex" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Controls: Theme Switcher + CTA */}
            <div className="flex items-center gap-2">
              <div className="hidden xl:flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-[11px] text-[var(--muted)] whitespace-nowrap">
                <span>Lucknow · IST</span>
                <span aria-hidden="true">·</span>
                <time>{localTime || "India Standard Time"}</time>
              </div>
              {/* Dark / Light Mode Switch */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle theme mode"
                className="flex items-center justify-center h-10 w-10 sm:h-9 sm:w-9 rounded-full text-[var(--foreground)] hover:bg-[var(--surface)] active:scale-95 transition-all cursor-pointer shrink-0"
                title={isDark ? "Switch to Warm Stone Mode" : "Switch to Charcoal Dark Mode"}
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Start a project / Contact Pill */}
              <a
                href="mailto:arnavsinghas1221@gmail.com"
                aria-label="Say hello to Arnav"
                className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] text-[13px] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
              >
                <span className="hidden sm:inline">Say Hello</span>
                <Mail className="w-3.5 h-3.5 sm:hidden" />
                <ArrowRight className="hidden sm:block w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <nav aria-label="Mobile navigation" className="md:hidden flex items-center justify-around gap-1 border-t border-[var(--line)] px-1 py-1">
            {[
              { label: "Home", href: "#home" },
              { label: "Works", href: "#works" },
              { label: "Story", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="flex-1 px-2 py-2 text-center text-xs font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          2. HERO SECTION (Massive Editorial Headline + 3D Flip Calendar)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
      >
        {/* Subtle Vignette Gradient in Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(196,176,176,0.35),transparent_70%)]"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          {/* Left Column: Greeting, Big Typography, Flip Calendar */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-xs font-mono font-bold tracking-wider text-[var(--accent)] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              B.Tech CSE Student · Developer
            </div>

            {/* Giant Editorial Title with 3D Flip Calendar */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08] font-display">
              <span className="block">Hi, I’m Arnav.</span>
              <span className="block text-[var(--muted)] font-normal mt-1">I am a</span>
              
              {/* 3D DESK-CALENDAR COMPONENT */}
              <div className="mt-3 block w-full max-w-[calc(100vw-2rem)]">
                <div className="cal-wrapper max-w-full">
                  <div className="cal-body">
                    {/* Stand base */}
                    <div className="cal-stand" />

                    {/* Flipping Page */}
                    <div
                      className={`relative z-10 px-3 py-3 sm:px-7 sm:py-4 cal-page-base flex items-center justify-between gap-2 sm:gap-6 transition-transform duration-200 ease-out ${
                        isFlipping ? "translate-y-0.5 scale-[0.995]" : "translate-y-0 scale-100"
                      }`}
                    >
                      {/* Spiral Punch Holes */}
                      <div className="absolute top-1.5 inset-x-4 flex justify-between pointer-events-none">
                        <span className="w-2 h-2 rounded-full bg-stone-700/80 shadow-inner" />
                        <span className="w-2 h-2 rounded-full bg-stone-700/80 shadow-inner" />
                        <span className="w-2 h-2 rounded-full bg-stone-700/80 shadow-inner" />
                        <span className="w-2 h-2 rounded-full bg-stone-700/80 shadow-inner" />
                        <span className="w-2 h-2 rounded-full bg-stone-700/80 shadow-inner" />
                      </div>

                      {/* Calendar Word */}
                      <span className="pt-2 text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--ink)] font-display whitespace-nowrap">
                        {CAL_SKILLS[calIndex].title}
                      </span>

                      {/* Calendar Index */}
                      <span className="pt-2 text-[10px] sm:text-sm font-mono font-bold text-[var(--muted)] whitespace-nowrap">
                        {CAL_SKILLS[calIndex].no} / 05
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-base sm:text-lg text-[var(--muted)] max-w-xl font-normal leading-relaxed">
              5th-semester Computer Science student at Babu Banarasi Das University, Lucknow (8.0 CGPA). I practice C++ DSA and build privacy-first client-side web tools.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] font-semibold text-sm hover:scale-102 active:scale-98 transition-all shadow-md"
              >
                <span>Explore Works (4 Doors)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--foreground)] font-semibold text-sm hover:bg-[var(--surface-2)] transition-colors"
              >
                <span>My Story</span>
              </a>

              <a
                href={personal.resume || "/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] font-mono text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Proof Dossier (Fact-based Student Profile) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="ability-card w-full max-w-sm rounded-3xl p-6 sm:p-7 bg-[var(--surface)] border border-[var(--line)] shadow-xl relative overflow-hidden group">
              {/* Specular Glare & Foil sheen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent group-hover:translate-x-full duration-1000 transition-transform ease-out"
              />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block font-bold">
                    ENGINEERING DOSSIER
                  </span>
                  <h3 className="text-xl font-bold font-display text-[var(--foreground)]">
                    Arnav Singh
                  </h3>
                </div>
                <div
                  className="px-2.5 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--line)] font-mono text-xs font-bold text-[var(--foreground)]"
                  title="Cumulative Grade Point Average across 5 semesters"
                >
                  8.0 CGPA
                </div>
              </div>

              {/* Concrete Verified Facts (No arbitrary self-ratings) */}
              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[var(--foreground)]">
                    <span className="font-bold">Academic Track</span>
                    <span className="text-[var(--accent)] font-semibold">BBDU Lucknow</span>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] font-sans">
                    5th-semester B.Tech CSE (OS, DBMS, Networks, OOP, Software Engineering)
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[var(--foreground)]">
                    <span className="font-bold">Live Production Utility</span>
                    <a
                      href="https://atscheck.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] font-bold hover:underline"
                    >
                      atscheck.tech ↗
                    </a>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] font-sans">
                    Resume keyword matcher that runs in the browser
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[var(--foreground)]">
                    <span className="font-bold">Core Problem Solving</span>
                    <span className="text-[var(--accent)] font-semibold">C++ &amp; STL</span>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] font-sans">
                    Binary trees, graphs, recursion, backtracking &amp; dynamic programming
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[var(--foreground)]">
                    <span className="font-bold">Web Architecture</span>
                    <span className="text-[var(--accent)] font-semibold">Next.js &amp; TS</span>
                  </div>
                  <p className="text-[11px] text-[var(--muted)] font-sans">
                    Client-side processing, REST APIs (Flask), PostgreSQL &amp; Prisma
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[var(--line)] flex flex-col items-start gap-2 text-[11px] font-mono text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
                <span>Lucknow, India (IST)</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  OPEN TO INTERNSHIPS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hairline Status Bar (Rishi's hero__bar) ── */}
        <div className="relative z-10 border-t border-[var(--line)] pt-5 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[var(--foreground)] font-semibold">Open to internship opportunities</span>
          </div>

          <div className="text-center">
            <span>Based in Lucknow, India</span>
          </div>

          <div className="flex items-center gap-1.5 text-[var(--foreground)]">
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. PROJECTS: EXPLORE THE DOORS
      ═══════════════════════════════════════════════════════════════ */}
      <section id="works" className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
        {/* Subtle Architectural Venetian Plaster Noise Texture matching therishithakor.com */}
        <div className="doors__tex" aria-hidden="true" />

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 relative z-10">
          <p className="mb-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Projects · 4 categories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight font-display">
            Choose a door to explore.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Four areas of my work, from browser tools to C++ practice.
          </p>
        </div>

        {/* Arched Doors Grid with Floor Baseboard - Exactly 4 side-by-side matching therishithakor.com */}
        <div className="doors-row-container max-w-6xl mx-auto mb-14 px-2 sm:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 items-end">
            {DOORS.map((door, index) => {
              const isOpen = hoveredDoor >= 0 ? hoveredDoor === index : selectedDoor === index;
              const emphasizedDoor = hoveredDoor >= 0 ? hoveredDoor : selectedDoor;
              const isDimmed = emphasizedDoor >= 0 && emphasizedDoor !== index;
              return (
                <div
                  key={door.id}
                  className={`door-unit${isOpen ? " is-active" : ""}${isDimmed ? " is-dimmed" : ""}`}
                  style={{ "--door-color": door.color } as React.CSSProperties}
                >
                  <a
                    href={door.projects[0].demo || "#project-gallery"}
                    target={door.projects[0].demo?.startsWith("http") ? "_blank" : undefined}
                    rel={door.projects[0].demo?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`doorway ${isOpen ? "open" : ""}`}
                    onClick={() => {
                      if (activeDoor !== index || selectedDoor !== index) {
                        playDoorLatchSound();
                      }
                      setActiveDoor(index);
                      setSelectedDoor(index);
                    }}
                    onMouseEnter={() => {
                      if (hoveredDoor !== index && activeDoor !== index) {
                        playDoorLatchSound();
                      }
                      setActiveDoor(index);
                      setHoveredDoor(index);
                    }}
                    onMouseLeave={() => setHoveredDoor(-1)}
                    onFocus={() => {
                      if (hoveredDoor !== index && activeDoor !== index) {
                        playDoorLatchSound();
                      }
                      setActiveDoor(index);
                      setHoveredDoor(index);
                    }}
                    onBlur={() => setHoveredDoor(-1)}
                    aria-label={door.projects[0].demo
                      ? `Open ${door.projects[0].name} live app`
                      : `View ${door.title} project details`}
                  >
                    <span className="casing" />
                    <span className="opening">
                      <span className="room" />
                      <span className="room-content" aria-hidden="true">
                        <span className="room-window-dots"><i /><i /><i /></span>
                        <span className="room-label">{door.badge.replace(/^Door \d+ · /, "")}</span>
                        <span className="room-project">{door.projects[0].name}</span>
                        <span className="room-detail">
                          {door.projects.length > 1
                            ? `+ ${door.projects.length - 1} more project${door.projects.length > 2 ? "s" : ""}`
                            : door.projects[0].tech.slice(0, 2).join(" · ")}
                        </span>
                        <span className="room-enter">
                          {door.projects[0].demo ? `LAUNCH ${door.projects[0].name}` : "VIEW PROJECT DETAILS"}
                          <b>{door.projects[0].demo ? "↗" : "↓"}</b>
                        </span>
                      </span>
                      <span className="door">
                        <span className="door__flute" />
                        <span className="plate">
                          {door.plateLines.map((line, lIdx) => (
                            <span key={lIdx} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                        <span className="handle">
                          <span className="handle__lever" />
                          <span className="handle__lock" />
                        </span>
                      </span>
                      <span className="sill" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Active Door Interactive Project Gallery (Individual Project Cards) ── */}
          <div id="project-gallery" className="max-w-5xl mx-auto space-y-6 scroll-mt-28">
          {/* Active Category Header Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: DOORS[activeDoor].color }} />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
                  {DOORS[activeDoor].badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] font-display">
                {DOORS[activeDoor].title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] font-mono mt-1">
                {DOORS[activeDoor].tagline}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--line)]">
                {DOORS[activeDoor].projects.length} {DOORS[activeDoor].projects.length === 1 ? "Project" : "Projects"} in this category
              </span>
            </div>
          </div>

          {/* Individual Project Cards Grid */}
          <div className={`grid gap-6 ${DOORS[activeDoor].projects.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
            {DOORS[activeDoor].projects.map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 shadow-md group"
              >
                <ProjectPreview project={proj} />
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold block mb-1">
                        {proj.role}
                      </span>
                      <h4 className="text-2xl font-extrabold text-[var(--foreground)] font-display">
                        {proj.name}
                      </h4>
                    </div>
                    {proj.highlight && (
                      <span className="px-3 py-1 rounded-full bg-[var(--surface-2)] text-[var(--foreground)] font-mono text-xs font-semibold border border-[var(--line)]">
                        {proj.highlight}
                      </span>
                    )}
                    {proj.availability && (
                      <span className="px-3 py-1 rounded-full bg-[var(--surface-2)] text-[var(--muted)] font-mono text-xs font-semibold border border-[var(--line)]">
                        {proj.availability}
                      </span>
                    )}
                  </div>

                  {/* One-Liner & Description */}
                  <p className="text-xs font-mono font-semibold text-[var(--accent)]">
                    {proj.tagline}
                  </p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* My Actual Contributions & Architecture */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--foreground)] block">
                      Architecture &amp; My Contribution:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--foreground)]">
                      {proj.contribution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--line)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-8 pt-5 border-t border-[var(--line)] flex flex-wrap items-center gap-3">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target={proj.demo.startsWith("http") ? "_blank" : undefined}
                      rel={proj.demo.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] font-bold text-xs hover:opacity-90 transition-all shadow-sm"
                    >
                      <span>{proj.demoLabel || "Open Live Demo"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {proj.source && (
                    <a
                      href={proj.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--line)] hover:border-[var(--accent)] text-[var(--foreground)] font-semibold text-xs transition-colors"
                    >
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. "MY STORY: LET'S GO BACK IN TIME" (therishithakor.com Match)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
        {/* Soft Ambient Diffused Lighting Blooms matching therishithakor.com */}
        <div className="story-ambient-glow" aria-hidden="true">
          <div className="story-amb-blob story-amb-top" />
          <div className="story-amb-blob story-amb-bottom" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Sticky Astronomical Dial, Giant Year & Progress Meter */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 space-y-4">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              · My story
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[2.65rem] font-extrabold text-[var(--foreground)] tracking-tight font-display lg:whitespace-nowrap">
              Let’s go back in time.
            </h2>

            {/* Astronomical Dial with Concentric Circles & Radial Ticks */}
            <div className="story-clock-wrap relative">
              <svg
                className="story-clock-dial pointer-events-none text-[var(--foreground)]"
                viewBox="0 0 400 400"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <circle cx="200" cy="200" r="185" strokeWidth="1" strokeDasharray="3 6" />
                <circle cx="200" cy="200" r="145" strokeWidth="0.8" strokeOpacity="0.4" />
                <circle cx="200" cy="200" r="105" strokeWidth="0.8" strokeDasharray="2 4" />
                {Array.from({ length: 36 }).map((_, i) => (
                  <line
                    key={i}
                    x1="200"
                    y1="15"
                    x2="200"
                    y2={i % 3 === 0 ? "35" : "25"}
                    strokeWidth={i % 3 === 0 ? "1.5" : "0.75"}
                    strokeOpacity={i % 3 === 0 ? "0.8" : "0.4"}
                    transform={`rotate(${i * 10} 200 200)`}
                  />
                ))}
                <circle cx="200" cy="15" r="3.5" fill="var(--accent)" stroke="none" />
              </svg>

              {/* Massive Crisp Year Typography - Clean digits, zero eyeball icons */}
              <div className="story-year-hero relative z-10 font-extrabold text-[var(--foreground)] font-display select-none transition-all duration-300">
                {STORY_CHAPTERS[activeStoryIdx].year}
              </div>

              {/* Active Period String */}
              <p className="story-period relative z-10 text-xs font-mono font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                {STORY_CHAPTERS[activeStoryIdx].period}
              </p>

              {/* Horizontal Progress Meter (01 / 05) with Rewind/Clock Icon */}
              <div className="relative z-10 flex items-center gap-2.5 mt-5 text-xs font-mono font-semibold text-[var(--foreground)]">
                <svg
                  className="w-4 h-4 text-[var(--muted)] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 4v5h5" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span className="font-bold">0{activeStoryIdx + 1}</span>
                <span className="text-[var(--muted)]">/ 0{STORY_CHAPTERS.length}</span>
                <div className="relative w-28 sm:w-36 h-[2px] rounded-full bg-[var(--line)] overflow-hidden ml-2">
                  <div
                    className="absolute inset-y-0 left-0 bg-[var(--foreground)] transition-all duration-300 ease-out"
                    style={{ width: `${((activeStoryIdx + 1) / STORY_CHAPTERS.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pure Editorial Typography on Background (NO BOXES/CARDS!) */}
          <div
            ref={storyTimelineRef}
            className="lg:col-span-6 relative pl-8 sm:pl-12 border-l border-[var(--line)]"
          >
            <div
              className="story-moving-dot"
              style={{ top: `${activeStoryDotY}px` }}
              aria-hidden="true"
            />
            <ol className="space-y-16 py-6 sm:py-8">
              {STORY_CHAPTERS.map((ch, idx) => {
                const isActive = activeStoryIdx === idx;
                return (
                  <li
                    key={idx}
                    ref={(element) => { storyChapterRefs.current[idx] = element; }}
                    data-story-index={idx}
                    onMouseEnter={() => setActiveStoryIdx(idx)}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`relative cursor-pointer transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-35 hover:opacity-70"
                    }`}
                  >
                    {/* Chapter Period */}
                    <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[var(--muted)] mb-1.5">
                      {ch.period}
                    </p>

                    {/* Chapter Role / Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight font-display mb-1">
                      {ch.role}
                    </h3>

                    {/* Chapter Organization / Context */}
                    <p className="text-sm sm:text-base font-medium text-[var(--muted)] mb-3">
                      {ch.org}
                    </p>

                    {/* Clean Bullet Points with Subtle Dashes */}
                    <ul className="space-y-2 text-sm sm:text-base text-[var(--foreground)] leading-relaxed max-w-xl">
                      {ch.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2.5 before:h-[1.5px] before:bg-[var(--muted)]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. FOOTER / CONTACT SECTION (Rishi's "Got a project? Let's build it")
      ═══════════════════════════════════════════════════════════════ */}
      <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[var(--surface)] border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Main CTA Block */}
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--line)] text-xs font-mono text-[var(--accent)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for software engineering internships & projects
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight font-display leading-[1.08]">
              Got an opportunity? <br />
              <span className="text-[var(--accent)]">Let’s build it together.</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--muted)] font-normal max-w-xl leading-relaxed">
              I’m taking on internship roles and open to collaborative technical projects. Tell me about the engineering challenges you’re solving.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="mailto:arnavsinghas1221@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] font-bold text-sm hover:scale-102 active:scale-98 transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Email arnavsinghas1221@gmail.com</span>
              </a>

              <a
                href={personal.resume || "/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--background)] border border-[var(--line)] text-[var(--foreground)] font-semibold text-sm hover:bg-[var(--surface-2)] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* 3-Column Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[var(--line)] text-xs font-mono">
            {/* Column 1: Projects */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--foreground)] uppercase tracking-wider text-[11px]">
                Built Projects
              </h4>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>
                  <a href="https://atscheck.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
                    ATSCheck (atscheck.tech) ↗
                  </a>
                </li>
                <li>
                  <a href="https://pd-flex.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
                    PDFlex Web Utility ↗
                  </a>
                </li>
                <li>
                  <a href="https://financecalc0.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
                    FinanceCalc ↗
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Arnav20007/moodmate" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
                    MoodMate (Hackathon AI) ↗
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Arnav20007/ascend" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
                    ASCEND Task Gamification ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--foreground)] uppercase tracking-wider text-[11px]">
                Navigate
              </h4>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>
                  <Link href="#home" className="hover:text-[var(--foreground)] transition-colors">
                    Home & Greeting
                  </Link>
                </li>
                <li>
                  <Link href="#works" className="hover:text-[var(--foreground)] transition-colors">
                    Architectural Vault (5 Doors)
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-[var(--foreground)] transition-colors">
                    My Story & Journey
                  </Link>
                </li>
                <li>
                  <Link href="/recruiter" className="hover:text-[var(--foreground)] transition-colors">
                    Recruiter Dossier View
                  </Link>
                </li>
                <li>
                  <Link href="/terminal" className="hover:text-[var(--foreground)] transition-colors">
                    Interactive CLI Terminal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Status */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--foreground)] uppercase tracking-wider text-[11px]">
                Status & Credentials
              </h4>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>BBDU Lucknow, CSE 5th Semester</li>
                <li>8.0 / 10 CGPA Coursework</li>
                <li>Looking for Software Engineering Internships</li>
                <li>Local Time: Lucknow (IST)</li>
                <li>Email replies within hours</li>
              </ul>
            </div>

            {/* Column 4: Social / Code */}
            <div className="space-y-3">
              <h4 className="font-bold text-[var(--foreground)] uppercase tracking-wider text-[11px]">
                Connect & Code
              </h4>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>
                  <a href="https://github.com/Arnav20007" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
                    GitHub Profile ↗
                  </a>
                </li>
                <li>
                  <a href="mailto:arnavsinghas1221@gmail.com" className="hover:text-[var(--foreground)] transition-colors">
                    arnavsinghas1221@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Hairline */}
          <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--muted)]">
            <p>© {new Date().getFullYear()} Arnav Singh. All rights reserved.</p>
            <p>Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
