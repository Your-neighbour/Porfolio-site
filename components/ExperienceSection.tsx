import React from 'react'
import { Calendar, Building2, GraduationCap } from 'lucide-react'
type ExperienceItem = {
  type: 'work' | 'education'
  title: string
  organization: string
  period: string
  description: string[]
  tags: string[]
}
export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      type: 'work',
      title: 'Senior Software Engineer',
      organization: 'TechCorp Inc.',
      period: 'Jan 2021 - Present',
      description: [
        'Led the development of a microservices architecture that improved system scalability by 200%',
        'Mentored junior developers and conducted code reviews to maintain high code quality standards',
        'Implemented CI/CD pipelines reducing deployment time from days to minutes',
      ],
      tags: ['React', 'Node.js', 'AWS', 'Docker'],
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Innovate Solutions',
      period: 'Mar 2018 - Dec 2020',
      description: [
        'Developed and maintained client-facing web applications using React and TypeScript',
        'Built RESTful APIs using Express.js and integrated with various third-party services',
        'Optimized database queries resulting in a 40% improvement in application response time',
      ],
      tags: ['JavaScript', 'React', 'Express', 'MongoDB'],
    },
    {
      type: 'education',
      title: 'B.S. Computer Science',
      organization: 'Tech University',
      period: 'Sep 2014 - May 2018',
      description: [
        'Graduated with honors. Specialized in software engineering and distributed systems.',
      ],
      tags: [],
    },
  ]
  return (
    <section id="experience" className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  )
}
function ExperienceCard({ item }: { item: ExperienceItem }) {
  const Icon = item.type === 'work' ? Building2 : GraduationCap
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
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
          {item.description.map((desc, idx) => (
            <li
              key={idx}
              className="flex items-start text-sm text-muted-foreground"
            >
              <span className="text-primary mr-2 mt-1">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-accent/50 text-accent-foreground rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
