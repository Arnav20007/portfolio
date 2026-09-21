// ============================================================
// ARNAV.OS — Personal Data
// Honest student portfolio content
// ============================================================

export const personal = {
  name: "Arnav Singh",
  title: "B.Tech CSE Student",
  taglines: ["CSE Student", "C++ / DSA", "React & Next.js", "Python", "Project Builder"],
  email: "arnav@example.com",
  phone: "+91 98765 43210",
  github: "arnavsingh",
  linkedin: "arnav-singh",
  location: "India",
  available: true,
  avatar: "/images/avatar.jpg",
  resume: "/resume.pdf",
  bio: "B.Tech Computer Science Engineering student focused on DSA, software engineering, and building practical projects with modern technologies.",
  shortBio: "5th-semester B.Tech CSE student. Focused on C++, DSA, and building practical web and AI projects.",
};

export const funFacts = [
  "I drink chai while debugging code ☕",
  "Chess is my favorite way to practice strategic thinking ♟️",
  "Late-night coding sessions are when I learn the fastest 🌙",
  "I enjoy breaking down complex DSA problems into simple patterns 💡",
  "Gym + code = my daily balance ritual 🏋️",
  "Always curious to learn how systems work under the hood 🔍",
];

export const bucketList = [
  { item: "Crack a Software Engineering Internship", done: false, emoji: "💼" },
  { item: "Solve 500+ DSA problems", done: false, emoji: "💻" },
  { item: "Build an open-source project used by developers", done: false, emoji: "🚀" },
  { item: "Travel across Japan", done: false, emoji: "🇯🇵" },
  { item: "Summit a Himalayan peak", done: false, emoji: "🏔️" },
  { item: "Give a technical talk or workshop", done: false, emoji: "🎤" },
];

export const hobbies = [
  { name: "Chess", icon: "♟️", description: "Strategic thinking & pattern recognition" },
  { name: "Gym", icon: "🏋️", description: "Discipline & daily consistency" },
  { name: "Music", icon: "🎵", description: "Lo-fi beats while programming" },
  { name: "Reading", icon: "📚", description: "Tech blogs & computer science concepts" },
  { name: "Coding Projects", icon: "💻", description: "Experimenting with new tools" },
];

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
    id: "moodmate",
    name: "MoodMate",
    description: "An AI-assisted mental wellness project built for a hackathon, combining journaling, sentiment analysis, mood tracking, and conversational experiences with an India-focused approach.",
    longDescription: "MoodMate was built for a hackathon to explore how sentiment analysis and structured conversational prompts can help users reflect on their thoughts through daily journaling.",
    tech: ["Next.js", "Python", "Flask", "OpenAI API"],
    github: "https://github.com/arnavsingh/moodmate",
    demo: "https://moodmate.vercel.app",
    image: "/images/projects/moodmate.png",
    category: "AI",
    featured: true,
    achievement: "Hackathon Project",
  },
  {
    id: "financecalc",
    name: "FinanceCalc",
    description: "A web-based financial calculator covering common calculations such as SIP, EMI, and other personal-finance planning utilities.",
    longDescription: "A clean, client-side financial calculator suite built to simplify personal finance planning including SIP compounding, EMI estimates, and savings projections.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/arnavsingh/financecalc",
    demo: "https://financecalc.vercel.app",
    image: "/images/projects/financecalc.png",
    category: "FinTech",
    featured: true,
    achievement: "Financial Planning",
  },
  {
    id: "pdflex",
    name: "PDFlex",
    description: "A browser-based PDF utility focused on common operations such as merging, splitting, compression, conversion, and other PDF workflows while keeping file processing on the client where supported.",
    longDescription: "An in-browser PDF manipulation tool utilizing PDF.js and pdf-lib in client Web Workers to perform document splitting and merging locally without uploading files.",
    tech: ["React", "PDF.js", "pdf-lib", "Web Workers"],
    github: "https://github.com/arnavsingh/pdflex",
    demo: "https://pdflex.vercel.app",
    image: "/images/projects/pdflex.png",
    category: "Productivity",
    featured: true,
    achievement: "Client-Side Processing",
  },
  {
    id: "ascend",
    name: "ASCEND",
    description: "A gamified productivity system that combines task management with RPG-style progression, helping users turn daily tasks into a structured progression system.",
    longDescription: "A task management web app designed to make productivity engaging by structuring daily routines into quest-like progression mechanics.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/arnavsingh/ascend",
    demo: "https://ascend-os.vercel.app",
    image: "/images/projects/ascend.png",
    category: "Productivity",
    featured: false,
    achievement: "Gamified Productivity",
  },
];

export const experience = [
  {
    role: "B.Tech CSE — Student",
    company: "University Coursework & DSA",
    period: "2023 - Present",
    description: "Building software projects alongside coursework while developing problem-solving skills through C++ and DSA practice.",
    tech: ["C++", "DSA", "CSE", "Software Engineering"],
  },
  {
    role: "Independent Projects",
    company: "Self-Directed",
    period: "2025 - Present",
    description: "Designing and building independent software projects to practice frontend development, backend systems, AI integrations, and product development.",
    tech: ["React", "Next.js", "Python", "TypeScript"],
  },
  {
    role: "Personal Development",
    company: "Continuous Learning",
    period: "Ongoing",
    description: "Actively improving programming fundamentals, DSA, software engineering, and project-building skills through consistent hands-on practice.",
    tech: ["C++", "DSA", "Git", "GitHub"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "XYZ Institute of Technology",
    period: "2023 - Present (5th Semester)",
    grade: "8.0 / 10 CGPA",
    description: "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks.",
  },
];

export const certificates = [
  { name: "Data Structures & Algorithms in C++", issuer: "Coursework / Online", year: "2024", icon: "💻" },
  { name: "Full-Stack Web Development", issuer: "Project-Based Learning", year: "2024", icon: "🌐" },
  { name: "Python Programming", issuer: "Coursework", year: "2023", icon: "🐍" },
];

export const techStack = [
  "C++", "DSA", "React", "Next.js", "TypeScript",
  "Python", "Flask", "Node.js", "PostgreSQL", "SQLite",
  "Tailwind CSS", "Git", "GitHub"
];

export const terminalCommands: Record<string, string> = {
  help: `Available commands:\n  about     — Who is Arnav?\n  skills    — Tech skills & focus\n  projects  — Built projects\n  contact   — Get in touch\n  clear     — Clear terminal\n  exit      — Exit terminal mode`,
  about: `Name: Arnav Singh\nRole: 5th-Semester B.Tech CSE Student\nFocus: C++, DSA, Web & AI Projects\nLocation: India 🇮🇳\nStatus: Open to Software Engineering Internships`,
  skills: `Core Languages : C++, Python, JavaScript/TypeScript, SQL\nFrontend       : React, Next.js, Tailwind CSS\nBackend        : Python (Flask), Node.js\nDatabases      : PostgreSQL, SQLite\nTools          : Git, GitHub`,
  projects: `🚀 MoodMate    — AI mental wellness hackathon project\n💰 FinanceCalc  — Personal finance planning utility\n📄 PDFlex       — Client-side PDF manipulation utility\n⚔️  ASCEND       — Gamified task progression system`,
  contact: `📧 Email    : arnav@example.com\n💼 LinkedIn : linkedin.com/in/arnav-singh\n🐙 GitHub   : github.com/arnavsingh`,
};

export const services = [
  {
    name: "Web Application Development",
    desc: "Building responsive, modern web applications using React, Next.js, and TypeScript with a focus on clean UI and performance.",
    icon: "💻",
  },
  {
    name: "AI / LLM Integration",
    desc: "Integrating AI APIs (OpenAI, etc.) into web projects for practical use-cases like chat interfaces, sentiment analysis, and automation.",
    icon: "🤖",
  },
  {
    name: "Backend & REST APIs",
    desc: "Designing and implementing REST APIs using Python (Flask) or Node.js (Express), connected to PostgreSQL or SQLite databases.",
    icon: "⚙️",
  },
  {
    name: "Project Collaboration",
    desc: "Open to collaborating on student or open-source projects, helping with frontend, backend, or AI integration tasks.",
    icon: "🤝",
  },
];

export const workflow = [
  {
    step: "Discussion",
    desc: "Understanding project requirements, goals, and scope through clear communication before writing any code.",
    icon: "💬",
  },
  {
    step: "Planning",
    desc: "Breaking the project into milestones, choosing the right tech stack, and sketching out the architecture.",
    icon: "📋",
  },
  {
    step: "Development",
    desc: "Writing clean, well-structured code iteratively, with regular check-ins and progress updates.",
    icon: "🛠️",
  },
  {
    step: "Testing & Review",
    desc: "Testing across devices, fixing bugs, and reviewing code quality before final handoff.",
    icon: "✅",
  },
  {
    step: "Delivery",
    desc: "Delivering the finished project with documentation, deployment guidance, and any follow-up support needed.",
    icon: "🚀",
  },
];

export const testimonials: { name: string; role: string; text: string }[] = [];

export const chatFAQ = [
  { q: ["hello", "hi", "hey"], a: "Hey! 👋 I'm Arnav's portfolio AI assistant. Ask me about his projects, skills, or education!" },
  { q: ["skills", "tech", "stack", "languages"], a: "Arnav focuses on C++ and DSA for problem solving, alongside React, Next.js, Python, Flask, TypeScript, and SQL for building web applications." },
  { q: ["projects", "work", "built"], a: "His projects include MoodMate (hackathon AI wellness tool), FinanceCalc (SIP & EMI calculator), PDFlex (client-side PDF utility), and ASCEND (gamified productivity app)." },
  { q: ["internship", "hire", "available", "open"], a: "Yes! Arnav is a 5th-semester B.Tech CSE student actively seeking software engineering internships." },
  { q: ["contact", "email", "reach"], a: "Reach Arnav at arnav@example.com or via LinkedIn at linkedin.com/in/arnav-singh" },
  { q: ["education", "college", "degree", "semester", "cgpa"], a: "Arnav is in his 5th semester of B.Tech CSE at XYZ Institute of Technology with an 8.0 / 10 CGPA." },
  { q: ["hobby", "hobbies", "interest"], a: "Chess ♟️, gym 🏋️, lo-fi music 🎵, reading tech blogs, and practicing C++ coding!" },
];
