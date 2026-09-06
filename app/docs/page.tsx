import React from "react";
import { ArrowRight, Terminal, Settings, Package, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
export default function DocsPage() {
  const installCore = "pip install memotrix[memory]";
  const installExtractors = "pip install memotrix[extractors]";
  const quickstartFull = `from memotrix import Memory
from memotrix.embeddings import HuggingFaceEmbeddings
from memotrix.vectorstores import InMemoryStore
# 1. Initialize local HuggingFace embeddings
embeddings = HuggingFaceEmbeddings(model="BAAI/bge-small-en-v1.5")
# 2. Build Memory store instance
memory = Memory(embeddings=embeddings, store=InMemoryStore(embeddings))
# 3. Ingest facts or documents
memory.add_text("User prefers dark mode.", memory_type="semantic")
memory.add_file("project_specs.pdf", memory_type="semantic")
# 4. Perform hybrid search
results = memory.search("what theme does the user want?", top_k=3)
for hit in results:
    print(f"[{hit.score:.3f}] {hit.text}")`;
  const envConfigCode = `# Load configuration directly from environment variables
from memotrix import Memory
# Reads EMBEDDING_MODEL, DATABASE_URL, MEMOTRIX_BACKEND
memory = Memory.from_env()`;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex gap-8">
      <DocsSidebar />
      <div className="flex-1 max-w-4xl space-y-12">
        <div className="space-y-4 border-b border-rule pb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
            Memotrix Documentation &amp; API.
          </h1>
          <p className="text-base text-ink-secondary leading-relaxed">
            Everything you need to know about setting up, configuring, and extending Memotrix in your Python AI projects.
          </p>
          <div className="font-hand text-[18px] text-brand-blue font-bold select-none">full reference →</div>
        </div>
        <section id="introduction" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
            <BookOpen className="h-4 w-4" />
            <span>01. Introduction</span>
          </div>
          <h2 className="text-2xl font-bold text-ink">What is Memotrix?</h2>
          <p className="text-ink-secondary leading-relaxed">
            Memotrix is a pip-installable memory and RAG library for agents — like LangChain, but focused on memory. It features hybrid dense + sparse search, pluggable embeddings, and extractors for over 20 file formats.
          </p>
        </section>
        <section id="installation" className="space-y-4 pt-6 border-t border-rule scroll-mt-24">
          <div className="flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
            <Package className="h-4 w-4" />
            <span>02. Installation</span>
          </div>
          <h2 className="text-2xl font-bold text-ink">Installation &amp; Extras</h2>
          <p className="text-ink-secondary leading-relaxed">
            Install the core memory module or include optional file extractors:
          </p>
          <div className="space-y-3">
            <div>
              <span className="text-xs font-mono text-ink-muted block mb-1">Core Memory Module:</span>
              <CodeBlock code={installCore} language="bash" />
            </div>
            <div>
              <span className="text-xs font-mono text-ink-muted block mb-1">With All File Extractors (PDF, Office, Audio, Media):</span>
              <CodeBlock code={installExtractors} language="bash" />
            </div>
          </div>
        </section>
        <section id="quick-start" className="space-y-4 pt-6 border-t border-rule scroll-mt-24">
          <div className="flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
            <Terminal className="h-4 w-4" />
            <span>03. Quick Start</span>
          </div>
          <h2 className="text-2xl font-bold text-ink">Working Code Example</h2>
          <p className="text-ink-secondary leading-relaxed">
            Construct a <code className="font-mono text-xs bg-paper-3 border border-rule px-1.5 py-0.5 rounded text-brand-blue">Memory</code> object, ingest content, and execute hybrid retrieval:
          </p>
          <CodeBlock code={quickstartFull} filename="quickstart_full.py" language="python" />
        </section>
        <section id="env-vars" className="space-y-4 pt-6 border-t border-rule scroll-mt-24">
          <div className="flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
            <Settings className="h-4 w-4" />
            <span>04. Configuration</span>
          </div>
          <h2 className="text-2xl font-bold text-ink">Environment Variables &amp; Memory.from_env()</h2>
          <p className="text-ink-secondary leading-relaxed">
            Initialize Memotrix from production environment variables:
          </p>
          <CodeBlock code={envConfigCode} filename="env_config.py" language="python" />
          <div className="rounded-xl border border-rule bg-paper-3 p-4 text-xs font-mono space-y-2">
            <div className="text-ink-secondary"><span className="text-brand-blue font-bold">EMBEDDING_MODEL</span>: BAAI/bge-small-en-v1.5</div>
            <div className="text-ink-secondary"><span className="text-brand-blue font-bold">DATABASE_URL</span>: postgresql://user:pass@localhost:5432/memotrix_db</div>
            <div className="text-ink-secondary"><span className="text-brand-blue font-bold">MEMOTRIX_BACKEND</span>: postgres | in_memory</div>
          </div>
        </section>
        <div className="pt-6 border-t border-rule flex justify-between items-center">
          <Button href="/use-cases" variant="outline">← Use Cases</Button>
          <Button href="/roadmap" className="gap-2">Project Roadmap <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}