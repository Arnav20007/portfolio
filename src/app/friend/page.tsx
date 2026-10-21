"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Play,
  Pause,
  ArrowRight,
  Heart,
  Sparkles,
  CheckCircle2,
  Circle,
  Laptop,
  Coffee,
  Music,
  Compass,
  BookOpen,
} from "lucide-react";

export default function FriendPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [isPlaying, setIsPlaying] = useState(true);

  const [bucketList, setBucketList] = useState([
    { title: "Crack a Software Engineering Internship", done: false },
    { title: "Solve 500+ DSA problems in C++", done: false },
    { title: "Travel across Japan during cherry blossom season", done: false },
    { title: "Build an impactful open-source tool for developers", done: false },
  ]);

  const toggleBucket = (index: number) => {
    setBucketList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, done: !item.done } : item))
    );
  };

  return (
    <div className="relative min-h-screen bg-[#050807] text-[#F4EFEA] font-sans overflow-x-hidden selection:bg-[#10B981] selection:text-white">
      {/* ── Background Centered Ambient Atmosphere Orbs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] rounded-full opacity-20 blur-[190px]"
          style={{ background: "radial-gradient(circle, #10B981 0%, #06B6D4 40%, #047857 70%, transparent 85%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[800px] h-[650px] rounded-full opacity-15 blur-[180px]"
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
            { id: "all", label: "World", icon: Compass },
            { id: "desk", label: "Desk", icon: Laptop },
            { id: "journal", label: "Values", icon: BookOpen },
            { id: "music", label: "Music", icon: Music },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  const el = document.getElementById(tab.id === "all" ? "hero" : tab.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#10B981] text-[#050807] shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : "text-[#CBD5E1] hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* ── MASTER CONTAINER ── */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full flex flex-col items-center gap-20 md:gap-28">

        {/* ── SCENE 1: HERO ── */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center w-full max-w-[1280px] mx-auto">
            
            {/* Left Column: Clean Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-[540px] mx-auto md:mx-0 w-full"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6">
                ARNAV.OS / PERSONAL
              </span>

              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-tight text-[#F4EFEA] mb-6 tracking-tight">
                Welcome to <span className="text-[#10B981]">my world.</span>
              </h1>

              <p className="font-sans text-xl sm:text-2xl text-[#CBD5E1] leading-relaxed max-w-lg mb-8 font-light tracking-wide">
                Not everything important belongs on a resume.
              </p>

              <div className="flex items-center gap-3 font-mono text-xs text-[#10B981]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>CINEMATIC STORYTELLING SCENE</span>
              </div>
            </motion.div>

            {/* Right Column: Profile Panel Glass Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex items-center justify-center w-full"
            >
              <div className="relative w-full max-w-[420px] rounded-3xl p-8 bg-[#09120F]/90 border border-white/10 hover:border-[#10B981]/40 transition-all duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.6),0_0_40px_rgba(16,185,129,0.1)] backdrop-blur-2xl flex flex-col justify-center overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#10B981]/10 blur-[80px] pointer-events-none" />

                <div className="flex justify-between items-center z-10 pb-6">
                  <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest font-bold">
                    ARNAV SINGH
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">EST. 2006</span>
                </div>

                <div className="my-auto text-center py-6 z-10">
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center text-4xl shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                    ⚡
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F4EFEA] mb-2">
                    Human & Builder
                  </h3>
                  <p className="font-mono text-xs text-[#CBD5E1] leading-relaxed max-w-[280px] mx-auto">
                    Late-Night Coder • Chess Enthusiast • Masala Chai Devotee
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#94A3B8] z-10">
                  <span>LOCATION: INDIA</span>
                  <span className="text-[#10B981]">VIBE: ACTIVE ⚡</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── SCENE 2: MANIFESTO QUOTE ── */}
        <section className="py-16 text-center w-full max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-[0.3em] block mb-6">
              THE PHILOSOPHY
            </span>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[1.15] text-[#F4EFEA] tracking-tight">
              I don't just write lines of code. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#F4EFEA]">
                I build experiences that make people feel something.
              </span>
            </h2>
          </motion.div>
        </section>

        {/* ── SCENE 3A: STORY & CRAFT ── */}
        <section id="desk" className="py-16 w-full max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-[540px] px-2"
            >
              <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-[0.25em] block mb-4">
                01 / CRAFT & CURIOSITY
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F4EFEA] mb-6 leading-tight">
                Crafting with intention.
              </h3>
              <p className="font-sans text-lg text-[#CBD5E1] leading-relaxed mb-6 font-light">
                From late-night algorithm puzzles to building full-stack platforms like MoodMate AI, every project starts with a simple question: <em>How can this be more thoughtful?</em>
              </p>
              <p className="font-sans text-base text-[#94A3B8] leading-relaxed font-light">
                Code is the vehicle, but human impact is the ultimate destination.
              </p>
            </motion.div>

            {/* MoodMate AI Engine Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="p-8 rounded-3xl bg-[#09120F]/90 border border-white/10 hover:border-[#10B981]/40 transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.65),0_0_35px_rgba(16,185,129,0.1)] backdrop-blur-xl w-full max-w-[420px] flex flex-col justify-center text-left">
                <div className="py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-[#10B981] shrink-0" />
                    <h4 className="font-display text-2xl font-bold text-[#F4EFEA] tracking-tight">
                      MoodMate AI Engine
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed font-light mb-6">
                    Combining real-time emotion telemetry, journal reflection prompts, and LLM agent architecture.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#10B981]">
                  <span>AI SYSTEM ARCHITECTURE</span>
                  <span>LIVE PRODUCT ⚡</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── SCENE 3B: RHYTHM & RITUALS ── */}
        <section className="py-16 w-full max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <div className="p-8 rounded-3xl bg-[#09120F]/90 border border-white/10 hover:border-[#06B6D4]/40 transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.65),0_0_35px_rgba(6,182,212,0.1)] backdrop-blur-xl w-full max-w-[420px] flex flex-col justify-center text-left">
                <div className="py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl shrink-0">☕ ♟ 🎧</span>
                    <h4 className="font-display text-2xl font-bold text-[#F4EFEA] tracking-tight">
                      The Daily Rituals
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed font-light mb-6">
                    Fresh masala chai, blitz chess tactics, and continuous soundtrack loops playing on repeat while solving DSA.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#06B6D4]">
                  <span>DAILY HABITS</span>
                  <span>ALWAYS ACTIVE ☕</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 text-left max-w-[540px] px-2"
            >
              <span className="font-mono text-xs font-bold text-[#06B6D4] uppercase tracking-[0.25em] block mb-4">
                02 / DAILY RHYTHM
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F4EFEA] mb-6 leading-tight">
                The rituals that fuel the drive.
              </h3>
              <p className="font-sans text-lg text-[#CBD5E1] leading-relaxed font-light">
                Deep work isn't just about screen time. It's about creating an atmosphere where focus flows naturally — late at night when the world is quiet.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ── SCENE 4: CORE BELIEFS ── */}
        <section id="journal" className="py-16 text-center w-full max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-[0.3em] block mb-8">
              CORE BELIEFS
            </span>

            <div className="space-y-6 font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none text-[#F4EFEA]/30">
              {[
                "I build.",
                "I learn.",
                "I stay curious.",
                "I finish what I start.",
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="hover:text-[#10B981] transition-colors cursor-pointer"
                >
                  {val}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── SCENE 5: BUCKET LIST ── */}
        <section className="py-16 text-center w-full max-w-[950px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-[0.3em] block mb-4">
              AMBITIONS & GOALS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F4EFEA] mb-12">
              The Bucket List
            </h2>

            <div className="space-y-4 text-left">
              {bucketList.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01, x: 6 }}
                  onClick={() => toggleBucket(idx)}
                  className={`p-6 sm:px-8 sm:py-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    item.done
                      ? "bg-[#091A14]/90 border-[#10B981]/40 shadow-[0_4px_20px_rgba(16,185,129,0.1)]"
                      : "bg-[#09120F]/90 border-white/10 hover:border-[#10B981]/40 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {item.done ? (
                      <CheckCircle2 className="w-6 h-6 text-[#10B981] shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#94A3B8] shrink-0" />
                    )}
                    <span
                      className={`font-sans text-base sm:text-lg font-light leading-relaxed ${
                        item.done ? "line-through text-[#94A3B8]" : "text-[#F4EFEA]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  {item.done && (
                    <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-wider shrink-0 self-start sm:self-center">
                      ✓ ACHIEVED
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── SCENE 6: SOUNDTRACK SPOTLIGHT ── */}
        <section id="music" className="py-16 text-center w-full max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#09120F]/90 border border-white/10 hover:border-[#10B981]/40 transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.65),0_0_35px_rgba(16,185,129,0.1)] backdrop-blur-2xl max-w-xl mx-auto text-left"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center text-3xl shadow-lg">
                🎻
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-[#F4EFEA]">
                  Fairytale & Focus Beats
                </h4>
                <p className="font-mono text-xs text-[#94A3B8] mt-1">
                  Alexander Rybak • Lo-Fi Coding • Ambient Piano
                </p>
              </div>
            </div>

            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-[#10B981] transition-all duration-300"
                style={{ width: isPlaying ? "72%" : "30%" }}
              />
            </div>

            <div className="flex justify-between text-xs font-mono text-[#94A3B8] mb-8 px-1">
              <span>Fairytale (Active Loop)</span>
              <span>3:03</span>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-[#10B981] hover:bg-emerald-400 text-[#050807] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-transform hover:scale-105 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </button>
            </div>
          </motion.div>
        </section>

        {/* ── SCENE 7: CINEMATIC CLOSING ── */}
        <section className="py-24 text-center w-full max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 px-4"
          >
            <Heart className="w-14 h-14 text-[#10B981] mx-auto animate-pulse" />
            
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F4EFEA] tracking-tight leading-tight">
              Thanks for stopping by.
            </h2>

            <p className="font-sans text-xl sm:text-2xl text-[#10B981] font-light">
              Now let's build something amazing.
            </p>

            <div className="pt-8 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#10B981] text-[#050807] font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:scale-105"
              >
                Back to Main OS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
