"use client";
import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { SearchItem } from "@/types/search";
export interface SearchModalProps {
  isOpen: boolean;
  query: string;
  onQueryChange: (q: string) => void;
  onClose: () => void;
  results: SearchItem[];
}
export function SearchModal({ isOpen, query, onQueryChange, onClose, results }: SearchModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/30 backdrop-blur-sm pt-[12vh] px-4" onClick={onClose}>
      <div className="w-full max-w-xl rounded-xl border border-rule bg-paper-card shadow-notebook-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
          <Search className="h-4 w-4 text-ink-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search documentation…"
            className="flex-1 bg-transparent text-ink placeholder-ink-muted focus:outline-none text-sm"
            autoFocus
          />
          <kbd className="text-[10px] font-mono bg-paper-3 text-ink-muted px-1.5 py-0.5 rounded border border-rule">ESC</kbd>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-10 text-center text-sm text-ink-muted">No results for &quot;{query}&quot;</div>
          ) : (
            <div className="space-y-0.5">
              {results.map((item, idx) => (
                <Link key={idx} href={item.href} onClick={onClose}
                  className="group flex flex-col gap-0.5 rounded-lg p-3 hover:bg-brand-blue/[0.06] transition-colors">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-blue font-bold">{item.cat}</span>
                  <span className="text-sm font-semibold text-ink group-hover:text-brand-blue">{item.title}</span>
                  {item.snippet && <span className="text-xs text-ink-muted line-clamp-1">{item.snippet}</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}