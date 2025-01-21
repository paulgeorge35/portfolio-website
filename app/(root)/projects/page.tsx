import { env } from "@/lib/config-env";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    href: "https://mydent.one",
    label: "Appointment Booking",
    current: true,
    tags: ["Next.js", "Tailwind", "TypeScript", "React", "OAuth", "Prisma", "PostgreSQL", "tRPC"],
    description: "A SaaS application that I'm currently building on my own. It's a platform for managing appointments, patients, documents and more."
  },
  {
    href: "https://new.andreeadutu.ro",
    label: "Dentist Office Website",
    tags: ["Next.js", "Tailwind", "TypeScript", "React", "Markdown"],
    description: "This is a dentist office website that I built for my girlfriend. It's built with Next.js, Tailwind, and features a statically generated blog using Markdown."
  },
  {
    href: "https://github.com/paulgeorge35/hooks",
    label: "React Hooks Library",
    tags: ["React", "TypeScript", "Hooks"],
    description: "A lightweight TypeScript library that provides a set of commonly used React hooks to enhance your components with powerful functionality. Publicly available on GitHub Package Registry. Mainly created for my personal use."
  },
  {
    href: "https://github.com/paulgeorge35/image-optimizer",
    label: "Image Optimizer API",
    tags: ["Bun", "TypeScript", "Redis", "Express", "Docker"],
    description: "A high-performance image optimization service built with Bun and TypeScript. I'm actually using it all throughout my projects (including this one) and it's been a game changer for my applications performance."
  },
  {
    href: "https://github.com/paulgeorge35/go-crons",
    label: "Go Cron Jobs",
    tags: ["Go", "Docker", "PostgreSQL"],
    description: "A Go-based notification service that sends web push notifications to all the subscribers of a given channel. It's built with Docker and PostgreSQL and is used in my main project."
  },
  {
    href: "https://github.com/paulgeorge35/db-cli",
    label: "JavaScript CLI",
    tags: ["JavaScript", "KeyChain", "PostgreSQL"],
    description: "A command-line interface tool for managing PostgreSQL databases with a focus on simplicity and user experience. Features interactive prompts and beautiful terminal output using chalk and boxen."
  },
]

export default function Projects() {
  return (
    <div className="vertical gap-4 grid gird-cols-1 md:grid-cols-[auto_1fr]">
      {projects.map((project) => (
        <Link href={project.href} key={project.href} className="grid grid-cols-subgrid items-start gap-4 group col-span-1 md:col-span-2 relative">
          <p className="group-hover:text-white items-start vertical gap-1 w-fit">
            <span className="horizontal center-v gap-1">
              <ArrowUpRight className="size-4 shrink-0 text-stone-600 group-hover:text-white" />
              {project.label}
            </span>
            <span className="w-0 border-b border-white group-hover:w-full transition-all duration-300" />
          </p>

          {project.current && <span className="absolute hidden md:block top-8 left-0 text-stone-400 rounded-md font-light text-xs">[currently working on]</span>}

          <p className="text-sm text-stone-400 text-balance">{project.description}</p>

          <span />

          <span className="horizontal gap-2 flex-wrap">
            {project.tags?.map((tag) => (
              <p key={project.href + tag} className="text-xs border border-stone-500 rounded-md px-2 py-1">{tag}</p>
            ))}
          </span>
        </Link>
      ))}
      <p className="text-sm text-stone-400 text-balance">
        More projects on my{" "}
        <a href={env.github} target="_blank" className="text-white cursor-pointer" rel="noreferrer">
          [GitHub]
        </a>
      </p>
    </div>
  );
}
