import Image from 'next/image';

import { env } from '@/lib/config-env';

export default function Home() {
  return (
    <div className="vertical gap-4">
      <span className="horizontal items-center gap-4">
        <Image
          src={'/me.jpeg'}
          alt="me"
          width={100}
          height={100}
          quality={100}
          priority
          className="size-16 rounded-full grayscale filter md:size-24"
        />
        <div className="vertical gap-2">
          <h1 className="text-2xl font-bold md:text-4xl">Paul George</h1>
          <p className="md:text-lg">TypeScript Developer</p>
        </div>
      </span>

      <p className="text-justify text-sm text-stone-400">
        I&apos;m a Romanian Full Stack TypeScript developer with a passion for building web
        applications. I&apos;m currently working as a software engineer at{' '}
        <a href="https://www.umsatz.io" target="_blank" className="text-white" rel="noreferrer">
          [umsatz.io]
        </a>
        , where I&apos;m building a CRM application.
      </p>

      <p className="text-justify text-sm text-stone-400">
        I tend to work on my own projects in my spare time and I&apos;m always looking for new
        challenges to tackle. Most of the{' '}
        <a href="/projects" className="text-white">
          [stuff I&apos;ve built]
        </a>{' '}
        are tools that I once needed or that I still use in my own projects and workflows.
      </p>

      <p className="text-justify text-sm text-stone-400">
        Always open for a chat, so feel free to{' '}
        <a href={env.email} className="text-white">
          [reach out]
        </a>
        !
      </p>
    </div>
  );
}
