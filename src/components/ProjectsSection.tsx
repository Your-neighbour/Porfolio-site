import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Trophy, Lightbulb, ArrowUpRight, Gauge, Car, Cpu } from 'lucide-react';
import { earlierProjects, featuredProject, Project, projects } from '../data/content';
import { asset } from '../lib/asset';

const STATUS_STYLES: Record<Project['status'], string> = {
  'Competition-proven': 'border-primary/40 bg-primary/10 text-primary',
  'In progress': 'border-info/40 bg-info/10 text-info',
  Completed: 'border-secondary/40 bg-secondary/10 text-secondary',
  Coursework: 'border-border bg-accent text-muted-foreground',
  Discontinued: 'border-border bg-accent text-muted-foreground',
};

function StatusBadge({ status }: { status: Project['status'] }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}

export { MediaCarousel };
export function ProjectsSection({ onOpen: setOpen }: { onOpen: (p: Project) => void }) {
  return (
    <div>
      <FeaturedProject project={featuredProject} onOpen={() => setOpen(featuredProject)} />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setOpen(p)} />
        ))}
      </div>

      <div className="mt-14">
        <h3 className="mb-1 text-lg font-semibold">Earlier work</h3>
        <p className="mb-5 text-sm text-muted-foreground">Smaller and older projects, including coursework.</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {earlierProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => setOpen(p)}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 text-left transition hover:border-primary/40"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{p.context}</span>
                <ArrowUpRight size={16} className="text-muted-foreground transition group-hover:text-primary" />
              </div>
              <span className="mb-1 font-semibold group-hover:text-primary">{p.title}</span>
              <span className="text-sm text-muted-foreground">{p.summary}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

function FeaturedProject({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-[0_0_0_1px_hsl(var(--primary)/0.05),0_20px_60px_-30px_hsl(var(--primary)/0.4)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative bg-muted">
          <MediaCarousel media={project.media} className="aspect-[4/3] lg:aspect-auto lg:h-full" fit="contain" />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
            Flagship project
          </span>
        </div>
        <div className="flex flex-col p-6 md:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="font-mono text-xs text-muted-foreground">
              {project.context} · {project.period}
            </span>
          </div>
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">{project.title}</h3>
          <p className="mb-5 text-muted-foreground">{project.summary}</p>

          {project.result && (
            <div className="mb-5 flex gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
              <Trophy size={20} className="mt-0.5 flex-none text-primary" />
              <p className="text-sm leading-relaxed">{project.result}</p>
            </div>
          )}

          <ul className="mb-6 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <button onClick={onOpen} className="text-sm font-semibold text-primary hover:underline">
              Full write-up →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl"
      onClick={onOpen}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpen())}
      tabIndex={0}
      role="button"
      aria-label={`Open details for ${project.title}`}
    >
      {project.media.length > 0 ? (
        <MediaCarousel media={project.media} className="aspect-video" />
      ) : (
        <FallbackVisual icon={project.fallbackIcon} className="aspect-video" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-muted-foreground">
            {project.context} · {project.period}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">{project.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function FallbackVisual({ icon, className = '' }: { icon?: Project['fallbackIcon']; className?: string }) {
  const Icon = icon === 'car' ? Car : icon === 'load' ? Gauge : Cpu;
  return (
    <div className={`relative w-full overflow-hidden bg-muted ${className}`}>
      <div className="grid-bg absolute inset-0 opacity-70" />
      <svg className="absolute inset-0 h-full w-full text-primary/25" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 60 H120 L150 90 H260 L290 60 H400" />
          <path d="M0 170 H90 L120 140 H200" />
          <path d="M400 165 H300 L270 135 H220" />
          <path d="M200 0 V40" />
          <path d="M200 185 V225" />
        </g>
        <g fill="currentColor">
          <circle cx="120" cy="60" r="4" />
          <circle cx="290" cy="60" r="4" />
          <circle cx="200" cy="140" r="4" />
          <circle cx="220" cy="135" r="4" />
        </g>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-20 w-20 place-items-center rounded-2xl border border-primary/30 bg-card/90 text-primary shadow-lg">
          <Icon size={36} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

function MediaCarousel({
  media,
  className = '',
  fit = 'cover',
  large = false,
}: {
  media: Project['media'];
  className?: string;
  fit?: 'cover' | 'contain';
  large?: boolean;
}) {
  const [i, setI] = useState(0);
  if (media.length === 0) return null;
  const step = (d: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setI((prev) => (prev + d + media.length) % media.length);
  };
  const m = media[i];
  return (
    <div className={`relative w-full overflow-hidden bg-muted ${className}`}>
      <img
        src={asset(m.url)}
        alt={m.alt}
        loading="lazy"
        className={`h-full w-full ${fit === 'contain' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-500`}
      />
      {media.length > 1 && (
        <>
          <button
            onClick={step(-1)}
            className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 ${large ? 'p-2' : 'p-1'} transition hover:bg-background`}
            aria-label="Previous image"
          >
            <ChevronLeft size={large ? 22 : 18} />
          </button>
          <button
            onClick={step(1)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 ${large ? 'p-2' : 'p-1'} transition hover:bg-background`}
            aria-label="Next image"
          >
            <ChevronRight size={large ? 22 : 18} />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {media.map((_, idx) => (
              <span key={idx} className={`block h-1.5 rounded-full transition-all ${idx === i ? 'w-4 bg-primary' : 'w-1.5 bg-background/80'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-background/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-14" onClick={(e) => e.stopPropagation()}>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-start justify-between gap-4 border-b p-6">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <StatusBadge status={project.status} />
                <span className="font-mono text-xs text-muted-foreground">
                  {project.context} · {project.period}
                </span>
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">{project.title}</h2>
            </div>
            <button onClick={onClose} className="rounded-full p-2 transition hover:bg-accent" aria-label="Close">
              <X size={22} />
            </button>
          </div>

          <div className="p-6">
            {project.media.length > 0 ? (
              <MediaCarousel media={project.media} className="mb-6 aspect-video rounded-xl" fit="contain" large />
            ) : (
              <FallbackVisual icon={project.fallbackIcon} className="mb-6 aspect-[21/9] rounded-xl" />
            )}

            <p className="mb-6 leading-relaxed text-muted-foreground">{project.description}</p>

            <h3 className="mb-3 font-semibold">What I did</h3>
            <ul className="mb-6 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>

            {project.result && (
              <div className="mb-4 flex gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
                <Trophy size={20} className="mt-0.5 flex-none text-primary" />
                <div>
                  <p className="mb-1 text-sm font-semibold">Result</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.result}</p>
                </div>
              </div>
            )}

            {project.lessons && (
              <div className="mb-4 flex gap-3 rounded-xl border border-info/30 bg-info/5 p-4">
                <Lightbulb size={20} className="mt-0.5 flex-none text-info" />
                <div>
                  <p className="mb-1 text-sm font-semibold">What testing taught me</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.lessons}</p>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:border-primary/60"
                  >
                    {l.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
