import React from "react";
import { ArrowRight, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MemoryTypeGrid } from "@/components/features/MemoryTypeGrid";
import { CodeBlock } from "@/components/ui/CodeBlock";
export default function MemoryPage() {
  const hybridSearchCode = `# Querying across memory types
hits = memory.search(
    query="user dark mode preference",
    memory_type="semantic",  # Filter by memory category
    top_k=5
)`;
  return (
    <div className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          Memory Types &amp; API Patterns.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Memotrix structures agent knowledge into three cognitive memory classes: <strong className="text-ink">Semantic</strong>, <strong className="text-ink">Episodic</strong>, and <strong className="text-ink">Procedural</strong>.
        </p>
        <div className="font-hand text-[18px] text-brand-blue font-bold select-none">how agents remember →</div>
      </div>
      <MemoryTypeGrid />
      <section className="space-y-4 pt-6 border-t border-rule">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-paper-3 border border-rule text-brand-blue">
            <Layers className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-ink">Targeted Memory Retrieval</h2>
        </div>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl">
          When querying memory during an agent step, filter search by memory type to isolate relevant facts without noise from past execution traces.
        </p>
        <CodeBlock code={hybridSearchCode} filename="memory_search.py" language="python" />
      </section>
      <div className="pt-6 border-t border-rule flex justify-between items-center">
        <Button href="/data" variant="outline">← Data Formats</Button>
        <Button href="/use-cases" className="gap-2">Agent Use Cases <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}