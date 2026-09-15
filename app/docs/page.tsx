import React from "react";
import type { Metadata } from "next";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { loadDoc } from "@/lib/docs";

export function generateMetadata(): Metadata {
  const doc = loadDoc();
  return {
    title: doc?.title ?? "Documentation",
    description: doc?.description,
  };
}

export default function DocsIndexPage() {
  return <DocsArticle />;
}
