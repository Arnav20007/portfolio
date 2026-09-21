"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

export default function TerminalSection() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { cmd: "whoami", output: "Arnav Singh — Full Stack Developer & AI Systems Architect." },
    { cmd: "cat goal.txt", output: "Building software products that create lasting real-world impact." },
    { cmd: "arnav --skills", output: "Next.js 16, Python, React, Flask, LLM Agents, MongoDB, Three.js" },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) return;

    let out = `Command not recognized: '${trimmed}'. Try: whoami, skills, projects, contact, clear`;
    if (trimmed === "whoami") out = "Arnav Singh — Computer Science student & full stack AI developer.";
    else if (trimmed === "skills") out = "Next.js, Python, Flask, React, TypeScript, OpenAI APIs, Three.js, MongoDB";
    else if (trimmed === "projects") out = "MoodMate (AI Mental Wellness), ASCEND (Productivity OS), FinanceCalc (Analytics)";
    else if (trimmed === "contact") out = "Email: arnav@example.com | GitHub: github.com | LinkedIn: linkedin.com";
    else if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    setHistory((prev) => [...prev, { cmd: trimmed, output: out }]);
    setInputVal("");
  };

  return (
    <section id="terminal-about" className="relative z-10 max-w-[1240px] mx-auto w-full text-center">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-20"
        style={{ background: "radial-gradient(circle, #22C55E 0%, #FF8A00 60%, transparent 80%)" }}
      />

      {/* Header Container Box */}
      <div className="mb-16 p-8 md:p-10 rounded-3xl bg-[#0E1511]/80 border border-[#22C55E]/30 backdrop-blur-2xl max-w-3xl mx-auto flex flex-col items-center text-center shadow-[0_10px_30px_rgba(34,197,94,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/15 text-[#22C55E] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <TerminalIcon className="w-3.5 h-3.5" /> INTERACTIVE CLI TERMINAL
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          About <span className="text-[#22C55E]">Arnav.OS</span>
        </motion.h2>
      </div>

      {/* Terminal Window Box */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#22C55E]/40 bg-[#0C0F0D]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(34,197,94,0.15)] text-left"
      >
        {/* Terminal Header Bar */}
        <div className="px-6 py-4 bg-[#141A16] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="font-mono text-xs text-[#A0A0A0]/80 font-semibold text-center">
            arnav@system:~ (zsh)
          </span>
          <div className="w-12" />
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-xs sm:text-sm space-y-4 max-h-[380px] overflow-y-auto">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#22C55E]">
                <span>&gt;</span>
                <span className="font-bold">{item.cmd}</span>
              </div>
              <div className="text-[#D0D0D0] pl-4 leading-relaxed break-words">
                {item.output}
              </div>
            </div>
          ))}

          {/* Interactive Form Line */}
          <form onSubmit={handleCommand} className="flex min-w-0 items-center gap-2 text-[#22C55E] pt-2">
            <span>&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'whoami', 'skills', 'projects', or 'clear'..."
              className="min-w-0 flex-1 bg-transparent outline-none text-[#F5F5F5] font-mono text-xs sm:text-sm placeholder-[#A0A0A0]/40"
            />
            <button type="submit" className="text-[#22C55E] opacity-60 hover:opacity-100">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
