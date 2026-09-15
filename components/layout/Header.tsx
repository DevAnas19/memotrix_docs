"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Github, Menu, X } from "lucide-react";
import { NAV_LINKS, GH_URL } from "@/lib/constants";
import { SearchModal } from "@/components/ui/SearchModal";
import { useSearchModal } from "@/hooks/useSearchModal";
import { cn } from "@/lib/utils";
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const search = useSearchModal();
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-rule/50 bg-[#faf8f1]/80 backdrop-blur-xl shadow-sm transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1.5 font-extrabold text-lg text-ink tracking-tight select-none">
            <img src="/logo.png" alt="Memotrix Logo" className="h-6 w-auto object-contain" />
            Memotrix
          </Link>
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors",
                    active ? "text-ink" : "text-ink-secondary hover:text-ink hover:bg-paper-3/60"
                  )}>
                  {link.label}
                  {active && <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-brand-blue" style={{ transform: "scaleY(1) rotate(-0.3deg)" }} />}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={search.openSearch}
              className="hidden sm:flex items-center gap-2 h-8 rounded-lg border border-rule bg-paper-2 px-3 text-xs text-ink-muted hover:border-brand-blue/30 hover:text-ink transition-colors">
              <Search className="h-3.5 w-3.5" />
              <span>Search docs…</span>
              <kbd className="font-mono text-[10px] bg-paper-card text-ink-muted px-1 py-px rounded border border-rule">⌘K</kbd>
            </button>
            <a href={GH_URL} target="_blank" rel="noopener noreferrer"
              className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-rule bg-paper-card text-ink-muted hover:text-ink hover:border-brand-blue/30 transition-colors" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <Link href="/docs#quick-start"
              className="hidden sm:inline-flex h-8 items-center px-3.5 rounded-lg bg-ink text-white text-xs font-semibold hover:bg-[#1a2240] transition-colors shadow-sm active:scale-95">
              Get Started →
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden h-8 w-8 inline-flex items-center justify-center rounded-lg text-ink-secondary hover:bg-paper-3" aria-label="Menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-rule bg-paper-card px-4 py-3 space-y-0.5">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className={cn("block px-3 py-2 text-sm rounded-lg font-medium", pathname === link.href ? "text-ink bg-paper-3" : "text-ink-secondary hover:bg-paper-3 hover:text-ink")}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <SearchModal isOpen={search.isOpen} query={search.query} onQueryChange={search.setQuery} onClose={search.closeSearch} results={search.results} />
    </>
  );
}