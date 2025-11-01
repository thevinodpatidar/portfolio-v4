import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiClickhouse,
  SiTailwindcss,
  SiBun,
  SiNodedotjs,
  SiAmazon,
  SiShadcnui,
  SiGooglefonts,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { LucideExternalLink } from "lucide-react";

interface WorkItem {
  title: string;
  description: string;
  url: string;
  techStack: string[];
}

const workItems: WorkItem[] = [
  {
    title: "startup listing",
    description:
      "a curated platform that showcases the best startups, saas tools, and products. serves as a discovery hub for innovative solutions built by indie hackers and teams with exclusive deals.",
    url: "https://startuplist.ing",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "joyform",
    description:
      "an intuitive online form builder designed for modern teams. enables users to create, share, and automate forms without any coding skills. features drag-and-drop interface and professional integrations.",
    url: "https://joyform.in",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "graftek",
    description:
      "build beautiful real estate websites with ease using a powerful platform. use templates or build custom solutions with lead generation, analytics, and seo optimization features.",
    url: "https://graftek.in",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "vaanix",
    description:
      "a platform dedicated to ai voice agents, allowing users to search, share, and explore the best ai voice agents along with their system prompts and settings. supports multiple platforms like vapi and retell.",
    url: "https://vaanix.ai",
    techStack: ["Next.js", "React", "TypeScript", "AI/ML"],
  },
  {
    title: "shadcn font picker",
    description:
      "a react-based font selection component built on shadcn ui's input component and the google fonts api. allows users to browse and select fonts seamlessly within their applications.",
    url: "https://shadcn-font-picker.vercel.app",
    techStack: ["React", "TypeScript", "Shadcn UI", "Google Fonts API"],
  },
  {
    title: "portfolio website",
    description:
      "a storytelling portfolio built with next.js, featuring smooth animations, interactive elements, and responsive design. the very site you're on right now.",
    url: "#home",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
];

const getTechIcon = (
  name: string
): React.ComponentType<{ className?: string }> => {
  const techMap: Record<string, React.ComponentType<{ className?: string }>> = {
    react: SiReact,
    "next.js": SiNextdotjs,
    typescript: SiTypescript,
    postgresql: SiPostgresql,
    clickhouse: SiClickhouse,
    "tailwind css": SiTailwindcss,
    bun: SiBun,
    "node.js": SiNodedotjs,
    aws: SiAmazon,
    "shadcn ui": SiShadcnui,
    "google fonts api": SiGooglefonts,
    "ai/ml": AiOutlineApi,
  };

  const normalized = name.toLowerCase();
  return techMap[normalized] || SiReact;
};

interface WorkCardProps {
  work: WorkItem;
}

function WorkCard({ work }: WorkCardProps) {
  const isExternalLink = work.url.startsWith("http");

  return (
    <div className="p-8 border-2 border-muted rounded-lg space-y-4 lowercase cursor-pointer group block">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
          {work.title}
        </h3>
        <a
          href={work.url}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
        >
          <LucideExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p className="text-muted-foreground">{work.description}</p>
      <div className="flex flex-wrap gap-2">
        {work.techStack.map((tech) => {
          const Icon = getTechIcon(tech);
          return (
            <span
              key={tech}
              className="px-3 py-1.5 bg-background rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="lowercase">{tech}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight mb-4">
            recent work
          </h2>
          <p className="text-muted-foreground lowercase">
            projects that showcase my journey and passion for building
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workItems.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
