import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectModal, ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ThemePreviewSwitcher } from './components/ThemePreviewSwitcher';
import type { Project } from './data/content';

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 md:py-16">
      <div className="mb-8 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

export function App() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection onOpenProject={setOpenProject} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Section id="projects" eyebrow="01 / Projects" title="Selected projects" intro="Open any project for the full write-up.">
            <ProjectsSection onOpen={setOpenProject} />
          </Section>
          <Section id="experience" eyebrow="02 / Experience" title="Experience & leadership">
            <ExperienceSection />
          </Section>
          <Section id="skills" eyebrow="03 / Skills" title="Skills & tools">
            <SkillsSection />
          </Section>
        </div>
      </main>
      <Footer />
      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
      {import.meta.env.VITE_THEME_PREVIEW === '1' && <ThemePreviewSwitcher />}
    </div>
  );
}
