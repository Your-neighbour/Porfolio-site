import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';

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
    <section id={id} className="scroll-mt-20 py-16 md:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Section id="about" eyebrow="01 / About" title="Hardware first, with firmware where it counts.">
            <AboutSection />
          </Section>
          <Section
            id="experience"
            eyebrow="02 / Experience"
            title="Experience & leadership"
            intro="Industry co-op work, design-team engineering and student leadership."
          >
            <ExperienceSection />
          </Section>
          <Section
            id="projects"
            eyebrow="03 / Projects"
            title="Things I've built"
            intro="Team and personal hardware projects. Open any card for the full story, including what didn't work the first time."
          >
            <ProjectsSection />
          </Section>
          <Section id="skills" eyebrow="04 / Skills" title="Toolbox">
            <SkillsSection />
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
