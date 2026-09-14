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
    headline: "Building thoughtful systems, from silicon to screen.",
    intro:
      "I’m a computer engineering student interested in embedded systems, dependable software, and the small details that make technology feel effortless.",
  },
  about: {
    lead: "I like understanding how things work at every layer.",
    paragraphs: [
      "My work sits between hardware and software: prototyping connected devices, writing low-level code, and shaping clear interfaces for complex systems.",
      "Away from the lab, I document what I learn, contribute to student engineering teams, and look for practical problems worth solving.",
    ],
    interests: [
      "Embedded systems",
      "Computer architecture",
      "Full-stack engineering",
      "Human-centered tools",
    ],
  },
  socials: [
    { label: "GitHub", href: "https://github.com/adarshpatil3900-png", type: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adarsh-patil-bb0335375/", type: "linkedin" },
    { label: "Email", href: "mailto:adarshpatil.tech07@gmail.com", type: "email" },
  ],
  skills: [
    { title: "Languages", skills: ["C / C++", "TypeScript", "Python", "Verilog", "SQL"] },
    {
      title: "Hardware",
      skills: ["Microcontrollers", "PCB Design", "Digital Logic", "UART / I²C / SPI"],
    },
    { title: "Software", skills: ["React", "Node.js", "Git", "Linux", "PostgreSQL"] },
    { title: "Tools", skills: ["KiCad", "Oscilloscope", "Docker", "Figma", "MATLAB"] },
  ],
  projects: [
    {
      title: "Telemetry Console",
      description:
        "A real-time telemetry dashboard for monitoring sensor nodes, visualizing device health, and replaying field data.",
      image: telemetryImage,
      tags: ["Embedded C", "React", "WebSockets"],
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
        "Coursework in digital systems, computer architecture, electronics, algorithms, and embedded design.",
    },
    {
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
    },
  ],
  web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
};
