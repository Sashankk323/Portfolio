"use client";

import { SiPython, SiCplusplus, SiC, SiJavascript, SiTypescript, SiMysql, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiGit, SiGithub, SiLinux, SiDocker, SiPostgresql, SiMongodb, SiFlutter, SiVercel, SiHeroku } from "react-icons/si";

const baseClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/70 ring-1 ring-emerald-500/40 shadow-sm shadow-emerald-500/20 hover:bg-slate-900 transition-all duration-200 hover:scale-110 hover:ring-emerald-400/60";

interface LogoProps {
  title: string;
  children: React.ReactNode;
}

function Logo({ title, children }: LogoProps) {
  return (
    <div className={baseClass} aria-label={title} title={title}>
      {children}
    </div>
  );
}

export function LanguageLogos() {
  return (
    <div className="flex flex-wrap gap-3 text-emerald-200">
      <Logo title="Python">
        <SiPython className="h-5 w-5" />
      </Logo>
      <Logo title="C++">
        <SiCplusplus className="h-5 w-5" />
      </Logo>
      <Logo title="C">
        <SiC className="h-5 w-5" />
      </Logo>
      <Logo title="JavaScript">
        <SiJavascript className="h-5 w-5" />
      </Logo>
      <Logo title="TypeScript">
        <SiTypescript className="h-5 w-5" />
      </Logo>
      <Logo title="SQL">
        <SiMysql className="h-5 w-5" />
      </Logo>
    </div>
  );
}

export function FrameworkLogos() {
  return (
    <div className="flex flex-wrap gap-3 text-emerald-200">
      <Logo title="React">
        <SiReact className="h-5 w-5" />
      </Logo>
      <Logo title="Node.js">
        <SiNodedotjs className="h-5 w-5" />
      </Logo>
      <Logo title="Express">
        <SiExpress className="h-5 w-5" />
      </Logo>
      <Logo title="Tailwind CSS">
        <SiTailwindcss className="h-5 w-5" />
      </Logo>
      <Logo title="Flutter">
        <SiFlutter className="h-5 w-5" />
      </Logo>
    </div>
  );
}

export function ToolLogos() {
  return (
    <div className="flex flex-wrap gap-3 text-emerald-200">
      <Logo title="Git">
        <SiGit className="h-5 w-5" />
      </Logo>
      <Logo title="GitHub">
        <SiGithub className="h-5 w-5" />
      </Logo>
      <Logo title="PostgreSQL">
        <SiPostgresql className="h-5 w-5" />
      </Logo>
      <Logo title="MongoDB">
        <SiMongodb className="h-5 w-5" />
      </Logo>
      <Logo title="Linux">
        <SiLinux className="h-5 w-5" />
      </Logo>
      <Logo title="Docker">
        <SiDocker className="h-5 w-5" />
      </Logo>
      <Logo title="Vercel">
        <SiVercel className="h-5 w-5" />
      </Logo>
      <Logo title="Heroku">
        <SiHeroku className="h-5 w-5" />
      </Logo>
    </div>
  );
}
