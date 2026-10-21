"use client";

import { useState, useRef, useEffect } from "react";
import { terminalCommands } from "@/lib/data";
import Link from "next/link";
import { Terminal, ArrowLeft, Sparkles, CornerDownLeft } from "lucide-react";

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
      className="relative min-h-screen bg-[#faf8f9] text-slate-900 font-mono flex flex-col items-center justify-center p-4 sm:p-8 selection:bg-rose-100 selection:text-rose-950"
      onClick={() => inputRef.current?.focus()}
    >
      {/* ── Top Ambient Light ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full opacity-40 blur-[130px]"
          style={{ background: "radial-gradient(circle, #ffe4e6 0%, #fecdd3 30%, transparent 70%)" }}
        />
      </div>

      {/* ── Top Back Button ── */}
      <header className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-rose-300 text-xs font-mono font-bold text-slate-800 hover:text-rose-600 shadow-md transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-rose-600" />
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

          <div className="flex items-center gap-2 text-xs text-rose-400 font-bold">
            <Terminal className="w-4 h-4" />
            <span>TERMINAL</span>
          </div>
        </div>

        {/* Quick Command Suggestions Pill Bar */}
        <div className="px-6 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          <span className="text-[11px] text-slate-500 uppercase font-bold shrink-0">
            Try a command:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                executeCmd(cmd);
              }}
              className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-rose-950/60 text-slate-300 hover:text-rose-400 border border-slate-700 hover:border-rose-500/40 transition-all cursor-pointer shrink-0"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          className="p-6 sm:p-8 min-h-[420px] max-h-[560px] overflow-y-auto space-y-2 text-sm leading-relaxed"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, idx) => (
            <div key={idx}>
              {line.type === "system" && (
                <p className="text-[#5B8CFF] font-medium">{line.text}</p>
              )}
              {line.type === "prompt" && (
                <div className="flex items-center gap-2">
                  <span className="text-[#10B981] font-bold">arnav@portfolio</span>
                  <span className="text-[#94A3B8]">:</span>
                  <span className="text-[#5B8CFF]">~</span>
                  <span className="text-white font-bold">{line.text}</span>
                </div>
              )}
              {line.type === "output" && (
                <p className="text-[#E2E8F0] pl-4 whitespace-pre-wrap font-light">
                  {line.text}
                </p>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[#10B981] font-bold">arnav@portfolio</span>
            <span className="text-[#94A3B8]">:</span>
            <span className="text-[#5B8CFF]">~</span>
            <span className="text-white font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="flex-1 bg-transparent border-none outline-none text-[#F4EFEA] font-mono text-sm caret-[#5B8CFF]"
              spellCheck={false}
              autoComplete="off"
              autoFocus
            />
            <CornerDownLeft className="w-3.5 h-3.5 text-[#64748B]" />
          </div>

          <div ref={endRef} />
        </div>

      </div>
    </div>
  );
}
