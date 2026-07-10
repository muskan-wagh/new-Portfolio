export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Leadership {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  metrics: { value: string; label: string }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface FocusArea {
  area: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    title: "Purpose-Driven Engineering",
    description:
      "Every line of code should serve a clear purpose. I build with intention, choosing simplicity over complexity and clarity over cleverness.",
  },
  {
    title: "Continuous Growth",
    description:
      "Technology evolves rapidly. I stay at the edge through deliberate practice, open-source contribution, and shipping real products.",
  },
  {
    title: "Product Thinking",
    description:
      "Understanding the user is as important as understanding the stack. I design solutions that solve real problems, not just technical challenges.",
  },
  {
    title: "Collaborative Craft",
    description:
      "Great software emerges from diverse perspectives. I champion clean communication, knowledge sharing, and building in the open.",
  },
];

export const currentFocus: FocusArea[] = [
  {
    area: "AI Engineering",
    description:
      "Building production systems with LLMs, RAG pipelines, and agentic workflows. Exploring how AI transforms product experiences.",
  },
  {
    area: "Full-Stack Development",
    description:
      "Shipping end-to-end features across the stack — from type-safe APIs to responsive interfaces with modern frameworks.",
  },
  {
    area: "Open Source",
    description:
      "Contributing to projects that make AI and web development more accessible. Building tools for the developer community.",
  },
];

export const projects: Project[] = [
  {
    id: "campus-connect",
    title: "Campus Connect",
    description:
      "A centralized platform for students to discover clubs, events, and campus activities.",
    problem:
      "Students at large universities struggle to discover campus activities. Information is scattered across WhatsApp groups, notice boards, and word-of-mouth.",
    solution:
      "Built a centralized discovery platform with personalized feeds, event calendars, and club directories. Students can follow interests and receive tailored recommendations.",
    impact:
      "Serves as a central hub for campus engagement, reducing informational friction and helping students find their community.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Muskan-wagh/Campus-Connect",
    demo: "https://campus-connect-seven-beta.vercel.app/",
  },
  {
    id: "estate",
    title: "Estate",
    description:
      "A real estate marketplace for buying, selling, and renting properties.",
    problem:
      "Property search platforms are cluttered and overwhelming. Users need a clean, intuitive way to browse and filter listings without information overload.",
    solution:
      "Designed a minimalist property marketplace with advanced search filters, interactive listings, and a streamlined browsing experience focused on what matters.",
    impact:
      "Delivered a production-grade marketplace that demonstrates full-stack capability with clean architecture and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Muskan-wagh/Estate-app.git",
    demo: "https://estate-app-drab.vercel.app/",
  },
  {
    id: "dev-collab",
    title: "DEV Collab",
    description:
      "A full-stack collaboration platform where developers connect, manage projects, and share ideas.",
    problem:
      "Developers lack a dedicated space to find collaborators, share projects, and manage team work. Existing tools are fragmented across multiple platforms.",
    solution:
      "Created an all-in-one collaboration platform with real-time project management, team discovery, and secure authentication. Built with a scalable Node.js backend.",
    impact:
      "Demonstrates full-stack proficiency across the entire development lifecycle — from database design to deployed product.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Muskan-wagh/DEV_collab.git",
    demo: "https://devcollab-nu.vercel.app/",
  },
  {
    id: "api-tester",
    title: "API Tester",
    description:
      "A web-based API testing tool for sending requests and inspecting responses.",
    problem:
      "API development and debugging often require switching between Postman and the browser. Developers need a lightweight, in-browser alternative.",
    solution:
      "Built a full-featured API testing client directly in the browser with support for multiple HTTP methods, custom headers, and response inspection.",
    impact:
      "Provides a practical tool that streamlines the API development workflow, reducing context switching for developers.",
    tech: ["React", "Next.js", "Axios", "Tailwind CSS"],
    github: "https://github.com/Muskan-wagh/API-Tester-webapp.git",
    demo: "https://api-tester-webapp.vercel.app/",
  },
];

export const experiences: Experience[] = [
  {
    id: "google-ambassador",
    role: "Google Student Ambassador",
    company: "Google for Gemini",
    period: "2025 — 2026",
    description:
      "Representing Google AI initiatives on campus, promoting Gemini and AI tools, and facilitating AI-focused learning opportunities for students. Organized workshops and demo sessions to introduce students to modern AI workflows.",
  },
  {
    id: "gdg-sponsorship",
    role: "Sponsorship Co-Lead",
    company: "GDG on Campus SUI Indore",
    period: "2024 — 2025",
    description:
      "Leading sponsorship initiatives, managing partner relations, and securing resources for community events and technical workshops. Helped grow the chapter from founding to 10+ events.",
  },
  {
    id: "mycaptain",
    role: "Campus Ambassador",
    company: "MyCaptain",
    period: "2025",
    description:
      "Led marketing initiatives and student community engagement programs. Drove outreach campaigns and onboarded new students to MyCaptain's learning platform.",
  },
  {
    id: "pregrad",
    role: "Campus Representative",
    company: "Pregrad",
    period: "2025",
    description:
      "Represented Pregrad as a Campus Ambassador Intern, focusing on student outreach and career acceleration initiatives. Facilitated connections between students and professional development resources.",
  },
  {
    id: "fullstack-dsa",
    role: "Full Stack Development & DSA",
    company: "Self-Directed Learning",
    period: "Ongoing",
    description:
      "Continuously mastering full-stack development and strengthening Data Structures & Algorithms proficiency through consistent practice and real-world project building.",
  },
];

export const leadership: Leadership[] = [
  {
    id: "gdg-founding",
    title: "Founding Team Member",
    organization: "GDG on Campus SUI Indore",
    period: "2024 — 2025",
    description:
      "Co-founded the inaugural GDG on Campus chapter at SAGE University Indore. Built the community from the ground up, organized technical events, and fostered a culture of learning and collaboration.",
    metrics: [
      { value: "10+", label: "Events" },
      { value: "500+", label: "Students" },
      { value: "50+", label: "Team Members" },
    ],
  },
  {
    id: "google-ambassador-lead",
    title: "Google Student Ambassador",
    organization: "Google for Gemini",
    period: "2025 — 2026",
    description:
      "Selected to represent Google AI on campus. Led AI awareness initiatives, conducted hands-on workshops on Gemini and LLM tools, and mentored students exploring AI engineering.",
    metrics: [
      { value: "5+", label: "Workshops" },
      { value: "300+", label: "Mentored" },
    ],
  },
  {
    id: "mycaptain-lead",
    title: "Campus Ambassador",
    organization: "MyCaptain",
    period: "2025",
    description:
      "Led campus-wide marketing campaigns and community engagement strategies. Coordinated with student groups to drive participation in skill-development programs.",
    metrics: [
      { value: "3+", label: "Campaigns" },
      { value: "200+", label: "Engaged" },
    ],
  },
  {
    id: "pregrad-lead",
    title: "Campus Representative",
    organization: "Pregrad",
    period: "2025",
    description:
      "Drove career acceleration initiatives on campus, connecting students with internship opportunities and professional development resources through targeted outreach.",
    metrics: [
      { value: "100+", label: "Connected" },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI Engineering",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "Machine Learning",
    ],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Vercel", "OpenAI API"],
  },
];

export const stats: Stat[] = [
  { value: "10+", label: "Projects" },
  { value: "500+", label: "Students Impacted" },
  { value: "5+", label: "Leadership Roles" },
  { value: "100+", label: "Contributions" },
];

export const siteConfig = {
  name: "Muskan Wagh",
  title: "Muskan Wagh — AI Engineer & Full Stack Developer",
  description:
    "Fourth-year Computer Science Engineering student building intelligent digital products. AI engineering, full-stack development, and product thinking.",
  bio: "I'm a Computer Science Engineering student and product-minded engineer who builds at the intersection of AI and full-stack development. I believe great software emerges from understanding both the user and the system — and I ship products that prove it.",
  approach:
    "I start with the problem, not the technology. Every project begins with understanding who it serves and what it needs to accomplish. From there, I architect solutions that are scalable, maintainable, and a pleasure to use.",
  url: "https://muskanwagh.vercel.app",
  email: "muskanwagh1608@gmail.com",
  location: "Indore, India",
  social: {
    github: "https://github.com/Muskan-wagh",
    linkedin: "https://www.linkedin.com/in/muskan-wagh-22b2b5325",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ],
};
