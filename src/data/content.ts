// All site copy lives here so content updates don't require touching layout code.

export const profile = {
  name: 'Aaron Li',
  headline: 'Computer Engineering Student, Hardware & PCB Design',
  school: 'University of British Columbia',
  email: 'aaronxpublic@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aaron-li-2771a4244',
  availability: 'Seeking a 4–8 month co-op starting January 2027',
  intro:
    'I design and build hardware: power electronics, PCBs and the firmware that ties them together. Most of my time goes into UBC Supermileage, where I co-lead the Power Systems division.',
  about: [
    'I’m a Computer Engineering co-op student at UBC who likes the part of engineering where a design meets the bench. My flagship project is the low-voltage power distribution board that helped UBC Supermileage complete its first-ever run at Shell Eco-marathon Americas in April 2026.',
    'I spent eight months at Phasor Engineering in Calgary as a substations electrical co-op, building engineering tools, including a rigid bus design template that is now being rolled out on client projects. Back on campus, I co-lead Supermileage’s Power Systems division and serve as one of ECESS’s Vice Presidents of External Relations, connecting UBC’s ECE students with industry.',
    'Outside of team work I keep a couple of personal hardware projects going, currently a programmable DC electronic load and a PID-controlled reflow oven, because the fastest way I learn is by building something and finding out where my assumptions break.',
  ],
  focus: ['PCB Design', 'Power Electronics', 'DC-DC Converters', 'Embedded C/C++', 'CAN Bus', 'KiCad'],
};

export type Role = { title: string; period: string };

export type ExperienceItem = {
  id: string;
  kind: 'work' | 'team' | 'leadership' | 'education';
  organization: string;
  location?: string;
  roles: Role[];
  summary?: string;
  highlights: { heading?: string; points: string[] }[];
  tags: string[];
  image?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: 'supermileage',
    kind: 'team',
    organization: 'UBC Supermileage',
    location: 'Vancouver, BC',
    roles: [
      { title: 'Power Systems Division Co-Lead', period: 'Jul 2026 – Present' },
      { title: 'Electrical Project Lead', period: 'Sep 2024 – Jul 2026' },
    ],
    summary:
      'Student design team building ultra-efficient battery-electric and hydrogen fuel-cell vehicles for Shell Eco-marathon.',
    highlights: [
      {
        heading: 'Division leadership',
        points: [
          'Co-lead a 6-member Power Systems division: task assignment, design reviews, onboarding and recruitment',
          'Own budgeting and timelines for three concurrent hardware projects: a revised 48V BLDC motor controller, a custom-assembled 48V battery pack, and a new high-power 24V buck-boost DC-DC converter',
        ],
      },
      {
        heading: 'Hardware & firmware',
        points: [
          'Designed, assembled and integrated the vehicle’s low-voltage power distribution PCB, enabling the team’s first-ever successful run at Shell Eco-marathon Americas (April 2026): 49 km/kWh, 9th of 14 battery-electric urban concept teams',
          'Wrote CAN-based throttle and hydrogen-sensor firmware for the fuel-cell vehicle, including a hardware shutdown on elevated H₂ concentration',
        ],
      },
    ],
    tags: ['PCB Design', 'Power Electronics', 'CAN', 'C/C++', 'Team Leadership'],
    image: 'img/supergang.webp',
  },
  {
    id: 'ecess',
    kind: 'leadership',
    organization: 'UBC Electrical & Computer Engineering Student Society (ECESS)',
    location: 'Vancouver, BC',
    roles: [{ title: 'Vice President, External Relations', period: '2026 – Present' }],
    summary:
      'One of the Vice Presidents of External Relations for the student society representing UBC’s electrical and computer engineering students, acting as the society’s link to industry.',
    highlights: [
      {
        points: [
          'Lead industry sponsorship outreach, building relationships with companies that support ECE student programming',
          'Handle employer outreach for the ECE career fair',
          'Organize company tours that give students a first-hand look at engineering work beyond the classroom',
        ],
      },
    ],
    tags: ['Industry Relations', 'Sponsorship', 'Career Fair', 'Event Planning'],
  },
  {
    id: 'phasor',
    kind: 'work',
    organization: 'Phasor Engineering Inc.',
    location: 'Calgary, AB',
    roles: [{ title: 'Substations Electrical Co-op Student', period: 'Jan 2026 – Aug 2026' }],
    summary: 'Electrical engineering consultancy focused on substation and utility-scale power projects.',
    highlights: [
      {
        heading: 'Substation rigid bus design template',
        points: [
          'Built a Mathcad design template for substation rigid bus covering ampacity, short-circuit forces, conductor deflection and allowable span length',
          'Translated design equations and standards into a repeatable tool, now being rolled out on client projects to cut deliverable turnaround',
          'Presented the finished tool to a team of 15 engineers, walking through design decisions and technical concerns',
        ],
      },
      {
        heading: 'BESS station material estimate calculator',
        points: [
          'Developed an Excel VBA tool automating material takeoffs for SolBank 3.0 battery energy storage deployments: DC/AC cabling, connectors, grounding and fiber-optic fire-protection cabling',
          'Learned BESS architecture (power conversion systems, DC-DC converters, augmented block layouts) so estimates reflected real design configurations',
        ],
      },
    ],
    tags: ['Power Systems', 'Mathcad', 'Excel VBA', 'BESS', 'Substations'],
  },
  {
    id: 'ubc',
    kind: 'education',
    organization: 'University of British Columbia',
    location: 'Vancouver, BC',
    roles: [{ title: 'BASc, Computer Engineering (Co-op)', period: 'Expected 2028' }],
    highlights: [
      {
        points: [
          'Coursework spanning circuits, digital systems, microcomputers and computer architecture',
          'Class projects include an autonomous F1TENTH race car (ROS2, PyTorch) and a SystemVerilog RISC processor',
        ],
      },
    ],
    tags: ['Computer Engineering', 'Co-op Program'],
  },
];

export type MediaItem = { url: string; alt: string };

export type Project = {
  id: string;
  title: string;
  context: string; // e.g. "UBC Supermileage", "Personal", "Class project"
  period: string;
  status: 'Completed' | 'In progress' | 'Competition-proven' | 'Coursework' | 'Discontinued';
  summary: string;
  description: string;
  highlights: string[];
  lessons?: string;
  result?: string;
  media: MediaItem[];
  fallbackIcon?: 'load' | 'car' | 'chip';
  tags: string[];
  links?: { label: string; url: string }[];
};

export const featuredProject: Project = {
  id: 'lpd',
  title: 'Low-Voltage Power Distribution PCB',
  context: 'UBC Supermileage',
  period: 'Raced April 2026',
  status: 'Competition-proven',
  summary:
    'A 2-layer board that steps the main battery bus down to 12V for three vehicle subsystems. It replaced a connector system that kept failing under vibration.',
  description:
    'The urban battery-electric vehicle’s old low-voltage distribution used non-automotive connectors that failed after repeated use and vibration. I redesigned the system from the converter up: selecting the DC-DC converter, an automotive-grade connector system, wiring and noise-suppression components, then laying out, assembling and bench-testing the board before integrating it into the car.',
  highlights: [
    'Rated for 60V input and 13A continuous output on a 12V rail',
    'Three 12V outputs feeding front accessories, rear accessories and telemetry',
    'Automotive-grade connectors chosen specifically to survive vibration',
    'Designed in KiCad, hand-assembled and bench-tested before vehicle integration',
  ],
  result:
    'Enabled the team’s first-ever successful run at Shell Eco-marathon Americas (April 2026): 49 km/kWh, placing 9th of 14 battery-electric urban concept teams.',
  media: [
    { url: 'img/lpd-render.webp', alt: '3D render of the power distribution PCB' },
    { url: 'img/lpd-schem.webp', alt: 'Power distribution schematic, converter stage' },
    { url: 'img/lpd-schem2.webp', alt: 'Power distribution schematic, output stage' },
  ],
  tags: ['KiCad', 'PCB Design', 'DC-DC', 'Automotive Connectors', 'Bring-up'],
};

export const projects: Project[] = [
  {
    id: 'dc-load',
    title: 'Programmable DC Electronic Load',
    context: 'Personal',
    period: 'Feb 2026 – Present',
    status: 'In progress',
    summary:
      'A 1000W / 25A electronic load built on paralleled MOSFETs in their linear region. The analog prototype is verified to 200W.',
    description:
      'An electronic load is one of the most useful pieces of bench equipment for testing power supplies and converters, and designing one forces you to deal with control-loop stability, current sharing between devices and serious heat. I designed the full 1000W system, then built an analog prototype to validate the approach before committing to the complete build.',
    highlights: [
      'Designed for 1000W / 25A using paralleled MOSFETs operating in the linear region',
      'Analyzed control-loop stability and current sharing across the parallel devices',
      'Built an analog-controlled prototype (potentiometer-set gate drive) verified electrically and thermally up to 200W',
    ],
    lessons:
      'Thermal characterization showed a single CPU cooler couldn’t dissipate more than about 200W at safe MOSFET temperatures. That invalidated my original thermal assumptions for a cheap, compact build, and the cooling approach is now being redesigned before the full system is built.',
    media: [],
    fallbackIcon: 'load',
    tags: ['Power Electronics', 'MOSFETs', 'Thermal Design', 'Control Loops'],
  },
  {
    id: 'reflow',
    title: 'PID-Controlled Reflow Oven',
    context: 'Personal',
    period: 'Jul 2025 – Present',
    status: 'In progress',
    summary:
      'Converting a toaster oven into a reflow oven for PCB assembly, with an ESP32, thermocouple feedback and a solid-state relay.',
    description:
      'I wanted an affordable way to reflow my own boards, so I’m converting a toaster oven into a controlled reflow oven. An ESP32 reads a thermocouple mounted inside the oven and drives the heating elements through a solid-state relay under PID control.',
    highlights: [
      'PID loop tracks reflow temperature profiles within about ±5°C',
      'Custom-mounted thermocouple for in-chamber temperature feedback',
      'Solid-state relay switching of the heating elements',
      'GUI for profile selection and live monitoring (in development)',
    ],
    lessons:
      'Testing showed the original oven didn’t have enough heater power to reach peak reflow temperatures, so the system is being migrated to a higher-power oven.',
    media: [
      { url: 'img/reflow-heating.webp', alt: 'Reflow oven heating elements on' },
      { url: 'img/reflow-build.webp', alt: 'Reflow oven controller wiring on the bench' },
    ],
    tags: ['ESP32', 'PID Control', 'C/C++', 'Thermocouple', 'SSR'],
  },
  {
    id: 'h2',
    title: 'Fuel-Cell Vehicle Throttle & H₂ Sensor Firmware',
    context: 'UBC Supermileage',
    period: '2024 – 2025',
    status: 'Completed',
    summary:
      'Firmware that reads throttle and hydrogen-sensor data over CAN and drives the motor controller and fuel-cell control board.',
    description:
      'For the team’s hydrogen fuel-cell vehicle, I wrote the firmware that sits between the driver’s throttle, the hydrogen sensor and the vehicle’s control boards. An Arduino Nano Every talks to the CAN bus through an SPI-connected MCP2515 controller.',
    highlights: [
      'C/C++ firmware on an Arduino Nano Every with an MCP2515 CAN controller over SPI',
      'Reads throttle position and hydrogen-sensor data from the CAN bus',
      'Generates control signals for the motor controller and fuel-cell control board',
      'Asserts a hardware shutdown signal on elevated H₂ concentration',
    ],
    result: 'Bench-verified and integrated into the hydrogen fuel-cell vehicle.',
    media: [
      { url: 'img/h2-bench.webp', alt: 'Throttle and H2 sensor firmware bench setup' },
      { url: 'img/h2-code.webp', alt: 'Throttle firmware source code' },
    ],
    tags: ['C/C++', 'CAN Bus', 'SPI', 'MCP2515', 'Arduino'],
  },
  {
    id: 'f1tenth',
    title: 'Autonomous Race Car',
    context: 'Class project',
    period: 'Sep – Dec 2025',
    status: 'Completed',
    summary:
      'Driving and safety algorithms for a 1/10-scale F1TENTH car using camera and LiDAR input on ROS2.',
    description:
      'A team class project on the F1TENTH platform. We developed the driving stack in Python on ROS2, combining classical obstacle avoidance with a learned driving policy, all wrapped in a safety layer that could override the car.',
    highlights: [
      'Python on ROS2 and the F1TENTH stack, using camera and LiDAR input',
      'Obstacle avoidance with a fail-safe emergency braking layer to prevent collisions',
      'Trained a PyTorch neural network for driving, automating training-data generation and inference preprocessing',
    ],
    media: [],
    fallbackIcon: 'car',
    tags: ['Python', 'ROS2', 'PyTorch', 'LiDAR', 'Linux'],
  },
];

export const earlierProjects: Project[] = [
  {
    id: 'risc',
    title: 'Simple RISC Processor',
    context: 'Coursework',
    period: 'Coursework',
    status: 'Coursework',
    summary: 'A SystemVerilog CPU that executes a simple RISC instruction set on an FPGA.',
    description:
      'Designed the datapath and state-machine controller for a RISC processor that loads and stores data, executes instructions and handles branches and function calls written in assembly. Verified with both RTL and gate-level testbenches, then ran it on an FPGA board.',
    highlights: [
      'Datapath and FSM controller in SystemVerilog',
      'RTL and gate-level testbenches',
      'Runs assembly programs on an FPGA',
    ],
    media: [
      { url: 'img/risc-datapath.webp', alt: 'RISC processor datapath' },
      { url: 'img/risc-fsm.webp', alt: 'Controller state machine' },
      { url: 'img/risc-fsm-ns.webp', alt: 'Next-state logic' },
    ],
    tags: ['SystemVerilog', 'Quartus', 'ModelSim', 'FPGA'],
  },
  {
    id: 'dyno',
    title: 'Dynamometer Touchscreen Interface',
    context: 'UBC Supermileage',
    period: '2024 – 2025',
    status: 'Discontinued',
    summary: 'C++ touchscreen GUI for a Raspberry Pi Pico-based dynamometer control board.',
    description:
      'Wrote C++ to render a touchscreen GUI on a 3.2" display for the team’s Pico-based dynamometer control board. The dyno project was later discontinued by the team.',
    highlights: ['C++ on Raspberry Pi Pico', '3.2" touchscreen GUI rendering'],
    media: [{ url: 'img/dyno-code.webp', alt: 'Dynamometer GUI source code' }],
    tags: ['C++', 'Raspberry Pi Pico', 'GUI'],
  },
  {
    id: '7seg',
    title: 'Binary to Seven-Segment Decoder',
    context: 'Personal',
    period: 'Jul – Aug 2024',
    status: 'Completed',
    summary: 'Discrete logic decoder designed with Karnaugh maps and simulated in LTspice.',
    description:
      'An early personal project in digital logic. I used Karnaugh maps to derive and simplify the boolean expressions, then built and simulated the full circuit in LTspice.',
    highlights: ['K-map logic minimization', 'Full circuit simulation in LTspice'],
    media: [
      { url: 'img/7seg-ltspice.webp', alt: 'LTspice simulation of the decoder' },
      { url: 'img/7seg-pinout.webp', alt: 'Seven-segment display pinout' },
    ],
    tags: ['Digital Logic', 'LTspice'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Hardware',
    items: [
      'PCB design, assembly & bring-up',
      'Schematic capture',
      'DC-DC converters',
      'Power distribution',
      'MOSFET thermal design',
      'System integration',
      'CAN, SPI',
    ],
  },
  {
    group: 'Lab',
    items: ['Oscilloscope', 'Bench power supplies', 'Electronic loads', 'SMD hand & reflow soldering'],
  },
  {
    group: 'Tools',
    items: ['KiCad', 'LTspice', 'STM32CubeMX', 'Mathcad', 'Excel VBA', 'Git', 'Linux', 'ROS2', 'PyTorch'],
  },
  { group: 'Languages', items: ['C/C++', 'Python', 'VBA', 'Java', 'SystemVerilog', 'ARM Assembly'] },
  { group: 'Platforms', items: ['ESP32', 'Arduino', 'Raspberry Pi Pico', 'STM32'] },
];

export const outsideTheLab: MediaItem[] = [
  { url: 'img/squam.webp', alt: 'Bouldering in Squamish' },
  { url: 'img/strut.webp', alt: 'Out exploring' },
  { url: 'img/ubc.webp', alt: 'UBC campus from above' },
];
