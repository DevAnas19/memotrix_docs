"use client";

import React, { isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Mermaid } from "@/components/docs/Mermaid";
import { rewriteDocHref, slugifyHeading } from "@/lib/docs-client";

function textFromNode(node: React.ReactNode): string {
  return React.Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (isValidElement(child)) return textFromNode(child.props.children);
      return "";
    })
    .join("");
}

export function MarkdownContent({ content, fromRelPath }: { content: string; fromRelPath: string }) {
  const components: Components = {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => {
      const text = textFromNode(children);
      return (
        <h2 id={slugifyHeading(text)} className="scroll-mt-28 pt-8 mt-8 border-t border-rule text-2xl font-bold text-ink">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = textFromNode(children);
      return (
        <h3 id={slugifyHeading(text)} className="scroll-mt-28 mt-8 text-lg font-bold text-ink">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="mt-6 text-base font-semibold text-ink">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 ml-5 list-disc space-y-1.5 text-[15px] text-ink-secondary">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 ml-5 list-decimal space-y-1.5 text-[15px] text-ink-secondary">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-4 rounded-xl border border-notebook-yellow/40 bg-[#fdfaee] px-4 py-3 text-sm text-ink-secondary">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-rule" />,
    a: ({ href, children }) => {
      const nextHref = rewriteDocHref(fromRelPath, href || "");
      const external = /^(https?:)/i.test(nextHref);
      return (
        <a
          href={nextHref}
          className="text-brand-blue font-medium underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
    table: ({ children }) => (
      <div className="mt-4 overflow-x-auto rounded-xl border border-rule">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-paper-3">{children}</thead>,
    th: ({ children }) => (
      <th className="border-b border-rule px-3 py-2.5 font-semibold text-ink">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border-b border-rule px-3 py-2.5 text-ink-secondary align-top">{children}</td>
    ),
    pre: ({ children }) => <>{children}</>,
    code: ({ className, children }) => {
      const language = /language-(\w+)/.exec(className || "")?.[1];
      const code = String(children).replace(/\n$/, "");
      if (language === "mermaid") return <Mermaid chart={code} />;
      if (language || code.includes("\n")) {
        return <CodeBlock code={code} language={language || "text"} />;
      }
      return (
        <code className="rounded border border-rule bg-paper-3 px-1.5 py-0.5 font-mono text-[13px] text-brand-blue">
          {children}
        </code>
      );
    },
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src || ""} alt={alt || ""} className="my-4 max-w-full rounded-xl border border-rule" />
    ),
  };

  return (
    <div className="docs-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
