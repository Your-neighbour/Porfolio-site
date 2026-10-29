import React from 'react';
import { outsideTheLab, profile } from '../data/content';
import { asset } from '../lib/asset';

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div>
        <p className="eyebrow mb-3">Outside the lab</p>
        <div className="grid grid-cols-3 gap-3">
          {outsideTheLab.map((m, i) => (
            <figure
              key={m.url}
              className={`overflow-hidden rounded-xl border border-border ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={asset(m.url)}
                alt={m.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
