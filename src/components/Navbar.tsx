"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

// Smooth scroll helper
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/5 backdrop-blur ${
        isScrolled ? "bg-slate-950/80" : "bg-slate-950/60"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-50"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40 group-hover:bg-emerald-500/20">
            SE
          </span>
          <span className="hidden text-sm md:inline">Software Engineering Portfolio</span>
        </button>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="rounded-md px-1 py-1 text-xs font-medium tracking-wide text-slate-300 transition hover:text-emerald-400"
            >
              {section.label}
            </button>
          ))}
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-1 text-slate-200 hover:text-emerald-400 md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/5 bg-slate-950/95 md:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 text-sm text-slate-200">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsOpen(false);
                }}
                className="rounded-md px-2 py-2 text-left text-sm font-medium tracking-wide hover:bg-slate-900 hover:text-emerald-400"
              >
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
