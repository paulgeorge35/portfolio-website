import Project from "@/app/_components/Project";
import { env } from "@/lib/config-env";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="vertical gird-cols-1 grid gap-4 md:grid-cols-[auto_1fr]">
      {projects.map((project) => (
        <Project key={project.href} project={project} />
      ))}
      <p className="text-sm text-balance text-stone-400">
        More projects on my{" "}
        <a
          href={env.github}
          target="_blank"
          className="cursor-pointer text-white"
          rel="noreferrer"
        >
          [GitHub]
        </a>
      </p>
    </div>
  );
}
