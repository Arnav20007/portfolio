"use client";

import { useState, useRef, useEffect } from "react";
import { terminalCommands } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Sparkles, CornerDownLeft } from "lucide-react";

interface Line {
  type: "prompt" | "output" | "system";
  text: string;
}

export default function TerminalPage() {
  const [history, setHistory] = useState<Line[]>([
    { type: "system", text: "Arnav Singh — Portfolio Interactive CLI Terminal" },
    { type: "system", text: "Welcome. Use the commands below to navigate the portfolio." },
    { type: "system", text: 'Type "help" to see all available commands.' },
    { type: "system", text: "─────────────────────────────────────────────────────────────" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const executeCmd = (commandStr: string) => {
    const cmd = commandStr.trim().toLowerCase();
    if (!cmd) return;

    setHistory((h) => [...h, { type: "prompt", text: `$ ${cmd}` }]);
    setCmdHistory((h) => [cmd, ...h]);
    setCmdIdx(-1);
    setInput("");

    if (cmd === "clear") {
      setHistory([
        { type: "system", text: 'Terminal cleared. Type "help" to see commands.' },
      ]);
      return;
    }

    if (cmd === "exit") {
      window.location.href = "/";
      return;
    }

    const response = terminalCommands[cmd];
    if (response) {
      response.split("\n").forEach((line) => {
        setHistory((h) => [...h, { type: "output", text: line }]);
      });
    } else {
      setHistory((h) => [
        ...h,
        { type: "output", text: `Command not recognized: "${cmd}".` },
        { type: "output", text: 'Type "help" to see available commands.' },
      ]);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") executeCmd(input);
    if (e.key === "ArrowUp") {
      const nextIdx = Math.min(cmdIdx + 1, cmdHistory.length - 1);
      setCmdIdx(nextIdx);
      setInput(cmdHistory[nextIdx] || "");
    }
    if (e.key === "ArrowDown") {
      const nextIdx = Math.max(cmdIdx - 1, -1);
      setCmdIdx(nextIdx);
      setInput(nextIdx === -1 ? "" : cmdHistory[nextIdx]);
    }
  };

  const quickCommands = ["help", "about", "skills", "projects", "contact", "joke", "clear"];

  return (
    <div
      className="relative min-h-screen bg-transparent text-[var(--foreground)] font-mono flex flex-col items-center justify-center p-4 sm:p-8 selection:bg-[#C4B0B0] selection:text-[#1A1818] transition-colors duration-300"
      onClick={() => inputRef.current?.focus()}
    >
      {/* ── Top Back Button ── */}
      <header className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-line)] hover:border-[var(--accent)] text-xs font-mono font-bold text-[var(--foreground)] shadow-md transition-all backdrop-blur-xl"
        >
          <ArrowLeft className="w-4 h-4 text-[var(--accent)]" />
          <span>Back to portfolio</span>
        </Link>
      </header>

      {/* ── Main Terminal Window ── */}
      <div className="relative z-10 w-full max-w-4xl rounded-3xl bg-[#141212] border border-white/10 shadow-2xl overflow-hidden flex flex-col text-stone-200">
        
        {/* Title Bar */}
        <div className="px-6 py-4 bg-[#1C1919] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
            <span className="ml-3 text-xs font-mono font-bold text-stone-400">
              arnav@bbdu-cse:~ (zsh)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 font-bold">ONLINE</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 min-h-[420px] max-h-[560px] overflow-y-auto space-y-2 text-xs sm:text-sm leading-relaxed">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.type === "prompt"
                  ? "text-amber-300 font-bold flex items-center gap-2"
                  : line.type === "system"
                  ? "text-stone-400 font-medium"
                  : "text-stone-300"
              }`}
            >
              {line.type === "prompt" && <span className="text-amber-400 font-black">›</span>}
              <span>{line.text}</span>
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 text-amber-300 font-bold pt-1">
            <span className="text-amber-400 font-black">›</span>
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="flex-1 bg-transparent outline-none text-white font-mono text-xs sm:text-sm caret-amber-400"
              autoFocus
            />
          </div>
          <div ref={endRef} />
        </div>

        {/* Quick Command Pills */}
        <div className="px-6 py-4 bg-[#181616] border-t border-white/5 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-mono text-stone-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Quick:
          </span>
          {quickCommands.map((c) => (
            <button
              key={c}
              onClick={() => executeCmd(c)}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white font-mono text-xs transition-colors cursor-pointer border border-white/5"
            >
              {c}
            </button>
          ))}
          <div className="ml-auto hidden sm:flex items-center gap-1 text-[11px] font-mono text-stone-500">
            <span>Press</span>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-stone-300 border border-white/10">Enter</span>
            <CornerDownLeft className="w-3 h-3" />
          </div>
        </div>

      </div>
    </div>
  );
}
