import React from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="border-t border-border my-8"></div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold py-4">Experience & Education</h2>
          <ExperienceSection />
        </div>
        <div className="border-t border-border my-8"></div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold py-4">Projects</h2>
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
