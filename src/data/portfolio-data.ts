// ─── Types ───────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  type: "Client Project" | "Personal Project";
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
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
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  brand: string;
  description: string;
  areas: {
    icon: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  liveUrl?: string;
}

export interface FeaturedProject {
  label: string;
  title: string;
  category: string;
  company: string;
  brand: string;
  role: string;
  architecture: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  image: string;
  browserLabel: string;
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
    "Frontend developer building responsive websites and e-commerce experiences that help businesses establish credibility, reach customers, and grow online.",
  primaryCTA: { label: "View My Work", href: "#work" },
  secondaryCTA: { label: "Hire Me on Fiverr", href: "https://www.fiverr.com/m_saad_webdev" },
};

// ─── Trust Strip ──────────────────────────────────────────────────────────────

export const trustStats = [
  { label: "Real Client Work", value: "✓" },
  { label: "Production E-commerce", value: "✓", },
  { label: "5-Star Fiverr Rating", value: "★★★★★" },
];

// ─── Featured Client Project ──────────────────────────────────────────────────

export const featuredProject = {
  label: "Featured Client Work",
  title: "ZaraNwa — Headless Fashion E-commerce",
  category: "Women's Fashion · E-commerce",
  company: "Asad Traders",
  brand: "ZaraNwa",
  role: "Frontend Developer & Digital Marketer",
  architecture: "Next.js + Shopify Storefront API",
  description:
    "Built the complete customer-facing e-commerce storefront for ZaraNwa, a Pakistani women's fashion brand, using a custom headless Shopify architecture. The project combines premium product presentation with real Shopify commerce, responsive customer experiences, SEO, and conversion tracking for Meta advertising.",
  features: [
    "Headless Shopify storefront",
    "Shopify products, variants & collections",
    "Shopify Cart & Checkout",
    "Responsive product experience",
    "Meta Pixel & conversion tracking",
    "SEO & structured data",
  ],
  technologies: ["Next.js", "TypeScript", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"],
  liveUrl: "https://zaranwa.com",
  image: "/zaranwa-featured1.png",
  browserLabel: "zaranwa.com",
};

// ─── Professional Experience ──────────────────────────────────────────────────

export const experienceContent = {
  label: "Experience",
  heading: "Professional Experience",
  subheading:
    "A production e-commerce project where I worked across frontend development, Shopify integration, digital marketing, and conversion tracking.",
  items: [
    {
      company: "Asad Traders",
      role: "Frontend Developer & Digital Marketer",
      brand: "ZaraNwa — Women's Fashion Brand",
      description:
        "Worked on ZaraNwa's digital presence, building its production e-commerce storefront with a custom headless Shopify architecture while also managing digital marketing activities through Meta Ads and website conversion tracking.",
      areas: [
        {
          icon: "ShoppingBag",
          title: "E-commerce Development",
          description:
            "Built the complete customer-facing storefront using Next.js, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Shopify's Storefront API.",
        },
        {
          icon: "ShoppingCart",
          title: "Commerce Integration",
          description:
            "Implemented Shopify-powered products, variants, collections, cart functionality, checkout flow, size guides, and responsive product experiences.",
        },
        {
          icon: "Megaphone",
          title: "Digital Marketing",
          description:
            "Managed Meta advertising campaigns and supported the brand's customer-acquisition funnel through website-side tracking and conversion measurement.",
        },
        {
          icon: "ChartNoAxesCombined",
          title: "Conversion Tracking & Analytics",
          description:
            "Implemented Meta Pixel event tracking for key customer actions such as PageView, ViewContent, and AddToCart.",
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "Shopify Storefront API",
        "Meta Pixel",
        "Meta Ads",
      ],
      liveUrl: "https://zaranwa.com/",
    } satisfies ExperienceItem,
  ],
};


// ─── Testimonial ──────────────────────────────────────────────────────────────

export const testimonial: Testimonial = {
  name: "Muhammad Ali",
  role: "Accounting Professional",
  content:
    "Very good experience working with Muhammad Saad. He understood my requirements properly and delivered the website exactly as I wanted. Communication was smooth throughout the project and he was always available when I needed updates. The final website looks professional, works well on both mobile and desktop, and any changes I requested were handled quickly. I am satisfied with the work and would recommend him to others looking for a professional website.",
  rating: 5,
};

// ─── About ─────────────────────────────────────────────────────────────────

export const aboutContent = {
  heading: "Building digital experiences with a focus on quality, clarity, and real-world use.",
  paragraphs: [
    "I'm a frontend developer based in Lahore, Pakistan, focused on building responsive, high-quality websites and e-commerce experiences. My work spans freelance client projects and production web applications, including a headless Shopify storefront built for ZaraNwa, a Pakistani women's fashion brand.",
    "Alongside development, I've also worked on digital marketing and Meta advertising, which has given me a broader understanding of what happens after a website goes live — from customer acquisition and conversion tracking to the experience users have on the site itself.",
  ],
  photo: "/profile.png",
  cards: [
    {
      icon: "Code2",
      title: "Production-Minded",
      description: "Clean component architecture, reusable UI, and practical implementation decisions built for real-world products.",
    },
    {
      icon: "Zap",
      title: "Performance & UX",
      description: "Responsive, accessible, fast-loading interfaces with careful attention to usability, interactions, and mobile experience.",
    },
    {
      icon: "MessageCircle",
      title: "Clear Communication",
      description: "Transparent updates, organized workflow, and a collaborative approach from planning through launch.",
    },
  ],
};
// ─── Projects ─────────────────────────────────────────────────────────────────

export const projectsContent = {
  label: "Selected Projects",
  heading: "More Work",
  subheading:
    "A selection of client and personal projects showcasing business websites, SaaS applications, and modern frontend experiences.",
};

export const projects: Project[] = [
  {
    title: "Muhammad Ali — Accounting Portfolio Website",
    type: "Client Project",
    description:
      "A professional portfolio website built for a real accounting and finance professional, focused on credibility, responsive presentation, and clear communication of his experience and services.",
    highlights: [
      "Responsive design across mobile and desktop",
      "Professional service and experience presentation",
      "Downloadable CV integration",
      "Performance and SEO optimization",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://ali-aslam-portfolio.vercel.app",
    image: "/accounting-portfolio.png",
  },
  {
    title: "AImate – AI SaaS Dashboard",
    type: "Personal Project",
    description:
      "A fully-featured SaaS admin dashboard with analytics, billing management, advanced data tables, and a scalable component architecture.",
    highlights: [
      "Advanced data tables with TanStack Table",
      "Real-time analytics with Recharts",
      "Command palette with CMD+K",
      "Fully responsive across all devices",
    ],
    technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aimate-admin.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/AImate-admin-dashboard",
    image: "/aimate-dashboard.png",
  },
  {
    title: "AImate – AI SaaS Landing Page",
    type: "Personal Project",
    description:
      "A polished SaaS landing page focused on clear product communication, responsive design, and deliberate motion-based interactions.",
    highlights: [
      "99–100 Lighthouse performance score",
      "Framer Motion scroll animations",
      "Conversion-focused layout",
      "Mobile-first responsive design",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aimate-ai.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/AImate-AI_Landing_Page",
    image: "/aimate-landing.png",
  },
  // {
  //   title: "EMAE – Premium Fragrance E-commerce",
  //   type: "Personal Project",
  //   description:
  //     "Full e-commerce frontend with product engine, real-time cart, and dynamic review system.",
  //   highlights: [
  //     "Real-time cart and product filtering",
  //     "Dynamic review and rating system",
  //     "GPU-accelerated animations",
  //     "Scalable component architecture",
  //   ],
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"],
  //   liveUrl: "https://emae.vercel.app",
  //   githubUrl: "https://github.com/Muhammad-Saad-Riaz/EMAE-Fragrance-Store",
  //   image: "/emae1.png",
  // },
];

// ─── Process ──────────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: "Search",
    title: "Discovery",
    description: "Understand your business goals, requirements, and project scope before writing any code.",
  },
  {
    step: 2,
    icon: "ClipboardList",
    title: "Planning",
    description: "Define the structure, technology, timeline, and implementation approach.",
  },
  {
    step: 3,
    icon: "Code2",
    title: "Development",
    description: "Build responsive, maintainable interfaces with regular progress updates throughout.",
  },
  {
    step: 4,
    icon: "Rocket",
    title: "Launch",
    description: "Test thoroughly, deploy smoothly, and provide post-launch support if needed.",
  },
];

export const processContent = {
  label: "Process",
  heading: "How I Work",
  subheading: "Every project follows a clear process focused on communication, quality, and delivering reliable results.",
  steps: [
    {
      id: "01",
      title: "Discovery",
      description: "Understand goals, requirements, and project scope before writing any code."
    },
    {
      id: "02",
      title: "Planning",
      description: "Define the structure, technology, timeline, and implementation approach."
    },
    {
      id: "03",
      title: "Development",
      description: "Build responsive, maintainable interfaces with regular progress updates."
    },
    {
      id: "04",
      title: "Launch",
      description: "Test thoroughly, deploy smoothly, and provide post-launch support if needed."
    }
  ]
};

// ─── Tech Stack ───────────────────────────────────────────────────────────────

export const techStackContent = {
  label: "Tech Stack",
  heading: "Technologies I Use",
  subheading: "Modern technologies and tools I use to build responsive websites, e-commerce experiences, and maintainable web applications.",
  categories: [
    {
      title: "Frontend",
      icon: "Monitor",
      skills: ["React", "Next.js", "Tailwind CSS" , "Framer Motion"]
    },
    {
      title: "Languages",
      icon: "Code2",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "E-commerce & UI",
      icon: "ShoppingBag",
      skills: ["Shopify","Shopify Storefront API","Shopify Cart API","shadcn/ui"],
    },
    {
      title: "Tools & Infrastructure",
      icon: "Wrench",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Hostinger"]
    }
  ]
};