import telemetryImage from "@/assets/project-telemetry.jpg";
import labImage from "@/assets/project-lab.jpg";
import boardImage from "@/assets/project-board.jpg";
import philosopherImage from "@/assets/philosopher-ai.png";
import AbsoluteCinema from "@/assets/AbsoluteCinema.png";
import profileImage from "@/assets/profile1.jpeg";
import resume from "@/assets/resume.pdf";

export interface SocialLink {
  label: string;
  href: string;
  type: "email" | "github" | "linkedin" | "twitter";
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: string[];
  href: string;
  sourceHref?: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "Experience" | "Education";
  description: string;
}

export interface OpenSourceContribution {
  title: string;
  repoName: string;
  description: string;
  contribution: string;
  technologies: string[];
  href: string;
  isDemo: boolean;
}

export interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  href?: string;
  isDemo: boolean;
}

export interface PortfolioData {
  siteUrl: string;
  name: string;
  initials: string;
  role: string;
  status: string;
  location: string;
  email: string;
  resumeHref: string;
  profileImage: string;
  hero: {
    eyebrow: string;
    availability: string;
    headline: string;
  };
  about: {
    lead: string;
    paragraphs: string[];
    interests: string[];
  };
  socials: SocialLink[];
  skills: SkillGroup[];
  projects: Project[];
  openSource: OpenSourceContribution[];
  articles: Article[];
  timeline: TimelineItem[];
  web3FormsAccessKey: string;
}

export const portfolio: PortfolioData = {
  siteUrl: "https://adarshpatil.runs-on.dev",
  name: "Adarsh Patil",
  initials: "AP",
  role: "CSE Undergrad | Full-Stack Developer | AI/ML Enthusiast",
  status: "Open to internships (2026)",
  location: "Nagpur, Maharashtra, India",
  email: "adarshpatil.tech07@gmail.com",
  resumeHref: resume,
  profileImage,

  hero: {
    eyebrow: "Computer engineering / systems / software",
    availability: "Available for Internships & Freelance Work",
    headline:
      "Building web applications and exploring AI/ML through hands-on projects, while learning, experimenting, and contributing to open source.",
  },

  about: {
    lead: "I'm Adarsh, a Computer Engineering student building full-stack products and AI tools, exploring AI agents, and contributing to open source.",
    paragraphs: [
      "I work primarily with React, TanStack Start, Tailwind CSS, Node.js, FastAPI, and Django, backed by PostgreSQL and MongoDB. For AI work, I use Python, LangChain, vector databases, and Streamlit. I enjoy taking an idea from the initial concept all the way to a deployed product.",
      "Beyond coding, I enjoy reading philosophy and literature, writing about technology and ideas, and playing chess. I also document what I learn and contribute to open source. Currently seeking internship opportunities to gain practical experience and grow as a developer.",
    ],
    interests: [
      "Software engineering",
      "Computer architecture",
      "Full-stack engineering",
      "AI & machine learning",
    ],
  },

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/adarshpatil-07",
      type: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adarsh-patil-bb0335375/",
      type: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:adarshpatil.tech07@gmail.com",
      type: "email",
    },
    {
      label: "X",
      href: "https://x.com/AdarshBuilds07",
      type: "twitter",
    },
  ],

  skills: [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "SQL", "C/C++"],
    },
    {
      title: "Full Stack",
      skills: [
        "React",
        "TanStack",
        "Tailwind CSS",
        "HTML/CSS",
        "Node.js",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "AI/ML",
      skills: [
        "NumPy",
        "Pandas",
        "scikit-learn",
        "Matplotlib",
        "TensorFlow",
        "LangChain",
        "Vector DB",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub Actions", "Docker", "Linux", "Vite", "Streamlit", "Figma", "Canva"],
    },
  ],

  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio showcasing my projects, technical skills, experience, and journey as a Computer Engineering student. Built with a clean, responsive design to present my work, interests, and growth as a developer in one place.",
      image: telemetryImage,
      tags: ["TypeScript", "React 19", "Tailwind CSS", "Vite"],
      categories: ["Full Stack"],
      href: "https://adarshpatil.runs-on.dev/",
      sourceHref: "https://github.com/adarshpatil-07/adarshpatil-dev",
    },
    {
      title: "TensorFlow Computer Vision",
      description:
        "An image classification project built with TensorFlow and Keras, using a neural network trained on the Fashion MNIST dataset (70,000 grayscale images across 10 apparel classes). Includes data normalization, model training, performance evaluation, and prediction visualization.",
      image: labImage,
      tags: ["Python", "TensorFlow", "Keras", "NumPy", "Machine Learning"],
      categories: ["AI / ML", "Generative AI"],
      href: "",
      sourceHref: "https://github.com/adarshpatil-07/tensorflow-computer-vision",
    },
    {
      title: "RAG Document Q&A Chatbot",
      description:
        "An AI-powered document assistant that lets users upload multiple PDFs and ask questions about their contents using Retrieval-Augmented Generation (RAG), vector embeddings, and Gemini. Features contextual answers with document citations.",
      image: boardImage,
      tags: ["Python", "LangChain", "Gemini", "ChromaDB", "Streamlit", "RAG"],
      categories: ["AI / ML", "Full Stack", "Generative AI"],
      href: "https://adarsh-rag-chatbot.streamlit.app/",
      sourceHref:
        "https://github.com/adarshpatil-07/Datheon_Python_Generative_AI_LangChain_Internship",
    },
    {
      title: "AbsoluteCinema - Movie Discovery Platform",
      description:
        "A movie discovery and tracking platform inspired by IMDb and Letterboxd. Explore movies, search titles, view detailed movie information, manage watchlists, and share ratings and reviews. Built with React, TypeScript, and a backend API.",
      image: AbsoluteCinema,
      tags: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
      categories: ["Full Stack"],
      href: "https://absolute-cinema-coral.vercel.app/",
      sourceHref: "https://github.com/adarshpatil-07/absolute-cinema",
    },
    {
      title: "Philosopher AI",
      description:
        "Chat with Kafka, Dostoevsky, or Marcus Aurelius in their own voice, grounded in the books you upload. A RAG pipeline (PDF parsing, chunking, ChromaDB vector search, Gemini) feeds each persona passages from their writing, and an optional sources view shows the text behind every reply. Built as a FastAPI backend with a React chat interface.",
      image: boardImage,
      tags: ["Python", "FastAPI", "ChromaDB", "Gemini", "RAG", "React"],
      categories: ["AI / ML", "Full Stack", "Generative AI"],
      href: "https://github.com/adarshpatil-07/philosopher-ai",
      sourceHref:
        "https://github.com/adarshpatil-07/philosopher-ai",
    },
  ],

  openSource: [
    {
      title: "First Open Source Contribution",
      repoName: "Understand-Anything",
      description:
        "Contributed to Understand-Anything by adding VS Code and GitHub Copilot installation instructions to the README and its localized versions.",
      contribution:
        "PR #756: Added marketplace installation instructions for GitHub Copilot across the main README and 8 translated README files. Reviewed and merged into main.",
      technologies: ["Git", "GitHub", "Markdown", "Open Source"],
      href: "https://github.com/Egonex-AI/Understand-Anything/pull/756",
      isDemo: false,
    },
  ],

  articles: [],

  timeline: [
    {
      title: "B.Tech in Computer Engineering",
      organization: "Suryodaya College of Engineering & Technology",
      location: "Nagpur, Maharashtra, India",
      period: "2025 - 2029",
      type: "Education",
      description:
        "Coursework in data structures, algorithms, computer architecture, operating systems, databases, software development, computer networks, and programming fundamentals.",
    },
  ],

  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_KEY ?? "",
};

export function getSocial(type: SocialLink["type"]) {
  return portfolio.socials.find((social) => social.type === type);
}
