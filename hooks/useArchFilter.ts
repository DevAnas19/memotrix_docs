import { useState, useCallback } from "react";
import { ArchCell } from "@/types/architecture";

export const ARCH_CELLS: ArchCell[] = [
  {
    id: "memory",
    title: "Memory",
    sub: "memotrix.Memory",
    detail: "The core object agents call. Composes an embeddings model, a vector store, and optionally a custom extractor. Can be built directly or via Memory.from_env().",
  },
  {
    id: "embeddings",
    title: "Embeddings",
    sub: "memotrix.embeddings",
    detail: "Pluggable embedding backends implementing a shared Embeddings interface: HuggingFaceEmbeddings (local default), OpenAIEmbeddings, or FakeEmbeddings for testing.",
  },
  {
    id: "vectorstores",
    title: "Vector stores",
    sub: "memotrix.vectorstores",
    detail: "InMemoryStore runs an in-process hybrid HNSW (dense) + BM25 (sparse) index with no external services. PostgresStore uses PostgreSQL with pgvector.",
  },
  {
    id: "extractors",
    title: "Extractors",
    sub: "extractors extra",
    detail: "Convert files — PDF, Office docs, HTML, CSV, images, audio and more — into DocumentData that can be chunked and embedded. A custom extract_file function can replace the built-in extractors.",
  },
  {
    id: "config",
    title: "Config",
    sub: "Memory.from_env()",
    detail: "Memory.from_env() builds a Memory instance from environment variables (EMBEDDING_MODEL, DATABASE_URL, MEMOTRIX_BACKEND, RERANKER_MODEL) and fails fast if required variables are missing.",
  },
];

export function useArchFilter() {
  const [activeId, setActiveId] = useState<string>("memory");

  const selectCell = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const activeCell = ARCH_CELLS.find((cell) => cell.id === activeId) || ARCH_CELLS[0];

  return {
    activeId,
    selectCell,
    activeCell,
    cells: ARCH_CELLS,
  };
}
