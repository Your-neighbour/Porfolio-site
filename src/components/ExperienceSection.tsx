import React from 'react';
import { Briefcase, GraduationCap, Users, Wrench, MapPin } from 'lucide-react';
import { experience, ExperienceItem } from '../data/content';
import { asset } from '../lib/asset';

const KIND = {
  work: { icon: Briefcase, label: 'Industry co-op' },
  team: { icon: Wrench, label: 'Engineering design team' },
  leadership: { icon: Users, label: 'Student leadership' },
  education: { icon: GraduationCap, label: 'Education' },
} as const;

export function ExperienceSection() {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6 md:pl-10">
      {experience.map((item) => (
        <ExperienceCard key={item.id} item={item} />
      ))}
    </ol>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const { icon: Icon, label } = KIND[item.kind];
  return (
    <li className="relative">
      <span className="absolute -left-[2.35rem] top-6 grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-primary md:-left-[3.6rem] md:h-10 md:w-10">
        <Icon size={16} />
      </span>

      <article className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40">
        {item.image && (
          <div className="relative h-40 w-full overflow-hidden md:h-52">
            <img src={asset(item.image)} alt={`${item.organization} team`} loading="lazy" className="h-full w-full object-cover object-[center_35%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          </div>
        )}
        <div className="p-6 md:p-8">
          <p className="eyebrow mb-2">{label}</p>
          <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <h3 className="text-xl font-bold md:text-2xl">{item.organization}</h3>
              {item.location && (
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin size={13} /> {item.location}
                </p>
              )}
            </div>
          </div>

          <div className="mb-5 space-y-1.5">
            {item.roles.map((r) => (
              <div key={r.title} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <span className="font-semibold text-foreground">{r.title}</span>
                <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
              </div>
            ))}
          </div>

          {item.summary && <p className="mb-5 text-sm text-muted-foreground">{item.summary}</p>}

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
      </article>
    </li>
  );
}
