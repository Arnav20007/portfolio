"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Layers,
  Send,
  MessageSquare,
  Zap,
  Check,
} from "lucide-react";
import { services, workflow, personal } from "@/lib/data";

export default function CollaboratePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web application",
    budget: "Just an idea",
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
    <div className="relative min-h-screen bg-white text-[#141C3A] font-sans overflow-x-hidden selection:bg-[#EBD8FF] selection:text-[#5600C7]">
      {/* ── Top Floating Switcher Bar ── */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/95 border border-[#E6ECF8] backdrop-blur-2xl shadow-xl shadow-purple-500/5">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-xs font-mono font-bold text-[#5A6275] hover:text-[#141C3A] hover:bg-slate-100 transition-colors"
          >
            ← Home
          </Link>
          <div className="h-4 w-px bg-[#E6ECF8]" />
          {[
            { id: "hero", label: "About", icon: Rocket },
            { id: "services", label: "Ways to work", icon: Layers },
            { id: "workflow", label: "Approach", icon: Zap },
            { id: "contact-form", label: "Contact", icon: Send },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  const el = document.getElementById(tab.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold text-[#5A6275] hover:text-[#141C3A] hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* ── MASTER CONTAINER ── */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full flex flex-col items-center gap-24 md:gap-32">

        {/* ── 1. HERO SECTION ── */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-[#6E07F3] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#6E07F3] animate-pulse" />
              <span>Open to internships and project collaborations</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl leading-none text-[#141C3A] mb-6 tracking-tight"
            >
              Have an idea? <br className="hidden sm:inline" />
              <span className="text-[#6E07F3]">
                Let&apos;s build it together.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-sans text-xl sm:text-2xl text-[#5A6275] font-light max-w-2xl mx-auto leading-relaxed mb-10"
            >
              I&apos;m Arnav, a 5th-semester B.Tech CSE student (8.0 CGPA) at BBDU, Lucknow. I enjoy building web apps and learning by working on practical problems. I&apos;m open to internships, hackathons, and student projects.
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
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#6E07F3] hover:bg-[#5600c7] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-purple-500/20 hover:scale-105 cursor-pointer"
              >
                <span>Share Your Idea</span>
              </button>

              {personal.email ? (
                <a
                  href={`mailto:${personal.email}?subject=Project Collaboration Inquiry`}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white border border-[#E6ECF8] hover:border-[#6E07F3] text-[#141C3A] font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 text-[#6E07F3]" />
                  <span>Email Me</span>
                </a>
              ) : (
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white border border-[#E6ECF8] hover:border-[#6E07F3] text-[#141C3A] font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 text-[#6E07F3]" />
                  <span>Explore Projects</span>
                </Link>
              )}
            </motion.div>

            {/* Metric Telemetry Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
            >
              {[
                { val: "5th Sem", label: "B.Tech CSE", sub: "BBDU, Lucknow" },
                { val: "8.0 / 10", label: "CGPA", sub: "Current academic score" },
                { val: "4", label: "Projects", sub: "Personal and hackathon work" },
                { val: "C++ & DSA", label: "Current focus", sub: "Trees, graphs, and DP" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#E6ECF8] hover:border-[#6E07F3]/40 transition-all duration-300 shadow-sm text-center"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#6E07F3] mb-1">
                    {stat.val}
                  </div>
                  <div className="font-sans font-bold text-sm text-[#141C3A] mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-mono text-xs text-[#5A6275]">
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
            <span className="font-mono text-xs font-bold text-[#6E07F3] uppercase tracking-[0.25em] mb-3">
              WHAT I CAN HELP WITH
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#141C3A] tracking-tight">
              Projects I Can Help With
            </h2>
            <p className="font-sans text-base text-[#5A6275] max-w-lg mt-3 font-light">
              I enjoy working on web projects, learning from others, and taking an idea from the first sketch to a working version.
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
                whileHover={{ y: -4 }}
                onClick={() => setSelectedService(selectedService === idx ? null : idx)}
                className={`p-8 rounded-3xl bg-white border transition-all duration-300 shadow-sm flex flex-col justify-between text-left cursor-pointer ${
                  selectedService === idx
                    ? "border-[#6E07F3] ring-2 ring-[#6E07F3]/20 shadow-xl"
                    : "border-[#E6ECF8] hover:border-[#6E07F3]/40"
                }`}
              >
                <div>
                  <div className="text-4xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#141C3A] mb-3">
                    {service.name}
                  </h3>
                  <p className="font-sans text-sm text-[#5A6275] leading-relaxed font-light mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6ECF8] flex items-center justify-between text-xs font-mono text-[#6E07F3] font-bold">
                  <span>TOOLS I&apos;VE USED</span>
                  <Check className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 3. WORKFLOW PROCESS ── */}
        <section id="workflow" className="py-20 w-full max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-xs font-bold text-[#6E07F3] uppercase tracking-[0.25em] mb-3">
              HOW I LIKE TO WORK
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#141C3A] tracking-tight">
              A Simple Approach
            </h2>
            <p className="font-sans text-base text-[#5A6275] max-w-lg mt-3 font-light">
              I prefer to keep things clear: agree on the goal, work in small steps, and share progress along the way.
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
                className="p-8 rounded-3xl bg-white border border-[#E6ECF8] hover:border-[#6E07F3]/40 transition-all duration-300 shadow-sm text-left"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center font-mono text-xs font-bold text-[#6E07F3]">
                    0{idx + 1}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#141C3A] mb-2">
                  {step.step}
                </h3>
                <p className="font-sans text-sm text-[#5A6275] leading-relaxed font-light mb-4">
                  {step.desc}
                </p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-[#6E07F3] border border-purple-200">
                  PHASE 0{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 4. PROJECT INGESTION & CONTACT FORM ── */}
        <section id="contact-form" className="py-20 w-full max-w-[950px]">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E6ECF8] shadow-xl text-left">
            <div className="flex flex-col items-center text-center mb-10">
              <span className="font-mono text-xs font-bold text-[#6E07F3] uppercase tracking-[0.25em] mb-2">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#141C3A] tracking-tight">
                Tell Me About Your Idea
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#5A6275] max-w-md mt-2 font-light">
                Tell me a little about the project or opportunity. I&apos;ll take a look and we can discuss what to do next.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#6E07F3] text-white flex items-center justify-center mx-auto text-2xl shadow-sm">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-[#141C3A]">
                  Thanks for sharing your idea.
                </h3>
                <p className="font-sans text-sm text-[#5A6275] max-w-md mx-auto">
                  You can reach me directly on <a className="font-semibold text-[#6E07F3] underline" href={`https://github.com/${personal.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#6E07F3] hover:bg-[#5600c7] text-xs font-mono font-bold text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#141C3A] uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F7F9FC] border border-[#E6ECF8] focus:border-[#6E07F3] focus:bg-white focus:outline-none text-[#141C3A] text-sm placeholder:text-slate-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#141C3A] uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F7F9FC] border border-[#E6ECF8] focus:border-[#6E07F3] focus:bg-white focus:outline-none text-[#141C3A] text-sm placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#141C3A] uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F7F9FC] border border-[#E6ECF8] focus:border-[#6E07F3] focus:bg-white focus:outline-none text-[#141C3A] text-sm transition-colors cursor-pointer"
                    >
                      <option>Web application</option>
                      <option>API or AI feature</option>
                      <option>Frontend improvements</option>
                      <option>Student or open-source project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#141C3A] uppercase tracking-wider mb-2">
                      Project Stage
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F7F9FC] border border-[#E6ECF8] focus:border-[#6E07F3] focus:bg-white focus:outline-none text-[#141C3A] text-sm transition-colors cursor-pointer"
                    >
                      <option>Just an idea</option>
                      <option>Planning the project</option>
                      <option>Already started</option>
                      <option>Looking for a collaborator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#141C3A] uppercase tracking-wider mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#F7F9FC] border border-[#E6ECF8] focus:border-[#6E07F3] focus:bg-white focus:outline-none text-[#141C3A] text-sm transition-colors cursor-pointer"
                    >
                      <option>Flexible</option>
                      <option>A few weeks</option>
                      <option>One to two months</option>
                      <option>Not decided yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#141C3A] uppercase tracking-wider mb-2">
                    Project Overview &amp; Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="What are you working on, and what kind of help are you looking for?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#F7F9FC] border border-[#E6ECF8] focus:border-[#6E07F3] focus:bg-white focus:outline-none text-[#141C3A] text-sm placeholder:text-slate-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#6E07F3] hover:bg-[#5600c7] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-purple-500/20 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Share Project Details</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
