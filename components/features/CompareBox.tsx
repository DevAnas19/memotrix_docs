import React from "react";
import { Card } from "@/components/ui/Card";
const features = [
  { title: "HYBRID SEARCH", desc: "semantic + BM25 + reranking" },
  { title: "MULTIPLE BACKENDS", desc: "In-memory + PostgreSQL" },
  { title: "RICH FILE SUPPORT", desc: "30+ formats" },
  { title: "CUSTOMIZABLE", desc: "extractors + embeddings + indexes" },
  { title: "AGENT READY", desc: "built for agent workflows" },
  { title: "EASY TO USE", desc: "simple Python API" },
];
export function CompareBox() {
  return (
    <section className="py-20 paper-2 border-b border-rule relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[12px] font-mono font-bold text-ink-muted tracking-widest uppercase">FEATURE</span>
            </div>
            <h2 className="text-3xl sm:text-[42px] font-extrabold text-ink tracking-tight leading-tight">
              Everything You Need for <span className="text-[#6466f1]">Powerful Agent Memory</span>
            </h2>
          </div>
          <div className="absolute -left-12 sm:-left-24 top-4 flex items-center gap-2 hidden lg:flex select-none pointer-events-none">
            <span className="font-hand text-[18px] text-ink font-bold">Why Memotrix?</span>
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" className="opacity-70 mt-4">
              <path d="M5 5 Q 15 15, 25 15" stroke="#11172a" strokeWidth="1.5" fill="none" />
              <path d="M20 10 L 25 15 L 20 20" stroke="#11172a" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <div className="absolute -left-8 top-12 font-hand text-[15px] font-bold text-ink hidden xl:flex items-center gap-2 select-none z-10 rotate-[2deg]">
          </div>
          <div className="absolute right-0 lg:-right-8 top-0 lg:-top-12 w-48 bg-[#fff3cd] shadow-[2px_5px_15px_rgba(0,0,0,0.1)] p-5 rotate-[4deg] transform-origin-bottom-right rounded-sm z-20 hidden md:block">
            <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 tape w-10 h-5 rotate-[-2deg] bg-white/40" />
            <div className="font-hand font-bold text-ink text-[17px] leading-relaxed">
              <span className="underline uppercase tracking-wide text-[15px]">Focus:</span><br/>
              Ship faster with plug-and-play memory.
            </div>
          </div>
          {features.map((f, i) => (
            <div key={i} className="bg-[#fffdf8] border border-[rgba(17,23,42,0.1)] rounded-[12px] p-6 shadow-[0_4px_12px_rgba(40,35,25,0.04)] hover:shadow-[0_8px_20px_rgba(40,35,25,0.06)] transition-shadow">
              <div className="flex items-start mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-ink opacity-70">
                  <path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold text-ink text-[15px] mb-1.5 uppercase tracking-wide">{f.title}</h3>
              <p className="text-[14px] text-ink-secondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}