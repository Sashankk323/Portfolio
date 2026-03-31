"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
  github?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 60px rgba(16,185,129,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-slate-950/70 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.8)] backdrop-blur-sm"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>
        
        <ul className="space-y-2 text-xs text-slate-300">
          {project.bullets.map((item, index) => (
            <motion.li 
              key={item} 
              className="flex gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-emerald-400 flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium tracking-tight text-emerald-200 ring-1 ring-emerald-400/40 transition-all hover:bg-emerald-500/20"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-3 text-xs font-medium">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1.5 text-slate-200 backdrop-blur-sm transition-all hover:border-emerald-400 hover:text-emerald-200 hover:bg-emerald-500/10"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1.5 text-emerald-100 backdrop-blur-sm transition-all hover:bg-emerald-400 hover:text-slate-950"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live demo
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
