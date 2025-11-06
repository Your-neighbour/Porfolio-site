import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
export function HeroSection() {
  return <section id="about" className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">Alex Chen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            Software Engineer & Problem Solver
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            I build accessible, user-centered digital experiences with modern
            technologies. Specializing in full-stack development with a focus on
            performance and scalability.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-colors" aria-label="GitHub profile">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-colors" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-colors" aria-label="Email contact">
              <Mail size={20} />
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
              AWS
            </span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
              GraphQL
            </span>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
}