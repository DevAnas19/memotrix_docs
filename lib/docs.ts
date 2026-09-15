import fs from "fs";
import path from "path";
import { relPathToSlug, slugifyHeading } from "@/lib/docs-client";

const DOCS_ROOT = path.join(process.cwd(), "actualDocs");
const SKIP_FILES = new Set(["README.md"]);

export interface DocPage {
  slug: string[];
  href: string;
  relPath: string;
  title: string;
  description?: string;
  content: string;
}

interface Frontmatter {
  title?: string;
  description?: string;
}

function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    data[kv[1] as keyof Frontmatter] = kv[2].replace(/^["']|["']$/g, "").trim();
  }
  return { data, content: match[2] };
}

function titleFromMarkdown(content: string, fallback: string) {
  const heading = content.match(/^#\s+(.+)$/m);
  if (!heading) return fallback;
  return heading[1].replace(/`/g, "").trim();
}

function descriptionFromMarkdown(content: string) {
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      !trimmed ||
      trimmed.startsWith("#") ||
      trimmed.startsWith("```") ||
      trimmed.startsWith("|") ||
      trimmed.startsWith("-") ||
      trimmed.startsWith(">")
    ) {
      continue;
    }
    return trimmed.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "").slice(0, 220);
  }
  return undefined;
}

function walkMarkdown(dir: string): string[] {
  const out: string[] = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkMarkdown(full));
    else if (entry.name.endsWith(".md") && !SKIP_FILES.has(entry.name)) out.push(full);
  }
  return out;
}

function hrefFromSlug(slug: string[]) {
  return slug.length === 0 ? "/docs" : `/docs/${slug.join("/")}`;
}

export function slugToRelPath(slug?: string[]): string | null {
  if (!slug || slug.length === 0) return "docs/index.md";
  if (slug[0] === "internals") {
    if (slug.length === 1) return "docBook/00-index.md";
    return `docBook/${slug.slice(1).join("/")}.md`;
  }
  const nested = path.join(DOCS_ROOT, "docs", ...slug) + ".md";
  const indexFile = path.join(DOCS_ROOT, "docs", ...slug, "index.md");
  if (fs.existsSync(nested)) return path.relative(DOCS_ROOT, nested).replace(/\\/g, "/");
  if (fs.existsSync(indexFile)) return path.relative(DOCS_ROOT, indexFile).replace(/\\/g, "/");
  return `docs/${slug.join("/")}.md`;
}

export function listDocFiles(): { relPath: string; slug: string[] }[] {
  return walkMarkdown(DOCS_ROOT)
    .map((full) => path.relative(DOCS_ROOT, full).replace(/\\/g, "/"))
    .map((relPath) => {
      const slug = relPathToSlug(relPath);
      return slug ? { relPath, slug } : null;
    })
    .filter((entry): entry is { relPath: string; slug: string[] } => Boolean(entry));
}

export function loadDoc(slug?: string[]): DocPage | null {
  const relPath = slugToRelPath(slug);
  if (!relPath) return null;
  const full = path.join(DOCS_ROOT, relPath);
  if (!fs.existsSync(full)) return null;

  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = parseFrontmatter(raw);
  const resolvedSlug = slug ?? [];
  const fallbackTitle = resolvedSlug.length
    ? resolvedSlug[resolvedSlug.length - 1].replace(/[-_]/g, " ")
    : "Memotrix";

  return {
    slug: resolvedSlug,
    href: hrefFromSlug(resolvedSlug),
    relPath,
    title: data.title || titleFromMarkdown(content, fallbackTitle),
    description: data.description || descriptionFromMarkdown(content),
    content,
  };
}

export function extractToc(content: string) {
  const toc: { id: string; text: string }[] = [];
  let inFence = false;
  for (const line of content.split(/\r?\n/)) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = line.match(/^##\s+(.+)$/);
    if (!match) continue;
    const text = match[1].replace(/`/g, "").trim();
    toc.push({ id: slugifyHeading(text), text });
  }
  return toc;
}
