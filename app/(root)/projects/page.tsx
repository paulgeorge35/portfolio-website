import Project from "@/app/_components/Project";
import { env } from "@/lib/config-env";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="vertical grid gap-6 md:grid-cols-[auto_1fr]">
      {projects.map((project) => (
        <Project key={project.href} project={project} />
      ))}
      <p className="text-sm text-pretty text-stone-400">
        More projects on my{" "}
        <a
          href={env.github}
          target="_blank"
          className="inline-block cursor-pointer text-stone-50 underline decoration-stone-50/0 underline-offset-4 transition-[color,text-decoration-color,transform] duration-150 ease-out hover:decoration-stone-50/80 active:scale-[0.96]"
          rel="noreferrer"
        >
          [GitHub]
        </a>
      </p>
    </div>
  );
}
