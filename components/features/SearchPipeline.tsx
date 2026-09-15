import React from "react";
import { ArrowDown, Search, Bot } from "lucide-react";
import { Card } from "@/components/ui/Card";
const steps = [
  { label: "USER QUERY", sub: '"how should answers be cited?"', style: "bg-ink text-white" },
];
export function SearchPipeline() {
  return (
    <section className="py-20 paper-1 border-b border-rule">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-ink tracking-tight leading-tight">
            Search smarter. Retrieve better.
          </h2>
          <p className="text-[15px] text-ink-secondary max-w-xl mx-auto">
            Combines neural vector embeddings with exact BM25 keyword matching and optional cross-encoder reranking.
          </p>
          <div className="font-hand text-[17px] text-brand-blue font-bold select-none">
            Better recall. Better context. ✓
          </div>
        </div>
        <Card className="p-6 sm:p-8 bg-paper-card bg-grid relative overflow-visible">
          <div className="absolute -top-2.5 right-10 tape w-14 h-3.5 hidden sm:block" />
          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex justify-center">
              <div className="px-4 py-2.5 rounded-xl bg-ink text-white font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-card">
                <Search className="h-4 w-4 text-notebook-sky" />
                &ldquo;how should answers be cited?&rdquo;
              </div>
            </div>
            <div className="flex justify-center text-brand-blue"><ArrowDown className="h-4 w-4" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-brand-blue/25 bg-paper-2 text-center">
                <span className="block text-[11px] font-mono font-bold text-brand-blue">SEMANTIC</span>
                <span className="block text-[10px] text-ink-muted mt-0.5">HNSW Dense Vectors</span>
              </div>
              <div className="p-3 rounded-lg border border-brand-purple/25 bg-paper-2 text-center">
                <span className="block text-[11px] font-mono font-bold text-brand-purple">BM25</span>
                <span className="block text-[10px] text-ink-muted mt-0.5">Sparse Term Frequency</span>
              </div>
            </div>
            <div className="flex justify-center text-brand-purple"><ArrowDown className="h-4 w-4" /></div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-brand-blue/[0.06] to-brand-purple/[0.06] border border-brand-blue/20 text-center">
              <span className="text-[11px] font-mono font-extrabold text-ink">HYBRID RETRIEVAL FUSION</span>
              <span className="block text-[10px] text-ink-muted">Reciprocal Rank Fusion (RRF)</span>
            </div>
            <div className="flex justify-center text-notebook-green"><ArrowDown className="h-4 w-4" /></div>
            <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold">
              <div className="px-3 py-2 rounded-lg border border-rule bg-paper-3 text-ink">RERANKER</div>
              <span className="text-ink-muted">→</span>
              <div className="px-3 py-2 rounded-lg border border-notebook-green/30 bg-[#f0f9f4] text-[#2d7a53]">RELEVANT MEMORY</div>
              <span className="text-ink-muted">→</span>
              <div className="px-3 py-2 rounded-lg bg-ink text-white flex items-center gap-1.5 shadow-sm">
                <Bot className="h-3.5 w-3.5 text-notebook-sky" /> AGENT
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}