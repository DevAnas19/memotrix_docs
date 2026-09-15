import React from "react";
import { cn } from "@/lib/utils";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-rule bg-paper-card p-6 shadow-card transition-all duration-200 hover:-translate-y-[3px] hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}