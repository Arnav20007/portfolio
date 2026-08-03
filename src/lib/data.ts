// ============================================================
// ARNAV.OS — Personal Data
// Update this file to customize all portfolio content
// ============================================================

export const personal = {
  name: "Arnav Singh",
  title: "Software Engineer",
  taglines: ["Builder", "Creator", "Problem Solver", "AI Developer", "Full-Stack Engineer"],
  email: "arnav@example.com",
  phone: "+91 98765 43210",
  github: "arnavsingh",
  linkedin: "arnav-singh",
  location: "India",
  available: true,
  avatar: "/images/avatar.jpg",
  resume: "/resume.pdf",
  bio: "I'm a CS engineer who lives at the intersection of code and creativity. I build things that matter — from AI tools that help people process emotions, to finance apps that make money management effortless. I believe the best software feels invisible, so users can focus on what actually matters.",
  shortBio: "CS Engineer. AI Developer. Builder of things that matter.",
};

export const funFacts = [
  "I drink too much chai ☕",
  "I overthink everything, including this fact 🤔",
  "I love solving impossible problems 💡",
  "I debug code at 2 AM... and enjoy it 🌙",
  "Chess is my meditation ♟️",
  "I have 47 unread tabs open right now 📑",
  "I once wrote 1000 lines in one sitting 💻",
  "Gym + code = my daily ritual 🏋️",
  "I believe every bug is just a feature in disguise 🐛",
  "My search history is 90% Stack Overflow 🔍",
];

export const bucketList = [
  { item: "Build a startup", done: true, emoji: "🚀" },
  { item: "Travel Japan", done: false, emoji: "🇯🇵" },
  { item: "Go skydiving", done: false, emoji: "🪂" },
  { item: "Complete an Ironman triathlon", done: false, emoji: "🏊" },
  { item: "Build a billion-dollar company", done: false, emoji: "💰" },
  { item: "Publish a research paper", done: false, emoji: "📄" },
  { item: "Learn to play guitar", done: false, emoji: "🎸" },
  { item: "Build an app with 1M+ users", done: false, emoji: "📱" },
  { item: "Summit a Himalayan peak", done: false, emoji: "🏔️" },
  { item: "Give a TEDx talk", done: false, emoji: "🎤" },
];

export const hobbies = [
  { name: "Chess", icon: "♟️", description: "Strategic thinking is my superpower" },
  { name: "Gym", icon: "🏋️", description: "Discipline builds character" },
  { name: "Music", icon: "🎵", description: "Lo-fi while coding, metal while debugging" },
  { name: "Late-night Coding", icon: "🌙", description: "Best ideas come at 2 AM" },
  { name: "Reading", icon: "📚", description: "Sci-fi and tech blogs mostly" },
  { name: "Travel", icon: "✈️", description: "Every city teaches something new" },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 92 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 87 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 78 },
      { name: "Three.js", level: 65 },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Firebase", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Docker", level: 70 },
    ],
  },
];

export const projects = [
  {
    id: "moodmate",
    name: "MoodMate",
    description: "An AI-powered emotional intelligence companion that helps users understand their mental patterns through journaling, sentiment analysis, and personalized insights.",
    longDescription: "MoodMate uses NLP to analyze journal entries and detect emotional trends over time. It provides personalized coping strategies and progress tracking.",
    tech: ["Python", "React", "Flask", "OpenAI API", "Firebase"],
    github: "https://github.com/arnavsingh/moodmate",
    demo: "https://moodmate.vercel.app",
    image: "/images/projects/moodmate.png",
    category: "AI",
    featured: true,
    achievement: "1000+ beta users in first month",
  },
  {
    id: "financecalc",
    name: "FinanceCalc",
    description: "A comprehensive financial planning tool with SIP calculator, loan EMI estimator, retirement planner, and investment tracker.",
    longDescription: "Built for the Indian market, FinanceCalc simplifies complex financial math into clean, intuitive interfaces.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/arnavsingh/financecalc",
    demo: "https://financecalc.vercel.app",
    image: "/images/projects/financecalc.png",
    category: "FinTech",
    featured: true,
    achievement: "Featured on Product Hunt",
  },
  {
    id: "pdflex",
    name: "PDFlex",
    description: "A powerful PDF manipulation tool — merge, split, compress, convert, and annotate PDFs right in the browser with zero uploads.",
    longDescription: "PDFlex runs entirely client-side using PDF.js and pdf-lib, ensuring complete privacy.",
    tech: ["React", "PDF.js", "pdf-lib", "Web Workers"],
    github: "https://github.com/arnavsingh/pdflex",
    demo: "https://pdflex.vercel.app",
    image: "/images/projects/pdflex.png",
    category: "Productivity",
    featured: true,
    achievement: "10K+ documents processed",
  },
  {
    id: "ascend",
    name: "ASCEND",
    description: "A gamified productivity OS — task management meets RPG. Complete tasks to level up your character and unlock achievements.",
    longDescription: "ASCEND transforms boring todo lists into an epic quest. Every task completed earns XP, unlocks skills, and builds your character.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
    github: "https://github.com/arnavsingh/ascend",
    demo: "https://ascend-os.vercel.app",
    image: "/images/projects/ascend.png",
    category: "Productivity",
    featured: false,
    achievement: "500+ active users",
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "TechCorp Solutions",
    period: "May 2024 – Aug 2024",
    description: "Built REST APIs serving 50K+ daily requests, optimized database queries reducing load time by 40%, and shipped 3 production features.",
    tech: ["Python", "Django", "PostgreSQL", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "Jan 2023 – Present",
    description: "Delivered 10+ web applications for clients across EdTech, FinTech, and SaaS domains. Maintained 5-star rating with on-time delivery.",
    tech: ["React", "Node.js", "Firebase", "Next.js"],
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 – Present",
    description: "Contributed to 15+ open source repositories. PRs merged into projects with 10K+ GitHub stars.",
    tech: ["Python", "JavaScript", "TypeScript"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "XYZ Institute of Technology",
    period: "2021 – 2025",
    grade: "8.7 CGPA",
    description: "Specialization in AI/ML. Core subjects: Data Structures, OS, DBMS, Computer Networks, Machine Learning.",
  },
];

export const certificates = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2024", icon: "☁️" },
  { name: "Google Cloud Professional", issuer: "Google", year: "2024", icon: "🌐" },
  { name: "Deep Learning Specialization", issuer: "Coursera / DeepLearning.AI", year: "2023", icon: "🧠" },
  { name: "React Developer Certification", issuer: "Meta", year: "2023", icon: "⚛️" },
  { name: "Python for Data Science", issuer: "IBM", year: "2022", icon: "🐍" },
];

export const services = [
  { name: "AI Applications", icon: "🤖", desc: "Custom AI tools, chatbots, NLP pipelines, computer vision apps" },
  { name: "Web Development", icon: "🌐", desc: "Full-stack web apps from MVP to production-ready systems" },
  { name: "Automation", icon: "⚡", desc: "Workflow automation, bots, scraping, and process optimization" },
  { name: "Frontend Engineering", icon: "🎨", desc: "Pixel-perfect UIs with smooth animations and micro-interactions" },
  { name: "Backend & APIs", icon: "🔧", desc: "Scalable REST/GraphQL APIs, databases, and microservices" },
  { name: "UI/UX Design", icon: "✨", desc: "Design systems, prototypes, and user research-driven interfaces" },
  { name: "Mobile Apps", icon: "📱", desc: "React Native apps for iOS and Android" },
  { name: "Consulting", icon: "💡", desc: "Tech strategy, architecture review, and growth consulting" },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, EdStart",
    text: "Arnav delivered our platform 2 weeks ahead of schedule with exceptional code quality. He thinks like a product owner, not just a developer.",
    avatar: "PS",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "CTO, FinWave",
    text: "The AI features Arnav built increased our user engagement by 3x. His technical depth and communication made the collaboration seamless.",
    avatar: "RM",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, TechCorp",
    text: "Working with Arnav was a game-changer. He proactively identified issues we hadn't thought of and solved them before they became problems.",
    avatar: "SC",
    rating: 5,
  },
];

export const workflow = [
  { step: "Idea", icon: "💡", desc: "Understanding your vision and goals" },
  { step: "Planning", icon: "📋", desc: "Architecture, timeline, and tech stack decisions" },
  { step: "Design", icon: "🎨", desc: "Wireframes, prototypes, and design system" },
  { step: "Development", icon: "💻", desc: "Clean, documented, and tested code" },
  { step: "Testing", icon: "🧪", desc: "QA, performance, and security checks" },
  { step: "Deployment", icon: "🚀", desc: "CI/CD pipeline and production launch" },
  { step: "Support", icon: "🛡️", desc: "Post-launch monitoring and iterations" },
];

export const techStack = [
  "React", "Next.js", "TypeScript", "Python", "Node.js",
  "Flask", "PostgreSQL", "Firebase", "Docker", "AWS",
  "Tailwind", "Three.js", "OpenAI", "Prisma", "Redis"
];

export const terminalCommands: Record<string, string> = {
  help: `Available commands:\n  about     — Who is Arnav?\n  skills    — Tech stack\n  projects  — Current projects\n  contact   — Get in touch\n  joke      — Random dev joke\n  clear     — Clear terminal\n  exit      — Exit terminal mode`,
  about: `Name: Arnav Singh\nRole: Software Engineer & Builder\nLocation: India 🇮🇳\nStatus: Open to opportunities\nBio: I build things that matter. Code is my canvas.`,
  skills: `Languages : Python, JS/TS, Java, C++, SQL\nFrontend  : React, Next.js, Tailwind, Three.js\nBackend   : Node.js, Flask, Django\nCloud     : AWS, Firebase, Vercel\nTools     : Git, Docker, Figma`,
  projects: `🚀 MoodMate    — AI emotional intelligence companion\n💰 FinanceCalc  — Financial planning toolkit\n📄 PDFlex       — Browser-based PDF processor\n⚔️  ASCEND       — Gamified productivity OS`,
  contact: `📧 Email    : arnav@example.com\n💼 LinkedIn : linkedin.com/in/arnav-singh\n🐙 GitHub   : github.com/arnavsingh\n📞 Phone    : +91 98765 43210`,
  joke: `Why do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛`,
};

export const chatFAQ = [
  { q: ["hello", "hi", "hey"], a: "Hey! 👋 I'm Arnav's AI assistant. Ask me anything about him!" },
  { q: ["skills", "tech", "stack", "languages"], a: "Arnav works with Python, React, Next.js, TypeScript, Node.js, Flask, PostgreSQL, Firebase, AWS, and more!" },
  { q: ["projects", "work", "built"], a: "His flagship projects are MoodMate (AI emotional companion), FinanceCalc (financial planner), PDFlex (PDF tools), and ASCEND (gamified productivity)." },
  { q: ["hire", "available", "open"], a: "Yes! Arnav is open to internships, full-time roles, and freelance projects. Check the HR section or drop an email." },
  { q: ["contact", "email", "reach"], a: "Reach Arnav at arnav@example.com or on LinkedIn at linkedin.com/in/arnav-singh" },
  { q: ["experience", "intern", "worked"], a: "Arnav has interned at TechCorp Solutions and freelanced for 10+ clients across EdTech, FinTech, and SaaS." },
  { q: ["education", "college", "degree"], a: "B.Tech in Computer Science from XYZ Institute of Technology (2021–2025), with 8.7 CGPA." },
  { q: ["hobby", "hobbies", "interest"], a: "Chess ♟️, gym 🏋️, late-night coding 🌙, lo-fi music 🎵, and solving impossible problems!" },
];
