"use client";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowUpRight, Globe, Code2 } from "lucide-react";

export default function ContactFooterSection() {
  return (
    <footer id="contact" className="relative z-10 max-w-[1240px] mx-auto w-full text-center pb-16">
      {/* Main Glass Contact Card Box */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#181512] via-[#12100E] to-[#0A0908] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-2xl max-w-4xl mx-auto mb-16">
        {/* Background Radial Light Orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-20"
          style={{ background: "radial-gradient(circle, #FF8A00 0%, #22C55E 50%, transparent 80%)" }}
        />

        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs md:text-sm font-semibold tracking-[0.25em] text-[#FF8A00] uppercase mb-4"
          >
            G E T &nbsp; I N &nbsp; T O U C H
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] mb-6 tracking-tight leading-tight max-w-2xl"
          >
            Let's Build Something <span className="text-[#FF8A00]">Amazing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-sm sm:text-base text-[#B5B5B5] max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Whether you have a project idea, open full-time role, or contract work — feel free to drop a message.
          </motion.p>

          {/* Action Button Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <a
              href="mailto:arnav@example.com"
              className="flex min-w-0 max-w-full items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#FF8A00] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#ea580c] transition-all shadow-[0_0_25px_rgba(255,138,0,0.45)] hover:scale-105"
            >
              <Mail className="w-4 h-4" /> Send Email <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 max-w-full items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#1A1714] border border-white/10 hover:border-[#FF8A00]/60 text-[#F5F5F5] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              <Code2 className="w-4 h-4 text-[#FF8A00]" /> GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 max-w-full items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#1A1714] border border-white/10 hover:border-[#5B8CFF]/60 text-[#F5F5F5] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              <Globe className="w-4 h-4 text-[#5B8CFF]" /> LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 max-w-full items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#1A1714] border border-white/10 hover:border-[#22C55E]/60 text-[#F5F5F5] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4 text-[#22C55E]" /> Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Copyright Footer Bar */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A0A0A0]/60 max-w-4xl mx-auto px-4">
        <div>
          Built with Next.js 16 & Three.js • Designed by Arnav Singh
        </div>
        <div>
          © 2026 Arnav.OS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
