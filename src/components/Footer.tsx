import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer id="contact" className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll get back to you!
            </p>
            <a href="mailto:example@email.com" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Mail size={18} className="mr-2" />
              Contact Me
            </a>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-colors" aria-label="GitHub profile">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-colors" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-full border border-border hover:bg-accent transition-colors" aria-label="Twitter profile">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}