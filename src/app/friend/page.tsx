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
  Music,
  Compass,
  BookOpen,
} from "lucide-react";

export default function FriendPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [isPlaying, setIsPlaying] = useState(true);

  const [bucketList, setBucketList] = useState([
    { title: "Find a software engineering internship", done: false },
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
    <div className="relative min-h-screen bg-[#faf8f9] text-[#0f172a] font-sans overflow-x-hidden selection:bg-rose-100 selection:text-rose-950">
      {/* ── Background Subtle Rose Glow ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full opacity-40 blur-[140px]"
          style={{ background: "radial-gradient(circle, #ffe4e6 0%, #fecdd3 30%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Top Floating Switcher Bar ── */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/95 border border-slate-200/90 backdrop-blur-2xl shadow-lg shadow-slate-200/50">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            ← Home
          </Link>
          <div className="h-4 w-px bg-slate-200" />
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
                    ? "bg-rose-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center w-full max-w-[1280px] mx-auto">
            
            {/* Left Column: Clean Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-[540px] mx-auto md:mx-0 w-full"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6">
                ARNAV / PERSONAL
              </span>

              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight text-slate-900 mb-6 tracking-tight">
                Welcome to <span className="text-rose-600">my world.</span>
              </h1>

              <p className="font-sans text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-lg mb-8 font-light">
                Not everything important belongs on a resume.
              </p>

              <div className="flex items-center gap-3 font-mono text-xs text-rose-700 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
                <span>HUMAN & BUILDER PERSPECTIVE</span>
              </div>
            </motion.div>

            {/* Right Column: Profile Panel White Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex items-center justify-center w-full"
            >
              <div className="relative w-full max-w-[420px] rounded-3xl p-8 bg-white border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-md flex flex-col justify-center overflow-hidden group">
                <div className="flex justify-between items-center z-10 pb-6 border-b border-slate-100">
                  <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">
                    ARNAV SINGH
                  </span>
                  <span className="font-mono text-xs text-slate-400">EST. 2006</span>
                </div>

                <div className="my-auto text-center py-8 z-10">
                  <div className="w-24 h-24 rounded-2xl mx-auto mb-5 bg-rose-50 border border-rose-200 flex items-center justify-center text-4xl shadow-xs">
                    ⚡
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Human & Builder
                  </h3>
                  <p className="font-mono text-xs text-slate-600 leading-relaxed max-w-[280px] mx-auto">
                    Late-Night Coder • Chess Enthusiast • Masala Chai Devotee
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 z-10">
                  <span>LOCATION: INDIA</span>
                  <span className="text-rose-600 font-bold">VIBE: ACTIVE ⚡</span>
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
            <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-[0.3em] block mb-6">
              THE PHILOSOPHY
            </span>

            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.15] text-slate-900 tracking-tight">
              I don&apos;t just write lines of code. <br />
              <span className="text-rose-600">
                I build experiences that solve real problems.
              </span>
            </h2>
          </motion.div>
        </section>

        {/* ── SCENE 3A: STORY & CRAFT ── */}
        <section id="desk" className="py-16 w-full max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-[540px] px-2"
            >
              <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-[0.25em] block mb-4">
                01 / CRAFT & CURIOSITY
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Crafting with intention.
              </h3>
              <p className="font-sans text-lg text-slate-600 leading-relaxed mb-6 font-light">
                From late-night algorithm puzzles to building full-stack platforms like ToolForge ATS and MoodMate, every project starts with a simple question: <em>How can this be faster and genuinely helpful?</em>
              </p>
              <p className="font-sans text-base text-slate-500 leading-relaxed">
                Code is the vehicle, but human utility is the ultimate destination.
              </p>
            </motion.div>

            {/* ToolForge ATS Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-md w-full max-w-[420px] flex flex-col justify-center text-left">
                <div className="py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-rose-600 shrink-0" />
                    <h4 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                      ToolForge ATS
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-6">
                    In-browser ATS resume scoring, LaTeX audit, and keyword matching with zero server telemetry.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-rose-600 font-bold">
                  <span>IN-BROWSER PRIVACY</span>
                  <span>LIVE PRODUCT ⚡</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── SCENE 3B: RHYTHM & RITUALS ── */}
        <section className="py-16 w-full max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-md w-full max-w-[420px] flex flex-col justify-center text-left">
                <div className="py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl shrink-0">☕ ♟ 🎧</span>
                    <h4 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                      Daily Rituals
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed font-light mb-6">
                    Fresh cups of masala chai, blitz chess matches, and continuous soundtrack loops playing while solving C++ problems.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-rose-600 font-bold">
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
              <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-[0.25em] block mb-4">
                02 / DAILY RHYTHM
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                The rituals that fuel the drive.
              </h3>
              <p className="font-sans text-lg text-slate-600 leading-relaxed font-light">
                Deep work isn&apos;t just about screen time. It&apos;s about creating an atmosphere where focus flows naturally — late at night when the world is quiet.
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
            <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-[0.3em] block mb-8">
              CORE BELIEFS
            </span>

            <div className="space-y-6 font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none text-slate-300">
              {[
                "I build.",
                "I learn.",
                "I stay curious.",
                "I finish what I start.",
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="hover:text-rose-600 transition-colors cursor-pointer"
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
            <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-[0.3em] block mb-4">
              AMBITIONS & GOALS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mb-12">
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
                      ? "bg-rose-50/70 border-rose-200 shadow-2xs"
                      : "bg-white border-slate-200 hover:border-rose-300 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {item.done ? (
                      <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-400 shrink-0" />
                    )}
                    <span
                      className={`font-sans text-base sm:text-lg font-medium leading-relaxed ${
                        item.done ? "line-through text-slate-400" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  {item.done && (
                    <span className="font-mono text-xs font-bold text-rose-700 uppercase tracking-wider shrink-0 self-start sm:self-center">
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
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-md max-w-xl mx-auto text-left"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-3xl shadow-xs">
                🎻
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-slate-900">
                  Fairytale & Focus Beats
                </h4>
                <p className="font-mono text-xs text-slate-500 mt-1">
                  Alexander Rybak • Lo-Fi Coding • Ambient Piano
                </p>
              </div>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-rose-600 transition-all duration-300"
                style={{ width: isPlaying ? "72%" : "30%" }}
              />
            </div>

            <div className="flex justify-between text-xs font-mono text-slate-500 mb-8 px-1">
              <span>Fairytale (Active Loop)</span>
              <span>3:03</span>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-sm shadow-rose-500/20 transition-transform hover:scale-105 cursor-pointer"
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
            <Heart className="w-14 h-14 text-rose-600 mx-auto animate-pulse" />
            
            <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
              Thanks for stopping by.
            </h2>

            <p className="font-sans text-xl sm:text-2xl text-rose-600 font-medium">
              Now let&apos;s build something great.
            </p>

            <div className="pt-8 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-rose-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-rose-700 transition-all shadow-sm shadow-rose-500/20 hover:scale-105"
              >
                Back to Home <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
