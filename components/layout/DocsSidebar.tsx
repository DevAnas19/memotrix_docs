import React from "react";
import Link from "next/link";
export interface SidebarSection {
  title: string;
  items: { label: string; href: string }[];
}
export const DOCS_SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    title: "GETTING STARTED",
    items: [
      { label: "Introduction", href: "#introduction" },
      { label: "Installation", href: "#installation" },
      { label: "Quick Start", href: "#quick-start" },
    ],
  },
  {
    title: "API REFERENCE",
    items: [
      { label: "Memory Object", href: "#memory-object" },
      { label: "Memory Types", href: "#memory-types" },
      { label: "Custom Components", href: "#custom" },
      { label: "Environment Variables", href: "#env-vars" },
    ],
  },
];
export function DocsSidebar() {
  return (
    <aside className="w-64 shrink-0 hidden lg:block border-r border-rule pr-6 py-8">
      <div className="sticky top-24 space-y-6">
        {DOCS_SIDEBAR_SECTIONS.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue">
              {section.title}
            </h4>
            <ul className="space-y-1 text-sm border-l border-rule pl-3">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link href={item.href}
                    className="block py-1 text-ink-secondary hover:text-ink transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}