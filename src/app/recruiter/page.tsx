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
  { value: "C++", label: "Trees, Graphs & DP" },
  { value: "Projects", label: "Web & Python Tools Built" },
];

const roleFit = [
  "5th-semester B.Tech CSE student actively practicing C++ problem-solving and algorithms.",
  "Hands-on experience building practical web applications with React, Next.js, and Python Flask.",
  "Eager to learn and contribute in a software engineering internship role.",
  "Comfortable with Git workflows, clear written communication, and open to mentorship.",
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
    <main className="relative min-h-screen bg-white text-[#141C3A] font-sans selection:bg-[#EBD8FF] selection:text-[#5600C7] overflow-x-hidden">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#E6ECF8] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#141C3A] transition-colors hover:text-[#6E07F3]"
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
                className="rounded-full px-4 py-1.5 text-xs font-mono font-bold text-[#5A6275] transition-colors hover:bg-purple-50 hover:text-[#6E07F3] cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>

          <a
            href={personal.resume || "/resume.pdf"}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#6E07F3] px-5 py-2 text-xs font-mono font-bold text-[#6E07F3] transition-all hover:bg-[#6E07F3] hover:text-white shadow-xs"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </header>

      {/* ── Summary / Hero ── */}
      <section id="summary" className="relative z-10 border-b border-[#E6ECF8] bg-gradient-to-b from-[#FAF5FF]/40 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-[#6E07F3] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
              RECRUITER OVERVIEW
            </span>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-[#141C3A] sm:text-5xl lg:text-6xl font-display">
              Arnav Singh — CSE Student &amp; Aspiring Developer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5A6275]">
              5th-semester B.Tech Computer Science Engineering student (8.0 CGPA) at BBDU Lucknow practicing C++ problem-solving, modern frontend development (React / Next.js), and building practical web tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#6E07F3] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#5600c7] shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  Email Arnav
                </a>
              )}
              {personal.email && (
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E6ECF8] bg-white px-5 py-3.5 text-sm font-bold text-[#141C3A] transition-colors hover:border-[#6E07F3] hover:bg-purple-50/50 cursor-pointer"
                >
                  {copiedEmail ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  {copiedEmail ? "Copied" : "Copy email"}
                </button>
              )}
              {personal.linkedin && (
                <a
                  href={`https://linkedin.com/in/${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E6ECF8] bg-white px-5 py-3.5 text-sm font-bold text-[#141C3A] transition-colors hover:border-[#6E07F3] hover:bg-purple-50/50"
                >
                  LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#5A6275]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#6E07F3]" />
                {personal.location}
              </span>
              {personal.email && (
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#6E07F3]" />
                  {personal.email}
                </span>
              )}
              {personal.phone && (
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#6E07F3]" />
                  {personal.phone}
                </span>
              )}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-[#E6ECF8] bg-white p-8 shadow-xl"
          >
            <div className="border-b border-[#E6ECF8] pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E07F3]">
                Candidate Overview
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#141C3A] font-display">Key Highlights</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 py-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#E6ECF8] bg-[#F7F9FC] p-4 text-center">
                  <div className="text-2xl font-black text-[#6E07F3] font-display">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold leading-5 text-[#5A6275]">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {roleFit.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-relaxed text-[#141C3A]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#6E07F3]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ── Selected Projects ── */}
      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeader
          eyebrow="Selected Projects"
          title="Practical Work & Open Source Code"
          text="A clear summary of software projects built to test concepts, learn new frameworks, and solve real user needs."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#6E07F3] text-white shadow-xs"
                  : "border border-[#E6ECF8] bg-white text-[#5A6275] hover:bg-slate-50"
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
                className="flex min-h-[300px] flex-col justify-between rounded-3xl border border-[#E6ECF8] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#6E07F3]/40 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-purple-50 border border-purple-100 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#6E07F3]">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-600">{project.achievement}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#141C3A] font-display">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A6275]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-md border border-[#E6ECF8] bg-slate-50 px-2.5 py-1 text-xs font-mono text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#E6ECF8] pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#5A6275] hover:text-[#6E07F3] transition-colors"
                  >
                    <Code2 className="h-4 w-4" />
                    Source Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#6E07F3] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#5600c7] transition-all shadow-xs"
                    >
                      Live Demo
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section id="skills" className="relative z-10 border-y border-[#E6ECF8] bg-[#FAF5FF]/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <SectionHeader
            eyebrow="Competencies"
            title="Core Technical Stack"
            text="Languages, frameworks, and tools used across academic coursework and software projects."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((category) => (
              <div
                key={category.category}
                className="rounded-3xl border border-[#E6ECF8] bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex items-center justify-between border-b border-[#E6ECF8] pb-4">
                  <h3 className="text-lg font-bold text-[#141C3A] font-display">{category.category}</h3>
                  <span className="text-xs font-mono font-bold text-[#6E07F3]">{category.items.length} tools</span>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#141C3A]">{skill.name}</span>
                        <span className="font-mono text-[#5A6275]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full bg-[#6E07F3]"
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
      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Practical Work &amp; Open Collaboration"
          text="Independent project work, academic training, and collaborative development."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="flex flex-col justify-between rounded-3xl border border-[#E6ECF8] bg-white p-8 shadow-sm hover:border-[#6E07F3]/40 hover:shadow-xl transition-all"
            >
              <div>
                <BriefcaseBusiness className="mb-4 h-6 w-6 text-[#6E07F3]" />
                <h3 className="text-xl font-bold text-[#141C3A] font-display">{item.role}</h3>
                <p className="mt-1 font-bold text-[#6E07F3] text-sm">{item.company}</p>
                <p className="mt-2 text-xs font-mono text-[#5A6275]">{item.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#5A6275]">{item.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[#E6ECF8] pt-4">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-md border border-[#E6ECF8] bg-slate-50 px-2.5 py-1 text-xs font-mono text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Education & Certifications ── */}
      <section id="education" className="relative z-10 border-y border-[#E6ECF8] bg-[#FAF5FF]/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <SectionHeader
            eyebrow="Academic Background"
            title="Education &amp; Coursework"
            text="Formal undergraduate education in Computer Science and verified technical credentials."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-[#E6ECF8] bg-white p-8 shadow-sm">
              <GraduationCap className="h-6 w-6 text-[#6E07F3] mb-4" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E07F3]">Education</p>
              <h3 className="mt-2 text-2xl font-black text-[#141C3A] font-display">{education[0].degree}</h3>
              <div className="mt-4">
                <p className="font-bold text-[#6E07F3]">{education[0].institution}</p>
                <p className="mt-1 text-xs font-mono text-[#5A6275]">{education[0].period} &nbsp;|&nbsp; {education[0].grade}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#5A6275]">{education[0].description}</p>
              </div>
            </article>

            <article className="rounded-3xl border border-[#E6ECF8] bg-white p-8 shadow-sm">
              <Award className="h-6 w-6 text-[#6E07F3] mb-4" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E07F3]">Certifications</p>
              <h3 className="mt-2 text-2xl font-black text-[#141C3A] font-display">Relevant Credentials</h3>
              <div className="mt-4 flex flex-col gap-3">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-[#E6ECF8] bg-[#F7F9FC] p-4"
                  >
                    <div>
                      <p className="font-semibold text-sm text-[#141C3A]">{certificate.name}</p>
                      <p className="text-xs text-[#5A6275] mt-0.5">{certificate.issuer}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#6E07F3] shrink-0">{certificate.year}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Contact / Recruiter CTA ── */}
      <section id="contact" className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center md:px-8">
        <Sparkles className="mx-auto mb-5 h-7 w-7 text-[#6E07F3]" />
        <h2 className="text-4xl font-black tracking-tight text-[#141C3A] sm:text-5xl font-display">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#5A6275]">
          I am actively preparing for software engineering roles, internship opportunities, and technical interviews.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#6E07F3] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#5600c7] shadow-md shadow-purple-500/20"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </a>
          )}
          <a
            href={personal.resume || "/resume.pdf"}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#6E07F3] bg-white px-8 py-3.5 text-sm font-bold text-[#6E07F3] transition-colors hover:bg-[#6E07F3] hover:text-white"
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
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E07F3]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#141C3A] sm:text-4xl font-display">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-[#5A6275]">{text}</p>
    </div>
  );
}
