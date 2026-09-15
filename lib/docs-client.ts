import { GH_URL } from "@/lib/constants";

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[`*_]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function relPathToSlug(relPath: string): string[] | null {
  const normalized = relPath.replace(/\\/g, "/");
  if (normalized === "docs/README.md") return null;

  if (normalized.startsWith("docBook/")) {
    const rest = normalized.slice("docBook/".length).replace(/\.md$/, "");
    if (rest === "00-index") return ["internals"];
    return ["internals", rest];
  }

  if (normalized.startsWith("docs/")) {
    let rest = normalized.slice("docs/".length).replace(/\.md$/, "");
    if (rest === "index") return [];
    if (rest.endsWith("/index")) rest = rest.slice(0, -"/index".length);
    return rest.split("/").filter(Boolean);
  }

  return null;
}

function hrefFromSlug(slug: string[]) {
  return slug.length === 0 ? "/docs" : `/docs/${slug.join("/")}`;
}

function posixResolve(fromDir: string, relativeHref: string) {
  const parts = [...fromDir.split("/").filter(Boolean), ...relativeHref.split("/")];
  const stack: string[] = [];
  for (const part of parts) {
    if (!part || part === ".") continue;
    if (part === "..") stack.pop();
    else stack.push(part);
  }
  return stack.join("/");
}

export function rewriteDocHref(fromRelPath: string, href: string) {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
  if (href.startsWith("#")) return href;

  const [pathPart, hash] = href.split("#");
  if (!pathPart) return href;

  const fromDir = fromRelPath.replace(/\\/g, "/").split("/").slice(0, -1).join("/");
  const resolved = posixResolve(fromDir, pathPart);
  const withExt = resolved.endsWith(".md") ? resolved : `${resolved}.md`;
  const slug = relPathToSlug(withExt);

  if (!slug) {
    const githubPath = pathPart.replace(/^\.\.\//, "").replace(/^\.\//, "");
    const kind = githubPath.endsWith("/") || !githubPath.includes(".") ? "tree" : "blob";
    return `${GH_URL}/${kind}/main/${githubPath}${hash ? `#${hash}` : ""}`;
  }

  return `${hrefFromSlug(slug)}${hash ? `#${hash}` : ""}`;
}
