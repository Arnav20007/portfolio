"use client";

import { useState, useEffect } from "react";
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
  { title: "Software Engineer", no: "01" },
  { title: "C++ & DSA Builder", no: "02" },
  { title: "Full-Stack Developer", no: "03" },
  { title: "Web Utility Builder", no: "04" },
  { title: "System & API Builder", no: "05" },
];

/* ── 4 DOORS DATA (therishithakor.com Arched Doors) ──────────── */
interface DoorData {
  id: string;
  plate: string;
  title: string;
  tagline: string;
  color: string;
  accent: string;
  bullets: string[];
  demo?: string;
  source?: string;
}

const DOORS: DoorData[] = [
  {
    id: "web-dev",
    plate: "WEB DEVELOPER",
    title: "ATSCheck & PDFlex",
    tagline: "Client-side privacy-first web utilities",
    color: "#1E2C48",
    accent: "#3E5785",
    bullets: [
      "ATSCheck: 100% in-browser resume score checker with zero server uploads (atscheck.tech)",
      "PDFlex: Multi-threaded PDF merger, splitter and editor using client Web Workers",
      "Zero server data latency, strict local data sovereignty and instant keyword matching",
      "Engineered with Next.js, TypeScript, Tailwind CSS and client-side document engines",
    ],
    demo: "https://atscheck.tech/",
    source: "https://github.com/Arnav20007/ats",
  },
  {
    id: "app-dev",
    plate: "APP DEVELOPER",
    title: "FinanceCalc",
    tagline: "Interactive FinTech investment & loan visualizer",
    color: "#412F3D",
    accent: "#7A4E6B",
    bullets: [
      "Interactive compounding engine for SIP, mutual fund, and wealth growth forecasting",
      "Detailed loan amortization curves with monthly principal vs interest breakdown",
      "Dynamic data charts built with Next.js, TypeScript, and Chart.js",
      "Production deployment live at financecalc0.vercel.app with sub-second response times",
    ],
    demo: "https://financecalc0.vercel.app",
    source: "https://github.com/Arnav20007/financecalc",
  },
  {
    id: "uiux-design",
    plate: "UI/UX DESIGNER",
    title: "C++ Algorithmic Core & Terminal",
    tagline: "Systems architecture & interactive command shell",
    color: "#667B68",
    accent: "#8FA391",
    bullets: [
      "Interactive in-browser CLI terminal replicating authentic Unix/Linux shell UX",
      "Strict visual hierarchy, tactile typography, and spatial micro-interaction design",
      "5th-semester CSE student at BBDU Lucknow (8.0 CGPA) with strong DSA foundation",
      "Real-time command execution, dynamic flag parsing, and system status telemetry",
    ],
    demo: "/terminal",
    source: "https://github.com/Arnav20007",
  },
  {
    id: "graphic-design",
    plate: "GRAPHIC DESIGNER",
    title: "ASCEND & MoodMate",
    tagline: "Gamified progression systems & AI companions",
    color: "#A86438",
    accent: "#CF8855",
    bullets: [
      "ASCEND: Gamified task progression workflow with XP levels and tier unlocks",
      "MoodMate: AI-powered mental wellness & reflection journaling assistant",
      "Python Flask REST microservices integrated with OpenAI reflection prompts",
      "Clean architecture with verified local state persistence and responsive design",
    ],
    demo: "https://github.com/Arnav20007/ascend",
    source: "https://github.com/Arnav20007/moodmate",
  },
];

/* ── STORY CHAPTERS FOR ROLLING TIMELINE ─────────────────────── */
const STORY_CHAPTERS = [
  {
    year: "2026",
    period: "Oct 2026 — Present",
    role: "Software Engineering & Web Utility Builder",
    desc: "Launched ATSCheck on its dedicated domain (atscheck.tech), optimized PDFlex with client-side Web Workers, and actively looking for a software engineering internship to contribute real code.",
    tags: ["C++", "Next.js", "ATSCheck", "Web Workers", "Internship"],
  },
  {
    year: "2025",
    period: "Jan 2025 — Sep 2025",
    role: "Full-Stack Projects & Hackathons",
    desc: "Built MoodMate during a hackathon with Next.js and a Python Flask backend. Developed FinanceCalc for SIP and EMI forecasting with interactive Chart.js visualizations.",
    tags: ["React", "Python Flask", "FinanceCalc", "PostgreSQL", "REST APIs"],
  },
  {
    year: "2024",
    period: "Jan 2024 — Dec 2024",
    role: "C++ & Data Structures Practice",
    desc: "Focused intensely on foundational computer science and problem solving—practicing trees, graphs, recursion, and dynamic programming patterns in C++ alongside university academics.",
    tags: ["C++", "DSA", "Algorithms", "OOP", "Problem Solving"],
  },
  {
    year: "2022",
    period: "Jul 2022 — Jun 2026",
    role: "B.Tech in Computer Science and Engineering",
    desc: "Enrolled in B.Tech CSE at Babu Banarasi Das University (BBDU), Lucknow. Maintained an 8.0 CGPA while mastering core subjects: OS, DBMS, Computer Networks, and Software Engineering.",
    tags: ["BBDU Lucknow", "8.0 CGPA", "Computer Science", "CSE Core"],
  },
];

export default function HomePage() {
  /* ── Dark Mode State ── */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("arnav-mode");
    if (saved === "dark") {
      document.documentElement.dataset.mode = "dark";
      // Update state without synchronous re-render warning
      requestAnimationFrame(() => setIsDark(true));
    }
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
  };

  /* ── Live Ticking Clock & Date (IST / Lucknow) ── */
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(
        d.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).toLowerCase()
      );
      setDateStr(
        d.toLocaleDateString("en-US", {
          timeZone: "Asia/Kolkata",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ── 3D Desk-Calendar Flip Loop ── */
  const [calIndex, setCalIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCalIndex((prev) => (prev + 1) % CAL_SKILLS.length);
        setIsFlipping(false);
      }, 600);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  /* ── Active Door State ── */
  const [activeDoor, setActiveDoor] = useState(0);

  /* ── Rolling Story Year State ── */
  const [activeStoryYear, setActiveStoryYear] = useState("2026");

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#C4B0B0] selection:text-[#1A1818] font-sans antialiased transition-colors duration-400">
      
      {/* ═══════════════════════════════════════════════════════════════
          1. HEADER / NAVIGATION (Pill Bar with Live Clock & Mode Switch)
      ═══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center justify-between gap-3 p-2 rounded-full bg-[var(--chip-bg)] backdrop-blur-xl border border-[var(--chip-line)] shadow-lg shadow-black/5">
            {/* Left Brand Badge */}
            <Link
              href="#home"
              className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm tracking-tight text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Arnav Singh</span>
              <span className="hidden sm:inline-block text-xs font-mono text-[var(--muted)] font-normal">
                · BBDU CSE
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
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
                  className="px-3.5 py-1.5 rounded-full text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Controls: Clock + Theme Switcher + CTA */}
            <div className="flex items-center gap-2">
              {/* Live Clock Chip matching therishithakor.com */}
              <div
                className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-xs font-mono text-[var(--foreground)] shadow-xs"
                title="Local time in Lucknow, India (IST)"
              >
                <span className="text-[10px] text-[var(--muted)] font-medium">
                  Local time
                </span>
                <span className="font-bold text-[11px]">{timeStr || "9:00pm"}</span>
                {dateStr && (
                  <span className="hidden lg:inline text-[10px] text-[var(--muted)] border-l border-[var(--line)] pl-2">
                    {dateStr}
                  </span>
                )}
              </div>

              {/* Dark / Light Mode Switch */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle theme mode"
                className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--foreground)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title={isDark ? "Switch to Warm Stone Mode" : "Switch to Charcoal Dark Mode"}
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Start a project / Contact Pill */}
              <a
                href="mailto:arnavsinghas1221@gmail.com"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>Say Hello</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
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
              B.Tech CSE Student · Software Engineer
            </div>

            {/* Giant Editorial Title with 3D Flip Calendar */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08] font-display">
              <span className="block">Hi, I’m Arnav.</span>
              <span className="block text-[var(--muted)] font-normal mt-1">I am a</span>
              
              {/* 3D DESK-CALENDAR COMPONENT */}
              <div className="mt-3 block">
                <div className="cal-wrapper">
                  <div className="cal-body">
                    {/* Stand base */}
                    <div className="cal-stand" />

                    {/* Flipping Page */}
                    <div
                      className={`relative z-10 px-5 py-3 sm:px-7 sm:py-4 cal-page-base flex items-center justify-between gap-6 transition-all duration-500 ease-out ${
                        isFlipping ? "-rotate-x-30 -translate-y-2 opacity-80" : "rotate-0 translate-y-0 opacity-100"
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
                      <span className="pt-2 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--ink)] font-display whitespace-nowrap">
                        {CAL_SKILLS[calIndex].title}
                      </span>

                      {/* Calendar Index */}
                      <span className="pt-2 text-xs sm:text-sm font-mono font-bold text-[var(--muted)]">
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

          {/* Right Column: Interactive 3D Ability Card (Therishithakor Card Aesthetic) */}
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
                    CAPABILITY DOSSIER
                  </span>
                  <h3 className="text-xl font-bold font-display text-[var(--foreground)]">
                    Arnav Singh
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--line)] flex items-center justify-center font-mono text-xs font-bold text-[var(--foreground)]">
                  8.0
                </div>
              </div>

              {/* Stats & Skills Meter */}
              <div className="space-y-3.5 text-xs font-mono">
                {[
                  { name: "C++ & Data Structures", value: 85, detail: "Trees, Graphs, DP" },
                  { name: "Browser Web Utilities", value: 88, detail: "Web Workers, PDF.js" },
                  { name: "Full-Stack Web Dev", value: 82, detail: "React, Next.js, TS" },
                  { name: "Backend & REST APIs", value: 78, detail: "Python, Flask, SQL" },
                ].map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-[var(--foreground)]">
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-[var(--accent)] font-bold">{item.value} / 100</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[var(--background)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--accent)] transition-all duration-1000"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-[var(--muted)] font-sans">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
                <span>BBDU Lucknow · 5th Sem</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">● VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hairline Status Bar (Rishi's hero__bar) ── */}
        <div className="relative z-10 border-t border-[var(--line)] pt-5 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[var(--foreground)] font-semibold">Available for internship opportunities</span>
          </div>

          <div className="text-center">
            <span>BBDU Lucknow, India · Remote-first worldwide</span>
          </div>

          <div className="flex items-center gap-1.5 text-[var(--foreground)]">
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. "MAGIC HAPPENS BEHIND THE DOORS" (therishithakor.com Arched 3D Doors)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="works" className="relative py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight font-display">
            Magic happens behind the doors
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--muted)] font-normal max-w-xl mx-auto">
            My work, one door per skill. Hover or click to open each door and step inside.
          </p>
        </div>

        {/* Arched Doors Grid - Exactly 4 side-by-side matching therishithakor.com */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 px-2 sm:px-4">
          {DOORS.map((door, index) => {
            const isOpen = activeDoor === index;
            const words = door.plate.split(" ");
            return (
              <div
                key={door.id}
                className="door-unit"
                style={{ "--door-color": door.color } as React.CSSProperties}
              >
                <button
                  type="button"
                  className={`doorway ${isOpen ? "open" : ""}`}
                  onClick={() => setActiveDoor(index)}
                  onMouseEnter={() => setActiveDoor(index)}
                  aria-label={`Open ${door.plate} door`}
                >
                  <span className="casing" />
                  <span className="opening">
                    <span className="room" />
                    <span className="door">
                      <span className="door__flute" />
                      <span className="plate">
                        {words.map((w, wIdx) => (
                          <span key={wIdx} className="block">
                            {w}
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
                </button>
              </div>
            );
          })}
        </div>

        {/* ── Active Door Interactive Info Card (Rishi's dinfo) ── */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[var(--surface)] border border-[var(--line)] shadow-xl transition-all duration-300 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info: Title, Tagline, Bullets */}
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--accent)]">
                  {DOORS[activeDoor].plate}
                </span>
                <span className="text-xs font-mono text-[var(--muted)]">
                  · Door 0{activeDoor + 1} of 04
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] font-display">
                {DOORS[activeDoor].title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[var(--muted)]">
                {DOORS[activeDoor].tagline}
              </p>

              <ul className="space-y-2.5 text-sm sm:text-base text-[var(--foreground)] pt-2 font-normal">
                {DOORS[activeDoor].bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Action Box: Live links */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
              {DOORS[activeDoor].demo && (
                <a
                  href={DOORS[activeDoor].demo}
                  target={DOORS[activeDoor].demo?.startsWith("http") ? "_blank" : undefined}
                  rel={DOORS[activeDoor].demo?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] font-bold text-sm hover:scale-102 transition-all shadow-md"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {DOORS[activeDoor].source && (
                <a
                  href={DOORS[activeDoor].source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--surface-2)] border border-[var(--line)] text-[var(--foreground)] font-semibold text-sm hover:bg-[var(--surface)] transition-colors"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. "MY STORY: LET'S GO BACK IN TIME" (Rolling Timeline & Odometer)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sticky Story Title & Rolling Year Odometer */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent)] font-bold">
              JOURNEY CHRONICLE
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight font-display">
              Let’s go back in time.
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] font-normal leading-relaxed">
              From starting engineering coursework at BBDU to building client-side tools and solving algorithms in C++.
            </p>

            {/* Rolling Year Odometer Display */}
            <div className="pt-6">
              <div className="inline-flex items-baseline px-6 py-4 rounded-3xl bg-[var(--surface)] border border-[var(--line)] shadow-inner">
                <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-[var(--foreground)] font-mono">
                  {activeStoryYear}
                </span>
                <span className="ml-3 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                  Timeline
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Chapters */}
          <div className="lg:col-span-7 space-y-8 relative pl-6 border-l-2 border-[var(--line)]">
            {STORY_CHAPTERS.map((ch, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStoryYear(ch.year)}
                className="relative group p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 shadow-sm"
              >
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[31px] top-8 w-3.5 h-3.5 rounded-full border-2 border-[var(--background)] transition-colors duration-300 ${
                    activeStoryYear === ch.year ? "bg-[var(--accent)] scale-125" : "bg-[var(--line)]"
                  }`}
                />

                {/* Period & Role */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[var(--accent)]">
                    {ch.period}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--surface-2)] text-[var(--muted)]">
                    {ch.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] font-display mb-3">
                  {ch.role}
                </h3>

                <p className="text-sm sm:text-base text-[var(--muted)] font-normal leading-relaxed mb-4">
                  {ch.desc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {ch.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--background)] text-[var(--foreground)] border border-[var(--line)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
