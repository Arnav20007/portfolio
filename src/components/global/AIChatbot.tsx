"use client";

import { useEffect, useRef, useState } from "react";
import {
  Download,
  MessageCircle,
  Send,
  Sparkles,
  X,
  Code2,
  Mail,
  ExternalLink,
  Bot,
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
  email: personal.email,
  github: `https://github.com/${personal.github || "Arnav20007"}`,
  linkedin: personal.linkedin ? `https://linkedin.com/in/${personal.linkedin}` : "",
  resume: personal.resume || "/resume.pdf",
  status: "Looking for software engineering internships",
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
  if (includesAny(query, ["project", "work", "atscheck", "toolforge", "ats", "pdflex", "financecalc", "moodmate", "ascend", "built", "demos"])) {
    return reply(
      `Arnav has built several technical projects:\n\n• ATSCheck (atscheck.tech): An in-browser resume keyword matcher and scanner.\n• PDFlex: Client-side PDF merger and splitter using Web Workers.\n• FinanceCalc: SIP and EMI calculators with compound charts.\n• MoodMate: A hackathon journaling app with Flask and API reflections.\n• ASCEND: A gamified task manager with XP progression.\n\nYou can view all demos and GitHub source links in the Projects section.`,
      `Arnav ke technical projects ye rahe:\n\n• ATSCheck (atscheck.tech): Browser mein resume keyword matcher tool.\n• PDFlex: Web Workers se client-side PDF merge aur split tool.\n• FinanceCalc: SIP aur EMI compound calculators with charts.\n• MoodMate: Flask backend wala hackathon journaling app.\n• ASCEND: XP progression wala task tracker.\n\nSaare live demos aur code links Projects section mein mil jayenge.`,
      { label: "View Selected Projects", href: "#projects" }
    );
  }

  // 2. Recruiter / Internship / 20-Second Summary Query
  if (includesAny(query, ["recruiter", "hire", "intern", "internship", "job", "summary", "20 sec", "pitch", "why hire"])) {
    return reply(
      `Arnav Singh is a fifth-semester B.Tech CSE student at BBDU, Lucknow, with an 8.0 CGPA. He practises DSA in C++ and has built web projects using React, Next.js, Python, and Flask. He is looking for a software engineering internship.`,
      `Arnav Singh BBDU, Lucknow mein B.Tech CSE ke fifth semester mein hai aur uska CGPA 8.0 hai. Woh C++ mein DSA practice karta hai aur React, Next.js, Python, aur Flask ke saath projects bana chuka hai. Abhi software engineering internship dhoondh raha hai.`,
      { label: "Download Resume (PDF)", href: verifiedProfile.resume, isExternal: true }
    );
  }

  // 3. Skills & Tech Stack Query
  if (includesAny(query, ["skill", "stack", "tech", "technology", "language", "c++", "dsa", "python", "react"])) {
    return reply(
      `Arnav mainly works with C++ and DSA for problem-solving. For web projects, he has used React, Next.js, TypeScript, Python, Flask, and SQL.`,
      `Arnav C++ aur DSA se problem-solving practice karta hai. Web projects mein usne React, Next.js, TypeScript, Python, Flask, aur SQL use kiya hai.`,
      { label: "Explore Skills Matrix", href: "#skills" }
    );
  }

  // 4. Resume Query
  if (includesAny(query, ["resume", "cv", "pdf", "download resume", "bio"])) {
    return reply(
      `You can download Arnav's resume here. It has more details about his education, skills, and projects.`,
      `Arnav ka resume yahan se download kar sakte ho. Isme uski education, skills, aur projects ke baare mein aur details hain.`,
      { label: "Download Resume PDF", href: verifiedProfile.resume, isExternal: true }
    );
  }

  // 5. Contact & Collaboration Query
  if (includesAny(query, ["contact", "email", "reach", "hire", "collaborate", "github", "linkedin", "message"])) {
    return reply(
      `You can find Arnav on GitHub: ${verifiedProfile.github}. His email and LinkedIn details will be added here soon.`,
      `Arnav ka GitHub yahan hai: ${verifiedProfile.github}. Email aur LinkedIn details yahan jald add hongi.`,
      { label: "Go to Contact Section", href: "#contact" }
    );
  }

  // 6. Casual / Friend Query
  if (includesAny(query, ["friend", "dost", "hobby", "fun", "personal", "chess", "gym", "chai", "who are you"])) {
    return reply(
      `Arnav is a CSE student at BBDU who enjoys chess, chai, going to the gym, and listening to music while he works on projects.`,
      `Arnav BBDU mein CSE student hai. Use chess, chai, gym, aur projects par kaam karte waqt music sunna pasand hai.`,
      { label: "Read Background", href: "#about" }
    );
  }

  // 7. CGPA / College / Education Query
  if (includesAny(query, ["cgpa", "college", "university", "bbdu", "semester", "sem", "education", "degree"])) {
    return reply(
      `Arnav is studying B.Tech CSE at ${verifiedProfile.college}. He is currently in his fifth semester and has a CGPA of ${verifiedProfile.cgpa}.`,
      `Arnav ${verifiedProfile.college} mein B.Tech CSE kar raha hai. Woh abhi fifth semester mein hai aur uska CGPA ${verifiedProfile.cgpa} hai.`,
      { label: "View Technical Focus", href: "#focus" }
    );
  }

  // 8. Honest Guardrail (No Hallucinations)
  return reply(
    `I can help you find details about Arnav's projects, skills, education, or resume. What would you like to know?`,
    `Main Arnav ke projects, skills, education, aur resume ki details dhoondhne mein help kar sakta hoon. Kya dekhna chahoge?`,
    { label: "View Selected Projects", href: "#projects" }
  );
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi, I can help you explore Arnav's projects, skills, education, and resume. What would you like to know?",
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
        className="fixed bottom-5 right-5 z-[990] h-12 w-12 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer bg-[#6E07F3] hover:bg-[#5600c7] text-white border border-purple-400/40"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6E07F3]" />
          </span>
        )}
      </button>

      {/* Floating Chatbot Window */}
      {open && (
        <div
          className="fixed bottom-20 right-5 z-[990] w-[390px] max-w-[calc(100vw-28px)] max-h-[580px] rounded-2xl overflow-hidden flex flex-col shadow-2xl bg-white border border-[#E6ECF8] animate-in fade-in slide-in-from-bottom-4 duration-200"
          style={{
            boxShadow: "0 20px 60px rgba(110, 7, 243, 0.15), 0 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-purple-100 bg-purple-50/70">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6E07F3] text-white shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">
                  Ask Arnav&apos;s Portfolio
                </p>
                <p className="text-[10px] font-mono text-[#6E07F3] flex items-center gap-1 mt-0.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6E07F3] animate-pulse" />
                  Portfolio guide · BBDU, Lucknow
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-purple-100/50 transition-colors cursor-pointer"
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
                className="text-[11px] font-bold py-1.5 px-2 rounded-lg transition-all text-[#6E07F3] bg-white border border-purple-200/80 hover:bg-purple-50 hover:border-[#6E07F3] flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
              >
                <Icon className="w-3 h-3 text-[#6E07F3] shrink-0" />
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
                        ? "bg-[#6E07F3] text-white shadow-sm rounded-br-xs"
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
                      className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg border border-purple-300 bg-purple-50 px-3 py-1 text-[11px] font-bold text-[#6E07F3] hover:bg-purple-100 transition-colors shadow-2xs"
                    >
                      <span>{message.action.label}</span>
                      <ExternalLink className="h-3 w-3 text-[#6E07F3]" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2 rounded-xl text-xs text-slate-500 bg-white border border-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6E07F3] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6E07F3] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6E07F3] animate-bounce [animation-delay:0.4s]" />
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
              className="flex-1 bg-slate-50 text-slate-900 placeholder-slate-400 text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6E07F3] transition-colors"
            />
            <button
              id="chatbot-send"
              onClick={() => handleSend()}
              aria-label="Send message"
              className="w-9 h-9 rounded-xl bg-[#6E07F3] hover:bg-[#5600c7] text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
