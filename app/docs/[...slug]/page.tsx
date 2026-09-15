import React from "react";
import type { Metadata } from "next";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { listDocFiles, loadDoc } from "@/lib/docs";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: { slug: string[] };
}

export function generateStaticParams() {
  return listDocFiles()
    .filter(({ slug }) => slug.length > 0)
    .map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const doc = loadDoc(params.slug);
  if (!doc) return { title: "Not found" };
  return {
    title: doc.title,
    description: doc.description,
  };
}

export default function DocsSlugPage({ params }: PageProps) {
  return <DocsArticle slug={params.slug} />;
}
