import React from "react";
import { ArrowRight, Lightbulb, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
export default function WhyMemotrixPage() {
  const pipelineSteps = ["Data","Understand","Process","Chunk","Embed","Store","Retrieve","AI context"];
  return (
    <div className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          Why Memotrix exists.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          AI systems are only as useful as the memory they can draw on. Memotrix starts from a simple observation: memory is scattered, and treating each source separately makes it harder to use.
        </p>
        <div className="font-hand text-[18px] text-brand-purple font-bold select-none">the motivation →</div>
      </div>
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-ink">The problem</h2>
        <p className="text-ink-secondary leading-relaxed">
          Most AI systems can hold a conversation, but they struggle to carry knowledge forward. Common pain points:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { label: "Fragmented knowledge", desc: "facts and context spread across many disconnected sources." },
            { label: "Context loss", desc: "earlier decisions, conversations or reasoning that simply disappear." },
            { label: "Large information collections", desc: "more material than any single context window can hold." },
            { label: "Different data formats", desc: "documents, code, images, audio and structured records needing different handling." },
            { label: "Heterogeneous retrieval", desc: 'no single way to ask "what do we know about X" across all sources.' },
            { label: "Long-term maintenance", desc: "keeping information useful and current as it accumulates over time." },
          ].map((item, idx) => (
            <Card key={idx} className="p-4 space-y-1">
              <span className="font-bold text-brand-blue block text-sm">{item.label}</span>
              <span className="text-xs text-ink-secondary">{item.desc}</span>
            </Card>
          ))}
        </div>
        <div className="rounded-xl border border-notebook-yellow/40 bg-[#fdfaee] p-5 flex gap-4 items-start">
          <Lightbulb className="h-5 w-5 text-[#9a7c1a] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-[#9a7c1a] uppercase tracking-wider">KEY OBSERVATION</span>
            <p className="text-sm text-ink-secondary leading-relaxed">
              Individually, each of these problems has partial solutions. Together, they point to something more fundamental: AI systems need a dedicated, unified layer for memory.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-ink">The core pipeline</h2>
        <p className="text-ink-secondary leading-relaxed">
          Memotrix treats information as something that can be <strong className="text-ink">processed, represented, indexed, retrieved, and reused</strong> as AI memory — regardless of format.
        </p>
        <Card className="p-6 bg-grid overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="px-3 py-2 rounded-lg bg-paper-3 border border-rule font-mono text-xs font-bold text-brand-blue">{step}</div>
                {idx < pipelineSteps.length - 1 && <ArrowRight className="h-4 w-4 text-ink-muted" />}
              </React.Fragment>
            ))}
          </div>
        </Card>
        <p className="text-ink-secondary leading-relaxed">
          This shared pipeline is why Memotrix can treat a scanned PDF, a folder of source code, and an hour of recorded audio as the same kind of problem.
        </p>
        <div className="rounded-xl border border-brand-purple/25 bg-[#f3f0fe] p-5 flex gap-4 items-start">
          <Info className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-brand-purple uppercase tracking-wider">SCOPE NOTE</span>
            <p className="text-sm text-ink-secondary leading-relaxed">
              This pipeline is implemented today via <code className="font-mono text-xs bg-paper-3 border border-rule px-1 py-0.5 text-brand-blue rounded">memory.add()</code> / <code className="font-mono text-xs bg-paper-3 border border-rule px-1 py-0.5 text-brand-blue rounded">memory.add_text()</code> and <code className="font-mono text-xs bg-paper-3 border border-rule px-1 py-0.5 text-brand-blue rounded">memory.search()</code>.
            </p>
          </div>
        </div>
      </section>
      <div className="pt-6 border-t border-rule flex justify-between items-center">
        <Button href="/" variant="outline">← Back to Home</Button>
        <Button href="/architecture" className="gap-2">View Architecture <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}