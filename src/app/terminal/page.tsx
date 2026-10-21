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
    { type: "system", text: "Arnav's portfolio terminal" },
    { type: "system", text: "Welcome. Use a command below to explore the portfolio." },
    { type: "system", text: 'Type "help" to see the available commands.' },
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
        { type: "system", text: 'Terminal cleared. Type "help" to see the commands.' },
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
        { type: "output", text: `I don't know the command "${cmd}".` },
        { type: "output", text: 'Type "help" to see the available commands.' },
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
      className="relative min-h-screen bg-white text-[#141C3A] font-mono flex flex-col items-center justify-center p-4 sm:p-8 selection:bg-[#EBD8FF] selection:text-[#5600C7]"
      onClick={() => inputRef.current?.focus()}
    >
      {/* ── Top Back Button ── */}
      <header className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E6ECF8] hover:border-[#6E07F3] text-xs font-mono font-bold text-[#141C3A] hover:text-[#6E07F3] shadow-md transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-[#6E07F3]" />
          <span>Back to portfolio</span>
        </Link>
      </header>

      {/* ── Main Terminal Window ── */}
      <div className="relative z-10 w-full max-w-4xl rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col text-slate-100">
        
        {/* Title Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#F59E0B]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#10B981]" />
            <span className="ml-3 text-xs font-mono font-bold text-slate-400">
              arnav@portfolio:~ (zsh)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6E07F3] animate-pulse" />
            <span className="text-[10px] font-mono text-[#A78BFA] font-bold">READY</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 min-h-[420px] max-h-[560px] overflow-y-auto space-y-2 text-xs sm:text-sm leading-relaxed">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.type === "prompt"
                  ? "text-[#A78BFA] font-bold flex items-center gap-2"
                  : line.type === "system"
                  ? "text-slate-400 font-medium"
                  : "text-slate-200"
              }`}
            >
              {line.type === "prompt" && <span className="text-[#6E07F3] font-black">›</span>}
              <span>{line.text}</span>
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 text-[#A78BFA] font-bold pt-1">
            <span className="text-[#6E07F3] font-black">›</span>
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="flex-1 bg-transparent outline-none text-white font-mono text-xs sm:text-sm caret-[#6E07F3]"
              autoFocus
            />
          </div>
          <div ref={endRef} />
        </div>

        {/* Quick Command Pills */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#6E07F3]" /> Quick:
          </span>
          {quickCommands.map((c) => (
            <button
              key={c}
              onClick={() => executeCmd(c)}
              className="px-3 py-1 rounded-full bg-slate-800 hover:bg-[#6E07F3] text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
            >
              {c}
            </button>
          ))}
          <div className="ml-auto hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-500">
            <span>Press</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Enter</span>
            <CornerDownLeft className="w-3 h-3" />
          </div>
        </div>

      </div>
    </div>
  );
}
