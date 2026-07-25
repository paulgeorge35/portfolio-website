"use client";

import { useOpenPanel } from "@openpanel/nextjs";
import Link from "next/link";

import type { Project as ProjectType } from "@/lib/projects";

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
      className="group relative col-span-1 grid grid-cols-subgrid items-start gap-4 rounded-sm py-1 transition-transform duration-150 ease-out active:scale-[0.99] md:col-span-2"
    >
      <p className="ease vertical w-fit items-start text-stone-200 transition-colors duration-150 group-hover:text-white">
        <span className="horizontal center-v gap-1">
          <Icons.arrowUpRight className="ease size-4 shrink-0 text-stone-600 transition-colors duration-150 group-hover:text-white" />
          {project.label}
        </span>
        <span className="w-0 border-b border-white transition-[width] duration-300 ease-out group-hover:w-full" />
      </p>

      {project.current && (
        <span className="absolute top-8 left-0 hidden rounded-md text-xs font-light text-stone-500 md:block">
          [currently working on]
        </span>
      )}

      <p className="ease text-sm text-pretty text-stone-400 transition-colors duration-150 group-hover:text-stone-300">
        {project.description}
      </p>

      <span />

      <span className="horizontal flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <p
            key={project.href + tag}
            className="rounded-md bg-stone-800/80 px-2 py-1 text-xs text-stone-300 shadow-[0_0_0_1px_rgb(120_113_108/0.25)]"
          >
            {tag}
          </p>
        ))}
      </span>
    </Link>
  );
}
