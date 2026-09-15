"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { DOCS_NAV } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href;
}

export function DocsSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex w-full items-center justify-between rounded-xl border border-rule bg-paper-card px-4 py-3 text-sm font-semibold text-ink"
        >
          Browse documentation
          <ChevronDown className={cn("h-4 w-4 transition-transform", mobileOpen && "rotate-180")} />
        </button>
        {mobileOpen && (
          <div className="mt-2 rounded-xl border border-rule bg-paper-card p-4">
            <NavList pathname={pathname} onNavigate={() => setMobileOpen(false)} />
          </div>
        )}
      </div>
      <aside className="hidden lg:block w-64 shrink-0 border-r border-rule pr-6">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8 pr-2">
          <NavList pathname={pathname} />
        </div>
      </aside>
    </>
  );
}

function NavList({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <div className="space-y-6">
      {DOCS_NAV.map((section) => (
        <NavSection key={section.title} title={section.title} pathname={pathname} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

function NavSection({
  title,
  pathname,
  onNavigate,
}: {
  title: string;
  pathname: string;
  onNavigate?: () => void;
}) {
  const section = DOCS_NAV.find((item) => item.title === title)!;
  const sectionActive = section.items.some((item) => pathname === item.href || (item.href !== "/docs" && pathname.startsWith(`${item.href}/`)));
  const [open, setOpen] = useState(title !== "Internals" || sectionActive);

  React.useEffect(() => {
    if (sectionActive) setOpen(true);
  }, [sectionActive]);

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue"
      >
        {title}
        <ChevronDown className={cn("h-3 w-3 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="space-y-0.5 text-sm border-l border-rule pl-3">
          {section.items.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "block rounded-md px-2 py-1 transition-colors",
                    active ? "bg-brand-blue/[0.08] text-ink font-semibold" : "text-ink-secondary hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
