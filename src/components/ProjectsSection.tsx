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
  codeUrl?: string;
  demoUrl?: string;
  features: string[];
  challenges: string;
  outcome?: string;
};
export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects: Project[] = [{
    title: 'Custom Reflow Oven',
    description: 'Converting a toaster oven into a GUI-controlled reflow oven for PCB assembly with PID temperature control.',
    fullDescription: 'A personal project to create a user-friendly reflow oven for assembling PCBs. Features custom-mounted thermocouple for temperature monitoring and ESP32-based PID control loop with solid state relay for precise heating element control.',
    media: [{
      type: 'image',
      url: '/projects/Toaster Reflow Oven/heating.jpg',
      alt: 'Reflow oven project'
    },
    {
      type: 'image',
      url: '/projects/Toaster Reflow Oven/messy.jpg',
      alt: 'Reflow oven project'
    }
  ],
    tags: ['ESP32', 'PID Control', 'PCB Assembly', 'Embedded Systems'],
    // codeUrl: '#',
    // demoUrl: '#',
    features: ['Custom mounted thermocouple for internal temperature monitoring', 'PID control loop using ESP32 microcontroller', 'Solid state relay for precise heating element control', 'User-friendly GUI for easy configuration', 'Configurable wave profiles for different PCB requirements', 'Real-time temperature monitoring and display'],
    challenges: 'Implementing accurate PID control to maintain precise temperature profiles required for proper solder reflow, while ensuring safety and reliability.',
    outcome: 'Currently in development (July 2025 - Present). Aiming to create a cost-effective solution for PCB assembly.'
  }, {
    title: 'Low Power Distribution Board',
    description: 'Custom PCB design for 12V power distribution system across UBC Supermileage Urban electric vehicle.',
    fullDescription: 'Designed a comprehensive power distribution system for the UBC Supermileage electric vehicle. The project involved selecting appropriate DC-DC converters, designing connector systems, planning wiring layouts, and implementing electrical noise reduction.',
    media: [{
      type: 'image',
      url: '/projects/Urban LPD/render.jpg',
      alt: 'Low Power Distribution Board'
    },
    {
      type: 'image',
      url: '/projects/Urban LPD/schem.png',
      alt: 'Low Power Distribution Board'
    },
    {
      type: 'image',
      url: '/projects/Urban LPD/schem2.png',
      alt: 'Low Power Distribution Board'
    }],
    tags: ['PCB Design', 'KiCAD', 'Power Systems', 'Electric Vehicle'],
    // codeUrl: '#',
    // demoUrl: '#',
    features: ['Custom PCB design for power distribution', 'DC-DC converter selection and integration', 'Optimized connector system design', 'Electrical noise reduction implementation', 'Efficient wiring layout for 12V distribution', 'Integration with vehicle electrical systems'],
    challenges: 'Designing a reliable power distribution system that minimizes electrical noise while maintaining efficiency across multiple vehicle subsystems.',
    outcome: 'Successfully designed and assembled custom PCB supporting the distribution system for UBC Supermileage electric vehicle.'
  }, {
    title: 'Hydrogen Fuel Cell Car Control And Safety System',
    description: 'Arduino-based firmware for throttle control and H2 sensor monitoring with CAN communication.',
    fullDescription: 'Developed embedded C firmware for the UBC Supermileage hydrogen fuel cell vehicle. The system interprets throttle and H2 sensor data, then outputs appropriate control signals to the motor controller and fuel cell control board.',
    media: [{
      type: 'image',
      url: '/projects/H2 Throttle/jank.jpg',
      alt: 'Fuel cell control system'
    },
   {
      type: 'image',
      url: '/projects/H2 Throttle/throttle.png',
      alt: 'Fuel cell control system'
    }],
    tags: ['C', 'Arduino', 'CAN Bus', 'Embedded Systems', 'Fuel Cell'],
    // codeUrl: '#',
    // demoUrl: '#',
    features: ['Real-time throttle data interpretation', 'H2 sensor data processing and monitoring', 'Control signal generation for motor controller', 'CAN communication module integration', 'Arduino Nano Every microcontroller implementation', 'Safety protocols for hydrogen handling'],
    challenges: 'Ensuring reliable real-time communication between sensors, controllers, and the fuel cell system while maintaining safety standards.',
    outcome: 'Successfully implemented firmware enabling smooth throttle control and hydrogen monitoring for the fuel cell vehicle.'
  }, {
    title: 'Dynamometer Interface',
    description: 'C++ GUI application for custom dynamometer control board with Raspberry Pi Pico and touchscreen display.',
    fullDescription: 'Built a comprehensive GUI interface for controlling and monitoring a custom dynamometer. The system uses a Raspberry Pi Pico microcontroller with a 3.2" touchscreen display to provide an intuitive user experience.',
    media: [{
      type: 'image',
      url: '/projects/dynoGUI/code.png',
      alt: 'Dynamometer interface'
    }],
    tags: ['C++', 'Raspberry Pi Pico', 'GUI', 'Touchscreen'],
    // codeUrl: '#',
    // demoUrl: '#',
    features: ['Custom GUI built in C++', 'Real-time data display and monitoring', 'Touch-based control interface', 'Raspberry Pi Pico microcontroller integration', '3.2" touchscreen display support', 'Dynamometer control and configuration'],
    challenges: 'Designing an intuitive touch-based interface while managing real-time data processing on a resource-constrained microcontroller.',
    outcome: 'Created a user-friendly control interface for the dynamometer, improving testing efficiency for the UBC Supermileage team.'
  }, {
    title: 'Binary to Seven Segment Display Decoder',
    description: 'Logical circuit design to decode binary input into seven-segment display output, simulated in LTSpice.',
    fullDescription: 'A personal project focused on digital logic design. Used Karnaugh maps to create and simplify boolean expressions before designing and simulating the circuit in LTSpice.',
    media: [{
      type: 'image',
      url: '/projects/Binary27seg/ltspice.png',
      alt: '7 Segment Display Decoder'
    },
    {
      type: 'image',
      url: '/projects/Binary27seg/pinout.jpg',
      alt: '7 Segment Display Decoder'
    }
  ],
    tags: ['Digital Logic', 'LTSpice', 'Circuit Design', 'Boolean Algebra'],
    // codeUrl: '#',
    // demoUrl: '#',
    features: ['Binary to seven-segment conversion logic', 'Karnaugh map optimization', 'Boolean expression simplification', 'Complete circuit design', 'LTSpice simulation and testing', 'Functional verification'],
    challenges: 'Optimizing the boolean logic to minimize component count while maintaining reliable operation.',
    outcome: 'Successfully designed and verified a working binary to seven-segment decoder circuit (July - August 2024).'
  }, {
    title: 'Simple RISC Processor',
    description: 'Developed a functional System Verilog CPU capable of executing simple RISC instructions on an FPGA',
    fullDescription: 'Developed the datapath and statemachine controller for a RISC processor that could load and store data, execute instructions, and interpret branches and functions in assembly. Made and used both RTL and gate level testbenches to verify functionality on an FPGA board.',
    media: [{
      type: 'image',
      url: '/projects/RISC/datapath.png',
      alt: 'RISC Processor'
    },
  {
      type: 'image',
      url: '/projects/RISC/fsm.png',
      alt: 'RISC Processor'
  },
  {
      type: 'image',
      url: '/projects/RISC/fsm_ns.png',
      alt: 'RISC Processor'
  }
  ],
    tags: ['System Verilog', 'Quartus + ModelSim', 'FPGA'],
    // codeUrl: '#',
    // demoUrl: '#',
    features: ['Turing-complete instruction set', 'Runs ARM Assembly programs', 'Real-time FPGA execution'],
    challenges: 'Developing the complex statemachine module and the associated verification considerations for comprehensive testing.',
  }];
  return <div className="py-8">
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        A collection of personal and team projects spanning embedded systems,
        PCB design, and software development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => <ProjectCard key={index} project={project} onClick={() => setExpandedProject(index)} />)}
      </div>
      {expandedProject !== null && <ProjectModal project={projects[expandedProject]} onClose={() => setExpandedProject(null)} />}
    </div>;
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
              {currentMedia.type === 'image' ? <img src={currentMedia.url} alt={currentMedia.alt || 'Project media' } loading="eager" className="w-full h-full object-cover" /> : <video src={currentMedia.url} controls className="w-full h-full object-cover" aria-label={currentMedia.alt || 'Project video'} />}
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
                {project.outcome && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Outcome</h3>
                    <p className="text-muted-foreground">{project.outcome}</p>
                  </div>
                )}
              {(project.codeUrl || project.demoUrl) && (
                <div className="flex flex-wrap gap-4 pt-4 border-t">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-accent hover:bg-accent/80 rounded-md transition-colors"
                      aria-label="View project code on GitHub"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>;
}