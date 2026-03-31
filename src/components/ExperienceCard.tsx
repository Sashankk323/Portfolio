"use client";

import { motion } from "framer-motion";

export interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
}

interface ExperienceCardProps {
  item: Experience;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-slate-950/60 p-4 text-xs text-slate-200"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">{item.role}</h3>
          <p className="text-[11px] text-slate-300">{item.org}</p>
        </div>
        <div className="text-right text-[11px] text-slate-400">
          <p>{item.period}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-emerald-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
