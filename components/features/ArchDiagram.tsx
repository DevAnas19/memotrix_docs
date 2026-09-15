"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
const layers = [
  { id: "memory", label: "Memory", desc: "Core orchestrator. Composes embeddings, store, extractors, and config into one unified interface.", color: "border-brand-blue/40 bg-brand-blue/[0.05]" },
  { id: "embeddings", label: "Embeddings", desc: "Pluggable embedding model: HuggingFace sentence-transformers, OpenAI ada-002, or any custom callable.", color: "border-brand-purple/40 bg-brand-purple/[0.05]" },
  { id: "store", label: "VectorStore", desc: "HNSW + BM25 in-memory for dev, PostgreSQL + pgvector for production. Exposes .dense and .sparse.", color: "border-notebook-green/40 bg-notebook-green/[0.05]" },
  { id: "extractors", label: "Extractors", desc: "File → DocumentData. 30+ format handlers (PDF, DOCX, audio/Whisper, images/OCR, RDF, etc.).", color: "border-notebook-yellow/40 bg-notebook-yellow/[0.05]" },
];
export function ArchDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const current = layers.find((l) => l.id === active);
  return (
    <section className="space-y-5">
      <h2 className="text-xl font-bold text-ink">Core Components</h2>
      <p className="text-sm text-ink-secondary">Click a layer to see its responsibility.</p>
      <div className="space-y-2">
        {layers.map((layer) => (
          <button key={layer.id} onClick={() => setActive(active === layer.id ? null : layer.id)}
            className={cn(
              "w-full text-left px-5 py-3 rounded-xl border font-mono text-sm font-bold transition-all",
              active === layer.id ? layer.color + " shadow-card" : "border-rule bg-paper-card hover:bg-paper-3"
            )}>
            {layer.label}
          </button>
        ))}
      </div>
      {current && (
        <Card className="p-5 border-l-4 border-l-brand-blue/40">
          <span className="text-[11px] font-mono font-bold text-brand-blue uppercase tracking-wider">{current.label}</span>
          <p className="text-sm text-ink-secondary mt-1.5 leading-relaxed">{current.desc}</p>
        </Card>
      )}
    </section>
  );
}