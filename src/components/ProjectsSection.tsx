import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
type MediaItem = {
  type: 'image' | 'video';
  url: string;
  alt?: string;
};
type Project = {
  title: string;
  description: string;
  fullDescription: string;
  media: MediaItem[];
  tags: string[];
  codeUrl: string;
  demoUrl: string;
  features: string[];
  challenges: string;
  outcome: string;
};
export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects: Project[] = [{
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    fullDescription: 'A comprehensive e-commerce platform built from the ground up with modern web technologies. Features include user authentication, product management, shopping cart functionality, and secure payment processing through Stripe.',
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      alt: 'Project thumbnail'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      alt: 'E-commerce dashboard'
    }, {
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      alt: 'Demo video'
    }],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    codeUrl: '#',
    demoUrl: '#',
    features: ['User authentication and authorization', 'Product catalog with search and filtering', 'Shopping cart and checkout process', 'Stripe payment integration', 'Admin dashboard for inventory management', 'Order tracking and history'],
    challenges: 'Implementing real-time inventory updates and ensuring secure payment processing while maintaining a smooth user experience.',
    outcome: 'Successfully launched platform serving 10,000+ users with 99.9% uptime and processing $500K+ in transactions.'
  }, {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    fullDescription: 'A powerful task management solution designed for teams to collaborate effectively. Built with real-time synchronization using Firebase, allowing team members to see updates instantly.',
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      alt: 'Project thumbnail'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      alt: 'Task management interface'
    }],
    tags: ['TypeScript', 'React', 'Firebase', 'Redux'],
    codeUrl: '#',
    demoUrl: '#',
    features: ['Real-time task updates across all devices', 'Drag-and-drop task organization', 'Team collaboration and comments', 'Priority and deadline management', 'Progress tracking and analytics', 'Mobile-responsive design'],
    challenges: 'Managing complex state across multiple users while maintaining real-time synchronization without conflicts.',
    outcome: 'Adopted by 50+ teams, improving task completion rates by 35% and reducing project delays by 40%.'
  }, {
    title: 'AI Content Generator',
    description: 'An AI-powered application that generates content based on user prompts.',
    fullDescription: 'An innovative content generation tool leveraging OpenAI API to help users create high-quality content quickly. Features advanced prompt engineering and content refinement capabilities.',
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Project thumbnail'
    }, {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1677442135136-760c813dce95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'AI interface'
    }, {
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      alt: 'Demo video'
    }],
    tags: ['Python', 'React', 'OpenAI API', 'FastAPI'],
    codeUrl: '#',
    demoUrl: '#',
    features: ['Multiple content types (blog posts, social media, emails)', 'Customizable tone and style settings', 'Content history and versioning', 'Export to various formats', 'SEO optimization suggestions', 'Collaborative editing'],
    challenges: 'Optimizing API calls to balance response time and cost while maintaining high-quality output.',
    outcome: 'Generated 100,000+ pieces of content, saving users an average of 5 hours per week in content creation.'
  }];
  return <section id="projects" className="py-8">
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        A selection of projects I've worked on, from web applications to
        open-source contributions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => <ProjectCard key={index} project={project} onClick={() => setExpandedProject(index)} />)}
      </div>
      {expandedProject !== null && <ProjectModal project={projects[expandedProject]} onClose={() => setExpandedProject(null)} />}
    </section>;
}
function ProjectCard({
  project,
  onClick
}: {
  project: Project;
  onClick: () => void;
}) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex(prev => prev === project.media.length - 1 ? 0 : prev + 1);
  };
  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex(prev => prev === 0 ? project.media.length - 1 : prev - 1);
  };
  const currentMedia = project.media[currentMediaIndex];
  return <div className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer" onClick={onClick}>
      <div className="aspect-video w-full overflow-hidden relative">
        {currentMedia.type === 'image' ? <img src={currentMedia.url} alt={currentMedia.alt || 'Project media'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> : <video src={currentMedia.url} className="w-full h-full object-cover" aria-label={currentMedia.alt || 'Project video'} />}
        {project.media.length > 1 && <>
            <button onClick={prevMedia} className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors" aria-label="Previous media">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextMedia} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors" aria-label="Next media">
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {project.media.map((_, idx) => <span key={idx} className={`block h-1.5 w-1.5 rounded-full ${currentMediaIndex === idx ? 'bg-primary' : 'bg-background/80'}`} />)}
            </div>
          </>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => <span key={idx} className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-md text-xs">
              {tag}
            </span>)}
        </div>
        <div className="text-sm text-primary font-medium">
          Click to learn more →
        </div>
      </div>
    </div>;
}
function ProjectModal({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const nextMedia = () => {
    setCurrentMediaIndex(prev => prev === project.media.length - 1 ? 0 : prev + 1);
  };
  const prevMedia = () => {
    setCurrentMediaIndex(prev => prev === 0 ? project.media.length - 1 : prev - 1);
  };
  const currentMedia = project.media[currentMediaIndex];
  return <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto" onClick={onClose}>
      <div className="container mx-auto px-4 py-8 max-w-4xl" onClick={e => e.stopPropagation()}>
        <div className="bg-card rounded-lg border shadow-xl">
          <div className="flex justify-between items-start p-6 border-b">
            <div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => <span key={idx} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                    {tag}
                  </span>)}
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-accent transition-colors" aria-label="Close modal">
              <X size={24} />
            </button>
          </div>
          <div className="p-6">
            <div className="aspect-video w-full overflow-hidden relative rounded-lg mb-6">
              {currentMedia.type === 'image' ? <img src={currentMedia.url} alt={currentMedia.alt || 'Project media'} className="w-full h-full object-cover" /> : <video src={currentMedia.url} controls className="w-full h-full object-cover" aria-label={currentMedia.alt || 'Project video'} />}
              {project.media.length > 1 && <>
                  <button onClick={prevMedia} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 hover:bg-background transition-colors" aria-label="Previous media">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextMedia} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 hover:bg-background transition-colors" aria-label="Next media">
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.media.map((_, idx) => <span key={idx} className={`block h-2 w-2 rounded-full ${currentMediaIndex === idx ? 'bg-primary' : 'bg-background/80'}`} />)}
                  </div>
                </>}
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">
                  {project.fullDescription}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Technical Challenges
                </h3>
                <p className="text-muted-foreground">{project.challenges}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Outcome</h3>
                <p className="text-muted-foreground">{project.outcome}</p>
              </div>
              <div className="flex space-x-4 pt-4 border-t">
                <a href={project.codeUrl} className="flex items-center px-4 py-2 bg-accent hover:bg-accent/80 rounded-md transition-colors" aria-label="View project code on GitHub">
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
                <a href={project.demoUrl} className="flex items-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors" aria-label="View live demo">
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}