import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer id="contact" className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project idea or just want to connect, feel free
              to reach out!
            </p>
            <div className="flex flex-col space-y-3 mb-6">
              <a href="mailto:aaronxpublic@gmail.com" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-fit">
                <Mail size={18} className="mr-2" />
                aaronxpublic@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-6">
              <a href="www.linkedin.com/in/aaron-li-2771a4244" className="p-2 rounded-full border border-border hover:bg-accent transition-colors" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Aaron Li. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}