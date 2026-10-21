"use client";

import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Download,
  MessageCircle,
  Send,
  Sparkles,
  X,
  Code2,
  Mail,
  ExternalLink,
  Bot,
  User,
} from "lucide-react";
import { personal } from "@/lib/data";

interface Message {
  from: "user" | "bot";
  text: string;
  action?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

/* ── Verified Profile Facts (No Hallucinations) ─────────────────── */
const verifiedProfile = {
  name: personal.name || "Arnav Singh",
  degree: "B.Tech Computer Science & Engineering (5th Semester)",
  college: "Babu Banarasi Das University (BBDU), Lucknow",
  cgpa: "8.0 / 10.0",
  email: personal.email || "arnav@example.com",
  github: `https://github.com/${personal.github || "Arnav20007"}`,
  linkedin: `https://linkedin.com/in/${personal.linkedin || "arnav-singh"}`,
  resume: personal.resume || "/resume.pdf",
  status: "Actively seeking Software Engineering Internships (2025/2026)",
};

const quickButtons = [
  { label: "Projects", query: "Tell me about your projects", icon: Code2 },
  { label: "Skills", query: "What are your core skills and tech stack?", icon: Sparkles },
  { label: "Resume", query: "Where can I view or download your resume?", icon: Download },
  { label: "Contact", query: "How can I contact Arnav for internship or work?", icon: Mail },
];

function includesAny(input: string, words: string[]) {
  return words.some((word) => input.includes(word));
}

function prefersHinglish(input: string) {
  return includesAny(input, [
    "bhai",
    "kya",
    "kaise",
    "bata",
    "batao",
    "hai",
    "hu",
    "main",
    "mujhe",
    "kar",
    "hindi",
    "hinglish",
    "kaun",
    "kaha",
    "kab",
    "dost",
    "yaar",
  ]);
}

function generateReply(rawInput: string): Message {
  const query = rawInput.toLowerCase().trim();
  const hinglish = prefersHinglish(query);

  const reply = (english: string, hindi: string, action?: Message["action"]): Message => ({
    from: "bot",
    text: hinglish ? hindi : english,
    action,
  });

  // 1. Projects Query
  if (includesAny(query, ["project", "work", "pdflex", "financecalc", "moodmate", "ascend", "built", "demos"])) {
    return reply(
      `Arnav has built 4 key projects:\n\n• PDFlex: In-browser PDF merge/split with Web Workers (0KB uploads).\n• FinanceCalc: SIP compound interest & EMI calculator with Chart.js.\n• MoodMate: AI journaling reflection tool with Flask & OpenAI API.\n• ASCEND: Gamified task & quest manager with PostgreSQL.\n\nLive demos and GitHub repositories are linked below.`,
      `Arnav ke 4 main projects hain:\n\n• PDFlex: In-browser PDF merge/split using Web Workers (0KB server upload, 100% private in RAM).\n• FinanceCalc: SIP compound return & EMI calculator with interactive charts.\n• MoodMate: Hackathon AI journaling platform (Flask + OpenAI API).\n• ASCEND: Gamified todo manager with XP progression.\n\nLive demo aur GitHub source neeche section mein check kar sakte ho.`,
      { label: "View Selected Projects", href: "#projects" }
    );
  }

  // 2. Recruiter / Internship / 20-Second Summary Query
  if (includesAny(query, ["recruiter", "hire", "intern", "internship", "job", "summary", "20 sec", "pitch", "why hire"])) {
    return reply(
      `20-Second Recruiter Summary:\nArnav Singh is a 5th-semester B.Tech CSE student at BBDU Lucknow (${verifiedProfile.cgpa} CGPA). He solves algorithmic problems in C++ (Trees, Graphs, DP) and builds client-side web tools with React, Next.js, and Python. Open for Software Engineering Internships (2025/2026).`,
      `20-Second Recruiter Summary:\nArnav Lucknow se 5th-semester B.Tech CSE student hai at BBDU Lucknow (${verifiedProfile.cgpa} CGPA). Core focus C++ Data Structures & Algorithms hai aur React/Next.js/Python se practical web tools banata hai. Currently SDE internship opportunities ke liye open hai.`,
      { label: "Download Resume (PDF)", href: verifiedProfile.resume, isExternal: true }
    );
  }

  // 3. Skills & Tech Stack Query
  if (includesAny(query, ["skill", "stack", "tech", "technology", "language", "c++", "dsa", "python", "react"])) {
    return reply(
      `Core Skills & Technical Focus:\n• Programming: C++, Data Structures & Algorithms, OOP, C Language\n• Frontend: React, Next.js, TypeScript, Tailwind CSS, Web Workers API\n• Backend & AI: Python, Flask, REST APIs, OpenAI API\n• Databases & Tools: PostgreSQL, SQLite, Git, GitHub, Vercel`,
      `Core Skills & Tech Stack:\n• Programming: C++, DSA (Trees, Graphs, DP), OOP, C\n• Frontend: React, Next.js, TypeScript, Tailwind CSS, Web Workers\n• Backend: Python, Flask, REST APIs, OpenAI API\n• Database & Tools: PostgreSQL, SQLite, Git & GitHub, Vercel`,
      { label: "Explore Skills Matrix", href: "#skills" }
    );
  }

  // 4. Resume Query
  if (includesAny(query, ["resume", "cv", "pdf", "download resume", "bio"])) {
    return reply(
      `Arnav's verified resume is ready to download. It covers coursework, CGPA (${verifiedProfile.cgpa}), C++ DSA benchmarks, and project architectures.`,
      `Arnav ka resume ready hai. Isme BBDU CSE coursework, ${verifiedProfile.cgpa} CGPA, C++ DSA focus aur projects detailed hain.`,
      { label: "Download Resume PDF", href: verifiedProfile.resume, isExternal: true }
    );
  }

  // 5. Contact & Collaboration Query
  if (includesAny(query, ["contact", "email", "reach", "hire", "collaborate", "github", "linkedin", "message"])) {
    return reply(
      `You can reach Arnav directly:\n• Email: ${verifiedProfile.email}\n• GitHub: ${verifiedProfile.github}\n• LinkedIn: ${verifiedProfile.linkedin}\n\nHe responds promptly to internship inquiries and technical discussions.`,
      `Arnav se connect karne ke direct links:\n• Email: ${verifiedProfile.email}\n• GitHub: ${verifiedProfile.github}\n• LinkedIn: ${verifiedProfile.linkedin}\n\nInternship ya collaboration ke liye message bhej sakte ho.`,
      { label: "Go to Contact Section", href: "#contact" }
    );
  }

  // 6. Casual / Friend Query
  if (includesAny(query, ["friend", "dost", "hobby", "fun", "personal", "chess", "gym", "chai", "who are you"])) {
    return reply(
      `Hey! On the personal side, Arnav is a 5th-sem CSE student at BBDU Lucknow. Outside coding C++ algorithms and building web tools, he enjoys drinking chai ☕, playing chess ♟️, gym workouts 🏋️, and coding late at night with lo-fi beats 🎵.`,
      `Arnav 5th-sem CSE student hai BBDU Lucknow se. C++ aur web tools code karne ke alawa chai ☕, chess ♟️, gym 🏋️, aur late-night lo-fi music 🎵 pasand karta hai.`,
      { label: "Read Background", href: "#about" }
    );
  }

  // 7. CGPA / College / Education Query
  if (includesAny(query, ["cgpa", "college", "university", "bbdu", "semester", "sem", "education", "degree"])) {
    return reply(
      `Education Details:\n• Degree: ${verifiedProfile.degree}\n• Institution: ${verifiedProfile.college}\n• Academic CGPA: ${verifiedProfile.cgpa}\n• Core Subjects: Data Structures, Operating Systems, DBMS, Computer Networks`,
      `Education Info:\n• Degree: ${verifiedProfile.degree}\n• College: ${verifiedProfile.college}\n• CGPA: ${verifiedProfile.cgpa}\n• Focus: Data Structures & Algorithms, OS, DBMS`,
      { label: "View Technical Focus", href: "#focus" }
    );
  }

  // 8. Honest Guardrail (No Hallucinations)
  return reply(
    `I am Arnav's portfolio guide. I only share verified details from his portfolio: projects, C++ DSA skills, BBDU coursework (8.0 CGPA), resume, and contact links. Ask me about any of these!`,
    `Main Arnav ke portfolio ka guide hoon. Main sirf verified details share karta hoon: projects, C++ DSA skills, BBDU CSE (${verifiedProfile.cgpa} CGPA), resume, aur contact info. Inme se kuch bhi pooch sakte ho!`,
    { label: "View Selected Projects", href: "#projects" }
  );
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! Ask me about Arnav's projects, skills, resume, or collaboration. (Project, skills, resume ya collaboration ke baare mein poochho).",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing, open]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    setMessages((prev) => [...prev, { from: "user", text: query }]);
    if (!textToSend) setInput("");
    setTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, generateReply(query)]);
      setTyping(false);
    }, 320);
  };

  const handleActionClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Floating Chatbot Trigger Button (Emerald & Crisp) */}
      <button
        id="chatbot-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close portfolio guide" : "Ask Arnav's portfolio guide"}
        className="fixed bottom-5 right-5 z-[990] h-12 w-12 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-400/40"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
          </span>
        )}
      </button>

      {/* Floating Chatbot Window */}
      {open && (
        <div
          className="fixed bottom-20 right-5 z-[990] w-[390px] max-w-[calc(100vw-28px)] max-h-[580px] rounded-2xl overflow-hidden flex flex-col shadow-2xl bg-white border border-emerald-200/90 animate-in fade-in slide-in-from-bottom-4 duration-200"
          style={{
            boxShadow: "0 20px 60px rgba(16, 185, 129, 0.15), 0 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-emerald-100 bg-emerald-50/70">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">
                  Ask Arnav&apos;s Portfolio
                </p>
                <p className="text-[10px] font-mono text-emerald-700 flex items-center gap-1 mt-0.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Guide · BBDU Lucknow
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-emerald-100/50 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Buttons Bar */}
          <div className="grid grid-cols-4 gap-1.5 px-3 py-2 border-b border-slate-100 bg-slate-50/80">
            {quickButtons.map(({ label, query, icon: Icon }) => (
              <button
                key={label}
                onClick={() => handleSend(query)}
                className="text-[11px] font-bold py-1.5 px-2 rounded-lg transition-all text-emerald-800 bg-white border border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-400 flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
              >
                <Icon className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 font-sans text-sm bg-slate-50/30 max-h-[380px]">
            {messages.map((message, index) => (
              <div
                key={`${message.from}-${index}`}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="max-w-[88%]">
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line ${
                      message.from === "user"
                        ? "bg-emerald-600 text-white shadow-sm rounded-br-xs"
                        : "bg-white text-slate-800 border border-slate-200/90 shadow-2xs rounded-bl-xs"
                    }`}
                  >
                    {message.text}
                  </div>

                  {/* Contextual Action Link */}
                  {message.action && (
                    <a
                      href={message.action.href}
                      target={message.action.isExternal ? "_blank" : undefined}
                      rel={message.action.isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => handleActionClick(message.action!.href)}
                      className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-2xs"
                    >
                      <span>{message.action.label}</span>
                      <ExternalLink className="h-3 w-3 text-emerald-600" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2 rounded-xl text-xs text-slate-500 bg-white border border-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-slate-100 bg-white flex items-center gap-2">
            <input
              id="chatbot-input"
              type="text"
              placeholder="Ask about projects, skills, resume..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-slate-50 text-slate-900 placeholder-slate-400 text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              id="chatbot-send"
              onClick={() => handleSend()}
              aria-label="Send message"
              className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
