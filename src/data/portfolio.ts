import telemetryImage from "@/assets/project-telemetry.jpg";
import labImage from "@/assets/project-lab.jpg";
import boardImage from "@/assets/project-board.jpg";
import profileImage from "@/assets/profile1.jpeg";

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
  hero: { eyebrow: string; headline: string; intro: string };
  about: { lead: string; paragraphs: string[]; interests: string[] };
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
  role: "Computer Engineering Student",
  status: "Open to internships (2026)",
  location: "Nagpur,Maharashtra,India",
  email: "adarshpatil.tech07@gmail.com",
  resumeHref: "/resume.pdf",
  profileImage,
  hero: {
    eyebrow: "Computer engineering / systems / software",
    headline:
      "Exploring full-stack development and AI/ML, while aspiring to make meaningful open-source contributions.",
    intro:
      "I’m a computer engineering student focused on building software, exploring AI and machine learning, and turning ideas into projects that actually work.",
  },
  about: {
    lead: "I'm Adarsh, a Computer Engineering student with a focus on full-stack and AI/ML development - I build practical, real-world applications and am actively working toward internships and hands-on industry experience.",
    paragraphs: [
      "On the full-stack side, I work across both front-end and back-end to build applications that are functional and usable, not just technically complete. On the AI/ML side, I'm exploring how models can be integrated into real applications rather than treated as standalone experiments.",
      "Outside of building projects, I document what I learn, explore new areas of computer science, and look for practical problems that are worth solving. I'm actively seeking internships and industry exposure to apply what I've learned in real, high-stakes environments.",
    ],
    interests: [
      "Software engineering",
      "Computer architecture",
      "Full-stack engineering",
      "AI & machine learning",
    ],
  },
  socials: [
    { label: "GitHub", href: "https://github.com/adarshpatil-07", type: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adarsh-patil-bb0335375/",
      type: "linkedin",
    },
    { label: "Email", href: "mailto:adarshpatil.tech07@gmail.com", type: "email" },
    // Add your X/Twitter profile URL here to show the X button in the hero, contact, and footer:
    { label: "X", href: "https://x.com/AdarshBuilds07", type: "twitter" },
  ],
  skills: [
    { title: "Languages", skills: ["C / C++", "TypeScript", "Python", "JavaScript", "SQL"] },
    {
      title: "AI/ML",
      skills: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "TensorFlow"],
    },
    { title: "Software", skills: ["React", "Node.js", "Git", "Linux", "PostgreSQL"] },
    { title: "Tools", skills: ["Vite", "Github Actions", "Docker", "Figma", "Canva"] },
  ],
  projects: [
    {
      title: "Personal Portfolio Website ",
      description:
        "A personal portfolio website showcasing my skills, projects, experience, and journey as a Computer Engineering student. Built with a focus on clean design, responsive UI, and a simple developer-focused experience. It brings my work together in one place so recruiters and collaborators can quickly see what I build and how I’ve grown.",
      image: telemetryImage,
      tags: ["TypeScript", "React 19", "TailWind CSS", "Vite"],
      categories: ["Full Stack", "Web Development"],
      href: "https://adarshpatil.runs-on.dev/",
      sourceHref: "https://github.com/adarshpatil-07/adarshpatil-dev",
    },
    {
      title: "TensorFlow Computer Vision",
      description:
        "An image classification project built with TensorFlow and Keras, using a neural network trained on the Fashion MNIST dataset (70,000 grayscale images across 10 apparel classes). Includes data normalization, model training, performance evaluation, and prediction visualization.",
      image: labImage,
      tags: ["Python", "TensorFlow", "Keras", "NumPy", "Machine Learning"],
      categories: ["AI / ML", "Python", "Computer Vision"],
      href: "",
      sourceHref: "https://github.com/adarshpatil-07/tensorflow-computer-vision",
    },
    {
      title: "RAG Document Q&A Chatbot",
      description:
        "An AI-powered document assistant that lets users upload multiple PDFs and ask questions about their contents using Retrieval-Augmented Generation (RAG), vector embeddings, and Gemini. Features contextual answers with document citations.",
      image: boardImage,
      tags: ["Python", "LangChain", "Gemini", "ChromaDB", "Streamlit", "RAG"],
      categories: ["AI / ML", "Full Stack", "Python"],
      href: "https://adarsh-rag-chatbot.streamlit.app/",
      sourceHref: "https://github.com/adarshpatil-07/Datheon_Python_Generative_AI_LangChain_Internship",
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
  articles: [
    {
      title: "Understanding the Rise and Fall of the Roman Empire",
      category: "History",
      date: "Demo",
      description:
        "An exploration of the Roman Empire's rise, its emperors, political struggles, and the events that eventually led to its decline.",
      isDemo: true,
    },
  ],
  timeline: [
    {
      title: "B.Tech in Computer Engineering",
      organization: "Suryodaya College of Engineering & Technology",
      location: "Nagpur,Maharashtra,India",
      period: "2025 - 2029",
      type: "Education",
      description:
        "Coursework covering data structures and algorithms, computer architecture, operating systems, database systems, software development, computer networks, and core programming concepts, with a focus on building practical software engineering skills.",
    },
    /*{
      title: "Engineering Intern",
      organization: "Example Technology Lab",
      location: "Remote",
      period: "May 2025 — Aug 2025",
      type: "Experience",
      description:
        "Built internal tools, tested firmware, and collaborated with engineers across hardware and software teams.",
    },
    {
      title: "Embedded  Lead",
      organization: "University Robotics Team",
      location: "Your University",
      period: "2024 — Present",
      type: "Experience",
      description:
        "Leading firmware development and system integration for the team’s autonomous robotics platform.",
    },*/
  ],
  web3FormsAccessKey: import.meta.env["VITE_WEB3FORMS_KEY"] ?? "",
};

export function getSocial(type: SocialLink["type"]) {
  return portfolio.socials.find((social) => social.type === type);
}