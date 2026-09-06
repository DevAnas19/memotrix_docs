import React from "react";
import { cn } from "@/lib/utils";
export interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "purple" | "green" | "yellow" | "pink";
  className?: string;
}
const v: Record<string, string> = {
  blue: "bg-brand-blue/[0.08] text-brand-blue border-brand-blue/20",
  purple: "bg-brand-purple/[0.08] text-brand-purple border-brand-purple/20",
  green: "bg-notebook-green/[0.08] text-notebook-green border-notebook-green/20",
  yellow: "bg-notebook-yellow/[0.10] text-[#9a7c1a] border-notebook-yellow/25",
  pink: "bg-notebook-pink/[0.08] text-[#c4687a] border-notebook-pink/20",
};
export function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 h-6 px-2.5 text-[11px] font-mono font-bold uppercase tracking-wider rounded-md border",
      v[variant],
      className
    )}>
      {children}
    </span>
  );
}