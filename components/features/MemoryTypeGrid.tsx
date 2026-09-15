import React from "react";
import { Card } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
const types = [
  { id: "semantic", label: "SEMANTIC", color: "border-brand-blue/30", meta: 'memory_type="semantic"',
    sample: "User prefers dark mode.", annotation: "what is true?",
    desc: "Long-term facts, user preferences, entity definitions, and domain knowledge.",
    code: 'memory.add_text(\n    "User prefers dark mode.",\n    memory_type="semantic"\n)' },
  { id: "episodic", label: "EPISODIC", color: "border-brand-purple/30", meta: "session=2026-09-03",
    sample: "Shipped hybrid search.", annotation: "what happened?",
    desc: "Time-ordered events, past interactions, agent decisions, and execution traces.",
    code: 'memory.add_text(\n    "Shipped hybrid search v2.4.",\n    memory_type="episodic"\n)' },
  { id: "procedural", label: "PROCEDURAL", color: "border-notebook-green/30", meta: 'memory_type="procedural"',
    sample: "Always cite source_path.", annotation: "how to do it?",
    desc: "Action patterns, tool-calling recipes, multi-step instructions and workflow rules.",
    code: 'memory.add_text(\n    "Always cite source_path.",\n    memory_type="procedural"\n)' },
];
export function MemoryTypeGrid() {
  return (
    <section className="py-20 paper-4 border-b border-rule">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-[40px] font-extrabold text-ink tracking-tight leading-tight mb-2">
          Memory isn&apos;t just files.
        </h2>
        <p className="text-[15px] text-ink-secondary max-w-xl mb-10">
          Facts, chat turns, procedures, experiences, and session-specific information — each indexed into structured cognitive memory classes.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {types.map((t) => (
            <Card key={t.id} className={`relative ${t.color} overflow-visible`}>
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 tape w-14 h-3.5" />
              <div className="flex items-center justify-between mb-3 pt-1">
                <h3 className="text-[13px] font-mono font-extrabold text-ink tracking-wider">{t.label}</h3>
                <span className="text-[10px] font-mono text-ink-muted bg-paper-3 border border-rule px-2 py-0.5 rounded">{t.meta}</span>
              </div>
              <div className="p-3 rounded-lg bg-paper-3/80 border border-rule mb-3 font-hand text-[18px] text-ink font-bold leading-snug">
                &ldquo;{t.sample}&rdquo;
                <span className="block text-[13px] mt-1 text-brand-blue font-bold font-hand">{t.annotation}</span>
              </div>
              <p className="text-[12px] text-ink-secondary leading-relaxed mb-2">{t.desc}</p>
              <CodeBlock code={t.code} language="python" className="!my-0 !text-[11px]" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}