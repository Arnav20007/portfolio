// ============================================================
// ARNAV.OS — Personal Data
// Honest student portfolio content
// ============================================================

export const personal = {
  name: "Arnav Singh",
  title: "B.Tech CSE Student",
  taglines: ["CSE Student", "C++ / DSA", "React & Next.js", "Python", "Project Builder"],
  email: "arnavsinghas1221@gmail.com",
  phone: "",
  github: "Arnav20007",
  linkedin: "",
  location: "Lucknow, India",
  available: true,
  avatar: "/images/avatar.jpg",
  resume: "/resume.pdf",
  bio: "I am a B.Tech Computer Science student at BBDU, Lucknow. I enjoy solving problems with C++ and building useful web applications.",
  shortBio: "A 5th-semester B.Tech CSE student learning through C++, DSA, and hands-on web projects.",
};

export const skills = [
  {
    category: "Core & Languages",
    items: [
      { name: "C++", level: 85 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Python", level: 78 },
      { name: "JavaScript / TypeScript", level: 75 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Web & Frontend",
    items: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 80 },
      { name: "HTML & CSS", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Python / Flask", level: 75 },
      { name: "Node.js / Express", level: 72 },
      { name: "PostgreSQL / SQLite", level: 74 },
      { name: "REST APIs", level: 80 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: "toolforge",
    name: "ToolForge ATS",
    description: "An in-browser resume keyword matcher and scanner that checks how well a resume aligns with job descriptions without uploading files to a server.",
    longDescription: "I built ToolForge ATS to give students a private, free way to test their resume keywords against job requirements locally in the browser.",
    tech: ["React", "TypeScript", "Tailwind CSS", "PDF.js"],
    github: "https://github.com/Arnav20007/ats",
    demo: "https://toolforge-ats.vercel.app",
    image: "/images/projects/toolforge.png",
    category: "Productivity",
    featured: true,
    achievement: "Runs locally in browser",
  },
  {
    id: "pdflex",
    name: "PDFlex",
    description: "A browser-based tool for merging and splitting PDFs locally using Web Workers without server file uploads.",
    longDescription: "I built PDFlex with PDF.js, pdf-lib, and Web Workers. PDF merging and splitting happen directly in the browser.",
    tech: ["React", "PDF.js", "pdf-lib", "Web Workers"],
    github: "https://github.com/Arnav20007/pdflex",
    demo: "https://pd-flex.vercel.app",
    image: "/images/projects/pdflex.png",
    category: "Productivity",
    featured: true,
    achievement: "Web Worker processing",
  },
  {
    id: "financecalc",
    name: "FinanceCalc",
    description: "A web app for estimating SIP returns, EMI payments, and savings growth, with charts to make the results easier to understand.",
    longDescription: "I built FinanceCalc to bring a few common finance calculations into one place, including SIP estimates, EMI schedules, and savings projections.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/Arnav20007/financecalc",
    demo: "https://financecalc0.vercel.app",
    image: "/images/projects/financecalc.png",
    category: "FinTech",
    featured: true,
    achievement: "SIP & EMI tools",
  },
  {
    id: "moodmate",
    name: "MoodMate",
    description: "A journaling app built during a hackathon. It uses a Flask API and OpenAI to offer reflections on journal entries.",
    longDescription: "I worked on MoodMate as a hackathon project. Users can write journal entries and get a short reflection from the app.",
    tech: ["Next.js", "Python", "Flask", "OpenAI API"],
    github: "https://github.com/Arnav20007/moodmate",
    image: "/images/projects/moodmate.png",
    category: "AI",
    featured: true,
    achievement: "Hackathon Project",
  },
  {
    id: "ascend",
    name: "ASCEND",
    description: "A task manager that adds experience points, levels, and small rewards to a familiar to-do list.",
    longDescription: "I built ASCEND to try out a simple idea: use levels and rewards to make a regular task list more engaging.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Arnav20007/ascend",
    image: "/images/projects/ascend.png",
    category: "Productivity",
    featured: false,
    achievement: "Task + XP loop",
  },
];

export const experience = [
  {
    role: "B.Tech CSE Student",
    company: "Babu Banarasi Das University",
    period: "Current",
    description: "Alongside my coursework, I practise problem-solving in C++, with a focus on trees, graphs, recursion, dynamic programming, and OOP.",
    tech: ["C++", "DSA", "CSE", "Software Engineering"],
  },
  {
    role: "Personal Projects",
    company: "Independent Work",
    period: "Ongoing",
    description: "I have been building small web projects with React, Next.js, Flask, and TypeScript to put what I learn into practice.",
    tech: ["React", "Next.js", "Python", "TypeScript"],
  },
  {
    role: "Learning & Practice",
    company: "Ongoing",
    period: "Ongoing",
    description: "I keep revisiting my projects, improving the code, and learning new concepts by building things myself.",
    tech: ["C++", "DSA", "Git", "GitHub"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Babu Banarasi Das University (BBDU), Lucknow",
    period: "5th Semester (Current)",
    grade: "8.0 / 10 CGPA",
    description: "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks.",
  },
];

export const certificates = [
  { name: "Data Structures & Algorithms", issuer: "Coursework and regular practice", year: "Ongoing", icon: "💻" },
  { name: "Full-Stack Web Development", issuer: "Learning through personal projects", year: "Ongoing", icon: "🌐" },
  { name: "Python and Flask", issuer: "Used in project work", year: "Ongoing", icon: "🐍" },
];

export const terminalCommands: Record<string, string> = {
  help: `Available commands:\n  about     — Who is Arnav?\n  skills    — Tech skills & focus\n  projects  — Built projects\n  contact   — Get in touch\n  clear     — Clear terminal\n  exit      — Exit terminal mode`,
  about: `Name: Arnav Singh\nRole: 5th-semester B.Tech CSE student\nCollege: BBDU, Lucknow\nFocus: C++, DSA, and web development\nStatus: Looking for software engineering internships`,
  skills: `Core Languages : C++, Python, JavaScript/TypeScript, SQL\nFrontend       : React, Next.js, Tailwind CSS\nBackend        : Python (Flask), Node.js\nDatabases      : PostgreSQL, SQLite\nTools          : Git, GitHub`,
  projects: `🚀 MoodMate    — AI mental wellness hackathon project\n💰 FinanceCalc  — Personal finance planning utility\n📄 PDFlex       — Client-side PDF manipulation utility\n⚔️  ASCEND       — Gamified task progression system`,
  contact: `GitHub: github.com/Arnav20007\nEmail and LinkedIn details will be added here soon.`,
};

export const services = [
  {
    name: "Web Application Development",
    desc: "Building responsive web applications with React, Next.js, and TypeScript, with attention to clear layouts and useful details.",
    icon: "💻",
  },
  {
    name: "AI / LLM Integration",
    desc: "Trying out AI APIs in projects such as MoodMate, including a Flask API that sends journal entries for reflection.",
    icon: "🤖",
  },
  {
    name: "Backend & REST APIs",
    desc: "Building and connecting REST APIs with Flask or Node.js, and working with databases such as PostgreSQL and SQLite.",
    icon: "⚙️",
  },
  {
    name: "Project Collaboration",
    desc: "I am open to working with other students on web, hackathon, or open-source projects.",
    icon: "🤝",
  },
];

export const workflow = [
  {
    step: "Discussion",
    desc: "First, we talk through the idea and agree on what the project needs to do.",
    icon: "💬",
  },
  {
    step: "Planning",
    desc: "Then I split the work into smaller tasks and choose tools that fit the project.",
    icon: "📋",
  },
  {
    step: "Development",
    desc: "I build the project in steps and share progress as I go.",
    icon: "🛠️",
  },
  {
    step: "Testing & Review",
    desc: "I try the main flows, check different screen sizes, and fix issues I find.",
    icon: "✅",
  },
  {
    step: "Delivery",
    desc: "I share the finished work, along with notes on how to run or deploy it.",
    icon: "🚀",
  },
];
