import { ReactNode } from "react";

interface SkillTagProps {
  children: ReactNode;
}

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-slate-950/60 px-3 py-1 text-xs font-medium text-emerald-100 shadow-sm shadow-emerald-500/20">
      {children}
    </span>
  );
}
