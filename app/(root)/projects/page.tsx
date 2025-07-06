import Link from 'next/link';

import { env } from '@/lib/config-env';
import { projects } from '@/lib/projects';

import { Icons } from '@/app/_components/Icons';

export default function Projects() {
  return (
    <div className="vertical gird-cols-1 grid gap-4 md:grid-cols-[auto_1fr]">
      {projects.map(project => (
        <Link
          href={project.href}
          key={project.href}
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

          <p className="text-sm text-balance text-stone-400">{project.description}</p>

          <span />

          <span className="horizontal flex-wrap gap-2">
            {project.tags?.map(tag => (
              <p
                key={project.href + tag}
                className="rounded-md border border-stone-500 px-2 py-1 text-xs"
              >
                {tag}
              </p>
            ))}
          </span>
        </Link>
      ))}
      <p className="text-sm text-balance text-stone-400">
        More projects on my{' '}
        <a href={env.github} target="_blank" className="cursor-pointer text-white" rel="noreferrer">
          [GitHub]
        </a>
      </p>
    </div>
  );
}
