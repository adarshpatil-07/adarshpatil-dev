import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Timeline } from "@/components/portfolio/Timeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Computer Engineering Portfolio" },
      { name: "description", content: "Computer engineering student portfolio featuring embedded systems, software projects, skills, and experience." },
      { property: "og:title", content: "Alex Morgan — Computer Engineering Portfolio" },
      { property: "og:description", content: "Selected engineering projects, skills, and experience across hardware and software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <><Header /><main><Hero /><About /><Skills /><Projects /><Timeline /><Contact /></main><Footer /></>;
}
