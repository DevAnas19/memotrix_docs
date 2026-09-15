import React from "react";
import { Badge } from "@/components/ui/Badge";
import { MarkdownContent } from "@/components/docs/MarkdownContent";
import { DocsPager } from "@/components/docs/DocsPager";
import { DocsToc } from "@/components/docs/DocsToc";
import { extractToc, loadDoc } from "@/lib/docs";
import { DOCS_FLAT, slugToHref } from "@/lib/docs-nav";
import { notFound } from "next/navigation";

export function DocsArticle({ slug }: { slug?: string[] }) {
  const doc = loadDoc(slug);
  if (!doc) notFound();

  const toc = extractToc(doc.content);
  const section = DOCS_FLAT.find((item) => item.href === doc.href)?.section;
  const href = slugToHref(slug);

  return (
    <>
      <article className="flex-1 min-w-0 max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Badge>Docs</Badge>
          {section && (
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">{section}</span>
          )}
        </div>
        <MarkdownContent content={doc.content} fromRelPath={doc.relPath} />
        <DocsPager href={href} />
      </article>
      <DocsToc items={toc} />
    </>
  );
}
