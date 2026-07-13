export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  challenges: string[];
  results: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  github: string;
  demo: string;
  status: "Live" | "In Development" | "Archived";
  timeline: string;
}

export interface JourneyItem {
  id: string;
  role: string;
  organization: string;
  year: string;
  description: string;
  achievements: string[];
  tech?: string[];
  type: "work" | "community" | "build" | "learning";
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
  description?: string;
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

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google for Gemini",
    year: "2024",
    skills: ["AI Fundamentals", "LLM Applications", "Prompt Engineering"],
    credentialUrl: "https://developers.google.com/certificate/artificial-intelligence",
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    skills: ["Cloud Architecture", "AWS Services", "System Design"],
    credentialUrl: "https://www.credly.com/badges/xyz",
  },
  {
    id: "fullstack-react",
    title: "Full Stack React",
    issuer: "Coursera",
    year: "2023",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    credentialUrl: "https://www.coursera.org/verify/abc123",
  },
];

export const projects: Project[] = [
  {
    id: "campus-connect",
    title: "Campus Connect",
    category: "Full-Stack Platform",
    role: "Solo Engineer",
    overview: "A centralized campus engagement hub connecting students with clubs, events, and communities through personalized discovery.",
    problem:
      "Students at large universities struggle to discover campus activities. Information is scattered across WhatsApp groups, notice boards, and word-of-mouth — creating a fractured experience that leaves many students disconnected from their own community.",
    solution:
      "Built a centralized discovery platform with personalized feeds, event calendars, and club directories. Implemented a recommendation engine that learns user preferences through implicit feedback and surfaces relevant opportunities without requiring onboarding.",
    architecture:
      "Next.js 14 frontend with PostgreSQL for persistence. Recommendation engine uses collaborative filtering on implicit signals — views, RSVPs, and follows. Serverless API routes handle real-time feed generation with sub-100ms response times.",
    keyFeatures: [
      "Personalized recommendation engine using implicit feedback",
      "Real-time event calendar with RSVP management",
      "Club directory with membership management",
      "Activity feed with social interactions",
    ],
    challenges: [
      "Optimizing PostgreSQL queries for sub-50ms feed generation across 10K+ users",
      "Designing a cold-start recommendation algorithm without historical user data",
    ],
    results:
      "Serves as the primary campus engagement hub. Achieved 40%+ weekly active user retention. Reduced informational friction for 500+ students discovering campus activities.",
    metrics: [
      { value: "500+", label: "Active Students" },
      { value: "40%", label: "Weekly Retention" },
      { value: "Sub-100ms", label: "Feed Response" },
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Muskan-wagh/Campus-Connect",
    demo: "https://campus-connect-seven-beta.vercel.app/",
    status: "Live",
    timeline: "Q3 2024 — Present",
  },
  {
    id: "dev-collab",
    title: "DEV Collab",
    category: "Developer Platform",
    role: "Solo Engineer",
    overview: "An all-in-one collaboration platform where developers find teammates, manage projects, and ship together — replacing 5 tools with 1.",
    problem:
      "Developers lack a dedicated space to find collaborators, share projects, and manage team work. Existing workflows are fragmented across GitHub, Slack, Notion, and Trello — with no built-in discovery or team formation.",
    solution:
      "Created an integrated platform with real-time project management, skill-based team discovery, and secure JWT authentication. Consolidated the developer workflow from 5 fragmented tools into a single cohesive experience.",
    architecture:
      "React SPA → Node.js/Express API → MongoDB persistence. Socket.io powers real-time collaboration with automatic reconnection. JWT with refresh token rotation for stateless auth. Horizontally scalable via stateless API design with Redis session caching.",
    keyFeatures: [
      "Real-time project management with WebSocket sync",
      "Skill-based team discovery and matching algorithm",
      "Secure authentication with refresh token rotation",
      "Integrated communication channels per project",
    ],
    challenges: [
      "Maintaining WebSocket connection state across network interruptions and reconnects",
      "Designing a stateless API architecture that scales horizontally without session affinity",
    ],
    results:
      "Demonstrated full-stack engineering across the entire development lifecycle. Achieved sub-200ms API response times and seamless real-time collaboration through WebSocket integration.",
    metrics: [
      { value: "Sub-200ms", label: "API Latency" },
      { value: "Real-time", label: "WebSocket Sync" },
      { value: "JWT", label: "Token Rotation Auth" },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/Muskan-wagh/DEV_collab.git",
    demo: "https://devcollab-nu.vercel.app/",
    status: "Live",
    timeline: "Q2 — Q3 2024",
  },
  {
    id: "estate",
    title: "Estate",
    category: "Real Estate Marketplace",
    role: "Solo Engineer",
    overview: "A minimalist property marketplace designed for clarity — not conversions. Intelligent search meets clutter-free browsing.",
    problem:
      "Property search platforms are designed for lead generation, not user experience. Ads, popups, and aggressive CTAs overwhelm users who just want to find a home. The signal-to-noise ratio is broken.",
    solution:
      "Designed a minimalist marketplace prioritizing visual clarity and frictionless browsing. Every UI decision subtracts noise and amplifies what matters: the properties. Advanced filters empower without overwhelming.",
    architecture:
      "Next.js with Incremental Static Regeneration for listing pages — sub-300ms initial loads. RESTful API with optimized image delivery via Cloudinary transformations. Client-side search with 150ms debounced filtering for instant results.",
    keyFeatures: [
      "Multi-criteria search with intuitive filter system",
      "Interactive property cards with lazy-loaded galleries",
      "Responsive design across all viewports",
      "Performance-optimized with ISR and image optimization",
    ],
    challenges: [
      "Building a performant image gallery system with lazy loading and progressive enhancement",
      "Designing a filter UX that handles complex real estate criteria without overwhelming users",
    ],
    results:
      "Achieved 95% Lighthouse performance score. Delivered a production-grade marketplace demonstrating clean architecture patterns and disciplined frontend engineering.",
    metrics: [
      { value: "95", label: "Lighthouse Score" },
      { value: "Sub-300ms", label: "Initial Load" },
      { value: "5", label: "Property Filter Types" },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/Muskan-wagh/Estate-app.git",
    demo: "https://estate-app-drab.vercel.app/",
    status: "Live",
    timeline: "Q4 2024",
  },
  {
    id: "api-tester",
    title: "API Tester",
    category: "Developer Tool",
    role: "Solo Engineer",
    overview: "A lightweight, in-browser API testing tool that eliminates context-switching — because every alt-tab kills flow.",
    problem:
      "API development requires constant context-switching between the browser and Postman. Every alt-tab breaks focus. Developers need a lightweight, zero-install alternative that lives where they already work.",
    solution:
      "Built a full-featured HTTP client directly in the browser. Supports all methods, custom headers, authentication schemes, and response inspection with syntax highlighting. No installation, no context switch — just instant feedback.",
    architecture:
      "Client-side React app with Axios interceptors for consistent request/response handling. Dynamic routing for clean URL structure. Fully static deployment — zero server dependencies, deployable anywhere.",
    keyFeatures: [
      "All HTTP methods with full header and body control",
      "Authentication header presets (Bearer, Basic, API Key)",
      "JSON response inspection with collapsible syntax tree",
      "Zero server dependencies — fully static deployment",
    ],
    challenges: [
      "Building a code editor-like experience for request body editing within browser constraints",
      "Implementing comprehensive error handling for network failures, timeouts, and malformed responses",
    ],
    results:
      "Eliminated context-switching for API development workflows. Reduced iteration time by keeping the testing surface inside the development environment.",
    metrics: [
      { value: "All HTTP", label: "Methods Supported" },
      { value: "1", label: "Tool Required" },
      { value: "Zero", label: "Server Dependencies" },
    ],
    tech: ["React", "Next.js", "TypeScript", "Axios", "Tailwind CSS"],
    github: "https://github.com/Muskan-wagh/API-Tester-webapp.git",
    demo: "https://api-tester-webapp.vercel.app/",
    status: "Live",
    timeline: "Q4 2024",
  },
];

export const journey: JourneyItem[] = [
  {
    id: "coding-blocks-intern",
    role: "AI/ML Intern",
    organization: "Coding Blocks",
    year: "2025",
    description: "Building production ML systems and RAG pipelines.",
    achievements: [
      "Built end-to-end RAG pipeline using LlamaIndex, reducing document retrieval latency by 40%",
      "Contributed to 3 production ML models serving 10K+ daily inference requests",
      "Automated model deployment pipeline, cutting release cycles from weeks to days",
    ],
    tech: ["Python", "TensorFlow", "LlamaIndex", "Docker"],
    type: "work",
  },
  {
    id: "badverse-president",
    role: "Campus President",
    organization: "Badverse",
    year: "2025",
    description: "Shaping campus tech culture through community building.",
    achievements: [
      "Scaled community membership from 50 to 350+ members in one semester",
      "Orchestrated 12+ technical events including workshops and hackathons",
      "Built and mentored a student leadership team of 20 volunteers",
    ],
    type: "community",
  },
  {
    id: "google-ambassador",
    role: "Google Student Ambassador",
    organization: "Google for Gemini",
    year: "2025 — 2026",
    description: "Representing Google AI and empowering students.",
    achievements: [
      "Conducted 5+ hands-on workshops on Gemini and LLM tools for 300+ students",
      "Curated AI learning resources adopted by 3 college AI clubs",
      "Selected as top-performing ambassador in the region for Q1 2025",
    ],
    type: "community",
  },
  {
    id: "gdg-sponsorship",
    role: "Sponsorship Co-Lead",
    organization: "GDG on Campus SUI Indore",
    year: "2024 — 2025",
    description: "Building industry partnerships that power community growth.",
    achievements: [
      "Secured sponsorships from 5+ industry partners for flagship events",
      "Managed event budgets reaching 500+ students across the academic year",
      "Established a reusable sponsorship proposal framework for future teams",
    ],
    type: "community",
  },
  {
    id: "ecell-pr",
    role: "PR Team Lead",
    organization: "E-Cell SUI Indore",
    year: "2024",
    description: "Amplifying the entrepreneurship voice on campus.",
    achievements: [
      "Increased social media engagement by 300% across all platforms",
      "Drove PR campaigns for 8+ entrepreneurship events reaching 2K+ students",
      "Built media partnerships with 3 local publications and campus media",
    ],
    type: "community",
  },
  {
    id: "mycaptain-ambassador",
    role: "Campus Ambassador",
    organization: "MyCaptain",
    year: "2025",
    description: "Driving skill-development awareness on campus.",
    achievements: [
      "Led campus outreach campaigns engaging 200+ students",
      "Coordinated 3 skill-development workshops on campus",
      "Achieved top 10% ranking in the national ambassador program",
    ],
    type: "community",
  },
  {
    id: "pregrad-rep",
    role: "Campus Representative",
    organization: "Pregrad",
    year: "2025",
    description: "Connecting students with career opportunities.",
    achievements: [
      "Connected 100+ students with internship and career development programs",
      "Organized career readiness sessions with industry mentors",
      "Drove campus registrations to achieve highest conversion in the region",
    ],
    type: "community",
  },
  {
    id: "recruitiq",
    role: "Building RecruitIQ",
    organization: "Personal Project",
    year: "2025",
    description: "AI-powered recruitment platform using LLMs and vector search.",
    achievements: [
      "Built agentic resume screening workflow with LLM-based skill extraction",
      "Implemented semantic search using vector embeddings for candidate-job matching",
      "Achieved 92% accuracy in skill matching across 1K+ sample resumes",
    ],
    tech: ["Next.js", "LangChain", "OpenAI", "PostgreSQL", "Pinecone"],
    type: "build",
  },
  {
    id: "rag-system",
    role: "Building RAG System",
    organization: "Personal Project",
    year: "2025",
    description: "Production-grade retrieval-augmented generation pipeline.",
    achievements: [
      "Developed hybrid search combining dense and sparse retrieval for accuracy",
      "Achieved sub-500ms query-to-answer latency on domain-specific datasets",
      "Open-sourced core pipeline components adopted by 50+ developers",
    ],
    tech: ["LlamaIndex", "LangChain", "Weaviate", "FastAPI", "Docker"],
    type: "build",
  },
  {
    id: "dsa-journey",
    role: "DSA & Open Source Journey",
    organization: "Self-Directed",
    year: "2023 — 2025",
    description: "Building algorithmic fluency and giving back to the community.",
    achievements: [
      "Solved 400+ DSA problems across LeetCode, Codeforces, and HackerRank",
      "Contributed 100+ commits to open-source projects in AI and web tools",
      "Maintained a consistent 150+ day GitHub contribution streak",
    ],
    type: "learning",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI Engineering",
    skills: [
      "Large Language Models",
      "RAG Pipelines",
      "LlamaIndex",
      "Agentic Workflows",
      "NLP",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React/Next.js",
      "TypeScript",
      "Zustand/TanStack",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js/Express",
      "PostgreSQL/MongoDB",
      "GraphQL/REST APIs",
      "AWS/Kubernetes",
      "Microservices",
    ],
  },
  {
    category: "AI/ML",
    skills: [
      "TensorFlow/PyTorch",
      "Hugging Face",
      "OpenAI/Anthropic APIs",
      "Prompt Engineering",
      "Fine-tuning",
    ],
  },
];

export const leadership = [
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

export const stats: Stat[] = [
  { value: "10+", label: "Projects Delivered", description: "Building production-ready applications across AI and web technologies." },
  { value: "500+", label: "Students Mentored", description: "Supporting engineering education through workshops and community leadership." },
  { value: "5+", label: "Leadership Roles", description: "Driving technical initiatives and community growth across multiple organizations." },
  { value: "100+", label: "Open Source Contributions", description: "Contributing to projects that advance AI and web development accessibility." },
];

export const siteConfig = {
  name: "Muskan Wagh",
  title: "Muskan Wagh — AI Engineer & Full Stack Developer",
  description:
    "Fourth-year Computer Science Engineering student architecting intelligent digital products at the intersection of AI and full-stack engineering.",
  bio: "I'm an engineering product-builder who transforms complex technical challenges into elegant, user-centric solutions. With hands-on expertise in AI systems, scalable web applications, and cloud infrastructure, I craft digital experiences that not only work flawlessly but genuinely enhance how people interact with technology.",
  approach:
    "I begin every project by deeply understanding the underlying problem and the people who will use the solution. Technology serves as the means, never the end goal. My engineering philosophy centers on building with intention — choosing clarity over complexity, and creating products that stand the test of time through thoughtful design and robust architecture.",
  url: "https://muskanwagh.vercel.app",
  email: "muskanwagh1608@gmail.com",
  location: "Indore, India",
  social: {
    github: "https://github.com/Muskan-wagh",
    linkedin: "https://www.linkedin.com/in/muskan-wagh-22b2b5325",
    twitter: "https://x.com/muskanwagh1608",
  },
  nav: [
    { label: "My Story", href: "#story" },
    { label: "Work", href: "#work" },
    { label: "Expertise", href: "#expertise" },
    { label: "Journey", href: "#journey" },
    { label: "Open Source", href: "#opensource" },
    { label: "Connect", href: "#contact" },
  ],
};
