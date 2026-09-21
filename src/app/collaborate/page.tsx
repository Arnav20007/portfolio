"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Send,
  MessageSquare,
  ShieldCheck,
  Zap,
  DollarSign,
  Calendar,
  Clock,
  Check,
} from "lucide-react";
import { services, workflow, testimonials, personal, techStack } from "@/lib/data";

export default function CollaboratePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    budget: "$3k - $5k",
    timeline: "2 - 4 Weeks",
    message: "",
  });

  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050807] text-[#F4EFEA] font-sans overflow-x-hidden selection:bg-[#10B981] selection:text-white">
      {/* ── Background Ambient Emerald & Cyan Glow Orbs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] rounded-full opacity-20 blur-[190px]"
          style={{ background: "radial-gradient(circle, #10B981 0%, #06B6D4 40%, #047857 70%, transparent 85%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[700px] h-[700px] rounded-full opacity-15 blur-[180px]"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, #0891B2 50%, transparent 80%)" }}
        />
      </div>

      {/* ── Top OS Floating Scene Switcher Bar ── */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#09120F]/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-xs font-mono font-bold text-[#94A3B8] hover:text-white transition-colors"
          >
            ← Home OS
          </Link>
          <div className="h-4 w-px bg-white/10" />
          {[
            { id: "hero", label: "Overview", icon: Rocket },
            { id: "services", label: "Services", icon: Layers },
            { id: "workflow", label: "Process", icon: Zap },
            { id: "contact-form", label: "Start Project", icon: Send },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  const el = document.getElementById(tab.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold text-[#CBD5E1] hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* ── MASTER CONTAINER (80px horizontal padding, 80-100px vertical section gaps) ── */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-10 md:px-20 w-full flex flex-col items-center gap-24 md:gap-32">

        {/* ── 1. HERO SECTION ── */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Accepting New Client & Venture Partnerships</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl leading-none text-[#F4EFEA] mb-6 tracking-tight"
            >
              Let's build something <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4]">
                people remember.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-sans text-xl sm:text-2xl text-[#CBD5E1] font-light max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Partnering with founders and ambitious engineering teams to design, architect, and ship high-velocity AI and full-stack software.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-105 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${personal.email}?subject=Project Collaboration Inquiry`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D1612]/90 border border-white/10 hover:border-[#10B981]/50 text-[#F4EFEA] font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-xl transition-all shadow-lg hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 text-[#10B981]" />
                <span>Book a Discovery Call</span>
              </a>
            </motion.div>

            {/* Metric Telemetry Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
            >
              {[
                { val: "100%", label: "On-Time Delivery", sub: "Production Guaranteed" },
                { val: "2-4 Wks", label: "MVP Velocity", sub: "Rapid Prototyping" },
                { val: "Modern", label: "Tech Stack", sub: "Next.js 16 • AI Agents" },
                { val: "Direct", label: "Founder Access", sub: "Zero Agency Overhead" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-gradient-to-b from-[#0F1A15]/95 via-[#0A130F]/95 to-[#060C0A]/95 border border-white/[0.06] hover:border-[#10B981]/30 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl text-center"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#10B981] mb-1">
                    {stat.val}
                  </div>
                  <div className="font-sans font-semibold text-sm text-[#F4EFEA] mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[11px] text-[#94A3B8]">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── 2. SERVICES SECTION ── */}
        <section id="services" className="py-20 w-full max-w-[1300px]">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3">
              CLIENT SERVICES & OFFERINGS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#F4EFEA] tracking-tight">
              What I Build
            </h2>
            <p className="font-sans text-base text-[#94A3B8] max-w-lg mt-3 font-light">
              High-impact digital products crafted with modern architectures, clean code, and delightful interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(selectedService === idx ? null : idx)}
                className={`p-8 rounded-3xl bg-gradient-to-b from-[#0F1A15]/95 via-[#0A130F]/95 to-[#060C0A]/95 border transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col justify-between text-left cursor-pointer ${
                  selectedService === idx
                    ? "border-[#10B981] shadow-[0_0_30px_rgba(16,185,129,0.25)]"
                    : "border-white/[0.06] hover:border-[#10B981]/40"
                }`}
              >
                <div>
                  <div className="text-4xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#F4EFEA] mb-3">
                    {service.name}
                  </h3>
                  <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#10B981]">
                  <span>PRODUCTION READY</span>
                  <Check className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 3. WORKFLOW PROCESS ── */}
        <section id="workflow" className="py-20 w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-3">
              EXECUTION BLUEPRINT
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#F4EFEA] tracking-tight">
              How We Work Together
            </h2>
            <p className="font-sans text-base text-[#94A3B8] max-w-lg mt-3 font-light">
              A transparent, agile, milestone-driven development process from discovery to global launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#0F1A15]/95 via-[#0A130F]/95 to-[#060C0A]/95 border border-white/[0.06] hover:border-[#10B981]/30 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl text-left"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center font-mono text-xs font-bold text-[#10B981]">
                    0{idx + 1}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#F4EFEA] mb-2">
                  {step.step}
                </h3>
                <p className="font-sans text-sm text-[#94A3B8] leading-relaxed font-light mb-4">
                  {step.desc}
                </p>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/[0.03] text-[#10B981] border border-white/[0.06]">
                  PHASE 0{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 4. PROJECT INGESTION & CONTACT FORM ── */}
        <section id="contact-form" className="py-20 w-full max-w-[950px]">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0F1A15]/95 via-[#0A130F]/95 to-[#060C0A]/95 border border-[#10B981]/30 shadow-[0_30px_70px_rgba(0,0,0,0.6),0_0_40px_rgba(16,185,129,0.1)] backdrop-blur-2xl text-left">
            <div className="flex flex-col items-center text-center mb-10">
              <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] mb-2">
                PROJECT INGESTION
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F4EFEA] tracking-tight">
                Tell Me About Your Idea
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-md mt-2 font-light">
                Fill in the details below and I'll respond within 24 hours with an architecture roadmap and scope estimate.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto text-2xl shadow-lg">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F4EFEA]">
                  Message Received!
                </h3>
                <p className="font-sans text-sm text-[#CBD5E1] max-w-md mx-auto">
                  Thank you for reaching out. I'll review your project details and get back to you via email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elon Musk"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#10B981] focus:outline-none text-[#F4EFEA] text-sm placeholder:text-[#64748B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elon@x.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#10B981] focus:outline-none text-[#F4EFEA] text-sm placeholder:text-[#64748B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-[#09120F] border border-white/[0.08] focus:border-[#10B981] focus:outline-none text-[#F4EFEA] text-sm transition-colors cursor-pointer"
                    >
                      <option>Full-Stack Web App</option>
                      <option>AI / LLM Integration</option>
                      <option>Mobile App (React Native)</option>
                      <option>UI/UX & Frontend Polish</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-[#09120F] border border-white/[0.08] focus:border-[#10B981] focus:outline-none text-[#F4EFEA] text-sm transition-colors cursor-pointer"
                    >
                      <option>$1k - $3k</option>
                      <option>$3k - $5k</option>
                      <option>$5k - $10k</option>
                      <option>$10k+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#CBD5E1] uppercase tracking-wider mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-[#09120F] border border-white/[0.08] focus:border-[#10B981] focus:outline-none text-[#F4EFEA] text-sm transition-colors cursor-pointer"
                    >
                      <option>1 - 2 Weeks (Sprint)</option>
                      <option>2 - 4 Weeks (MVP)</option>
                      <option>1 - 2 Months</option>
                      <option>Ongoing Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#CBD5E1] uppercase tracking-wider mb-2">
                    Project Overview & Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what you're building, key features, and any specific deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#10B981] focus:outline-none text-[#F4EFEA] text-sm placeholder:text-[#64748B] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
