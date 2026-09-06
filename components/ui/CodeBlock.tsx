"use client";
import React from "react";
import { Check, Copy } from "lucide-react";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
export interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  className?: string;
}
export function CodeBlock({ code, filename, language = "python", className }: CodeBlockProps) {
  const { copied, copy } = useCopy();
  return (
    <div className={cn("my-4 rounded-xl border border-[#1e2640] bg-[#10182C] font-mono text-sm shadow-notebook overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b border-[#1e2640] bg-[#0c1322] px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] text-[#596176] font-medium">{filename || language}</span>
        </div>
        <button
          onClick={() => copy(code)}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-[#596176] hover:bg-[#1e2640] hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <><Check className="h-3 w-3 text-[#59B58A]" /><span className="text-[#59B58A]">Copied</span></>
          ) : (
            <><Copy className="h-3 w-3" /><span>Copy</span></>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-[#d4daf0] leading-relaxed text-xs sm:text-sm">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
}