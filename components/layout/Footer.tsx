import React from "react";
import Link from "next/link";
import { Github, Twitter, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, GH_URL } from "@/lib/constants";
export function Footer() {
  return (
    <footer className="bg-[#11182C] text-[#c0c7d6] border-t border-[#1e2640] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-white text-lg">
              <img src="/logo.png" alt="Memotrix Logo" className="h-6 w-auto object-contain brightness-0 invert opacity-90" />
              Memotrix
            </Link>
            <p className="text-sm leading-relaxed text-[#8a92a5] max-w-xs">
              Composable hybrid memory / RAG for agents.<br/>pip-installable, MIT Licensed.
            </p>
            <div className="flex items-center gap-3">
              <a href={GH_URL} target="_blank" rel="noopener noreferrer"
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-[#1a2240] hover:bg-[#253060] text-[#8a92a5] hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-[#1a2240] hover:bg-[#253060] text-[#8a92a5] hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <div className="font-hand text-[17px] text-[#596176] font-bold select-none pt-1">
              — made with intent.
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#596176] mb-3 block">Pages</span>
            <nav className="space-y-1.5">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}
                  className="block text-sm text-[#8a92a5] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:col-span-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#596176] mb-3 block">Developers</span>
            <nav className="space-y-1.5">
              <Link href="/docs/quickstart" className="flex items-center gap-1 text-sm text-[#8a92a5] hover:text-white transition-colors">
                Quick Start <ArrowUpRight className="h-3 w-3" />
              </Link>
              <a href={`${GH_URL}/issues`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[#8a92a5] hover:text-white transition-colors">
                Issues <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href={`${GH_URL}/blob/main/CHANGELOG.md`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[#8a92a5] hover:text-white transition-colors">
                Changelog <ArrowUpRight className="h-3 w-3" />
              </a>
            </nav>
          </div>
          <div className="md:col-span-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#596176] mb-3 block">Install</span>
            <code className="block text-xs font-mono text-brand-blue bg-[#0c1322] rounded-lg p-2.5 border border-[#1e2640]">
              pip install memotrix[memory]
            </code>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#1e2640] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#596176] flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Memotrix contributors. MIT License.</span>
            <span className="hidden sm:inline">|</span>
            <span>Contributors: <a href="https://gravatar.com/matrixxboy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Utsav Lankapati</a>, <span className="hover:text-white transition-colors cursor-default">ANSARI ANAS ASIF</span></span>
          </div>
          <span className="text-xs font-mono text-[#3a4055]">v0.1.x</span>
        </div>
      </div>
    </footer>
  );
}