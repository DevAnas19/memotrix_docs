import React from "react";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ArchDiagram } from "@/components/features/ArchDiagram";
import { ArchHybridGraph, ArchWriteReadGraph } from "@/components/features/ArchFlowGraphs";
import { Mermaid } from "@/components/docs/Mermaid";

export default function ArchitecturePage() {
  const customExtractorCode = `from memotrix import Memory
# Swap in a custom extractor function
def my_extractor(path, *, describe_images=False, generate_srt=False):
    # Custom extraction logic returning DocumentData
    return DocumentData(content="...", metadata={"source": path})
memory = Memory(
    embeddings=embeddings,
    extract_file=my_extractor,  # Custom pipeline hook
)`;
  const systemChart = `flowchart TD
    User["Agent / your app"] --> Memory["Memory facade"]
    Memory --> Extract["filetypes.extract_file"]
    Memory --> Emb["Embeddings"]
    Memory --> Store["InMemoryStore or PostgresStore"]
    Extract --> Doc["DocumentData"]
    Doc --> Ingest["IngestionPipeline"]
    Emb --> Ingest
    Ingest --> Dense["Dense index"]
    Ingest --> Sparse["Sparse index"]
    Ingest --> DS["DocumentStore adjacency"]
    User --> Search["RetrievalPipeline"]
    Search --> Hybrid["HybridSearchEngine RRF"]
    Hybrid --> Dense
    Hybrid --> Sparse
    Search --> DS`;
  const queryChart = `sequenceDiagram
    participant App
    participant Retrieval as RetrievalPipeline
    participant Emb as Embeddings
    participant Hybrid as HybridSearchEngine
    App->>Retrieval: search(query, top_k, filters)
    Retrieval->>Emb: embed_query (cached)
    Retrieval->>Hybrid: search_with_channels
    Hybrid-->>Retrieval: fused + dense + sparse hits
    alt Channels agree clearly
        Retrieval-->>App: skip cross-encoder
    else Reranker configured
        Retrieval->>Retrieval: CrossEncoder.predict
    end
    Retrieval->>Retrieval: memory_score_multiplier
    Retrieval->>Retrieval: expand neighbors
    Retrieval-->>App: list of hit dicts`;

  return (
    <div className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          How Memotrix is put together.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Memotrix is built around one core object — <code className="font-mono text-sm bg-paper-3 border border-rule px-2 py-0.5 rounded text-brand-blue">Memory</code> — that composes a pluggable embeddings model, a vector store, and file extractors.
        </p>
        <div className="font-hand text-[18px] text-brand-blue font-bold select-none">composable by design →</div>
      </div>

      <ArchDiagram />
      <ArchWriteReadGraph />
      <ArchHybridGraph />

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-ink">Full wiring map</h2>
          <p className="text-sm text-ink-secondary">
            The same graph as the public architecture docs: ingest writes both indexes; search reads both and fuses them.
          </p>
        </div>
        <Mermaid chart={systemChart} />
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-ink">What happens inside search()</h2>
          <p className="text-sm text-ink-secondary">
            Query embeddings are cached. Rerank only runs when a cross-encoder is configured and the two channels disagree.
          </p>
        </div>
        <Mermaid chart={queryChart} />
      </section>

      <section className="space-y-4 pt-4 border-t border-rule">
        <h2 className="text-2xl font-bold text-ink">Swapping in your own pieces</h2>
        <p className="text-sm text-ink-secondary leading-relaxed">
          Every layer accepts a custom implementation instead of the built-in default:
        </p>
        <CodeBlock code={customExtractorCode} filename="custom.py" language="python" />
        <p className="text-xs font-mono text-ink-muted">
          Custom dense/sparse indexes can also be passed as <code className="text-brand-blue">store=</code> if they expose <code className="text-brand-blue">.dense</code> and <code className="text-brand-blue">.sparse</code>.
        </p>
      </section>
      <div className="rounded-xl border border-notebook-yellow/40 bg-[#fdfaee] p-5 flex gap-4 items-start">
        <Info className="h-5 w-5 text-[#9a7c1a] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold text-[#9a7c1a] uppercase tracking-wider">SCOPE NOTE</span>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Details on this page reflect the public API. For the full write-up see{" "}
            <a href="/docs/concepts/architecture" className="text-brand-blue font-medium underline decoration-brand-blue/30 underline-offset-2">
              Architecture in the docs
            </a>
            .
          </p>
        </div>
      </div>
      <div className="pt-6 border-t border-rule flex justify-between items-center">
        <Button href="/why-memotrix" variant="outline">← Why Memotrix</Button>
        <Button href="/docs/concepts/architecture" className="gap-2">Architecture docs <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}
