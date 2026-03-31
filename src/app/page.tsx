"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SkillTag } from "@/components/SkillTag";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ContactSection } from "@/components/ContactSection";
import { LanguageLogos, FrameworkLogos, ToolLogos } from "@/components/SkillLogos";
import { about, experience, projects, skills } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <Section id="about" title="About me" eyebrow="About">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm text-slate-300">
              <p>{about.blurb}</p>
              <ul className="grid gap-2 text-xs text-slate-300 sm:grid-cols-2">
                <li>
                  <span className="text-slate-400">Location</span>
                  <p className="font-medium text-slate-100">{about.location}</p>
                </li>
                <li>
                  <span className="text-slate-400">Graduation</span>
                  <p className="font-medium text-slate-100">{about.graduation}</p>
                </li>
                <li className="sm:col-span-2">
                  <span className="text-slate-400">Interests</span>
                  <p className="font-medium text-slate-100">
                    {about.interests.join(" · ")}
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-950/80 p-4 text-xs text-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Tech snapshot
              </p>
              <p className="text-slate-300">
                Comfortable with typed JavaScript, React/Next.js, and backend APIs. I care about
                clear data models, observability, and building things that recruiters can quickly
                understand.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills for SWE internships" eyebrow="Skills">
          <div className="space-y-6 text-sm text-slate-300">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Languages
              </p>
              <LanguageLogos />
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Web & Frameworks
              </p>
              <FrameworkLogos />
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Tools
              </p>
              <ToolLogos />
            </div>
          </div>
        </Section>

        <Section id="projects" title="Selected projects" eyebrow="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience & leadership" eyebrow="Experience">
          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.role + item.org} item={item} />
            ))}
          </div>
        </Section>

        <ContactSection />

        <footer className="border-t border-white/5 bg-slate-950/90 py-6">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 text-[11px] text-slate-500 md:px-6">
            <p>
              © {new Date().getFullYear()} {about.name || "Your Name"}. All rights reserved.
            </p>
            <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
