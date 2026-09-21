"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Radio, Zap } from "lucide-react";

export default function HolographicDashboardSection() {
  return (
    <section id="command-center" className="relative z-10 max-w-[1240px] mx-auto w-full text-center">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-20"
        style={{ background: "radial-gradient(circle, #FF8A00 0%, #FF5533 60%, transparent 80%)" }}
      />

      {/* Header Container Box */}
      <div className="mb-16 p-8 md:p-10 rounded-3xl bg-[#14100D]/80 border border-[#FF8A00]/30 backdrop-blur-2xl max-w-3xl mx-auto flex flex-col items-center text-center shadow-[0_10px_30px_rgba(255,138,0,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/15 text-[#FF8A00] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4"
        >
          <Activity className="w-3.5 h-3.5 animate-pulse" /> HOLOGRAPHIC COMMAND CENTER
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          Active Systems & <span className="text-[#FF8A00]">Telemetry</span>
        </motion.h2>
      </div>

      {/* Holographic Command Dashboard UI (Fully Contained) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
        
        {/* Radar Telemetry Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-7 md:p-8 rounded-3xl bg-[#14100D]/90 border border-[#FF8A00]/40 backdrop-blur-2xl flex flex-col items-center text-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(255,138,0,0.15)]"
        >
          <div className="relative w-32 h-32 rounded-full border border-[#FF8A00]/40 flex items-center justify-center mb-4">
            <div className="absolute inset-2 rounded-full border border-[#FF8A00]/20 animate-ping" />
            <div className="w-16 h-16 rounded-full border border-[#FF8A00]/60 flex items-center justify-center bg-[#FF8A00]/10">
              <Radio className="w-7 h-7 text-[#FF8A00] animate-pulse" />
            </div>
          </div>
          <span className="font-mono text-xs font-bold text-[#FF8A00] tracking-widest uppercase">
            [ RADAR SWEEP ACTIVE ]
          </span>
          <span className="font-sans text-xs text-[#A0A0A0] mt-1">
            Monitoring live AI build queues
          </span>
        </motion.div>

        {/* System Status 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-7 md:p-8 rounded-3xl bg-[#14100D]/90 border border-[#FF8A00]/40 backdrop-blur-2xl flex flex-col items-center justify-between text-center shadow-lg"
        >
          <div>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-[#22C55E] bg-[#22C55E]/15 border border-[#22C55E]/40 px-3 py-1 rounded-full uppercase">
                STATUS: ONLINE
              </span>
              <ShieldCheck className="w-5 h-5 text-[#22C55E]" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-2">
              Autonomous Coding Engine
            </h3>
            <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed">
              Multi-file AI subagent generator with automated lint error detection & refactoring loops.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[#A0A0A0] w-full">
            <span>CPU LOAD: 18%</span>
            <span className="text-[#FF8A00]">STABLE</span>
          </div>
        </motion.div>

        {/* System Status 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-7 md:p-8 rounded-3xl bg-[#14100D]/90 border border-[#5B8CFF]/40 backdrop-blur-2xl flex flex-col items-center justify-between text-center shadow-lg"
        >
          <div>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-[#5B8CFF] bg-[#5B8CFF]/15 border border-[#5B8CFF]/40 px-3 py-1 rounded-full uppercase">
                STATUS: R&D BUILD
              </span>
              <Zap className="w-5 h-5 text-[#5B8CFF]" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-2">
              Portfolio Web OS v2
            </h3>
            <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed">
              Multi-theme Next.js App Router workspace with instant RAG AI context window.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[#A0A0A0] w-full">
            <span>TURBOPACK: 100%</span>
            <span className="text-[#5B8CFF]">READY</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
