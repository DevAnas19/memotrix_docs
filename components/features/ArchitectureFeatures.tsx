import React from "react";
import { Database, GitBranch, Box, Settings, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
const arches = [
  { title: "Storage Backends", icon: Database, color: "text-brand-blue",
    desc: "In-memory HNSW + BM25 for development, PostgreSQL + pgvector for production.", annotation: "swap at deploy ↻",
    code: `# In-memory (dev)\nstore = InMemoryStore(embeddings)\n\n# PostgreSQL (prod)\nstore = PostgresStore(embeddings, url=DB)`,
  },
  { title: "Flexible Embeddings", icon: Box, color: "text-brand-purple",
    desc: "HuggingFace sentence-transformers, OpenAI ada-002, and custom models.", annotation: "bring your own →",
    code: `emb_hf = HuggingFaceEmbeddings(\n    model="BAAI/bge-small-en-v1.5"\n)\nemb_api = OpenAIEmbeddings()`,
  },
  { title: "Domain Overrides", icon: Settings, color: "text-notebook-green",
    desc: "Medical, legal, finance — bring domain-specific extractors, chunkers, and metadata.", annotation: "your rules →",
    code: `from memotrix.extractors import custom\n\nmemory = Memory(\n    extractors=[custom_pdf, custom_hl7],\n    chunker=sliding_window(512)\n)`,
  },
  { title: "Agent Loop", icon: GitBranch, color: "text-notebook-yellow",
    desc: "Agents search, update, and prune memory during execution with full provenance.", annotation: "autonomous loop ↺",
    code: `result = memory.search(\n    context=agent_state,\n    top_k=5\n)\n# Auto-decay stale memories\nmemory.maintenance()`,
  },
];
export function ArchitectureFeatures() {
  return (
    <section className="py-20 paper-3 border-b border-rule">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-[40px] font-extrabold text-ink tracking-tight leading-tight mb-2">
          Built for real systems.
        </h2>
        <p className="text-[15px] text-ink-secondary max-w-xl mb-10">
          From in-process prototyping to production infrastructure, Memotrix composes cleanly at every scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {arches.map((a) => (
            <Card key={a.title} className="relative group overflow-visible">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg bg-paper-3 border border-rule ${a.color}`}>
                  <a.icon className="h-5 w-5" />
                </div>
                <span className="font-hand text-[13px] text-ink-muted font-semibold opacity-0 group-hover:opacity-100 transition-opacity select-none">
                  {a.annotation}
                </span>
              </div>
              <h3 className="font-bold text-ink text-base mb-1.5">{a.title}</h3>
              <p className="text-[13px] text-ink-secondary leading-relaxed mb-3">{a.desc}</p>
              <CodeBlock code={a.code} className="!my-0 !text-[11px]" />
            </Card>
          ))}
        </div>
        <div className="mt-14 text-center space-y-4">
          <div className="font-hand text-[22px] text-brand-blue font-bold select-none">
            Ready to remember everything? ✓
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/docs/quickstart" size="lg" className="gap-2">
              Start Building <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/architecture" variant="outline" size="lg">
              View Full Architecture →
            </Button>
          </div>
          {/* <p className="text-xs text-ink-muted font-mono">
            pip install memotrix[memory] &middot; MIT License &middot; Active development
          </p> */}
        </div>
      </div>
    </section>
  );
}