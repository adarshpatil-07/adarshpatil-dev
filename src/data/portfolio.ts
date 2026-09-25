import telemetryImage from "@/assets/project-telemetry.jpg";
import labImage from "@/assets/project-lab.jpg";
import boardImage from "@/assets/project-board.jpg";

export interface SocialLink {
  label: string;
  href: string;
  type: "email" | "github" | "linkedin";
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

export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  status: string;
  location: string;
  email: string;
  resumeHref: string;
  hero: { eyebrow: string; headline: string; intro: string };
  about: { lead: string; paragraphs: string[]; interests: string[] };
  socials: SocialLink[];
  skills: SkillGroup[];
  projects: Project[];
  timeline: TimelineItem[];
  web3FormsAccessKey: string;
}

export const portfolio: PortfolioData = {
  name: "Adarsh Patil",
  initials: "AP",
  role: "Computer Engineering Student",
  status: "Open to internships · 2026",
  location: "Nagpur,Maharashtra,India",
  email: "adarshpatil.tech07@gmail.com",
  resumeHref: "/resume.pdf",
  hero: {
    eyebrow: "Computer engineering · systems · software",
    headline: "Building software, from logic to interface.",
    intro:
      "I’m a computer engineering student focused on building software, exploring AI and machine learning, and turning ideas into projects that actually work.",
  },
  about: {
    lead: "I like understanding how things work at every layer.",
    paragraphs: [
      "My work sits at the intersection of software engineering, full-stack development, and AI/ML, with a growing interest in how software interacts with the systems underneath it.",
      "Outside of building projects, I document what I learn, explore new areas of computer science, and look for practical problems that are worth solving",
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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adarsh-patil-bb0335375/", type: "linkedin" },
    { label: "Email", href: "mailto:adarshpatil.tech07@gmail.com", type: "email" },
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
        "A personal portfolio website showcasing my skills, projects, experience, and journey as a Computer Engineering student. Built with a focus on clean design, responsive UI, and a simple developer-focused experience.",
      image: telemetryImage,
      tags: ["TypeScript", "React 19", "TailWind CSS", "Vite"],
      href: "https://example.com",
      sourceHref: "https://github.com/your-username",
    },
    {
      title: "Collaborative Lab",
      description:
        "A shared development workspace that pairs a lightweight code editor with reproducible hardware experiments.",
      image: labImage,
      tags: ["TypeScript", "Systems", "Docker"],
      href: "https://example.com",
      sourceHref: "https://github.com/your-username",
    },
    {
      title: "Board Atlas",
      description:
        "A visual tool for cataloguing development boards, pinouts, components, and reusable circuit designs.",
      image: boardImage,
      tags: ["React", "PostgreSQL", "KiCad"],
      href: "https://example.com",
      sourceHref: "https://github.com/your-username",
    },
  ],
  timeline: [
    {
      title: "B.Tech in Computer Engineering",
      organization: "Suryodaya College of Engineering & Technology",
      location: "Nagpur,Maharashtra,India",
      period: "2025 — 2029",
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
      title: "Embedded Systems Lead",
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