import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Linkedin, Mail, MapPin } from 'lucide-react';
import { featuredProject, outsideTheLab, profile, Project, projects } from '../data/content';
import { asset } from '../lib/asset';
import { scrollToSection } from './Header';

type Tile = { image: string; title: string; caption: string; project?: Project; target?: string };

const TILE_LAYOUT = [
  'col-span-2 aspect-[16/10] sm:row-span-2 sm:aspect-auto',
  'aspect-square sm:aspect-auto',
  'aspect-square sm:aspect-auto',
  'col-span-2 aspect-[16/7] sm:col-span-3 sm:aspect-auto',
];

const byId = (id: string) => projects.find((p) => p.id === id);

const TILES: Tile[] = [
  { image: 'img/lpd-render.webp', title: featuredProject.title, caption: 'Raced at Shell Eco-marathon 2026', project: featuredProject },
  { image: 'img/reflow-heating.webp', title: 'PID Reflow Oven', caption: 'Personal project', project: byId('reflow') },
  { image: 'img/h2-bench.webp', title: 'Fuel-Cell Throttle Firmware', caption: 'UBC Supermileage', project: byId('h2') },
  { image: 'img/supergang.webp', title: 'UBC Supermileage', caption: 'Power Systems Co-Lead', target: 'experience' },
];

export function HeroSection({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 pb-12 pt-10 sm:px-6 md:pt-16 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Intro */}
          <div className="lg:pt-4">
            <div className="mb-6 flex items-center gap-4">
              <img
                src={asset('img/profile.webp')}
                alt="Aaron Li"
                className="h-20 w-20 flex-none rounded-2xl border border-border object-cover shadow-lg sm:h-24 sm:w-24"
              />
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{profile.name}</h1>
                <p className="mt-1 flex items-center gap-1.5 text-base font-medium text-muted-foreground sm:text-lg">
                  {profile.headline}
                  <span className="hidden items-center gap-1 text-sm sm:inline-flex">
                    · <MapPin size={13} /> Vancouver
                  </span>
                </p>
              </div>
            </div>

            <div className="mb-5 hidden flex-wrap gap-2 sm:flex">
              {profile.quickFacts.map((f) => (
                <span key={f.org} className="rounded-full border border-border bg-card px-3 py-1 text-xs">
                  <span className="font-semibold text-foreground">{f.label}</span>
                  <span className="text-muted-foreground"> · {f.org}</span>
                </span>
              ))}
            </div>

            {/* Collapsible bio: summary when closed, full story when open */}
            <div className="mb-6">
              {!expanded ? (
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>
              ) : (
                <div className="max-w-xl space-y-3 text-base leading-relaxed text-muted-foreground">
                  {profile.about.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="pt-2">
                    <p className="eyebrow mb-2">Outside the lab</p>
                    <div className="grid grid-cols-3 gap-2">
                      {outsideTheLab.map((m) => (
                        <img
                          key={m.url}
                          src={asset(m.url)}
                          alt={m.alt}
                          loading="lazy"
                          className="aspect-square w-full rounded-lg border border-border object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                {expanded ? 'Show less' : 'More about me'}
                <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                See my projects <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-primary/60 hover:bg-accent"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition hover:border-primary/60 hover:bg-accent"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Project mosaic: the visual hook, above the fold */}
          <div className="grid grid-cols-2 gap-3 sm:h-[32rem] sm:grid-cols-3 sm:grid-rows-3">
            {TILES.map((t, i) => (
              <button
                key={t.title}
                onClick={() => (t.project ? onOpenProject(t.project) : t.target && scrollToSection(t.target))}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-muted text-left ${TILE_LAYOUT[i]}`}
              >
                <img
                  src={asset(t.image)}
                  alt={t.title}
                  className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-105 ${
                    i === 0 ? 'bg-[#dfe3ea] object-contain p-3' : i === 3 ? 'object-cover object-[center_72%]' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-10 sm:p-4 sm:pt-12">
                  <p className="text-sm font-semibold leading-tight text-white sm:text-base">{t.title}</p>
                  <p className="text-xs text-white/75">{t.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
