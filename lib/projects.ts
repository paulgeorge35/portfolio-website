export type Project = {
  href: string;
  label: string;
  tags: string[];
  description: string;
  current?: boolean;
};

export const projects: Project[] = [
  {
    href: 'https://supaboard.io',
    label: 'supaboard.io',
    tags: [
      'Express',
      'TypeScript',
      'PostgreSQL',
      'Tanstack Router',
      'React',
      'Traefik',
      'Docker',
      'Redis',
      'S3',
    ],
    description:
      "Multi-tenant SaaS application for managing customer feedback. The project is organized as a monorepo containing three services: a React Vite frontend, an API built with Express, and a Node.js infrastructure service responsible for dynamically configuring custom domains. It leverages Traefik's dynamic routing and automatic certificate management. The entire stack is deployed on a self-hosted Coolify instance.",
  },
  // {
  //   href: 'https://mydent.one',
  //   label: 'Appointment Booking',
  //   current: true,
  //   tags: ['Next.js', 'Tailwind', 'TypeScript', 'React', 'OAuth', 'Prisma', 'PostgreSQL', 'tRPC'],
  //   description:
  //     "A SaaS application that I'm currently building on my own. It's a platform for managing appointments, patients, documents and more.",
  // },
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
    tags: ['Bun', 'TypeScript', 'Redis', 'Express', 'Docker', 'S3'],
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
