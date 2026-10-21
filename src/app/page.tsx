"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Moon,
  Sun,
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
  { value: "5th Semester", label: "B.Tech CSE at BBDU" },
  { value: "8.0 / 10", label: "CGPA" },
  { value: "C++ & DSA", label: "Focus on Trees, Graphs & DP" },
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

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 transition hover:border-zinc-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-white/25"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">{text}</p>}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#f7f4ef]/90 backdrop-blur dark:border-white/10 dark:bg-[#0c0c0e]/86">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-sm font-black tracking-tight text-zinc-950 dark:text-white">
          Arnav Singh
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-600 dark:text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-zinc-950 dark:hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-zinc-950 dark:hover:text-white">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-zinc-950 dark:hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-zinc-950 dark:hover:text-white">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-teal-700/20 bg-teal-700/10 px-3 py-1 text-xs font-bold text-teal-800 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200">
          Lucknow, India
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
          Computer Science Student & Full-Stack Developer
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          5th-semester B.Tech CSE student at Babu Banarasi Das University, Lucknow. I specialize in
          C++/DSA problem-solving and building client-side web applications with React, Next.js, and
          Flask.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-bold text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-800 dark:bg-teal-400 dark:text-zinc-950 dark:hover:bg-teal-300"
          >
            View Featured Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:border-zinc-500 dark:border-white/12 dark:bg-white/[0.04] dark:text-white dark:hover:border-white/30"
          >
            Download Resume
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <FeaturedProject />
    </section>
  );
}

function FeaturedProject() {
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_24px_80px_rgba(20,20,20,0.08)] dark:border-white/10 dark:bg-[#111114] dark:shadow-black/30">
      <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-300">
            Featured Project
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
            {pdflex.title}
          </h2>
          <p className="mt-1 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            {pdflex.subtitle}
          </p>
        </div>
        <a
          href={pdflex.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-2 text-xs font-bold text-zinc-700 transition hover:border-zinc-500 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25"
        >
          <GithubIcon className="h-4 w-4" />
          Source
        </a>
      </div>

      <p className="mt-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{pdflex.summary}</p>

      <div className="mt-6 space-y-3">
        {pdflex.highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
          >
            {highlight}
          </div>
        ))}
      </div>

      <a
        href={pdflex.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-800 dark:bg-teal-400 dark:text-zinc-950 dark:hover:bg-teal-300"
      >
        Try Live Demo (pd-flex.vercel.app)
        <ExternalLink className="h-4 w-4" />
      </a>
    </aside>
  );
}

function MetricsBar() {
  return (
    <section className="border-y border-zinc-200 py-8 dark:border-white/10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.value}
            className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-teal-700/40 hover:shadow-[0_12px_40px_rgba(15,118,110,0.12)] dark:border-white/10 dark:bg-[#111114] dark:hover:border-teal-300/30 dark:hover:shadow-[0_12px_40px_rgba(45,212,191,0.08)]"
          >
            <div className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
              {metric.value}
            </div>
            <div className="mt-2 text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
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
      <SectionHeading eyebrow="About" title="Background & Technical Focus" />
      <div className="max-w-4xl space-y-5 text-base leading-8 text-zinc-700 dark:text-zinc-300">
        <p>
          I&apos;m currently in my 5th semester of B.Tech Computer Science Engineering at Babu Banarasi
          Das University. My primary focus is mastering core C++ data structures and algorithms,
          specifically tree traversals, graph algorithms, recursion, and dynamic programming.
        </p>
        <p>
          Rather than relying strictly on tutorial projects, I focus on building practical utilities
          that solve real constraints like processing heavy PDFs locally in the browser or structuring
          modular Flask APIs.
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
        title="Four projects with clear implementation details"
        text="A concise view of what each project does, the stack behind it, and whether a live demo is available."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.name}
            className="flex min-h-[340px] flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-teal-700/35 hover:shadow-[0_18px_60px_rgba(15,118,110,0.10)] dark:border-white/10 dark:bg-[#111114] dark:hover:border-teal-300/25 dark:hover:shadow-[0_18px_60px_rgba(45,212,191,0.06)]"
          >
            <div>
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="rounded-full border border-teal-700/20 bg-teal-700/10 px-3 py-1 text-xs font-bold text-teal-800 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200">
                  {project.badge}
                </span>
                {project.comingSoon && (
                  <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-bold text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                    Demo Coming Soon
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-5 dark:border-white/10">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-xs font-black text-white transition hover:bg-teal-800 dark:bg-teal-400 dark:text-zinc-950 dark:hover:bg-teal-300"
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
                    ? "border border-zinc-300 text-zinc-700 hover:border-zinc-500 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25"
                    : "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
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
        title="Technical stack"
        text="Grouped by the areas I use most across coursework, problem-solving, and project builds."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-[#111114]"
          >
            <h3 className="text-lg font-black text-zinc-950 dark:text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-400"
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
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_24px_80px_rgba(20,20,20,0.06)] dark:border-white/10 dark:bg-[#111114] dark:shadow-black/20 sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black tracking-tight text-zinc-950 dark:text-white">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Open for Software Engineering Internship opportunities for 2025/2026.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-black text-white transition hover:bg-teal-800 dark:bg-teal-400 dark:text-zinc-950 dark:hover:bg-teal-300"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-black text-zinc-950 transition hover:border-zinc-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-white/30"
            >
              {copied ? <CheckCircle2 className="h-4 w-4 text-teal-600" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3 border-t border-zinc-200 pt-6 dark:border-white/10">
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-700 transition hover:border-zinc-500 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-700 transition hover:border-zinc-500 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-700 transition hover:border-zinc-500 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/25"
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
    <div className="min-h-screen bg-[#f7f4ef] text-zinc-950 selection:bg-teal-700 selection:text-white dark:bg-[#0c0c0e] dark:text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <MetricsBar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
