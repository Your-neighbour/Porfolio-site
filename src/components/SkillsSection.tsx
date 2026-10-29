import React from 'react';
import { skills } from '../data/content';

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((s) => (
        <div key={s.group} className="rounded-2xl border border-border bg-card p-6">
          <p className="eyebrow mb-4">{s.group}</p>
          <div className="flex flex-wrap gap-2">
            {s.items.map((it) => (
              <span key={it} className="rounded-md border border-border bg-accent/50 px-2.5 py-1 text-sm text-foreground/90">
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
