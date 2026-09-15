import React from "react";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
export default function RoadmapPage() {
  const milestones = [
    { version: "v0.1.0 — Initial Release", status: "Released", badge: "green" as const, Icon: CheckCircle2, color: "text-notebook-green",
      items: ["Core Memory abstraction object","HuggingFace local embeddings backend","InMemoryStore hybrid HNSW + BM25 index","20+ file extractor formats (PDF, DOCX, CSV, RDF, Email)"] },
    { version: "v0.2.0 — Production Storage & Reranking", status: "In Progress", badge: "purple" as const, Icon: Sparkles, color: "text-brand-purple",
      items: ["PostgreSQL pgvector persistent store integration","Cross-Encoder reranker integration","Async ingestion pipeline (`add_async()`)","Whisper audio transcription extractor pipeline"] },
    { version: "v0.3.0 — Graph & Multi-Modal Memory", status: "Upcoming", badge: "yellow" as const, Icon: Clock, color: "text-notebook-yellow",
      items: ["Knowledge Graph auto-construction from unstructured text","CLIP / SigLIP visual embedding vector stores","Distributed Ray/Celery batch ingestion workers","Native LangChain & LlamaIndex memory adapters"] },
  ];
  return (
    <div className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          Memotrix Roadmap.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Track the development progress, completed releases, and upcoming milestones for the Memotrix ecosystem.
        </p>
        <div className="font-hand text-[18px] text-brand-purple font-bold select-none">what&apos;s next →</div>
      </div>
      <div className="space-y-5">
        {milestones.map((m, idx) => (
          <Card key={idx} className="p-6 md:p-8 space-y-4 relative overflow-visible">
            {idx === 0 && <div className="absolute -top-2.5 left-10 tape w-14 h-3.5 hidden sm:block" />}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4">
              <div className="flex items-center gap-3">
                <m.Icon className={`h-5 w-5 ${m.color}`} />
                <h2 className="text-lg font-bold text-ink">{m.version}</h2>
              </div>
             
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {m.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2 text-sm text-ink-secondary">
                  <span className="text-brand-blue font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="pt-6 border-t border-rule flex justify-between items-center">
        <Button href="/docs" variant="outline">← Documentation</Button>
        <Button href="/contributors" className="gap-2">Contributors <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}