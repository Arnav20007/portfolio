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
} from "lucide-react";
import { personal } from "@/lib/data";

const resumeHref = personal.resume || "/resume.pdf";
const email = personal.email || "your_email_here";

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

const techBadges = ["C++", "DSA", "React", "Next.js", "Python", "TypeScript"];

const metrics = [
  { value: "5th Semester", label: "B.Tech CSE · BBDU Lucknow" },
  { value: "8.0 / 10", label: "CGPA" },
  { value: "C++ & DSA", label: "Trees, Graphs & Dynamic Programming" },
  { value: "4 Projects", label: "Web, AI & Browser Utilities" },
];

const pdflex = {
  title: "PDFlex",
  subtitle: "In-Browser Local PDF Manipulation Utility",
  demo: "https://pd-flex.vercel.app",
  source: "https://github.com/arnavsingh/pdflex",
  summary:
    "Built an in-browser PDF manipulation tool using PDF.js and pdf-lib running inside Web Workers. PDFlex processes document merging and splitting entirely on the client side, keeping user files 100% private with zero server uploads.",
  highlights: [
    "Client-Side Processing: Leverages Web Workers to offload heavy PDF rendering and manipulation off the main thread.",
    "Privacy-First: Zero network payloads for document operations; all data remains in browser memory.",
    "Tech Stack: React, PDF.js, pdf-lib, Web Workers, Tailwind CSS.",
  ],
};

const selectedProjects = [
  {
    name: "PDFlex",
    badge: "Browser Tool",
    description: "In-browser PDF utility for merging and splitting documents locally via Web Workers and PDF.js.",
    stack: ["React", "PDF.js", "pdf-lib", "Web Workers"],
    demo: "https://pd-flex.vercel.app",
    source: "https://github.com/arnavsingh/pdflex",
  },
  {
    name: "FinanceCalc",
    badge: "Fintech",
    description:
      "Web-based financial calculator with interactive data visualizations for SIP returns, EMI schedules, and personal investment planning.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    demo: "https://financecalc0.vercel.app",
    source: "https://github.com/arnavsingh/financecalc",
  },
  {
    name: "MoodMate",
    badge: "AI / Web",
    description:
      "Journaling platform integrating Flask endpoints with OpenAI API to provide reflection feedback and track emotional trends.",
    stack: ["Next.js", "Python", "Flask", "OpenAI API"],
    source: "https://github.com/arnavsingh/moodmate",
    comingSoon: true,
  },
  {
    name: "ASCEND",
    badge: "Productivity",
    description:
      "Task management web app incorporating XP gain, level progression, and quest mechanics over a structured todo workflow.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    source: "https://github.com/arnavsingh/ascend",
    comingSoon: true,
  },
];

const skillGroups = [
  {
    title: "Core Programming",
    skills: ["C++", "Data Structures & Algorithms", "OOP", "C"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Python", "Flask", "Node.js", "REST APIs"],
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "SQLite", "SQL", "Git", "GitHub", "Web Workers"],
  },
];

/** Minimal SVG system diagram — pure design artifact, no neon */
function SystemDiagram() {
  return (
    <div className="relative select-none" aria-hidden="true">
      <svg
        viewBox="0 0 340 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm mx-auto lg:max-w-none opacity-90"
      >
        {/* Grid background dots */}
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={24 + col * 46}
              cy={20 + row * 50}
              r={1.5}
              fill="#c8c2b8"
              opacity={0.45}
            />
          ))
        )}

        {/* Connector lines */}
        <line x1="170" y1="72" x2="170" y2="104" stroke="#b5b0a8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="170" y1="136" x2="100" y2="170" stroke="#b5b0a8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="170" y1="136" x2="240" y2="170" stroke="#b5b0a8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="100" y1="200" x2="100" y2="230" stroke="#b5b0a8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="240" y1="200" x2="240" y2="230" stroke="#b5b0a8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="100" y1="262" x2="170" y2="280" stroke="#b5b0a8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="240" y1="262" x2="170" y2="280" stroke="#b5b0a8" strokeWidth="1" strokeDasharray="3 3" />

        {/* Top block — "Interface / Product" */}
        <rect x="112" y="36" width="116" height="36" rx="6" fill="#f0ece5" stroke="#c5bfb6" strokeWidth="1" />
        <text x="170" y="55" textAnchor="middle" fontSize="9" fontWeight="600" fill="#6b6560" letterSpacing="0.08em" fontFamily="Inter, sans-serif">PRODUCT LAYER</text>
        <text x="170" y="66" textAnchor="middle" fontSize="7" fill="#9c958e" fontFamily="Inter, sans-serif">React · Next.js · TypeScript</text>

        {/* Middle block — "Logic" */}
        <rect x="124" y="104" width="92" height="32" rx="6" fill="#e8e3da" stroke="#c5bfb6" strokeWidth="1" />
        <text x="170" y="122" textAnchor="middle" fontSize="9" fontWeight="600" fill="#6b6560" letterSpacing="0.08em" fontFamily="Inter, sans-serif">LOGIC LAYER</text>
        <text x="170" y="131" textAnchor="middle" fontSize="7" fill="#9c958e" fontFamily="Inter, sans-serif">Python · Flask · REST</text>

        {/* Left block — "Data" */}
        <rect x="52" y="170" width="96" height="30" rx="6" fill="#f0ece5" stroke="#c5bfb6" strokeWidth="1" />
        <text x="100" y="187" textAnchor="middle" fontSize="9" fontWeight="600" fill="#6b6560" letterSpacing="0.08em" fontFamily="Inter, sans-serif">DATA STORE</text>
        <text x="100" y="196" textAnchor="middle" fontSize="7" fill="#9c958e" fontFamily="Inter, sans-serif">PostgreSQL · SQLite</text>

        {/* Right block — "Algorithms" */}
        <rect x="192" y="170" width="96" height="30" rx="6" fill="#f0ece5" stroke="#c5bfb6" strokeWidth="1" />
        <text x="240" y="187" textAnchor="middle" fontSize="9" fontWeight="600" fill="#6b6560" letterSpacing="0.08em" fontFamily="Inter, sans-serif">ALGORITHMS</text>
        <text x="240" y="196" textAnchor="middle" fontSize="7" fill="#9c958e" fontFamily="Inter, sans-serif">C++ · DSA · Trees · DP</text>

        {/* Left leaf — "Browser Util" */}
        <rect x="46" y="230" width="108" height="26" rx="5" fill="#eae5dc" stroke="#c5bfb6" strokeWidth="1" />
        <text x="100" y="246" textAnchor="middle" fontSize="8" fontWeight="600" fill="#6b6560" letterSpacing="0.06em" fontFamily="Inter, sans-serif">BROWSER UTILITIES</text>
        <text x="100" y="254" textAnchor="middle" fontSize="7" fill="#9c958e" fontFamily="Inter, sans-serif">Web Workers · PDF.js</text>

        {/* Right leaf — "AI Integration" */}
        <rect x="186" y="230" width="108" height="26" rx="5" fill="#eae5dc" stroke="#c5bfb6" strokeWidth="1" />
        <text x="240" y="246" textAnchor="middle" fontSize="8" fontWeight="600" fill="#6b6560" letterSpacing="0.06em" fontFamily="Inter, sans-serif">AI INTEGRATION</text>
        <text x="240" y="254" textAnchor="middle" fontSize="7" fill="#9c958e" fontFamily="Inter, sans-serif">OpenAI API · Flask</text>

        {/* Bottom convergence node */}
        <circle cx="170" cy="290" r="10" fill="#e0dbd2" stroke="#b8b2a8" strokeWidth="1" />
        <text x="170" y="294" textAnchor="middle" fontSize="8" fontWeight="700" fill="#6b6560" fontFamily="Inter, sans-serif">∞</text>

        {/* Small decorative label bottom */}
        <text x="170" y="315" textAnchor="middle" fontSize="7" fill="#b0a9a0" fontFamily="Inter, sans-serif" letterSpacing="0.1em">FULL-STACK ENGINEER</text>
      </svg>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  index,
  title,
  text,
}: {
  eyebrow: string;
  index?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        {index && (
          <span className="text-xs font-mono text-zinc-400 tabular-nums">{index}</span>
        )}
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-zinc-600">{text}</p>}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#f7f4ef]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-sm font-black tracking-tight text-zinc-950">
          Arnav Singh
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-500 md:flex">
          <a href="#about" className="transition hover:text-zinc-950">
            About
          </a>
          <a href="#projects" className="transition hover:text-zinc-950">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-zinc-950">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-zinc-950">
            Contact
          </a>
        </nav>

        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-zinc-700"
        >
          <Download className="h-3.5 w-3.5" />
          Resume
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid gap-12 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-20">
      {/* LEFT — Identity */}
      <div>
        {/* Location chip */}
        <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-600 inline-block" />
          Lucknow, India
        </p>

        {/* Name — primary identifier */}
        <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-zinc-950 sm:text-6xl">
          Arnav Singh
        </h1>

        {/* Role line */}
        <p className="mt-3 text-lg font-semibold text-zinc-500">
          Full-Stack & AI Engineer
        </p>

        {/* Divider */}
        <div className="my-5 h-px w-12 bg-zinc-300" />

        {/* Positioning statement */}
        <p className="max-w-lg text-base leading-7 text-zinc-600">
          5th-semester B.Tech CSE student at BBDU Lucknow. I build practical web applications
          and AI-powered tools — focusing on client-side performance, clean architecture, and
          real user value.
        </p>

        {/* Tech tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold text-zinc-600"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 border-b border-zinc-950 pb-0.5 text-sm font-black tracking-wide text-zinc-950 transition hover:gap-3"
          >
            VIEW SELECTED WORK
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </div>

      {/* RIGHT — System diagram visual anchor */}
      <div className="hidden lg:block">
        <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-[0_8px_40px_rgba(20,20,20,0.06)]">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
            System Architecture
          </p>
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_24px_80px_rgba(20,20,20,0.07)]">
      <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
            Featured Project
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">
            {pdflex.title}
          </h2>
          <p className="mt-1 text-sm font-semibold text-zinc-500">
            {pdflex.subtitle}
          </p>
        </div>
        <a
          href={pdflex.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-2 text-xs font-bold text-zinc-600 transition hover:border-zinc-500"
        >
          <GithubIcon className="h-4 w-4" />
          Source
        </a>
      </div>

      <p className="mt-5 text-sm leading-7 text-zinc-600">{pdflex.summary}</p>

      <div className="mt-6 space-y-3">
        {pdflex.highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-600"
          >
            {highlight}
          </div>
        ))}
      </div>

      <a
        href={pdflex.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-800"
      >
        Try Live Demo (pd-flex.vercel.app)
        <ExternalLink className="h-4 w-4" />
      </a>
    </aside>
  );
}

function MetricsBar() {
  return (
    <section className="border-y border-zinc-200 py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {metrics.map((metric, i) => (
          <div key={metric.value} className="flex flex-col gap-1">
            <span className="mb-1 text-[10px] font-mono text-zinc-400 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="text-xl font-black tracking-tight text-zinc-950">
              {metric.value}
            </div>
            <div className="text-xs font-medium leading-5 text-zinc-500">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="About"
        index="01"
        title="Background & Technical Focus"
      />
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
        <p className="text-base leading-8 text-zinc-600">
          I&apos;m currently in my 5th semester of B.Tech Computer Science Engineering at Babu Banarasi
          Das University. My primary focus is mastering core C++ data structures and algorithms —
          specifically tree traversals, graph algorithms, recursion, and dynamic programming.
        </p>
        <p className="text-base leading-8 text-zinc-600">
          Rather than relying on tutorial projects, I focus on building practical utilities
          that solve real constraints — like processing heavy PDFs locally in the browser, or
          structuring modular Flask APIs with clean separation of concerns.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Selected Work"
        index="02"
        title="Four projects with clear implementation details"
        text="A concise view of what each project does, the stack behind it, and whether a live demo is available."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[320px] flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-teal-700/40 hover:shadow-[0_12px_40px_rgba(15,118,110,0.08)]"
          >
            <div>
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="rounded-full border border-teal-700/20 bg-teal-700/8 px-3 py-1 text-xs font-bold text-teal-800">
                  {project.badge}
                </span>
                {project.comingSoon && (
                  <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-400">
                    Demo Coming Soon
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-zinc-950">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-5">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-xs font-black text-white transition hover:bg-teal-800"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black transition ${
                  project.demo
                    ? "border border-zinc-300 text-zinc-600 hover:border-zinc-500"
                    : "bg-zinc-950 text-white hover:bg-zinc-700"
                }`}
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Skills"
        index="03"
        title="Technical stack"
        text="Grouped by the areas I use most across coursework, problem-solving, and project builds."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6"
          >
            <h3 className="text-sm font-black uppercase tracking-[0.1em] text-zinc-950">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-500"
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

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        index="04"
        title="Let's Connect"
      />
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_24px_80px_rgba(20,20,20,0.05)] sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-600">
              Open for Software Engineering Internship opportunities for 2025/2026. I respond to every message.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-black text-white transition hover:bg-teal-800"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-black text-zinc-950 transition hover:border-zinc-500"
            >
              {copied ? <CheckCircle2 className="h-4 w-4 text-teal-600" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3 border-t border-zinc-200 pt-6">
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-600 transition hover:border-zinc-500"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-600 transition hover:border-zinc-500"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-600 transition hover:border-zinc-500"
          >
            <Download className="h-4 w-4" />
            Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-zinc-950 selection:bg-teal-700/20 selection:text-teal-900">
      <Header />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <MetricsBar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold text-zinc-950">Arnav Singh</p>
            <p className="text-xs text-zinc-400">
              B.Tech CSE · BBDU Lucknow · Built with Next.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
