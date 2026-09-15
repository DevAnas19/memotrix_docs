import React from "react";

export function DocsToc({ items }: { items: { id: string; text: string }[] }) {
  if (items.length < 2) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-24 space-y-3">
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue">On this page</h4>
        <ul className="space-y-1.5 border-l border-rule pl-3">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="block text-[13px] text-ink-secondary hover:text-ink transition-colors">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
