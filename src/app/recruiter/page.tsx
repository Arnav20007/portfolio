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
    await navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="relative min-h-screen bg-[#050807] text-[#F4EFEA] font-sans selection:bg-[#10B981] selection:text-white overflow-x-hidden">
      {/* ── Background Ambient Emerald & Cyan Glow Orbs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] rounded-full opacity-20 blur-[190px]"
          style={{ background: "radial-gradient(circle, #10B981 0%, #06B6D4 40%, #047857 70%, transparent 85%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[700px] h-[700px] rounded-full opacity-15 blur-[180px]"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, #0891B2 50%, transparent 80%)" }}
        />
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09120F]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#CBD5E1] transition-colors hover:text-white"
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
                className="rounded-md px-3 py-2 text-sm font-medium text-[#94A3B8] transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>

          <a
            href={personal.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#10B981] px-5 py-2 text-sm font-bold text-[#050807] transition-all hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </header>

      {/* ── Summary / Hero ── */}
      <section id="summary" className="relative z-10 border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
              RECRUITER OVERVIEW
            </span>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-[#F4EFEA] sm:text-5xl lg:text-6xl">
              Arnav Singh — CSE Student & Full-Stack Developer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#94A3B8]">
              5th-semester B.Tech Computer Science Engineering student (8.0 CGPA) at BBDU Lucknow focused on DSA in C++, modern web development (React / Next.js), and building practical software tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#10B981] px-5 py-3 text-sm font-bold text-[#050807] transition-all hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <Mail className="h-4 w-4" />
                Email Arnav
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#09120F] px-5 py-3 text-sm font-bold text-[#F4EFEA] transition-colors hover:border-[#10B981] cursor-pointer"
              >
                {copiedEmail ? <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> : <Copy className="h-4 w-4" />}
                {copiedEmail ? "Copied" : "Copy email"}
              </button>
              <a
                href={`https://linkedin.com/in/${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#09120F] px-5 py-3 text-sm font-bold text-[#F4EFEA] transition-colors hover:border-[#10B981]"
              >
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#94A3B8]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#10B981]" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#10B981]" />
                {personal.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#10B981]" />
                {personal.phone}
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-[#09120F]/90 p-7 shadow-2xl backdrop-blur-xl"
          >
            <div className="border-b border-white/10 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#10B981]">
                Candidate Signal
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#F4EFEA]">Key Signals at a Glance</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 py-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-2xl font-black text-[#10B981]">{item.value}</div>
                  <div className="mt-1 text-xs font-medium leading-5 text-[#94A3B8]">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {roleFit.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-relaxed text-[#CBD5E1]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#10B981]" />
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
              className={`rounded-lg px-4 py-2 text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#10B981] text-[#050807] shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "border border-white/10 bg-[#09120F] text-[#94A3B8] hover:text-white hover:border-white/20"
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
                className="flex min-h-[320px] flex-col justify-between rounded-2xl border border-white/10 bg-[#09120F]/90 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-[#10B981]/40"
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-[#10B981]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#10B981]">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-[#94A3B8]">{project.achievement}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#F4EFEA]">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-[#CBD5E1]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#CBD5E1] hover:text-[#10B981] transition-colors"
                  >
                    <Code2 className="h-4 w-4" />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#10B981] hover:text-emerald-300 transition-colors"
                  >
                    Live Demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section id="skills" className="relative z-10 border-y border-white/10 bg-[#09120F]/50 backdrop-blur-sm">
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
                className="rounded-2xl border border-white/10 bg-[#09120F]/90 p-6 shadow-xl backdrop-blur-xl"
              >
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg font-bold text-[#F4EFEA]">{category.category}</h3>
                  <span className="text-xs font-medium text-[#10B981]">{category.items.length} tools</span>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#CBD5E1]">{skill.name}</span>
                        <span className="font-mono text-[#94A3B8]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full bg-[#10B981]"
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
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#09120F]/90 p-7 shadow-xl backdrop-blur-xl transition-all hover:border-[#10B981]/30"
            >
              <div>
                <BriefcaseBusiness className="mb-4 h-6 w-6 text-[#10B981]" />
                <h3 className="text-xl font-black text-[#F4EFEA]">{item.role}</h3>
                <p className="mt-1 font-bold text-[#10B981]">{item.company}</p>
                <p className="mt-2 text-xs font-semibold text-[#94A3B8]">{item.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">{item.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-[#CBD5E1]">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Education & Certifications ── */}
      <section id="education" className="relative z-10 border-y border-white/10 bg-[#09120F]/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeader
            eyebrow="Academic Background"
            title="Education & Credentials"
            text="Formal undergraduate education in Computer Science and verified technical credentials."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#09120F]/90 p-7 shadow-xl backdrop-blur-xl">
              <GraduationCap className="h-6 w-6 text-[#10B981] mb-4" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#10B981]">Education</p>
              <h3 className="mt-2 text-2xl font-black text-[#F4EFEA]">{education[0].degree}</h3>
              <div className="mt-4">
                <p className="font-bold text-[#10B981]">{education[0].institution}</p>
                <p className="mt-1 text-xs font-semibold text-[#94A3B8]">{education[0].period} &nbsp;|&nbsp; {education[0].grade}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">{education[0].description}</p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#09120F]/90 p-7 shadow-xl backdrop-blur-xl">
              <Award className="h-6 w-6 text-[#10B981] mb-4" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#10B981]">Certifications</p>
              <h3 className="mt-2 text-2xl font-black text-[#F4EFEA]">Relevant Credentials</h3>
              <div className="mt-4 flex flex-col gap-3">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.name}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                  >
                    <div>
                      <p className="font-semibold text-sm text-[#F4EFEA]">{certificate.name}</p>
                      <p className="text-xs text-[#94A3B8] mt-0.5">{certificate.issuer}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#10B981] shrink-0">{certificate.year}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Contact / Recruiter CTA ── */}
      <section id="contact" className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center md:px-8">
        <Sparkles className="mx-auto mb-5 h-7 w-7 text-[#10B981]" />
        <h2 className="text-4xl font-black tracking-tight text-[#F4EFEA] sm:text-5xl">
          Interested in a conversation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">
          I am actively preparing for software engineering roles, internship opportunities, and technical interviews.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-sm font-bold text-[#050807] transition-all hover:bg-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            <Mail className="h-4 w-4" />
            Send Email
          </a>
          <a
            href={personal.resume}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#09120F] px-6 py-3.5 text-sm font-bold text-[#F4EFEA] transition-colors hover:border-[#10B981]"
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
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#10B981]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-[#F4EFEA] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-[#94A3B8]">{text}</p>
    </div>
  );
}
