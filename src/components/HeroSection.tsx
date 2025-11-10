import React, { useEffect, useState } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
export function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const backgroundImages = [
    '/supergang.jpg',
    '/ubc.jpg',
    '/squam.jpg',
    '/strut.JPG',
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1,
      )
    }, 8000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])
  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Background Photos"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-80' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">Aaron Li</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              UBC Computer Engineering Student
            </h2>
            {/* Expandable Text Section */}
            <div
              className="cursor-pointer group mb-8"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
                <p className="text-lg mb-4">
                  I love bringing hardware and software together to build
                  practical tech.<br></br>
                  Always looking for new challenges that let me learn,
                  collaborate, and apply my engineering skills to real-world
                  problems.{' '}
                </p>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="space-y-4 text-base pt-2">
                    <p>
                      Currently, I'm an {' '}
                      <strong> Electrical Project Lead </strong>
                      for the <strong> UBC Supermileage </strong> engineering
                      design team, where I help design and implement electrical
                      systems for energy-efficient vehicles. This role has given
                      me the opportunity to lead projects, collaborate closely
                      with teammates, and translate ideas into working
                      prototypes. Beyond team projects, I also enjoy personal
                      projects that push my skills, like building a
                      GUI-controlled reflow oven or designing logic circuits
                      from scratch.
                    </p>
                    <p>
                      I'm motivated by solving real-world problems, learning new
                      technologies, and creating solutions that are both
                      functional and elegant. Whether it's developing embedded
                      software, designing circuits, or optimizing a system for
                      efficiency, I thrive on challenges that let me apply my
                      engineering skills in practical ways.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {isExpanded ? (
                    <>
                      <span>Less</span>
                      <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>More</span>
                      <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mb-8">
              <a
                href="www.linkedin.com/in/aaron-li-2771a4244"
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:aaronxpublic@gmail.com"
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
                aria-label="Email contact"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                C/C++
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                PCB Design
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                FPGA
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                Embedded Systems
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-xl">
              <img
                src="/IMG_6334.JPG"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
