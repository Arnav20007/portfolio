"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Copy,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { skills, projects, experience, education, certificates, personal } from "@/lib/data";

const categories = ["All", "AI", "FinTech", "Productivity"];

const highlights = [
  { value: "5th", label: "Semester B.Tech CSE" },
  { value: "8.0", label: "CGPA in CSE" },
  { value: "DSA", label: "C++ Problem Solving" },
  { value: "Projects", label: "Web & AI Tools Built" },
];

const roleFit = [
  "5th-semester B.Tech CSE student actively practicing C++ and Data Structures & Algorithms.",
  "Hands-on experience building practical projects with React, Next.js, Python, and REST APIs.",
  "Dedicated learner seeking Software Engineering Internship opportunities to grow.",
  "Clear communicator eager to contribute positively to collaborative engineering teams.",
];

export default function RecruiterPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCopyEmail = async () => {
    if (!personal.email) return;
    await navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="relative min-h-screen bg-[#faf8f9] text-[#0f172a] font-sans selection:bg-rose-100 selection:text-rose-950 overflow-x-hidden">
      {/* ── Ambient Rose Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] rounded-full opacity-40 blur-[130px]"
          style={{ background: "radial-gradient(circle, #ffe4e6 0%, #fecdd3 30%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-rose-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["Work", "projects"],
              ["Skills", "skills"],
              ["Experience", "experience"],
              ["Education", "education"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-rose-50 hover:text-rose-700 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>

          <a
            href={personal.resume || "/resume.pdf"}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-rose-700 shadow-xs"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </header>

      {/* ── Summary / Hero ── */}
      <section id="summary" className="relative z-10 border-b border-slate-200/80">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
              RECRUITER OVERVIEW
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Arnav Singh — CSE Student & Full-Stack Developer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              5th-semester B.Tech Computer Science Engineering student (8.0 CGPA) at BBDU Lucknow focused on DSA in C++, modern web development (React / Next.js), and building practical software tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-rose-700 shadow-xs"
                >
                  <Mail className="h-4 w-4" />
                  Email Arnav
                </a>
              )}
              {personal.email && (
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-rose-300 hover:bg-rose-50/50 cursor-pointer"
                >
                  {copiedEmail ? <CheckCircle2 className="h-4 w-4 text-rose-600" /> : <Copy className="h-4 w-4" />}
                  {copiedEmail ? "Copied" : "Copy email"}
                </button>
              )}
              {personal.linkedin && (
                <a
                  href={`https://linkedin.com/in/${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-rose-300 hover:bg-rose-50/50"
                >
                  LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-600" />
                {personal.location}
              </span>
              {personal.email && (
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-rose-600" />
                  {personal.email}
                </span>
              )}
              {personal.phone && (
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-rose-600" />
                  {personal.phone}
                </span>
              )}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="border-b border-slate-100 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
                Candidate Signal
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">Key Signals at a Glance</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 py-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-2xl font-black text-rose-600">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold leading-5 text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {roleFit.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-rose-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ── Selected Projects ── */}
      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeader
          eyebrow="Selected Projects"
          title="Practical Engineering & Live Demos"
          text="A focused view of shipped projects, technical decisions, and code repos ready for hiring evaluation."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-rose-600 text-white shadow-xs"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="flex min-h-[320px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all duration-300 hover:border-rose-300 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{project.achievement}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-rose-600 transition-colors"
                  >
                    <Code2 className="h-4 w-4" />
                    Source Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors"
                    >
                      Live Demo
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section id="skills" className="relative z-10 border-y border-slate-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeader
            eyebrow="Competencies"
            title="Core Technical Stack"
            text="Languages, frameworks, and tools used across academic coursework and software projects."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((category) => (
              <div
                key={category.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                  <span className="text-xs font-bold text-rose-600">{category.items.length} tools</span>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">{skill.name}</span>
                        <span className="font-mono text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full bg-rose-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Practical Work & Open Collaboration"
          text="Hands-on roles and open-source contributions demonstrating engineering consistency and team readiness."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-rose-300 transition"
            >
              <div>
                <BriefcaseBusiness className="mb-4 h-6 w-6 text-rose-600" />
                <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                <p className="mt-1 font-bold text-rose-600">{item.company}</p>
                <p className="mt-2 text-xs font-semibold text-slate-500">{item.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Education & Certifications ── */}
      <section id="education" className="relative z-10 border-y border-slate-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeader
            eyebrow="Academic Background"
            title="Education & Credentials"
            text="Formal undergraduate education in Computer Science and verified technical credentials."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <GraduationCap className="h-6 w-6 text-rose-600 mb-4" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">Education</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">{education[0].degree}</h3>
              <div className="mt-4">
                <p className="font-bold text-rose-600">{education[0].institution}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{education[0].period} &nbsp;|&nbsp; {education[0].grade}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{education[0].description}</p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <Award className="h-6 w-6 text-rose-600 mb-4" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">Certifications</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">Relevant Credentials</h3>
              <div className="mt-4 flex flex-col gap-3">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.name}
                    className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3.5"
                  >
                    <div>
                      <p className="font-semibold text-sm text-slate-900">{certificate.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{certificate.issuer}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-rose-600 shrink-0">{certificate.year}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Contact / Recruiter CTA ── */}
      <section id="contact" className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center md:px-8">
        <Sparkles className="mx-auto mb-5 h-7 w-7 text-rose-600" />
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Interested in a conversation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          I am actively preparing for software engineering roles, internship opportunities, and technical interviews.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-rose-700 shadow-xs"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
          )}
          <a
            href={personal.resume || "/resume.pdf"}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 transition-colors hover:border-rose-300 hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}
