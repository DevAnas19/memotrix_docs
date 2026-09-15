import { SearchItem } from "@/types/search";
import { GH_URL } from "./constants";
import { DOCS_FLAT } from "./docs-nav";

const MARKETING_INDEX: SearchItem[] = [
  { cat: "Getting Started", title: "Why Memotrix", href: "/why-memotrix", snippet: "AI memory is scattered; Memotrix unifies it." },
  { cat: "Core Concepts", title: "Architecture overview", href: "/architecture", snippet: "Five swappable core components: Memory, Embeddings, Stores, Extractors, Config." },
  { cat: "Data", title: "Documents (PDF, DOCX, EPUB)", href: "/data#documents", snippet: "Extract text and structured hierarchy from PDF, Word, e-books." },
  { cat: "Data", title: "Structured & tabular (CSV, JSON, SQL)", href: "/data#structured", snippet: "Spreadsheet rows, database records, and key-value trees." },
  { cat: "Data", title: "Knowledge graphs (RDF, GraphML)", href: "/data#knowledge", snippet: "Triple stores, ontology graphs, and semantic networks." },
  { cat: "Data", title: "Communication (email, chat)", href: "/data#communication", snippet: "Parse .eml messages, mbox archives, and chat exports." },
  { cat: "Data", title: "Images & video", href: "/data#media", snippet: "OCR and multimodal vector representations via extractors extra." },
  { cat: "Data", title: "Audio (Whisper transcription)", href: "/data#audio", snippet: "Automatic speech recognition to retrievable text chunks." },
  { cat: "Data", title: "Source code", href: "/data#code", snippet: "AST-aware chunking for Python, TypeScript, C++, and Go." },
  { cat: "Data", title: "SCORM & logs", href: "/data#other", snippet: "e-Learning packages, audit traces, and system log lines." },
  { cat: "Memory", title: "Semantic memory", href: "/memory#semantic", snippet: "Long-term facts, concepts, and domain knowledge." },
  { cat: "Memory", title: "Episodic memory", href: "/memory#episodic", snippet: "Past user interactions, agent runs, and event sequences." },
  { cat: "Memory", title: "Procedural memory", href: "/memory#procedural", snippet: "Action patterns, tool call recipes, and workflow steps." },
  { cat: "Use Cases", title: "Marketing use cases", href: "/use-cases", snippet: "High-level agent recipes: RAG, coding assistants, and enterprise knowledge." },
  { cat: "Project", title: "Roadmap", href: "/roadmap", snippet: "See what's released today and what's coming next." },
  { cat: "Project", title: "Contributors", href: "/contributors", snippet: "Open-source contributors, guidelines, and community links." },
  { cat: "Project", title: "GitHub repository", href: GH_URL, snippet: "Matrixxboy/memotrix on GitHub." },
];

export const SEARCH_INDEX: SearchItem[] = [
  ...DOCS_FLAT.map((item) => ({
    cat: item.section,
    title: item.label,
    href: item.href,
    snippet: item.snippet,
  })),
  ...MARKETING_INDEX,
];
