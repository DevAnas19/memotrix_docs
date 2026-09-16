"use client";

import React from "react";
import { Highlight } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { MEMOTRIX_PRISM_THEME, resolveCodeLanguage } from "@/lib/code-theme";

export interface HighlightedCodeProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function HighlightedCode({
  code,
  language = "python",
  showLineNumbers,
  className,
}: HighlightedCodeProps) {
  const resolved = resolveCodeLanguage(language);
  const lines = code.replace(/\n$/, "").split("\n");
  const numbered = showLineNumbers ?? lines.length >= 4;

  return (
    <Highlight theme={MEMOTRIX_PRISM_THEME} code={code.replace(/\n$/, "")} language={resolved}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className={cn("m-0 overflow-x-auto bg-transparent p-4 font-mono text-xs sm:text-sm leading-[1.7]", className)}>
          <code>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line });
              return (
                <div key={i} {...lineProps} className={cn("table-row", lineProps.className)}>
                  {numbered && (
                    <span className="table-cell select-none pr-4 text-right text-[11px] leading-[1.7] text-[#3d4560] w-[2.25rem]">
                      {i + 1}
                    </span>
                  )}
                  <span className="table-cell whitespace-pre">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                    {line.length === 0 ? "\n" : null}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
