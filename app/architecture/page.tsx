import React from "react";
import { ArrowRight, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArchDiagram } from "@/components/features/ArchDiagram";
import { CodeBlock } from "@/components/ui/CodeBlock";
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
  return (
    <div className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          How Memotrix is put together.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Memotrix is built around one core object — <code className="font-mono text-sm bg-paper-3 border border-rule px-2 py-0.5 rounded text-brand-blue">Memory</code> — that composes a pluggable embeddings model, a vector store, and file extractors.
        </p>
        <div className="font-hand text-[18px] text-brand-blue font-bold select-none">composable by design →</div>
      </div>
      <Card className="p-6 space-y-4 bg-grid">
        <h2 className="text-xl font-bold text-ink">Execution Lifecycle</h2>
        <p className="text-sm text-ink-secondary leading-relaxed">
          A call to <code className="font-mono text-xs bg-paper-3 border border-rule px-1.5 py-0.5 rounded text-brand-blue">memory.add()</code> or <code className="font-mono text-xs bg-paper-3 border border-rule px-1.5 py-0.5 rounded text-brand-blue">memory.add_text()</code> moves data through extraction, chunking and embedding before it&apos;s stored; <code className="font-mono text-xs bg-paper-3 border border-rule px-1.5 py-0.5 rounded text-brand-blue">memory.search()</code> reverses the path.
        </p>
      </Card>
      <ArchDiagram />
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
            Details on this page reflect the public API documented in the project&apos;s README.
          </p>
        </div>
      </div>
      <div className="pt-6 border-t border-rule flex justify-between items-center">
        <Button href="/why-memotrix" variant="outline">← Why Memotrix</Button>
        <Button href="/data" className="gap-2">Explore File Types <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}