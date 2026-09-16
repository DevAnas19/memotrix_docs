"use client";

import React from "react";
import { ArrowDown, ArrowRight, FileText, Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const WRITE_STEPS = [
  { n: "01", title: "File or add_text", sub: "memory.add / add_text" },
  { n: "02", title: "Extract", sub: "DocumentData by extension" },
  { n: "03", title: "Chunk", sub: "500 chars, 50 overlap" },
  { n: "04", title: "Embed", sub: "dimension from the model" },
  { n: "05", title: "Index both channels", sub: "dense HNSW / pgvector + sparse BM25 / tsvector" },
];

const READ_STEPS = [
  { n: "01", title: "Query", sub: "memory.search(query, top_k)" },
  { n: "02", title: "Embed query", sub: "cached if the agent repeats it" },
  { n: "03", title: "Search both indexes", sub: "paraphrase + exact identifiers" },
  { n: "04", title: "Fuse with RRF", sub: "optional rerank + memory boost" },
  { n: "05", title: "Expand neighbors", sub: "then return a small hit list" },
];

function StepList({ steps, accent }: { steps: typeof WRITE_STEPS; accent: "blue" | "purple" }) {
  return (
    <ol className="space-y-2">
      {steps.map((step, i) => (
        <li key={step.n}>
          <div className="flex items-start gap-3 rounded-xl border border-rule bg-paper-card px-3 py-2.5">
            <span
              className={cn(
                "mt-0.5 font-mono text-[11px] font-bold",
                accent === "blue" ? "text-brand-blue" : "text-brand-purple"
              )}
            >
              {step.n}
            </span>
            <div>
              <div className="text-sm font-bold text-ink">{step.title}</div>
              <div className="text-[12px] text-ink-muted font-mono">{step.sub}</div>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-1 text-ink-muted" aria-hidden>
              <ArrowDown className="h-3.5 w-3.5" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export function ArchWriteReadGraph() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-ink">Write path vs read path</h2>
        <p className="text-sm text-ink-secondary">
          Ingest walks down the left. Search walks down the right. They meet at the same two indexes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/[0.04] p-5">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4 text-brand-blue" />
            <Badge>Write · add()</Badge>
          </div>
          <StepList steps={WRITE_STEPS} accent="blue" />
        </div>
        <div className="rounded-xl border border-brand-purple/20 bg-brand-purple/[0.04] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-brand-purple" />
            <Badge variant="purple">Read · search()</Badge>
          </div>
          <StepList steps={READ_STEPS} accent="purple" />
        </div>
      </div>
    </section>
  );
}

const DENSE = ["prefs: dark mode", "theme settings", "UI chrome"];
const SPARSE = ["theme settings", "prefs: dark mode", "RX-78-2"];
const FUSED = ["theme settings", "prefs: dark mode", "UI chrome"];

export function ArchHybridGraph() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-ink">Hybrid search, as a graph</h2>
        <p className="text-sm text-ink-secondary">
          Every query hits a dense channel (meaning) and a sparse channel (exact words). Reciprocal Rank Fusion merges the two ranked lists.
        </p>
      </div>
      <div className="relative rounded-xl border border-rule bg-paper-card bg-grid p-5 sm:p-8">
        <div className="absolute -top-2.5 left-12 tape w-12 h-3.5 hidden sm:block" />
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 rounded-xl bg-ink text-white px-4 py-2 font-mono text-xs font-semibold">
            search(&quot;what theme does the user want?&quot;)
          </div>
        </div>
        <div className="flex justify-center text-brand-blue mb-4" aria-hidden>
          <ArrowDown className="h-4 w-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <RankCard
            title="Dense"
            sub="HNSW / pgvector"
            hint="paraphrases · “theme” ≈ “dark mode”"
            items={DENSE}
            tone="blue"
          />
          <RankCard
            title="Sparse"
            sub="BM25 / tsvector"
            hint="identifiers · exact tokens"
            items={SPARSE}
            tone="purple"
          />
        </div>
        <div className="flex justify-center my-4 text-brand-purple" aria-hidden>
          <ArrowDown className="h-4 w-4" />
        </div>
        <RrfFormula />
        <div className="flex justify-center my-4 text-notebook-green" aria-hidden>
          <ArrowDown className="h-4 w-4" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono font-bold">
          {["optional rerank", "memory boost", "neighbor expand"].map((label) => (
            <span key={label} className="rounded-lg border border-rule bg-paper-3 px-3 py-2 text-ink">
              {label}
            </span>
          ))}
          <ArrowRight className="h-3.5 w-3.5 text-ink-muted hidden sm:block" />
          <span className="rounded-lg bg-ink text-white px-3 py-2">top_k hits → your LLM</span>
        </div>
        <div className="max-w-md mx-auto mt-5">
          <RankCard title="Fused ranking" sub="what the agent actually sees" items={FUSED} tone="green" />
        </div>
        <div className="font-hand text-[16px] text-brand-blue font-bold select-none text-center mt-4">
          meaning + keywords, not five whole files →
        </div>
      </div>
    </section>
  );
}

function RrfFormula() {
  return (
    <div className="max-w-2xl mx-auto rounded-xl border border-brand-blue/25 bg-gradient-to-r from-brand-blue/[0.06] to-brand-purple/[0.06] px-5 py-6 sm:px-8">
      <div className="text-center text-[11px] font-mono font-extrabold tracking-[0.18em] text-brand-blue">
        Reciprocal Rank Fusion
      </div>
      <div
        className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-ink"
        aria-label="score of d equals the sum of 1 over k plus rank of d"
      >
        <span className="text-2xl sm:text-[2rem] italic font-semibold tracking-tight">
          score(d)
        </span>
        <span className="text-2xl text-ink-muted">=</span>
        <span className="flex flex-col items-center">
          <span className="text-[2.75rem] sm:text-[3.25rem] font-semibold leading-none select-none">Σ</span>
          <span className="mt-1 whitespace-nowrap font-mono text-[10px] text-ink-muted">
            dense + sparse
          </span>
        </span>
        <div className="flex flex-col items-center min-w-[9rem]">
          <span className="text-xl sm:text-2xl italic leading-none pb-2">1</span>
          <span className="block w-full h-[1.5px] bg-ink" />
          <span className="text-xl sm:text-2xl italic leading-none pt-2 whitespace-nowrap">
            k + rank(d)
          </span>
        </div>
      </div>
      <dl className="mt-6 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-paper-card/80 border border-rule px-2 py-2">
          <dt className="italic text-sm font-semibold text-ink">d</dt>
          <dd className="text-[11px] text-ink-muted mt-0.5">the chunk</dd>
        </div>
        <div className="rounded-lg bg-paper-card/80 border border-rule px-2 py-2">
          <dt className="italic text-sm font-semibold text-ink">
            k = 60
          </dt>
          <dd className="text-[11px] text-ink-muted mt-0.5">fusion constant</dd>
        </div>
        <div className="rounded-lg bg-paper-card/80 border border-rule px-2 py-2">
          <dt className="italic text-sm font-semibold text-ink">rank(d)</dt>
          <dd className="text-[11px] text-ink-muted mt-0.5">1-based place</dd>
        </div>
      </dl>
      <p className="mt-4 text-center text-[13px] text-ink-secondary leading-relaxed">
        A hit ranked 1st dense and 2nd sparse scores{" "}
        <span className="font-mono text-ink">1/61 + 1/62</span>
        . Better ranks add more; neither channel can dominate.
      </p>
    </div>
  );
}

function RankCard({
  title,
  sub,
  hint,
  items,
  tone,
}: {
  title: string;
  sub: string;
  hint?: string;
  items: string[];
  tone: "blue" | "purple" | "green";
}) {
  const color =
    tone === "blue" ? "text-brand-blue border-brand-blue/25" : tone === "purple" ? "text-brand-purple border-brand-purple/25" : "text-notebook-green border-notebook-green/30";
  return (
    <div className={cn("rounded-xl border bg-paper-2 p-4", color)}>
      <div className="text-[11px] font-mono font-bold uppercase tracking-wider">{title}</div>
      <div className="text-[11px] text-ink-muted font-mono">{sub}</div>
      {hint && <p className="text-[12px] text-ink-secondary mt-1">{hint}</p>}
      <ol className="mt-3 space-y-1.5">
        {items.map((item, i) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink">
            <span className={cn("font-mono text-[11px] font-bold w-4", color.split(" ")[0])}>{i + 1}</span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
