"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section } from "@/components/Section";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only: you can wire this up to an API route or email service later.
    alert("Form submission is not connected yet. Feel free to hook this up to your backend or email.");
  };

  return (
    <Section id="contact" title="Let&apos;s get in touch" eyebrow="Contact">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="space-y-6 text-sm text-slate-300">
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              I&apos;m actively seeking Software Engineering internships for Summer 2026/2027. 
              Let&apos;s connect if you&apos;re looking for a passionate developer who loves building 
              AI-powered automation tools and scalable full-stack applications.
            </p>
            <div className="grid gap-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 text-xs"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Mail className="h-4 w-4" />
                </div>
                <a 
                  href="mailto:sashankk323@gmail.com"
                  className="text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  sashankk323@gmail.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-xs"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Phone className="h-4 w-4" />
                </div>
                <a 
                  href="tel:+16823443328"
                  className="text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  +1 (682) 344-3328
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 text-xs"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-slate-200">Arlington, Texas</span>
              </motion.div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Connect online
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://linkedin.com/in/sashank-sharma"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs text-slate-100 backdrop-blur-sm transition hover:border-emerald-400 hover:text-emerald-200 hover:bg-emerald-500/5"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/sashankk323"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs text-slate-100 backdrop-blur-sm transition hover:border-emerald-400 hover:text-emerald-200 hover:bg-emerald-500/5"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </motion.a>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-4 rounded-2xl border border-white/5 bg-slate-950/80 p-5 text-xs text-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.8)] backdrop-blur-sm"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Send a message
          </p>
          <div className="space-y-3">
            <label className="block text-[11px] text-slate-300">
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/50 px-3 py-2 text-xs text-slate-100 outline-none ring-emerald-500/40 transition focus:border-emerald-400 focus:ring-1 focus:bg-slate-900/70"
                placeholder="Your name"
              />
            </label>
            <label className="block text-[11px] text-slate-300">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/50 px-3 py-2 text-xs text-slate-100 outline-none ring-emerald-500/40 transition focus:border-emerald-400 focus:ring-1 focus:bg-slate-900/70"
                placeholder="your@email.com"
              />
            </label>
            <label className="block text-[11px] text-slate-300">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 w-full resize-none rounded-md border border-white/10 bg-slate-900/50 px-3 py-2 text-xs text-slate-100 outline-none ring-emerald-500/40 transition focus:border-emerald-400 focus:ring-1 focus:bg-slate-900/70"
                placeholder="Your message..."
              />
            </label>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Send message
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}
