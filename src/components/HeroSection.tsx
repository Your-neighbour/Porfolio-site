import React from 'react';
import { ArrowRight, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/content';
import { asset } from '../lib/asset';
import { scrollToSection } from './Header';

const STATS = [
  { value: '49 km/kWh', label: 'Supermileage’s first-ever successful run at Shell Eco-marathon Americas, 2026' },
  { value: '6', label: 'members in the Power Systems division I co-lead' },
  { value: '8 mo', label: 'substations co-op at Phasor Engineering' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="order-2 md:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              {profile.availability}
            </div>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-primary">Aaron Li</span>.
            </h1>
            <p className="mb-2 text-xl font-semibold text-foreground/90 sm:text-2xl">{profile.headline}</p>
            <p className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} /> {profile.school} · Vancouver, BC
            </p>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>

            <div className="mb-8 flex flex-wrap items-center gap-3">
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
                <Mail size={16} /> Email me
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

            <div className="flex flex-wrap gap-2">
              {profile.focus.map((f) => (
                <span key={f} className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-dashed border-primary/30" />
              <div className="relative h-64 w-56 overflow-hidden rounded-3xl border border-border shadow-2xl sm:h-80 sm:w-64 md:h-[26rem] md:w-80">
                <img src={asset('img/profile.webp')} alt="Aaron Li" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card/95 px-4 py-2 shadow-lg backdrop-blur">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Currently</p>
                <p className="text-sm font-semibold">Power Systems Co-Lead</p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-primary">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
