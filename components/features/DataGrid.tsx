import React from "react";
import { ArrowRight } from "lucide-react";
const domains = [
  { 
    title: "Media",
    inputs: ["CSV", "JSON"],
    process: "CHUNKING"
  },
  { 
    title: "Education",
    inputs: ["OCR", "PDF"],
    process: "CHUNKING"
  },
  { 
    title: "Pharma",
    inputs: ["DATA", "API"],
    process: "EMBEDDING"
  },
  { 
    title: "Medical",
    inputs: ["JSON", "HL7"],
    process: "INDEX"
  }
];
export function DataGrid() {
  return (
    <section className="py-20 paper-2 border-b border-rule relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-mono font-bold text-ink-muted tracking-wider uppercase">05 / AGENTS</span>
            <span className="flex-1 h-px bg-rule" />
          </div>
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-ink tracking-tight leading-tight mb-2">
            Your data. In almost any shape.
          </h2>
          <p className="text-[15px] text-ink-secondary max-w-xl mb-1">
            30+ file formats out of the box.
          </p>
          
          <div className="absolute right-10 lg:right-32 top-10 flex-col items-center hidden md:flex select-none pointer-events-none z-30">
            <span className="font-hand text-[20px] text-brand-blue font-bold leading-tight text-center rotate-3">
              All types supported!
            </span>
            <svg width="40" height="60" viewBox="0 0 50 70" fill="none" className="opacity-80">
              <path d="M25 10 Q 10 30, 15 60" stroke="#3867FF" strokeWidth="2" fill="none" />
              <path d="M5 50 L 15 60 L 25 55" stroke="#3867FF" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-4 relative">
          {domains.map((domain, idx) => (
            <div key={idx} className="relative pt-6 group">
              <div className="absolute top-0 left-0 h-7 w-28 bg-[#f4ebd0] rounded-t-[6px] border border-b-0 border-[rgba(17,23,42,0.15)] flex items-center px-3 z-10 shadow-[-2px_-2px_4px_rgba(40,35,25,0.02)]">
                <span className="text-[11px] font-mono font-bold text-ink">{domain.title}</span>
              </div>
              <div className="bg-[#fcf8ed] border border-[rgba(17,23,42,0.15)] rounded-b-[6px] rounded-tr-[6px] p-5 shadow-[0_4px_12px_rgba(40,35,25,0.06)] group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(40,35,25,0.1)] transition-all duration-300 relative z-20 h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-ink-secondary w-full">
                  <div className="flex flex-col gap-1 shrink-0">
                    {domain.inputs.map((input, i) => (
                      <div key={i} className="px-2 py-1 bg-white border border-[rgba(17,23,42,0.1)] rounded shadow-sm">
                        {input}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-px bg-rule relative">
                      <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-ink-muted" />
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-white border border-[rgba(17,23,42,0.1)] rounded shadow-sm shrink-0 whitespace-nowrap">
                    {domain.process}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}