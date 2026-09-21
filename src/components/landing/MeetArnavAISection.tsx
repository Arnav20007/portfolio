"use client";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Bot } from "lucide-react";

export default function MeetArnavAISection() {
  const quickPrompts = [
    "Tell me about Arnav's top projects",
    "What are his core technical skills?",
    "Is Arnav available for hire or contract?",
    "Show me how to contact Arnav",
  ];

  const handlePromptClick = (prompt: string) => {
    // Open floating chatbot or trigger search prompt
    const chatInput = document.querySelector<HTMLInputElement>("input[placeholder*='Ask AI']");
    if (chatInput) {
      chatInput.value = prompt;
      chatInput.focus();
    }
  };

  return (
    <section id="arnav-ai" className="relative z-10 max-w-[1240px] mx-auto w-full text-center">
      <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#181512] via-[#12100E] to-[#0A0908] border border-[#FF8A00]/40 shadow-[0_20px_50px_rgba(255,138,0,0.15)] relative overflow-hidden text-center backdrop-blur-2xl max-w-4xl mx-auto">
        {/* Ambient Radial Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#FF8A00]/15 blur-[120px] pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-[#FF8A00]/50 bg-[#FF8A00]/15 shadow-[0_0_25px_rgba(255,138,0,0.35)]">
          <Bot className="w-8 h-8 text-[#FF8A00]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 text-[#FF8A00] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" /> AI INTERACTIVE CONSOLE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4 tracking-tight"
        >
          Meet <span className="text-[#FF8A00]">Arnav AI</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-sm sm:text-base text-[#B5B5B5] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Ask anything about my background, project architecture, technical stack, or instant resume details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(prompt)}
              className="flex min-w-0 max-w-full items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#1A1714] border border-[#FF8A00]/30 hover:border-[#FF8A00] text-xs sm:text-sm font-mono text-[#F5F5F5] hover:text-[#FF8A00] transition-all duration-300 cursor-pointer shadow-lg group hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 text-[#FF8A00] group-hover:scale-110 transition-transform" />
              <span>{prompt}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
