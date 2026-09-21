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
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { skills, projects, experience, education, certificates, personal } from "@/lib/data";

const categories = ["All", "AI", "FinTech", "Productivity"];

const highlights = [
  { value: "5th", label: "semester B.Tech CSE" },
  { value: "8.0", label: "CGPA in CSE" },
  { value: "DSA", label: "C++ problem solving" },
  { value: "Projects", label: "web & AI tools built" },
];

const roleFit = [
  "5th-semester B.Tech CSE student actively practicing C++ and Data Structures & Algorithms.",
  "Hands-on experience building practical projects with React, Next.js, Python, and REST APIs.",
  "Dedicated learner seeking Software Engineering Internship opportunities to grow.",
  "Clear communicator eager to contribute positively to collaborative engineering teams.",
];

type PanelIcon = typeof GraduationCap;

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
    <main data-recruiter className="min-h-screen bg-[#f7f4ef] text-[#151515] selection:bg-[#1f4e5f] selection:text-white">
      <style>{recruiterStyles}</style>
      <header className="sticky top-0 z-50 border-b border-[#d9d1c5] bg-[#f7f4ef]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4c463e] transition-colors hover:text-[#151515]"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["Work", "projects"],
              ["Skills", "skills"],
              ["Experience", "experience"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#5f574d] transition-colors hover:bg-white hover:text-[#151515]"
              >
                {label}
              </button>
            ))}
          </nav>

          <a
            href={personal.resume}
            download
            className="inline-flex items-center gap-2 rounded-md bg-[#151515] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2b2926]"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </header>

      <section id="summary" className="border-b border-[#ded6ca] bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-[#151515] sm:text-6xl lg:text-7xl">
              Arnav Singh — CSE student building software and digital projects.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c463e] md:text-xl">
              5th-semester B.Tech Computer Science Engineering student focused on DSA in C++, modern web development, and building practical projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-[#1f4e5f] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#183d4a]"
              >
                <Mail className="h-4 w-4" />
                Email Arnav
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-[#c9beb0] bg-white px-5 py-3 text-sm font-bold text-[#151515] transition-colors hover:border-[#151515]"
              >
                {copiedEmail ? <CheckCircle2 className="h-4 w-4 text-[#2f5f4f]" /> : <Copy className="h-4 w-4" />}
                {copiedEmail ? "Copied" : "Copy email"}
              </button>
              <a
                href={`https://linkedin.com/in/${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#c9beb0] px-5 py-3 text-sm font-bold text-[#151515] transition-colors hover:border-[#151515] hover:bg-white"
              >
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#5f574d]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {personal.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {personal.phone}
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-lg border border-[#d4cabd] bg-white p-5 shadow-[0_20px_60px_rgba(44,38,31,0.08)]"
          >
            <div className="border-b border-[#e7dfd4] pb-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7a6f62]">
                Why interview
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#151515]">Strong signal in one page</h2>
            </div>

            <div className="grid grid-cols-2 gap-3 py-5">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-md border border-[#ece4d9] bg-[#fbfaf7] p-4">
                  <div className="text-2xl font-black text-[#1f4e5f]">{item.value}</div>
                  <div className="mt-1 text-sm font-medium leading-5 text-[#5f574d]">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {roleFit.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-[#3e3933]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2f5f4f]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects with product judgment, not just code."
          text="A compact view of shipped systems, implementation choices, and outcomes a hiring team can evaluate quickly."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md border px-4 py-2 text-sm font-bold transition-colors ${
                selectedCategory === category
                  ? "border-[#1f4e5f] bg-[#1f4e5f] text-white"
                  : "border-[#d4cabd] bg-white text-[#4c463e] hover:border-[#151515]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="flex min-h-[320px] flex-col justify-between rounded-lg border border-[#d4cabd] bg-white p-6 shadow-[0_16px_40px_rgba(44,38,31,0.06)]"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-[#edf3f1] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1f4e5f]">
                      {project.category}
                    </span>
                    <span className="text-sm font-semibold text-[#7a6f62]">{project.achievement}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#151515]">{project.name}</h3>
                  <p className="mt-3 text-base leading-7 text-[#4c463e]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-md border border-[#e7dfd4] px-3 py-1 text-xs font-semibold text-[#5f574d]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#ece4d9] pt-5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#151515] hover:text-[#1f4e5f]">
                    <Code2 className="h-4 w-4" />
                    Source
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#1f4e5f] hover:text-[#183d4a]">
                    Live demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section id="skills" className="border-y border-[#ded6ca] bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a6f62]">Competencies</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#151515] sm:text-4xl">
              Core Technical Stack
            </h2>
            <p className="mt-3 text-base text-[#4c463e]">
              Engineered with modern languages, web architectures, and scalable cloud services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((category) => (
              <div
                key={category.category}
                className="rounded-xl border border-[#d4cabd] bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-6 flex items-center justify-between border-b border-[#ece4d9] pb-4">
                  <h3 className="text-lg font-bold text-[#151515]">{category.category}</h3>
                  <span className="text-xs font-semibold text-[#7a6f62]">{category.items.length} proficiencies</span>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#151515]">{skill.name}</span>
                        <span className="font-medium text-[#7a6f62]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ece4d9]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full bg-[#1f4e5f]"
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

      <section id="experience" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeader
          eyebrow="Experience"
          title="Evidence of ownership and delivery."
          text="Internship, freelance, and open-source work with enough breadth to adapt quickly in a team setting."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-lg border border-[#d4cabd] bg-white p-6 shadow-[0_16px_40px_rgba(44,38,31,0.05)]">
              <BriefcaseBusiness className="mb-5 h-5 w-5 text-[#1f4e5f]" />
              <h3 className="text-xl font-black text-[#151515]">{item.role}</h3>
              <p className="mt-1 font-bold text-[#1f4e5f]">{item.company}</p>
              <p className="mt-2 text-sm font-semibold text-[#7a6f62]">{item.period}</p>
              <p className="mt-5 text-sm leading-6 text-[#4c463e]">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-md bg-[#f7f4ef] px-2.5 py-1 text-xs font-semibold text-[#5f574d]">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="border-y border-[#ded6ca] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div style={{display:"grid", gridTemplateColumns:"repeat(2, minmax(0,1fr))", gap:"20px"}} className="edu-grid">
            <article style={{background:"#f7f4ef", border:"1px solid #d4cabd", borderRadius:"8px", padding:"28px"}}>
              <GraduationCap style={{width:"24px", height:"24px", color:"#1f4e5f", marginBottom:"16px"}} />
              <p style={{fontSize:"12px", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"#7a6f62"}}>Education</p>
              <h3 style={{marginTop:"8px", fontSize:"22px", fontWeight:900, color:"#151515", lineHeight:1.2}}>{education[0].degree}</h3>
              <div style={{marginTop:"20px"}}>
                <p style={{fontWeight:700, color:"#1f4e5f"}}>{education[0].institution}</p>
                <p style={{marginTop:"6px", fontSize:"14px", fontWeight:600, color:"#7a6f62"}}>{education[0].period} &nbsp;|&nbsp; {education[0].grade}</p>
                <p style={{marginTop:"16px", fontSize:"15px", lineHeight:"1.7", color:"#4c463e"}}>{education[0].description}</p>
              </div>
            </article>

            <article style={{background:"#f7f4ef", border:"1px solid #d4cabd", borderRadius:"8px", padding:"28px"}}>
              <Award style={{width:"24px", height:"24px", color:"#1f4e5f", marginBottom:"16px"}} />
              <p style={{fontSize:"12px", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"#7a6f62"}}>Certifications</p>
              <h3 style={{marginTop:"8px", fontSize:"22px", fontWeight:900, color:"#151515", lineHeight:1.2}}>Relevant credentials</h3>
              <div style={{marginTop:"20px", display:"flex", flexDirection:"column", gap:"10px"}}>
                {certificates.map((certificate) => (
                  <div key={certificate.name} style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"12px", background:"white", border:"1px solid #e7dfd4", borderRadius:"6px", padding:"12px 14px"}}>
                    <div>
                      <p style={{fontWeight:700, fontSize:"14px", color:"#151515"}}>{certificate.name}</p>
                      <p style={{fontSize:"13px", color:"#7a6f62", marginTop:"2px"}}>{certificate.issuer}</p>
                    </div>
                    <span style={{fontSize:"13px", fontWeight:900, color:"#1f4e5f", flexShrink:0}}>{certificate.year}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>


      <section id="contact" className="mx-auto max-w-5xl px-5 py-16 text-center md:px-8 md:py-24">
        <Sparkles className="mx-auto mb-5 h-6 w-6 text-[#1f4e5f]" />
        <h2 className="text-4xl font-black tracking-normal text-[#151515] sm:text-5xl">
          Interested in a conversation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4c463e]">
          I am happy to discuss engineering roles, internship-to-full-time opportunities, or technical interviews.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 rounded-md bg-[#151515] px-5 py-3 text-sm font-bold text-white hover:bg-[#2b2926]">
            <Mail className="h-4 w-4" />
            Send email
          </a>
          <a href={personal.resume} download className="inline-flex items-center gap-2 rounded-md border border-[#c9beb0] bg-white px-5 py-3 text-sm font-bold text-[#151515] hover:border-[#151515]">
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </div>
      </section>
    </main>
  );
}

const recruiterStyles = `
  [data-recruiter] { background: #f7f4ef; color: #151515; font-family: Arial, Helvetica, sans-serif; overflow-x: hidden; }
  [data-recruiter] * { box-sizing: border-box; min-width: 0; }
  [data-recruiter] header { position: sticky; top: 0; z-index: 20; background: rgba(247,244,239,.96); border-bottom: 1px solid #d9d1c5; }
  [data-recruiter] header > div { width: 100%; max-width: 1280px; min-height: 72px; margin: 0 auto; padding: 0 clamp(16px,4vw,32px); display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  [data-recruiter] header a, [data-recruiter] header button { font-size: 14px; line-height: 1; font-weight: 700; }
  [data-recruiter] header nav { display: flex; align-items: center; gap: 4px; }
  [data-recruiter] header nav button { padding: 10px 12px; border: 0; background: transparent; color: #5f574d; cursor: pointer; }
  [data-recruiter] header > div > a:last-child { padding: 11px 16px; background: #151515; color: white; border-radius: 4px; text-decoration: none; }
  [data-recruiter] #summary > div { width: 100%; max-width: 1280px; margin: 0 auto; padding: 96px clamp(16px,4vw,32px); display: grid; grid-template-columns: minmax(0,1.08fr) minmax(0,.92fr); align-items: start; gap: 48px; }
  [data-recruiter] #summary h1 { margin: 16px 0 0; font-size: clamp(32px,5.2vw,78px); line-height: 1.03; letter-spacing: 0; font-weight: 800; overflow-wrap: break-word; }
  [data-recruiter] #summary p { max-width: 680px; }
  [data-recruiter] #summary > div > div:first-child > div { display: flex; flex-wrap: wrap; gap: 10px; }
  [data-recruiter] #summary > div > div:first-child > div a, [data-recruiter] #summary > div > div:first-child > div button { padding: 13px 16px; border-radius: 4px; font-size: 14px; font-weight: 700; }
  [data-recruiter] #summary aside { padding: 28px; border: 1px solid #d4cabd; border-radius: 8px; background: white; box-shadow: 0 16px 36px rgba(44,38,31,.08); }
  [data-recruiter] #summary aside h2 { margin: 8px 0 0; font-size: 28px; line-height: 1.15; }
  [data-recruiter] #summary aside > div:nth-child(2) { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 22px 0; }
  [data-recruiter] #summary aside > div:nth-child(2) > div { padding: 16px; border: 1px solid #ece4d9; border-radius: 5px; }
  [data-recruiter] section#projects, [data-recruiter] section#experience { width: 100%; max-width: 1280px; margin: 0 auto; padding: 96px clamp(16px,4vw,32px); }
  [data-recruiter] section#skills > div, [data-recruiter] section:not(#summary):not(#projects):not(#skills):not(#experience):not(#contact) > div { width: 100%; max-width: 1280px; margin: 0 auto; padding: 96px clamp(16px,4vw,32px); }
  [data-recruiter] h2 { letter-spacing: 0; }
  [data-recruiter] #projects > div:nth-child(3), [data-recruiter] #experience > div:last-child { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px; }
  [data-recruiter] #projects article, [data-recruiter] #experience article { padding: 28px; border: 1px solid #d4cabd; border-radius: 8px; background: white; }
  [data-recruiter] #projects article h3, [data-recruiter] #experience article h3 { margin-top: 18px; font-size: 24px; line-height: 1.2; }
  [data-recruiter] #contact { width: 100%; max-width: 900px; margin: 0 auto; padding: 96px clamp(16px,4vw,32px); }
  @media (max-width: 1024px) {
    [data-recruiter] #summary > div { grid-template-columns: 1fr; padding-top: 64px; padding-bottom: 64px; gap: 40px; }
    [data-recruiter] #projects > div:nth-child(3), [data-recruiter] #experience > div:last-child { grid-template-columns: 1fr; }
    [data-recruiter] .edu-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 760px) {
    [data-recruiter] header > div { min-height: 62px; }
    [data-recruiter] header nav { display: none; }
    [data-recruiter] #summary > div { display: flex; flex-direction: column; padding-top: 48px; padding-bottom: 48px; gap: 32px; }
    [data-recruiter] #summary aside { margin-top: 0; }
    [data-recruiter] #summary h1 { font-size: clamp(28px,8vw,42px); }
    [data-recruiter] #skills > div { display: flex; flex-direction: column; }
    [data-recruiter] section#projects, [data-recruiter] section#experience, [data-recruiter] section#skills > div, [data-recruiter] section:not(#summary):not(#projects):not(#skills):not(#experience):not(#contact) > div, [data-recruiter] #contact { padding-top: 56px; padding-bottom: 56px; }
    [data-recruiter] .edu-grid { grid-template-columns: 1fr !important; }
  }
`;

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
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a6f62]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-[#151515] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#4c463e]">{text}</p>
    </div>
  );
}

function InfoPanel({
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  icon: PanelIcon;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-lg border border-[#d4cabd] bg-[#f7f4ef] p-6">
      <Icon className="mb-5 h-6 w-6 text-[#1f4e5f]" />
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7a6f62]">{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-black text-[#151515]">{title}</h3>
      <div className="mt-5">{children}</div>
    </article>
  );
}
