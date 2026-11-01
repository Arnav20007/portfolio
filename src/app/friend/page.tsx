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
    { title: "Earn a Software Engineering Internship", done: false },
    { title: "Master Tree, Graph & Dynamic Programming patterns in C++", done: false },
    { title: "Contribute to a popular open-source project", done: false },
    { title: "Travel across Japan during cherry blossom season", done: false },
  ]);

  const toggleBucket = (index: number) => {
    setBucketList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, done: !item.done } : item))
    );
  };

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-x-hidden selection:bg-[#C4B0B0] selection:text-[#1A1818] transition-colors duration-300">
      {/* ── Top Floating Switcher Bar ── */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-line)] backdrop-blur-2xl shadow-xl shadow-black/5">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-xs font-mono font-bold text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
          >
            ← Home
          </Link>
          <div className="h-4 w-px bg-[var(--line)]" />
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
                    ? "bg-[var(--btn-bg)] text-[var(--btn-fg)] shadow-xs"
                    : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
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
              <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6">
                ARNAV / BEHIND THE CODE
              </span>

              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-tight text-[var(--foreground)] mb-6 tracking-tight">
                Beyond the <br />
                <span className="text-[var(--accent)]">resume lines.</span>
              </h1>

              <p className="font-sans text-xl sm:text-2xl text-[var(--muted)] leading-relaxed max-w-lg mb-8 font-normal">
                A bit more about what I build, how I spend my time, and what keeps me curious.
              </p>

              <div className="flex items-center gap-3 font-mono text-xs text-[var(--foreground)] font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>STUDENT &amp; BUILDER</span>
              </div>
            </motion.div>

            {/* Right Column: Profile Panel Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex items-center justify-center w-full"
            >
              <div className="relative w-full max-w-[420px] rounded-3xl p-8 bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl flex flex-col justify-center overflow-hidden group">
                <div className="flex justify-between items-center z-10 pb-6 border-b border-[var(--line)]">
                  <span className="font-mono text-xs text-[var(--foreground)] uppercase tracking-widest font-bold">
                    ARNAV SINGH
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">B.Tech CSE</span>
                </div>

                <div className="my-auto text-center py-8 z-10">
                  <div className="w-24 h-24 rounded-2xl mx-auto mb-5 bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-4xl shadow-xs">
                    ⚡
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-2">
                    Student &amp; Builder
                  </h3>
                  <p className="font-mono text-xs text-[var(--muted)] leading-relaxed max-w-[280px] mx-auto">
                    Late-Night Coding • Chess Matches • Masala Chai Devotee
                  </p>
                </div>

                <div className="pt-5 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--muted)] z-10">
                  <span>LOCATION: LUCKNOW</span>
                  <span className="text-[var(--accent)] font-bold">STATUS: PRACTICING ⚡</span>
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
            <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-[0.3em] block mb-6">
              PERSONAL APPROACH
            </span>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.2] text-[var(--foreground)] tracking-tight">
              I learn best by building practical things <br />
              <span className="text-[var(--accent)]">
                and understanding why they work.
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
              <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-[0.25em] block mb-4">
                01 / BUILDING WHAT&apos;S USEFUL
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] mb-6 leading-tight">
                Solving problems I run into.
              </h3>
              <p className="font-sans text-lg text-[var(--muted)] leading-relaxed mb-6 font-normal">
                ATSCheck started when friends were trying to check how their resumes matched specific job descriptions without paying for subscriptions or uploading resumes to third-party servers.
              </p>
              <p className="font-sans text-base text-[var(--muted)] leading-relaxed">
                Running everything in the browser via JavaScript and Web Workers proved to be a fast, privacy-first approach.
              </p>
            </motion.div>

            {/* ATSCheck Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl w-full max-w-[420px] flex flex-col justify-center text-left">
                <div className="py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-[var(--accent)] shrink-0" />
                    <h4 className="font-display text-2xl font-bold text-[var(--foreground)] tracking-tight">
                      ATSCheck
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[var(--muted)] leading-relaxed font-normal mb-6">
                    A web utility for scanning resume keywords against job requirements directly on the client machine with 100% data privacy.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--foreground)] font-bold">
                  <span>RUNS IN BROWSER</span>
                  <a
                    href="https://atscheck.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    LIVE APP ↗
                  </a>
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
              <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl w-full max-w-[420px] flex flex-col justify-center text-left">
                <div className="py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl shrink-0">☕ ♟ 🎧</span>
                    <h4 className="font-display text-2xl font-bold text-[var(--foreground)] tracking-tight">
                      Daily Routine
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[var(--muted)] leading-relaxed font-normal mb-6">
                    Cups of chai, quick blitz chess games to clear the mind, and soundtrack loops while grinding C++ problems late in the evening.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--muted)] font-bold">
                  <span>STUDENT LIFE</span>
                  <span>CONSISTENT HABITS ☕</span>
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
              <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-[0.25em] block mb-4">
                02 / DAILY RHYTHM
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] mb-6 leading-tight">
                Consistent habits that build momentum.
              </h3>
              <p className="font-sans text-lg text-[var(--muted)] leading-relaxed font-normal">
                Progress doesn&apos;t come from sporadic all-nighters. It comes from showing up every day, writing clean code, and learning one pattern at a time.
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
            <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-[0.3em] block mb-8">
              WHAT DRIVES ME
            </span>

            <div className="space-y-6 font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-[var(--muted)]">
              {[
                "Practice consistently.",
                "Keep interfaces clean.",
                "Stay curious.",
                "Finish what I start.",
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="hover:text-[var(--foreground)] transition-colors cursor-pointer"
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
            <span className="font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-[0.3em] block mb-4">
              GOALS &amp; MILESTONES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] mb-12">
              Current Goals
            </h2>

            <div className="space-y-4 text-left">
              {bucketList.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01, x: 6 }}
                  onClick={() => toggleBucket(idx)}
                  className={`p-6 sm:px-8 sm:py-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    item.done
                      ? "bg-[var(--surface-2)] border-[var(--line)] shadow-2xs"
                      : "bg-[var(--surface)] border-[var(--line)] hover:border-[var(--accent)] shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {item.done ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-[var(--muted)] shrink-0" />
                    )}
                    <span
                      className={`font-sans text-base sm:text-lg font-medium leading-relaxed ${
                        item.done ? "line-through text-[var(--muted)]" : "text-[var(--foreground)]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  {item.done && (
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider shrink-0 self-start sm:self-center">
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
            className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all duration-300 shadow-xl max-w-xl mx-auto text-left"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-3xl shadow-xs">
                🎻
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-[var(--foreground)]">
                  Fairytale &amp; Study Beats
                </h4>
                <p className="font-mono text-xs text-[var(--muted)] mt-1">
                  Alexander Rybak • Talwiinder • Lo-Fi Coding
                </p>
              </div>
            </div>

            <div className="w-full bg-[var(--surface-2)] h-2 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-300"
                style={{ width: isPlaying ? "72%" : "30%" }}
              />
            </div>

            <div className="flex justify-between text-xs font-mono text-[var(--muted)] mb-8 px-1">
              <span>Fairytale (Active Loop)</span>
              <span>3:03</span>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
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
            <Heart className="w-14 h-14 text-[var(--accent)] mx-auto animate-pulse" />
            
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
              Thanks for stopping by.
            </h2>

            <p className="font-sans text-xl sm:text-2xl text-[var(--muted)] font-normal">
              Always open to connecting with fellow builders.
            </p>

            <div className="pt-8 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--btn-bg)] text-[var(--btn-fg)] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md hover:scale-105"
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
