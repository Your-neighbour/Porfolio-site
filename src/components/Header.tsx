import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // h-16 = 64px
      const additionalOffset = 20; // Increased spacing for better visibility on smaller screens
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - additionalOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}>
            Aaron Li
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('about');
        }}>
            About
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('experience');
        }}>
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('projects');
        }}>
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('contact');
        }}>
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 bg-background border-t">
            <a href="#about" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('about');
        }}>
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('experience');
        }}>
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('projects');
        }}>
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary/80" onClick={e => {
          e.preventDefault();
          scrollToSection('contact');
        }}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
}