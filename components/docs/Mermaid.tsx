"use client";

import React, { useEffect, useId, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const reactId = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: {
            primaryColor: "#E8EEFF",
            primaryTextColor: "#11172A",
            primaryBorderColor: "#3867FF",
            lineColor: "#596176",
            secondaryColor: "#F2EEE5",
            tertiaryColor: "#FBFAF6",
            background: "#FFFDF8",
            fontFamily: "Plus Jakarta Sans, sans-serif",
          },
        });
        const id = `mermaid-${reactId}-${Math.random().toString(36).slice(2, 8)}`;
        const { svg: rendered } = await mermaid.render(id, chart);
        if (!cancelled) setSvg(rendered);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  if (failed) {
    return (
      <pre className="my-4 overflow-x-auto rounded-xl border border-rule bg-paper-3 p-4 text-xs text-ink-secondary">
        <code>{chart}</code>
      </pre>
    );
  }

  if (!svg) {
    return (
      <div className="my-4 h-40 animate-pulse rounded-xl border border-rule bg-paper-3" aria-hidden />
    );
  }

  return (
    <div
      className="docs-mermaid my-4 overflow-x-auto rounded-xl border border-rule bg-paper-card p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
