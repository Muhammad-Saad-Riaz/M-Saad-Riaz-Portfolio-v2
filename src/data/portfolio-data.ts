// ─── Types ───────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  type: "Client Project" | "Personal Project";
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// ─── Personal Info ────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Muhammad Saad",
  fullName: "Muhammad Saad Riaz",
  role: "Frontend Developer",
  location: "Lahore, Pakistan",
  email: "msaadriaz11@gmail.com",
  availability: "Available for freelance projects",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroContent = {
  badge: "Available for Freelance Projects",
  heading: "Building Modern Websites That Help Businesses Grow",
  headingLine1:"Building Modern Websites",
  headingHighlight:"That Help Businesses Grow",
  description:
    "Frontend developer crafting responsive websites and landing pages that help businesses build credibility and grow online.",
  primaryCTA: { label: "View My Work", href: "#projects" },
  secondaryCTA: { label: "Hire Me on Fiverr", href: "https://www.fiverr.com/m_saad_webdev" },
};

// ─── Trust Strip ──────────────────────────────────────────────────────────────

export const trustStats = [
  { label: "Real Client Work", value: "1+" },
  { label: "5-Star Fiverr Rating", value: "★★★★★" },
  { label: "Next.js & TypeScript Specialist", value: "Specialist" },
];

// ─── Featured Client Project ──────────────────────────────────────────────────

// export const featuredProject = {
//   title: "Accounting Portfolio Website",
//   category: "Client Project",
//   client: "Muhammad Ali",
//   description:
//     "Designed and developed a professional accounting portfolio website for a real client, helping establish a stronger online presence with a premium visual identity, responsive design, downloadable CV integration, and clear service presentation.",
//   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
//   liveUrl: "https://ali-aslam-portfolio.vercel.app",
//   image: "/projects/accounting-portfolio.webp",
// };

export const featuredProject = {
  label: "Featured Client Project",
  title: "Accounting Portfolio Website",
  category: "Client Project",
  client: "Muhammad Ali",
  description:
    "Designed and developed a professional accounting portfolio website for a real client, helping establish a stronger online presence with a premium visual identity, responsive design, downloadable CV integration, and clear service presentation.",
  features: [
    "Responsive Design",
    "Downloadable CV",
    "Premium UI",
    "SEO Friendly",
  ],
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  liveUrl: "https://ali-aslam-portfolio.vercel.app",
  image: "/accounting-portfolio.png",
  browserLabel: "ali-aslam-portfolio.vercel.app",
};

// ─── Testimonial ──────────────────────────────────────────────────────────────

export const testimonial: Testimonial = {
  name: "Muhammad Ali",
  role: "Accounting Professional",
  content:
    "Very good experience working with Muhammad Saad. He understood my requirements properly and delivered the website exactly as I wanted. Communication was smooth throughout the project and he was always available when I needed updates. The final website looks professional, works well on both mobile and desktop, and any changes I requested were handled quickly. I am satisfied with the work and would recommend him to others looking for a professional website.",
  rating: 5,
};


// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "AImate – AI SaaS Dashboard",
    type: "Personal Project",
    description:
      "Fully-featured SaaS admin dashboard with analytics, billing management, and a scalable component architecture.",
    technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aimate-admin.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/AImate-admin-dashboard",
  },
  {
    title: "AImate – AI SaaS Landing Page",
    type: "Personal Project",
    description:
      "High-converting landing page with advanced animations and a polished dark-mode aesthetic.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aimate-ai.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/AImate-AI_Landing_Page",
  },
  {
    title: "EMAE – Premium Fragrance E-commerce",
    type: "Personal Project",
    description:
      "Full e-commerce frontend with product engine, real-time cart, and dynamic review system.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"],
    liveUrl: "https://emae.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/EMAE-Fragrance-Store",
  },
];

// ─── Process ──────────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description: "Understanding your business goals, target audience, and project requirements.",
  },
  {
    step: 2,
    title: "Planning",
    description: "Defining structure, content flow, and user experience strategy before writing code.",
  },
  {
    step: 3,
    title: "Development",
    description: "Building responsive, performant interfaces with clean and scalable component architecture.",
  },
  {
    step: 4,
    title: "Deployment",
    description: "Testing, optimization, and deployment — with post-launch support included.",
  },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────

export const techStack = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  animation: ["Framer Motion"],
  data: ["TanStack Table", "Recharts", "Zod", "React Hook Form"],
  tools: ["Git", "GitHub", "Vercel"],
};
