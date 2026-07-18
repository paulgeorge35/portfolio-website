import Image from "next/image";
import Link from "next/link";

import { env } from "@/lib/config-env";

export default function Home() {
  return (
    <div className="vertical gap-4">
      <span className="horizontal items-center gap-4">
        <Image
          src="https://cdn.paulgeorge.dev/p/cmrqlbhew000001odfirxniyy/cmrqqwqb6000001pn22hevkjq?w=100&h=100&q=100"
          alt="me"
          width={100}
          height={100}
          quality={100}
          priority
          unoptimized
          className="size-16 rounded-full grayscale filter md:size-24"
        />
        <div className="vertical gap-2">
          <h1 className="text-2xl font-bold md:text-4xl">Paul George</h1>
          <p className="md:text-lg">TypeScript Developer</p>
        </div>
      </span>

      <p className="text-justify text-sm text-stone-400">
        I&apos;m a Romanian Full Stack TypeScript developer with a passion for
        building web applications and a firm belief that the web should perform
        seamlessly on every device, often outshining native alternatives. I work
        as a freelancer, building products and features for clients across the
        stack.
      </p>

      <p className="text-justify text-sm text-stone-400">
        I tend to work on my own projects in my spare time and I&apos;m always
        looking for new challenges to tackle. Most of the{" "}
        <Link href="/projects" className="text-white">
          [stuff I&apos;ve built]
        </Link>{" "}
        are tools that I once needed or that I still use in my own projects and
        workflows.
      </p>

      <p className="text-justify text-sm text-stone-400">
        Always open for a chat, so feel free to{" "}
        <a href={env.email} className="text-white">
          [reach out]
        </a>
        !
      </p>
    </div>
  );
}
