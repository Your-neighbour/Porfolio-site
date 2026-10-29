import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="relative mt-24 overflow-hidden border-t">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="section-title mb-4">Get in touch</h2>
          <p className="mb-8 text-muted-foreground">
            Whether it&apos;s about a role or one of my projects, I&apos;d be glad to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-primary/60 hover:bg-accent"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-16 text-center font-mono text-xs text-muted-foreground">
          © {currentYear} Aaron Li · Built with React, Vite &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
