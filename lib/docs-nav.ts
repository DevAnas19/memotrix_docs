export interface DocsNavItem {
  label: string;
  href: string;
  snippet: string;
}

export interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

export const DOCS_NAV: DocsNavSection[] = [
  {
    title: "Getting started",
    items: [
      { label: "Overview", href: "/docs", snippet: "Composable hybrid memory and RAG for AI agents." },
      { label: "Installation", href: "/docs/installation", snippet: "PyPI extras, Python 3.10+, and what works without optional deps." },
      { label: "Quickstart", href: "/docs/quickstart", snippet: "Five minutes from install to a search hit." },
      { label: "Configuration", href: "/docs/configuration", snippet: "Memory constructors, env vars, and MemoryConfig defaults." },
    ],
  },
  {
    title: "Concepts",
    items: [
      { label: "How it works", href: "/docs/concepts/overview", snippet: "Extract, chunk, embed, index, and retrieve with hybrid search." },
      { label: "Architecture", href: "/docs/concepts/architecture", snippet: "Memory facade, ingestion pipeline, stores, and retrieval stack." },
      { label: "Memory types", href: "/docs/concepts/memory-types", snippet: "Semantic, episodic, and procedural memory_type labels." },
      { label: "Hybrid search", href: "/docs/concepts/hybrid-search", snippet: "Dense + sparse retrieval fused with Reciprocal Rank Fusion." },
      { label: "Chunking & expansion", href: "/docs/concepts/chunking-and-expansion", snippet: "Chunk size, overlap, and neighbor-window expansion." },
    ],
  },
  {
    title: "Use cases",
    items: [
      { label: "All use cases", href: "/docs/use-cases", snippet: "Every supported Memotrix usage pattern mapped to the API." },
      { label: "Agent long-term memory", href: "/docs/use-cases/agent-long-term-memory", snippet: "add_text for facts, sessions, and procedures." },
      { label: "Document Q&A", href: "/docs/use-cases/document-question-answering", snippet: "Ingest files and answer questions with search hits." },
      { label: "RAG agent", href: "/docs/use-cases/rag-agent", snippet: "Retrieve chunks, then pass them into your own LLM." },
      { label: "Postgres persistence", href: "/docs/use-cases/postgres-persistence", snippet: "Durable pgvector + tsvector storage across processes." },
      { label: "File ingestion", href: "/docs/use-cases/file-ingestion", snippet: "memory.add(path) for wired file types." },
      { label: "Structured data", href: "/docs/use-cases/structured-data", snippet: "CSV, Excel, JSON, YAML, SQL, and XML." },
      { label: "Codebase memory", href: "/docs/use-cases/codebase-memory", snippet: "Index source code for coding assistants." },
      { label: "Images and media", href: "/docs/use-cases/images-and-media", snippet: "OCR, captions, Whisper transcription, and video." },
      { label: "Email, chat, logs", href: "/docs/use-cases/email-chat-logs", snippet: "EML, mbox, chat JSON, WhatsApp exports, and logs." },
      { label: "Knowledge graphs & FHIR", href: "/docs/use-cases/knowledge-graphs-and-fhir", snippet: "RDF, GeoJSON, FHIR, and knowledge-graph formats." },
      { label: "Custom extractors", href: "/docs/use-cases/custom-extractors", snippet: "register_extractor or extract_file for proprietary formats." },
    ],
  },
  {
    title: "Tutorials",
    items: [
      { label: "Quickstart (5 minutes)", href: "/docs/tutorials/01-quickstart", snippet: "Install Memotrix and add your first document." },
      { label: "Build a RAG agent", href: "/docs/tutorials/02-build-a-rag-agent", snippet: "Retrieval-augmented generation loop with an LLM." },
    ],
  },
  {
    title: "How-to",
    items: [
      { label: "Custom extractors", href: "/docs/how-to/custom-extractors", snippet: "Register extractors without forking the SDK." },
      { label: "Postgres migration", href: "/docs/how-to/postgres-migration", snippet: "Move from in-memory indexes to pgvector." },
      { label: "Hybrid search tuning", href: "/docs/how-to/hybrid-search-tuning", snippet: "Tune RRF, top_k, expansion, and reranking." },
    ],
  },
  {
    title: "API reference",
    items: [
      { label: "Memory", href: "/docs/api/memory", snippet: "Memory constructor, add, search, delete, and close." },
      { label: "Embeddings", href: "/docs/api/embeddings", snippet: "HuggingFace, OpenAI, and FakeEmbeddings." },
      { label: "Vector stores", href: "/docs/api/vectorstores", snippet: "InMemoryStore, PostgresStore, and custom bundles." },
      { label: "Extractors", href: "/docs/api/extractors", snippet: "File extractors, DocumentData, and the registry." },
      { label: "Config", href: "/docs/api/config", snippet: "MemoryConfig, ChunkingConfig, RetrievalConfig, IngestConfig." },
      { label: "Exceptions", href: "/docs/api/exceptions", snippet: "ConfigurationError and other raised errors." },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Troubleshooting", href: "/docs/guides/troubleshooting", snippet: "hnswlib on Windows, extras, and ConfigurationError." },
      { label: "Security", href: "/docs/guides/security", snippet: "Secrets, isolation, and what Memotrix does not do." },
      { label: "Deployment", href: "/docs/guides/deployment", snippet: "Library embedding, Docker Postgres, and process model." },
      { label: "Optional extras", href: "/docs/guides/extras", snippet: "Which pip extra unlocks which feature." },
      { label: "Live demos", href: "/docs/guides/demo", snippet: "DemoCodeLive scripts that import the PyPI package." },
    ],
  },
  {
    title: "Internals",
    items: [
      { label: "DocBook index", href: "/docs/internals", snippet: "Internal architecture and research notes." },
      { label: "Project overview", href: "/docs/internals/01-project-overview", snippet: "What Memotrix is and how the library is scoped." },
      { label: "Problem & motivation", href: "/docs/internals/02-problem-and-motivation", snippet: "Why agent memory is fragmented today." },
      { label: "Project objectives", href: "/docs/internals/03-project-objectives", snippet: "Goals for the composable memory SDK." },
      { label: "System capabilities", href: "/docs/internals/04-system-capabilities", snippet: "What the library can ingest, store, and retrieve." },
      { label: "Key features", href: "/docs/internals/05-key-features", snippet: "Hybrid search, pluggable stores, and extractors." },
      { label: "Technology stack", href: "/docs/internals/06-technology-stack", snippet: "Python, HNSW, BM25, pgvector, and embedding models." },
      { label: "System architecture", href: "/docs/internals/07-system-architecture", snippet: "Internal modules and data flow diagrams." },
      { label: "Core workflows", href: "/docs/internals/08-core-workflows", snippet: "Ingest and retrieve pipelines step by step." },
      { label: "AI & RAG architecture", href: "/docs/internals/09-ai-llm-architecture", snippet: "How retrieved chunks feed an LLM you own." },
      { label: "Security analysis", href: "/docs/internals/10-security", snippet: "Threat model and configuration hardening." },
      { label: "Testing", href: "/docs/internals/11-testing", snippet: "How the library test suite is organized." },
      { label: "Future scope", href: "/docs/internals/12-future-scope", snippet: "Roadmap items beyond the current SDK." },
      { label: "Documentation audit", href: "/docs/internals/13-documentation-audit", snippet: "Gaps between DocBook notes and public docs." },
      { label: "Benchmarks", href: "/docs/internals/14-benchmarks", snippet: "Retrieval quality and performance notes." },
    ],
  },
];

export const DOCS_FLAT = DOCS_NAV.flatMap((section) =>
  section.items.map((item) => ({ ...item, section: section.title }))
);

export function getDocsNeighbors(href: string) {
  const index = DOCS_FLAT.findIndex((item) => item.href === href);
  return {
    prev: index > 0 ? DOCS_FLAT[index - 1] : null,
    next: index >= 0 && index < DOCS_FLAT.length - 1 ? DOCS_FLAT[index + 1] : null,
  };
}

export function slugToHref(slug?: string[]) {
  if (!slug || slug.length === 0) return "/docs";
  return `/docs/${slug.join("/")}`;
}
