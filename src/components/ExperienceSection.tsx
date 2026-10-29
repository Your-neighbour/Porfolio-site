import React, { useState } from 'react';
import { Briefcase, ChevronDown, GraduationCap, Users, Wrench, MapPin } from 'lucide-react';
import { experience, ExperienceItem } from '../data/content';
import { asset } from '../lib/asset';

const KIND = {
  work: { icon: Briefcase, label: 'Industry co-op' },
  team: { icon: Wrench, label: 'Engineering design team' },
  leadership: { icon: Users, label: 'Student leadership' },
  education: { icon: GraduationCap, label: 'Education' },
} as const;

export function ExperienceSection() {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const allOpen = open.size === experience.length;

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setOpen(allOpen ? new Set() : new Set(experience.map((e) => e.id)))}
          className="text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      <ol className="relative space-y-4 border-l border-border pl-6 md:pl-10">
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} isOpen={open.has(item.id)} onToggle={() => toggle(item.id)} />
        ))}
      </ol>
    </div>
  );
}

function ExperienceCard({ item, isOpen, onToggle }: { item: ExperienceItem; isOpen: boolean; onToggle: () => void }) {
  const { icon: Icon, label } = KIND[item.kind];
  const panelId = `exp-${item.id}`;
  return (
    <li className="relative">
      <span className="absolute -left-[2.35rem] top-6 grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-primary md:-left-[3.6rem] md:h-10 md:w-10">
        <Icon size={16} />
      </span>

      <article
        className={`overflow-hidden rounded-2xl border bg-card transition ${
          isOpen ? 'border-primary/40' : 'border-border hover:border-primary/30'
        }`}
      >
        <button onClick={onToggle} aria-expanded={isOpen} aria-controls={panelId} className="block w-full p-6 text-left md:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="eyebrow mb-2">{label}</p>
              <h3 className="text-lg font-bold md:text-xl">{item.organization}</h3>
              <div className="mt-2 space-y-1">
                {item.roles.map((r) => (
                  <div key={r.title} className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-medium text-foreground/90">{r.title}</span>
                    <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
            </div>
            <span
              className={`mt-1 grid h-8 w-8 flex-none place-items-center rounded-full border border-border text-muted-foreground transition ${
                isOpen ? 'rotate-180 border-primary/40 text-primary' : ''
              }`}
            >
              <ChevronDown size={16} />
            </span>
          </div>
        </button>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border px-6 pb-6 pt-5 md:px-8">
              {item.location && (
                <p className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin size={13} /> {item.location}
                </p>
              )}
              <div className="space-y-5">
                {item.highlights.map((h, idx) => (
                  <div key={idx}>
                    {h.heading && <h4 className="mb-2 text-sm font-semibold text-foreground/90">{h.heading}</h4>}
                    <ul className="space-y-2">
                      {h.points.map((pt, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {item.images && item.images.length > 0 && (
                <div className={`mt-6 grid gap-3 ${item.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {item.images.map((img) => (
                    <img
                      key={img.url}
                      src={asset(img.url)}
                      alt={img.alt}
                      loading="lazy"
                      style={{ objectPosition: img.position }}
                      className={`w-full rounded-xl border border-border object-cover ${
                        item.images!.length > 1 ? 'h-48 md:h-56' : 'h-56 md:h-80'
                      }`}
                    />
                  ))}
                </div>
              )}
              {item.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
