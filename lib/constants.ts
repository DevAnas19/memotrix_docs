import { NavItem, FooterSection } from "@/types/navigation";

export const GH_URL = "https://github.com/Matrixxboy/memotrix";

export const NAV_LINKS: NavItem[] = [
  { href: "/architecture", label: "Architecture" },
  { href: "/docs", label: "Documentation" },
  { href: "/about", label: "About" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "DOCUMENTATION",
    links: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/quickstart", label: "Quickstart" },
      { href: "/docs/api/memory", label: "Memory API" },
      { href: "/docs/use-cases", label: "Use cases" },
    ],
  },
  {
    title: "PROJECT",
    links: [
      { href: "/roadmap", label: "Roadmap" },
      { href: "/contributors", label: "Contributors" },
      { href: GH_URL, label: "GitHub ↗", external: true },
    ],
  },
];

export const SUPPORTED_FILE_TYPES: string[] = [
  "PDF", "DOCX", "PPTX", "TXT", "Markdown", "HTML", "EPUB",
  "CSV", "Excel (.xlsx)", "JSON", "YAML", "XML", "SQL", "GeoJSON",
  "Turtle (RDF)", "N-Triples", "GraphML", "JSON-LD",
  "Email (.eml)", "Mbox", "WhatsApp export", "Chat JSONL",
  "Images (OCR/CLIP)", "Video", "Audio (Whisper)", "Source code", "SCORM logs"
];
