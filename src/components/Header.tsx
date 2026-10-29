import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const offset = 80; // sticky header + breathing room
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current = '';
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled || isMenuOpen ? 'border-b bg-background/85 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-2 font-semibold tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">
            AL
          </span>
          <span className="text-lg">Aaron Li</span>
        </a>

        <nav className="hidden md:flex md:items-center md:gap-1" aria-label="Primary">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => go(e, id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t bg-background md:hidden" aria-label="Mobile">
          <div className="container flex flex-col px-4 py-2">
            {NAV.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                className={`py-3 text-sm font-medium ${active === id ? 'text-primary' : 'text-foreground'}`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
