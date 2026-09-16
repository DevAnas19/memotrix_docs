import type { PrismTheme } from "prism-react-renderer";

/** Syntax colors tuned to the Memotrix navy notebook chrome. */
export const MEMOTRIX_PRISM_THEME: PrismTheme = {
  plain: {
    color: "#d4daf0",
    backgroundColor: "#10182C",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#7C8497", fontStyle: "italic" },
    },
    {
      types: ["punctuation"],
      style: { color: "#8a92a5" },
    },
    {
      types: ["property", "tag", "constant", "symbol", "deleted"],
      style: { color: "#E76F61" },
    },
    {
      types: ["boolean", "number"],
      style: { color: "#F2C85B" },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: { color: "#59B58A" },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: { color: "#EBA7B7" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "#A78BFA" },
    },
    {
      types: ["function", "class-name"],
      style: { color: "#7EB6FF" },
    },
    {
      types: ["regex", "important"],
      style: { color: "#F2C85B" },
    },
    {
      types: ["parameter"],
      style: { color: "#9FC8F5" },
    },
  ],
};

const LANGUAGE_ALIASES: Record<string, string> = {
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  py: "python",
  yml: "yaml",
  md: "markdown",
  js: "javascript",
  ts: "typescript",
  dockerfile: "bash",
  env: "bash",
  plaintext: "text",
  txt: "text",
};

export function resolveCodeLanguage(language?: string) {
  const raw = (language || "python").toLowerCase().trim();
  return LANGUAGE_ALIASES[raw] || raw;
}
