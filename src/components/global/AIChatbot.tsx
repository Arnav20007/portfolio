"use client";

import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, Download, MessageCircle, Send, Sparkles, X, Zap } from "lucide-react";

interface Message {
  from: "user" | "bot";
  text: string;
  page?: {
    label: string;
    href: string;
  };
}

const profile = {
  name: "Arnav Singh",
  role: "Computer Science Engineering Student | Full-Stack & AI Developer",
  college: "Babu Banarasi Das University",
  semester: "5th Semester",
  location: "Lucknow, India",
  email: "your_email_here",
  linkedin: "your_linkedin_here",
  github: "your_github_here",
  resume: "Available",
};

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flask",
  "MongoDB",
  "Firebase",
  "SQL",
  "AI & LLM Integration",
];

const projects = [
  "MoodMate: AI-powered mental wellness platform built with React, Flask, and Gemini AI.",
  "ASCEND: Productivity and anti-procrastination system built with Next.js and TypeScript.",
  "FinanceCalc: Modern finance calculator platform.",
  "PDFlex: AI PDF toolkit.",
  "Arnav.OS: Interactive personal portfolio experience.",
];

const quickPrompts = [
  { label: "Recruiter", prompt: "Recruiter summary", icon: BriefcaseBusiness },
  { label: "Projects", prompt: "Best projects", icon: Sparkles },
  { label: "Collaborate", prompt: "Collaborate", icon: MessageCircle },
  { label: "Resume", icon: Download },
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
  ]);
}

function makeReply(input: string): Message {
  const query = input.toLowerCase();
  const hinglish = prefersHinglish(query);

  const say = (english: string, hindi: string, page?: Message["page"]): Message => ({
    from: "bot",
    text: hinglish ? hindi : english,
    page,
  });

  if (includesAny(query, ["recruiter", "hr", "hire", "internship", "job", "summary", "30 second", "30 sec"])) {
    return say(
      "Arnav is a 5th semester CSE student at Babu Banarasi Das University, Lucknow. He builds full-stack and AI products using React, Next.js, TypeScript, Python, Flask, Firebase, MongoDB, SQL, and LLM integrations. He is currently building production-level projects and is open to internships, freelance work, open-source, startup collaboration, and future full-time opportunities.",
      "Arnav Lucknow se 5th semester CSE student hai at Babu Banarasi Das University. Woh full-stack aur AI products build karta hai with React, Next.js, TypeScript, Python, Flask, Firebase, MongoDB, SQL, and LLM integrations. Abhi production-level projects build kar raha hai and internship, freelance, startup collaboration, open-source, aur future full-time opportunities ke liye open hai.",
      { label: "Open Recruiter Page", href: "/recruiter" },
    );
  }

  if (includesAny(query, ["project", "portfolio", "built", "work", "recommend"])) {
    return say(
      `Start with MoodMate for AI depth, ASCEND for product thinking, and Arnav.OS for frontend experience. Other useful projects are FinanceCalc and PDFlex. ${projects.join(" ")}`,
      `Projects ke liye MoodMate se start karo for AI depth, ASCEND for product thinking, aur Arnav.OS for frontend experience. FinanceCalc aur PDFlex bhi strong additions hain. ${projects.join(" ")}`,
      { label: "Open Projects Path", href: "/recruiter" },
    );
  }

  if (includesAny(query, ["skill", "stack", "tech", "technology", "language"])) {
    return say(
      `Arnav's strongest stack is full-stack JavaScript plus AI integration: ${skills.join(", ")}. He is strongest where frontend polish, backend logic, and AI features meet.`,
      `Arnav ka strongest stack full-stack JavaScript plus AI integration hai: ${skills.join(", ")}. Uski strength frontend polish, backend logic, aur AI features ko ek product me combine karna hai.`,
      { label: "Open Recruiter Page", href: "/recruiter" },
    );
  }

  if (includesAny(query, ["collaborate", "founder", "startup", "client", "freelance", "business", "build"])) {
    return say(
      "For founders and collaborators, Arnav is useful when an idea needs to become a working product fast: web apps, AI features, automation, dashboards, and polished MVPs. He thinks in product loops, not just code tasks.",
      "Founder ya collaborator ke liye Arnav tab best hai jab idea ko working product me fast convert karna ho: web apps, AI features, automation, dashboards, aur polished MVPs. Woh sirf code nahi, product flow bhi sochta hai.",
      { label: "Open Collaborate Page", href: "/collaborate" },
    );
  }

  if (includesAny(query, ["resume", "cv", "download"])) {
    return say(
      "Arnav's resume is available from the portfolio. If you are screening quickly, I recommend checking the recruiter path first, then downloading the resume from there.",
      "Resume portfolio me available hai. Agar quick screening karni hai, pehle recruiter path dekho, phir waha se resume download karna best rahega.",
      { label: "Open Resume Area", href: "/recruiter" },
    );
  }

  if (includesAny(query, ["contact", "email", "linkedin", "github", "reach", "connect"])) {
    return say(
      `You can reach Arnav at ${profile.email}. LinkedIn: ${profile.linkedin}. GitHub: ${profile.github}.`,
      `Arnav se contact ke liye email: ${profile.email}. LinkedIn: ${profile.linkedin}. GitHub: ${profile.github}.`,
      { label: "Open Contact Path", href: "/collaborate" },
    );
  }

  if (includesAny(query, ["friend", "personal", "hobby", "hobbies", "personality", "chess", "fun"])) {
    return say(
      "On the personal side, Arnav is a late-night coder, chess enthusiast, AI and startup obsessed builder, and someone who believes in learning by building ambitious projects.",
      "Personal side pe Arnav late-night coder hai, chess enthusiast hai, AI aur startups se obsessed builder hai, aur learning by building me believe karta hai.",
      { label: "Open Friend Page", href: "/friend" },
    );
  }

  if (includesAny(query, ["about", "who", "intro", "arnav"])) {
    return say(
      `${profile.name} is a ${profile.role} from ${profile.location}. He studies at ${profile.college}, currently in ${profile.semester}, and focuses on full-stack apps, AI tools, and ambitious product ideas.`,
      `${profile.name} ${profile.location} se ${profile.role} hai. Woh ${profile.college} me ${profile.semester} me hai, aur full-stack apps, AI tools, aur ambitious product ideas pe focus karta hai.`,
      { label: "Start With Friend Page", href: "/friend" },
    );
  }

  if (includesAny(query, ["page", "where", "website", "guide", "navigate", "section"])) {
    return say(
      "Use Friend for personality, Recruiter for skills and resume, Collaborate for services or startup ideas, and Terminal if you want the playful developer-mode experience.",
      "Guide simple hai: Friend page personality ke liye, Recruiter page skills aur resume ke liye, Collaborate page services/startup ideas ke liye, aur Terminal page playful developer-mode experience ke liye.",
    );
  }

  return say(
    "I do not want to guess that. Ask me about Arnav's skills, projects, resume, availability, personality, or which page you should open next.",
    "Is detail pe main guess nahi karunga. Tum Arnav ke skills, projects, resume, availability, personality, ya next page recommendation ke baare me pooch sakte ho.",
  );
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi, I am Arnav AI. Tell me if you are a recruiter, friend, founder, or collaborator. I will guide you from there.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    setMessages((current) => [...current, { from: "user", text: query }]);
    if (!textToSend) setInput("");
    setTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, makeReply(query)]);
      setTyping(false);
    }, 450);
  };

  return (
    <>
      <button
        id="chatbot-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close Arnav AI" : "Open Arnav AI"}
        className="fixed bottom-5 right-5 z-[990] h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105 group cursor-pointer bg-[#18181b] hover:bg-[#27272a] text-[#f4f4f5] border border-white/10"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <span className="relative flex h-7 w-7 items-center justify-center text-white">
            <MessageCircle className="h-4 w-4" />
          </span>
        )}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-25 pointer-events-none"
            style={{ background: "#f97316" }}
          />
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-[96px] right-5 z-[990] w-[400px] max-w-[calc(100vw-28px)] max-h-[calc(100vh-128px)] rounded-[24px] overflow-hidden flex flex-col shadow-2xl transition-all duration-300"
          style={{
            background: "linear-gradient(180deg, rgba(22, 17, 13, 0.98), rgba(10, 8, 7, 0.98))",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 168, 85, 0.28)",
            boxShadow: "0 22px 56px rgba(0,0,0,0.76), 0 0 34px rgba(249,115,22,0.14)",
          }}
        >
          <div
            className="flex items-center justify-between px-4 py-4 border-b"
            style={{
              borderColor: "rgba(242, 235, 224, 0.08)",
              background: "linear-gradient(135deg, rgba(249, 115, 22, 0.22), rgba(255, 255, 255, 0.02))",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 35% 25%, #ffb15d 0%, #f97316 48%, #a83208 100%)",
                  border: "1px solid rgba(255, 204, 128, 0.42)",
                  boxShadow: "0 8px 22px rgba(249, 115, 22, 0.2)",
                }}
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <Zap className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#111] p-0.5 text-[#fbbf24]" />
              </div>
              <div>
                <p className="font-sans font-bold text-[15px] text-[#f8f0e6] tracking-normal">
                  Arnav AI
                </p>
                <p className="text-[11px] font-mono text-[#7ddf91] flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  Portfolio concierge
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#9a8f82] hover:text-[#f2ebe0] hover:bg-white/5 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 px-4 py-3 border-b border-[#f2ebe0]/5 bg-[#f2ebe0]/[0.02]">
            {quickPrompts.map(({ label, prompt, icon: Icon }) => (
              <button
                key={label}
                onClick={() => handleSend(prompt || label)}
                className="text-[11px] font-mono px-3 py-2.5 rounded-xl transition-all hover:bg-[#f97316]/20 text-[#ffd08a] inline-flex items-center justify-center gap-1.5"
                style={{
                  background: "rgba(249, 115, 22, 0.09)",
                  border: "1px solid rgba(249, 115, 22, 0.18)",
                }}
              >
                <Icon className="w-3 h-3" />
                {label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 font-sans" style={{ minHeight: "360px" }}>
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[86%]">
                  <div
                    className="px-4 py-3 rounded-2xl text-[14px] leading-[1.65]"
                    style={{
                      background:
                        message.from === "user"
                          ? "linear-gradient(135deg, #f97316, #ea580c)"
                          : "rgba(242, 235, 224, 0.08)",
                      color: message.from === "user" ? "#ffffff" : "#f7efe4",
                      border: message.from === "bot" ? "1px solid rgba(242, 235, 224, 0.1)" : "none",
                      boxShadow: message.from === "user" ? "0 6px 18px rgba(249, 115, 22, 0.28)" : "none",
                    }}
                  >
                    {message.text}
                  </div>
                  {message.page && (
                    <a
                      href={message.page.href}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#f97316]/25 bg-[#f97316]/10 px-3.5 py-1.5 text-[11px] font-mono text-[#ffd08a] hover:border-[#f97316]/50 transition-colors"
                    >
                      {message.page.label}
                      <span aria-hidden>{"->"}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2.5 rounded-2xl text-[13px] text-[#b6aa9d] bg-[#f2ebe0]/5 border border-[#f2ebe0]/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div
            className="p-4 border-t flex items-center gap-2"
            style={{
              borderColor: "rgba(242, 235, 224, 0.08)",
              background: "rgba(14, 12, 9, 0.82)",
            }}
          >
            <input
              id="chatbot-input"
              type="text"
              placeholder="Ask Arnav AI..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && handleSend()}
              className="flex-1 bg-[#f2ebe0]/5 text-[#f8f0e6] placeholder-[#a69a8c]/70 outline-none text-[14px] px-4 py-3 rounded-xl border border-[#f2ebe0]/10 focus:border-[#f97316]/55 transition-colors"
            />
            <button
              id="chatbot-send"
              onClick={() => handleSend()}
              className="w-11 h-11 rounded-xl text-white font-bold text-xs transition-all hover:scale-105 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                boxShadow: "0 4px 12px rgba(249, 115, 22, 0.28)",
              }}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
