"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            {title}
          </h2>
        </motion.div>
        <div className="mt-6 sm:mt-8">{children}</div>
      </div>
    </section>
  );
}
