import React, { useEffect, useState } from 'react';

// Only rendered in preview builds (VITE_THEME_PREVIEW=1) so colour concepts can be compared.
// The production site always uses the default theme.
const THEMES = [
  { id: 'midnight', label: 'Midnight', swatch: ['#141925', '#3d9bff'] },
  { id: 'light', label: 'Light', swatch: ['#f7f9fc', '#0d6ef2'] },
  { id: 'graphite', label: 'Graphite', swatch: ['#111113', '#1ec8f0'] },
];

export function ThemePreviewSwitcher() {
  const [theme, setTheme] = useState(() => {
    const fromHash = window.location.hash.replace('#theme-', '');
    return THEMES.some((t) => t.id === fromHash) ? fromHash : 'midnight';
  });

  useEffect(() => {
    if (theme === 'midnight') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="fixed bottom-4 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-card/95 p-1 shadow-2xl backdrop-blur">
      <span className="px-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Theme concept</span>
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition ${
            theme === t.id ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'
          }`}
        >
          <span className="flex">
            <span className="h-3 w-3 rounded-full border border-black/20" style={{ background: t.swatch[0] }} />
            <span className="-ml-1 h-3 w-3 rounded-full border border-black/20" style={{ background: t.swatch[1] }} />
          </span>
          {t.label}
        </button>
      ))}
    </div>
  );
}
