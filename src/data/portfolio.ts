import telemetryImage from "@/assets/project-telemetry.jpg";
import labImage from "@/assets/project-lab.jpg";
import boardImage from "@/assets/project-board.jpg";
import philosopherImage from "@/assets/philosopher-ai.webp";
import AbsoluteCinema from "@/assets/AbsoluteCinema.png";
import miyukiImage from "@/assets/miyuki.png";
import profileImage from "@/assets/profile1.jpeg";
import resume from "@/assets/resume.pdf";

export interface SocialLink {
  label: string;
  href: string;
  type: "email" | "github" | "linkedin" | "twitter" ;
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
  href?: string;
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
  githubUsername: string;
  githubUrl: string;
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
  githubUsername: "adarshpatil-07",
  githubUrl: "https://github.com/adarshpatil-07",
  name: "Adarsh Patil",
  initials: "AP",
  role: "CSE Undergrad | Full-Stack Developer | AI/ML Enthusiast",
  status: "Available for Internships & Freelance Work",
  location: "Nagpur, Maharashtra, India",
  email: "adarshpatil.tech07@gmail.com",
  resumeHref: resume,
  profileImage,

  hero: {
    eyebrow: "CSE Undergrad | Full-Stack Developer | AI/ML Enthusiast",
    availability: "Available for Internships & Freelance Work",
    headline: "I build websites & explore AI through practical projects.",
  },

  about: {
    lead: "I'm Adarsh, a Computer Engineering student building full-stack products and AI tools, exploring AI agents, and contributing to open source.",
    paragraphs: [
      "I work primarily with React, TanStack Start, Tailwind CSS, Node.js, FastAPI, and Django, backed by PostgreSQL and MongoDB. For AI work, I use Python, LangChain, vector databases, and Streamlit. I enjoy taking an idea from the initial concept all the way to a deployed product.",
      "Beyond coding, I enjoy reading philosophy and literature, writing about technology and ideas, and playing chess. I also document what I learn and contribute to open source. Currently seeking internship opportunities to gain practical experience and grow as a developer.",
    ],
    interests: [
      "Full-Stack Development",
      "Computer architecture",
      "AI & machine learning",
      "Python & Libraries",
      "Open Source",
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
    "A responsive portfolio showcasing my projects, technical skills, and growth as a Computer Engineering student through hands-on development.",
      image: telemetryImage,
      tags: ["TypeScript", "React 19", "Tailwind CSS", "Vite"],
      categories: ["Full Stack"],
      href: "https://adarshpatil.runs-on.dev/",
      sourceHref: "https://github.com/adarshpatil-07/adarshpatil-dev",
    },
    {
      title: "TensorFlow Computer Vision",
      description:
        "Built an image classification model using TensorFlow and Keras to classify 70,000 Fashion MNIST images across 10 apparel categories, covering data preprocessing, model training, evaluation, and prediction visualization.",
      image: labImage,
      tags: ["Python", "TensorFlow", "Keras", "NumPy", "Machine Learning"],
      categories: ["AI / ML"],
      sourceHref: "https://github.com/adarshpatil-07/tensorflow-computer-vision",
    },
    {
      title: "RAG Document Q&A Chatbot",
      description:
        "An AI document assistant that answers questions across multiple PDFs using RAG, vector embeddings, and Gemini, with contextual citations.",
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
      title: "Miyuki (美雪)",
      description:
        "A cinematic Japanese winter village experience featuring changing day, sunset, and night atmospheres, interactive snowfall, ambient audio, and fullscreen viewing.",
      image: miyukiImage,
      tags: ["React", "TypeScript", "Vite", "CSS", "HTML Canvas"],
      categories: ["Creative Frontend"],
      href: "https://miyuki-one.vercel.app/",
    },
    {
      title: "Philosopher AI",
      description:
        "An AI-powered chat app that lets users interact with literary figures using uploaded books. Built with FastAPI, React, ChromaDB, and Gemini, featuring RAG-based responses with source citations.",
      image: philosopherImage,
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
        "Contributed to Understand-Anything, a project with 93.3k GitHub stars and 8k forks, by adding VS Code and GitHub Copilot installation instructions",
      contribution:
        "PR #756: Updated 9 README files with GitHub Copilot installation instructions. Merged into main.",
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
        "Studying core computer engineering subjects, including DSA, operating systems, databases, computer networks, and software development.",
    },
  ],

  web3FormsAccessKey: import.meta.env["VITE_WEB3FORMS_KEY"] ?? "",
};

export function getSocial(type: SocialLink["type"]) {
  return portfolio.socials.find((social) => social.type === type);
}
