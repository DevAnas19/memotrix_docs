import { useState, useEffect, useCallback } from "react";
import { SEARCH_INDEX } from "@/lib/search-index";
import { SearchItem } from "@/types/search";

export function useSearchModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;

      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeSearch]);

  const filteredResults: SearchItem[] = query.trim()
    ? SEARCH_INDEX.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.cat.toLowerCase().includes(query.toLowerCase()) ||
          (item.snippet && item.snippet.toLowerCase().includes(query.toLowerCase()))
      )
    : SEARCH_INDEX.slice(0, 8);

  return {
    isOpen,
    query,
    setQuery,
    openSearch,
    closeSearch,
    results: filteredResults,
  };
}
