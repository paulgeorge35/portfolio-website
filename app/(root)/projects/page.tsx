import Link from 'next/link';

import { env } from '@/lib/config-env';

import { Icons } from '@/app/_components/Icons';

const projects = [
  {
    href: 'https://supaboard.io',
    label: 'supaboard.io',
    tags: [
      'Express',
      'TypeScript',
      'PostgreSQL',
      'Tanstack Router',
      'React',
      'nginx',
      'Docker',
      'Redis',
    ],
    description:
      'Multi-tenant SaaS application for managing customer feedback. Allows for custom subdomain mapping and is fully self-hosted.',
  },
  {
    href: 'https://mydent.one',
    label: 'Appointment Booking',
    current: true,
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'React', 'OAuth', 'Prisma', 'PostgreSQL', 'tRPC'],
    description:
      "A SaaS application that I'm currently building on my own. It's a platform for managing appointments, patients, documents and more.",
  },
  {
    href: 'https://github.com/paulgeorge35/smartbill',
    label: 'SmartBill Client',
    tags: ['Bun', 'TypeScript', 'Node.js'],
    description:
      'A modern, type-safe client for integrating with the SmartBill API. This package provides a comprehensive implementation for managing invoices, estimates, payments, and other business documents through the SmartBill platform.',
  },
  {
    href: 'https://github.com/paulgeorge35/eu-platesc',
    label: 'EuPlatesc Client',
    tags: ['Bun', 'TypeScript', 'Node.js'],
    description:
      'Wrote a fully type-safe TypeScript client for the romanian based payment processor, EuPlatesc, to make up for the poor or inconsistent documentation.',
  },
  {
    href: 'https://dr.andreeadutu.ro',
    label: 'Dentist Office Website',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'React', 'Markdown'],
    description:
      "This is a dentist office website that I built for my girlfriend. It's built with Next.js, Tailwind, and features a statically generated blog using Markdown.",
  },
  {
    href: 'https://github.com/paulgeorge35/hooks',
    label: 'React Hooks Library',
    tags: ['React', 'TypeScript', 'Hooks'],
    description:
      'A lightweight TypeScript library that provides a set of commonly used React hooks to enhance your components with powerful functionality. Publicly available on GitHub Package Registry. Mainly created for my personal use.',
  },
  {
    href: 'https://github.com/paulgeorge35/image-optimizer',
    label: 'Image Optimizer API',
    tags: ['Bun', 'TypeScript', 'Redis', 'Express', 'Docker'],
    description:
      "A high-performance image optimization service built with Bun and TypeScript. I'm actually using it all throughout my projects (including this one) and it's been a game changer for my applications performance.",
  },
  {
    href: 'https://github.com/paulgeorge35/go-crons',
    label: 'Go Cron Jobs',
    tags: ['Go', 'Docker', 'PostgreSQL'],
    description:
      "A Go-based notification service that sends web push notifications to all the subscribers of a given channel. It's built with Docker and PostgreSQL and is used in my main project.",
  },
  {
    href: 'https://github.com/paulgeorge35/db-cli',
    label: 'JavaScript CLI',
    tags: ['JavaScript', 'KeyChain', 'PostgreSQL'],
    description:
      'A command-line interface tool for managing PostgreSQL databases with a focus on simplicity and user experience. Features interactive prompts and beautiful terminal output using chalk and boxen.',
  },
];

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
