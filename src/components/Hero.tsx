"use client";

import { motion } from "framer-motion";
import { about } from "@/data/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-white/5 bg-slate-950"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle_at_30%_20%, rgba(16,185,129,0.18), transparent_60%), radial-gradient(circle_at_70%_80%, rgba(56,189,248,0.22), transparent_55%)",
              "radial-gradient(circle_at_70%_20%, rgba(16,185,129,0.18), transparent_60%), radial-gradient(circle_at_30%_80%, rgba(56,189,248,0.22), transparent_55%)",
              "radial-gradient(circle_at_30%_20%, rgba(16,185,129,0.18), transparent_60%), radial-gradient(circle_at_70%_80%, rgba(56,189,248,0.22), transparent_55%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="h-full w-full opacity-80"
        />
      </div>
      
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-emerald-400"
            style={{
              left: `${20 + i * 12}%`,
              top: `${60 + (i % 2) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-4 py-28 md:flex-row md:items-center md:justify-between md:px-6 md:py-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-950/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            Open to SWE internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
          >
            {about.name}
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400 bg-clip-text">
              {about.role.toLowerCase()}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]"
          >
            {about.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
            >
              View projects
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-950/40 px-5 py-2.5 text-sm font-medium text-emerald-200 transition hover:border-emerald-300 hover:bg-slate-900"
            >
              Download resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              {about.interests.slice(0, 3).join(" • ")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-4 w-full max-w-sm md:mt-0"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl border border-emerald-400/25 bg-slate-950/80 p-4 shadow-[0_0_60px_rgba(16,185,129,0.35)] backdrop-blur-sm"
          >
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-mono text-emerald-300">profile.ts</span>
              <span>UT Arlington • 3.7 GPA</span>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-slate-950/70 p-3 text-xs leading-relaxed text-slate-200 ring-1 ring-white/5">
              <code>{`const student = {
  name: "${about.name}",
  location: "${about.location}",
  graduation: "${about.graduation}",
  interests: ${JSON.stringify(about.interests.slice(0, 3))},
};`}</code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
