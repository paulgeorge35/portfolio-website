"use client";

import type { Project as ProjectType } from "@/lib/projects";
import { useOpenPanel } from "@openpanel/nextjs";
import Link from "next/link";
import { Icons } from "./Icons";

export default function Project({ project }: { project: ProjectType }) {
  const { track } = useOpenPanel();
  return (
    <Link
      href={project.href}
      key={project.href}
      onClick={() => {
        track("project_clicked", {
          project_name: project.label,
        });
      }}
      className="group relative col-span-1 grid grid-cols-subgrid items-start gap-4 md:col-span-2"
    >
      <p className="vertical w-fit items-start gap-1 group-hover:text-white">
        <span className="horizontal center-v gap-1">
          <Icons.arrowUpRight className="size-4 shrink-0 text-stone-600 group-hover:text-white" />
          {project.label}
        </span>
        <span className="w-0 border-b border-white transition-all duration-300 group-hover:w-full" />
      </p>

      {project.current && (
        <span className="absolute top-8 left-0 hidden rounded-md text-xs font-light text-stone-400 md:block">
          [currently working on]
        </span>
      )}

      <p className="text-sm text-balance text-stone-400">
        {project.description}
      </p>

      <span />

      <span className="horizontal flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <p
            key={project.href + tag}
            className="rounded-md border border-stone-500 px-2 py-1 text-xs"
          >
            {tag}
          </p>
        ))}
      </span>
    </Link>
  );
}
