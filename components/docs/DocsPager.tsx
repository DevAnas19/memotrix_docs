import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getDocsNeighbors } from "@/lib/docs-nav";

export function DocsPager({ href }: { href: string }) {
  const { prev, next } = getDocsNeighbors(href);
  if (!prev && !next) return null;

  return (
    <div className="pt-8 mt-10 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-3">
      {prev ? (
        <Button href={prev.href} variant="outline" className="justify-start h-auto py-3 px-4">
          <span className="flex flex-col items-start gap-0.5 text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" /> Previous
            </span>
            <span>{prev.label}</span>
          </span>
        </Button>
      ) : (
        <div />
      )}
      {next && (
        <Button href={next.href} variant="outline" className="sm:justify-end h-auto py-3 px-4">
          <span className="flex flex-col items-end gap-0.5 text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted flex items-center gap-1">
              Next <ArrowRight className="h-3 w-3" />
            </span>
            <span>{next.label}</span>
          </span>
        </Button>
      )}
    </div>
  );
}
