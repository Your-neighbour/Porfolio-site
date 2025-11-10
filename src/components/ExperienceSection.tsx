import React from 'react';
import { Calendar, Building2, GraduationCap } from 'lucide-react';
type ExperienceItem = {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string[];
  tags: string[];
};
export function ExperienceSection() {
  const experiences: ExperienceItem[] = [{
    type: 'work',
    title: 'Electrical Project Lead',
    organization: 'UBC Supermileage',
    period: 'September 2024 - Present',
    description: ['Leading electrical systems design for Urban electric vehicle and hydrogen fuel cell car', 'Designed low power distribution system with custom PCB for 12V power distribution', 'Developed Arduino firmware in C for throttle control and H2 sensor data interpretation', 'Built GUI-based dynamometer interface using C++ on Raspberry Pi Pico with touchscreen display'],
    tags: ['C/C++', 'PCB Design', 'Arduino', 'Raspberry Pi', 'CAN']
  }, {
    type: 'education',
    title: 'Bachelor of Applied Science - Computer Engineering',
    organization: 'University of British Columbia',
    period: 'Expected May 2027',
    description: ['3rd year Computer Engineering student focusing on embedded systems and hardware design', 'Technical skills: Python, C/C++, System Verilog, ARM Assembly', 'Tools: LTSpice, KiCAD, Git, Quartus, ModelSim'],
    tags: ['Computer Engineering', 'Embedded Systems', 'Hardware Design']
  }];
  return <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((item, index) => <ExperienceCard key={index} item={item} />)}
      </div>
    </div>;
}
function ExperienceCard({
  item
}: {
  item: ExperienceItem;
}) {
  const Icon = item.type === 'work' ? Building2 : GraduationCap;
  return <div className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-accent/50 group-hover:bg-primary/10 transition-colors">
            <Icon size={24} className="text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-primary font-medium mb-3">{item.organization}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Calendar size={14} className="mr-2" />
          <span>{item.period}</span>
        </div>
        <ul className="space-y-2 mb-4">
          {item.description.map((desc, idx) => <li key={idx} className="flex items-start text-sm text-muted-foreground">
              <span className="text-primary mr-2 mt-1">•</span>
              <span>{desc}</span>
            </li>)}
        </ul>
        {item.tags.length > 0 && <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => <span key={idx} className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-md text-xs">
                {tag}
              </span>)}
          </div>}
      </div>
    </div>;
}