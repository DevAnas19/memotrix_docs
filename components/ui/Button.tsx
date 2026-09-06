import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}
export function Button({ variant = "primary", size = "md", href, external, className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[10px] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
  const v: Record<string, string> = {
    primary: "bg-ink text-white hover:bg-[#1a2240] shadow-card hover:shadow-card-hover border border-ink/10",
    outline: "bg-paper-card text-ink border border-rule hover:border-brand-blue/40 hover:shadow-card shadow-sm",
    ghost: "bg-transparent text-ink-secondary hover:text-ink hover:bg-paper-3/60",
  };
  const s: Record<string, string> = {
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-6 text-[15px] gap-2",
  };
  const cls = cn(base, v[variant], s[size], className);
  if (href && external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} {...props}>{children}</button>;
}