import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border my-8"></div>
          <section id="experience" className="mb-8">
            <h2 className="text-3xl font-bold py-4">Experience & Education</h2>
            <ExperienceSection />
          </section>
          <div className="border-t border-border my-8"></div>
          <section id="projects" className="mb-8">
            <h2 className="text-3xl font-bold py-4">Projects</h2>
            <ProjectsSection />
          </section>
        </div>
      </main>
      <Footer />
    </div>;
}