"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useCopy } from "@/hooks/useCopy";
import { cn } from "@/lib/utils";
const tabs = [
  { id: "in-memory", label: "In-Memory" },
  { id: "postgres", label: "Postgres" },
  { id: "env", label: "Environment" },
] as const;
type TabId = (typeof tabs)[number]["id"];
const code: Record<TabId, string> = {
  "in-memory": `pip install memotrix[memory]
def memotrix = Memory() # zero config defaults
memory = Memory(
  embeddings='local',
  store='memory'
)
memory.add_text("User prefers dark mode.", memory_type="semantic")
hits = memory.search("what theme?", top_k=3)`,
  postgres: `pip install memotrix[memory,pgvector]
from memotrix import Memory
from memotrix.vectorstores import PostgresStore
# Production PostgreSQL + pgvector
memory = Memory.from_env()
memory.add_file("docs/architecture.pdf", memory_type="semantic")
hits = memory.search("architecture details", top_k=5)`,
  env: `# Environment variables — no hidden defaults
export EMBEDDING_MODEL="BAAI/bge-small-en-v1.5"
export DATABASE_URL="postgresql://user:pass@localhost/db"
export MEMOTRIX_BACKEND="postgres"
export RERANKER_MODEL="cross-encoder/ms-marco"
from memotrix import Memory
# Fails fast if any required var is missing
memory = Memory.from_env()`,
};
export function QuickStartNotebook() {
  const [active, setActive] = useState<TabId>("in-memory");
  const { copied, copy } = useCopy();
  return (
    <section className="py-20 paper-3 border-b border-rule relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[12px] font-mono font-bold text-ink-muted tracking-widest uppercase">Quick Start</span>
          <span className="flex-1 h-px bg-rule" />
        </div>
        <div className="absolute left-0 lg:-left-24 top-48 flex items-center gap-2 hidden lg:flex select-none pointer-events-none rotate-[-4deg]">
          <span className="font-hand text-[16px] text-ink font-bold">start here</span>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path d="M2 6 L20 6 M16 2 L22 6 L16 10" stroke="#11172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        <div className="pl-0 lg:pl-12">
          <div className="flex items-end gap-1 relative z-10 px-4">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActive(tab.id)}
                className={cn(
                  "px-5 py-2 text-[13px] font-bold transition-all relative border border-b-0",
                  active === tab.id
                    ? "bg-[#11182C] text-white border-[#11182C] rounded-t-[10px] z-20 pb-3 -mb-1 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
                    : "bg-[#e8e4d8] text-ink border-[rgba(17,23,42,0.15)] rounded-t-[8px] hover:bg-[#dfdbcf] hover:text-ink z-10"
                )}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="rounded-xl rounded-tl-none bg-[#11182C] border border-[#11182C] shadow-[0_15px_40px_rgba(40,35,25,0.15)] overflow-hidden relative z-20">
            <div className="flex items-center justify-between border-b border-[#1e2640] px-5 py-3">
              <span className="text-[12px] font-bold text-[#c0c7d6]">Memotrix</span>
              <button onClick={() => copy(code[active])}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold text-[#8a92a5] border border-[#1e2640] hover:bg-[#1e2640] hover:text-white transition-colors bg-[#1a2240]">
                {copied
                  ? <><Check className="h-3 w-3 text-[#59B58A]" /><span className="text-[#59B58A]">Copied</span></>
                  : <><Copy className="h-3 w-3" /><span>Copy</span></>
                }
              </button>
            </div>
            <pre className="p-6 overflow-x-auto text-[#d4daf0] font-mono text-[13px] leading-[1.7]">
              <code>{code[active]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}