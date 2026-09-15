import React from "react";
import { DocsSidebar } from "@/components/layout/DocsSidebar";

export const metadata = {
  title: {
    template: "%s — Memotrix Docs",
    default: "Documentation — Memotrix",
  },
  description: "User guide, API reference, tutorials, and internals for the Memotrix memory library.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="flex flex-col lg:flex-row gap-8">
        <DocsSidebar />
        {children}
      </div>
    </div>
  );
}
