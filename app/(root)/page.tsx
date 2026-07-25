import Image from "next/image";
import Link from "next/link";

import { env } from "@/lib/config-env";

export default function Home() {
  return (
    <div className="vertical gap-6">
      <span className="horizontal animate-enter items-center gap-4">
        <Image
          src="https://cdn.paulgeorge.dev/p/cmrqlbhew000001odfirxniyy/cmrqqwqb6000001pn22hevkjq?w=100&h=100&q=100"
          alt="me"
          width={100}
          height={100}
          quality={100}
          priority
          unoptimized
          className="size-16 rounded-full ring-1 ring-white/10 md:size-24"
        />
        <div className="vertical gap-1.5">
          <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
            Paul George
          </h1>
          <p className="text-stone-400 md:text-lg">TypeScript Developer</p>
        </div>
      </span>

      <p
        className="animate-enter text-pretty text-sm leading-relaxed text-stone-400"
        style={{ animationDelay: "100ms" }}
      >
        I&apos;m a Romanian Full Stack TypeScript developer with a passion for
        building web applications and a firm belief that the web should perform
        seamlessly on every device, often outshining native alternatives. I work
        as a freelancer, building products and features for clients across the
        stack.
      </p>

      <p
        className="animate-enter text-pretty text-sm leading-relaxed text-stone-400"
        style={{ animationDelay: "200ms" }}
      >
        I tend to work on my own projects in my spare time and I&apos;m always
        looking for new challenges to tackle. Most of the{" "}
        <Link
          href="/projects"
          className="inline-block text-stone-50 underline decoration-stone-50/0 underline-offset-4 transition-[color,text-decoration-color,transform] duration-150 ease-out hover:decoration-stone-50/80 active:scale-[0.96]"
        >
          [stuff I&apos;ve built]
        </Link>{" "}
        are tools that I once needed or that I still use in my own projects and
        workflows.
      </p>

      <p
        className="animate-enter text-pretty text-sm leading-relaxed text-stone-400"
        style={{ animationDelay: "300ms" }}
      >
        Always open for a chat, so feel free to{" "}
        <a
          href={env.email}
          className="inline-block text-stone-50 underline decoration-stone-50/0 underline-offset-4 transition-[color,text-decoration-color,transform] duration-150 ease-out hover:decoration-stone-50/80 active:scale-[0.96]"
        >
          [reach out]
        </a>
        !
      </p>
    </div>
  );
}
