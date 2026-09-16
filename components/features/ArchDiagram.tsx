"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Database,
  FileText,
  Layers,
  Search,
  Sparkles,
  Store,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ARCH_CELLS } from "@/hooks/useArchFilter";

const NODE = {
  ink: "border-ink/20 bg-ink text-white shadow-card",
  blue: "border-brand-blue/30 bg-brand-blue/[0.07] text-ink",
  purple: "border-brand-purple/30 bg-brand-purple/[0.07] text-ink",
  green: "border-notebook-green/30 bg-notebook-green/[0.08] text-ink",
  yellow: "border-notebook-yellow/40 bg-[#fdfaee] text-ink",
  paper: "border-rule bg-paper-card text-ink",
} as const;

function GraphNode({
  title,
  sub,
  tone = "paper",
  icon: Icon,
  active,
  onClick,
}: {
  title: string;
  sub?: string;
  tone?: keyof typeof NODE;
  icon?: React.ComponentType<{ className?: string }>;
  active?: boolean;
  onClick?: () => void;
}) {
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "w-full rounded-xl border px-4 py-3 text-left transition-all",
        NODE[tone],
        onClick && "cursor-pointer hover:shadow-card",
        active && "ring-2 ring-brand-blue/40 shadow-card"
      )}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className={cn("h-4 w-4 shrink-0", tone === "ink" ? "text-notebook-sky" : "text-brand-blue")} />}
        <span className="font-bold text-sm">{title}</span>
      </div>
      {sub && (
        <span className={cn("mt-1 block font-mono text-[11px]", tone === "ink" ? "text-white/70" : "text-ink-muted")}>
          {sub}
        </span>
      )}
    </Comp>
  );
}

function DownArrow() {
  return (
    <div className="flex justify-center py-1.5 text-brand-blue" aria-hidden>
      <ArrowDown className="h-4 w-4" />
    </div>
  );
}

export function ArchDiagram() {
  const [activeId, setActiveId] = useState("memory");
  const active = ARCH_CELLS.find((cell) => cell.id === activeId) || ARCH_CELLS[0];

  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-ink">How the pieces connect</h2>
        <p className="text-sm text-ink-secondary">
          Click a box to see what that layer actually does. Everything hangs off one <code className="font-mono text-xs bg-paper-3 border border-rule px-1.5 py-0.5 rounded text-brand-blue">Memory</code> facade.
        </p>
      </div>
      <div className="relative rounded-xl border border-rule bg-paper-card bg-grid p-5 sm:p-8">
        <div className="absolute -top-2.5 right-10 tape w-14 h-3.5 hidden sm:block" />
        <div className="mx-auto max-w-3xl">
          <GraphNode title="Agent / your app" sub="you own the LLM call" tone="ink" icon={Bot} />
          <DownArrow />
          <GraphNode
            title="Memory facade"
            sub="add · add_text · search · delete"
            tone="blue"
            icon={Layers}
            active={activeId === "memory"}
            onClick={() => setActiveId("memory")}
          />
          <DownArrow />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <GraphNode
              title="Extractors"
              sub="file → DocumentData"
              tone="yellow"
              icon={FileText}
              active={activeId === "extractors"}
              onClick={() => setActiveId("extractors")}
            />
            <GraphNode
              title="Embeddings"
              sub="HuggingFace / OpenAI / Fake"
              tone="purple"
              icon={Sparkles}
              active={activeId === "embeddings"}
              onClick={() => setActiveId("embeddings")}
            />
            <GraphNode
              title="Vector store"
              sub=".dense + .sparse"
              tone="green"
              icon={Store}
              active={activeId === "vectorstores"}
              onClick={() => setActiveId("vectorstores")}
            />
          </div>
          <DownArrow />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <GraphNode
              title="InMemoryStore"
              sub="HNSW + BM25 · volatile"
              tone="paper"
              icon={Database}
              active={activeId === "vectorstores"}
              onClick={() => setActiveId("vectorstores")}
            />
            <GraphNode
              title="PostgresStore"
              sub="pgvector + tsvector · durable"
              tone="paper"
              icon={Database}
              active={activeId === "vectorstores"}
              onClick={() => setActiveId("vectorstores")}
            />
          </div>
          <DownArrow />
          <GraphNode
            title="Config"
            sub="Memory.from_env() · no silent defaults"
            tone="paper"
            icon={Search}
            active={activeId === "config"}
            onClick={() => setActiveId("config")}
          />
        </div>
        <div className="font-hand text-[16px] text-brand-blue font-bold select-none text-center mt-4">
          swap any box without rewriting the others →
        </div>
      </div>
      <div className="rounded-xl border border-rule bg-paper-3 p-5">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue">{active.sub}</span>
        <h3 className="text-base font-bold text-ink mt-1">{active.title}</h3>
        <p className="text-sm text-ink-secondary mt-1.5 leading-relaxed">{active.detail}</p>
      </div>
    </section>
  );
}
