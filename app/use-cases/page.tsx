import React from "react";
import { ArrowRight, Bot, Code2, Database, Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
export default function UseCasesPage() {
  const recipes = [
    { title: "Hybrid RAG Systems", icon: Search, color: "text-brand-blue", tag: "Retrieval",
      desc: "Combine semantic vector embeddings with exact sparse BM25 matching to retrieve high-precision context for LLM prompts.",
      snippet: 'hits = memory.search("retrieval query", top_k=5)' },
    { title: "Autonomous Agent Loops", icon: Bot, color: "text-brand-purple", tag: "Stateful Agent",
      desc: "Maintain long-horizon agent state across execution turns by persisting episodic conversation memory and procedural tool recipes.",
      snippet: 'memory.add_text("Agent step result", memory_type="episodic")' },
    { title: "Codebase Assistants", icon: Code2, color: "text-notebook-sky", tag: "Developer Tools",
      desc: "Index entire software repositories with AST chunking, allowing AI coding assistants to understand project context and function calls.",
      snippet: 'memory.add_file("src/main.py", memory_type="code")' },
    { title: "Enterprise Knowledge", icon: Database, color: "text-notebook-green", tag: "Enterprise",
      desc: "Unify internal PDFs, spreadsheets, Slack/chat exports, and emails into a single searchable hybrid vector database.",
      snippet: 'memory = Memory.from_env()  # Production Postgres pgvector' },
  ];
  return (
    <div className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          Agent Use Cases.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Discover how developers build high-performance AI applications and autonomous agents with Memotrix.
        </p>
        <div className="font-hand text-[18px] text-notebook-yellow font-bold select-none">build smarter agents →</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {recipes.map((recipe, idx) => (
          <Card key={idx} className="flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-lg bg-paper-3 border border-rule ${recipe.color}`}>
                  <recipe.icon className="h-5 w-5" />
                </div>
              </div>
              <h2 className="text-lg font-bold text-ink">{recipe.title}</h2>
              <p className="text-[13px] text-ink-secondary leading-relaxed">{recipe.desc}</p>
            </div>
            <div className="mt-5 pt-3 border-t border-rule">
              <div className="font-mono text-xs text-brand-blue bg-paper-3 p-3 rounded-lg border border-rule overflow-x-auto">
                {recipe.snippet}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="pt-6 border-t border-rule flex justify-between items-center">
        <Button href="/memory" variant="outline">← Memory Types</Button>
        <Button href="/docs" className="gap-2">Read Full Docs <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}