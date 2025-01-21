import { env } from "@/lib/config-env";
import Image from "next/image";

export default function Home() {
  return (
    <div className="vertical gap-4">
      <span className="horizontal items-center gap-4">
        <Image src={'/me.jpeg'} alt="me" width={100} height={100} quality={100} priority className="rounded-full filter grayscale size-16 md:size-24" />
        <div className="vertical gap-2">
          <h1 className="text-2xl md:text-4xl font-bold">Paul George</h1>
          <p className="md:text-lg">TypeScript Developer</p>
        </div>
      </span>

      <p className="text-sm text-stone-400 text-justify">
        I'm a Romanian Full Stack TypeScript developer with a passion for building web applications. I'm currently working as a software engineer at <a href="https://www.umsatz.io" target="_blank" className="text-white" rel="noreferrer">[umsatz.io]</a>, where I'm building a CRM application.
      </p>

      <p className="text-sm text-stone-400 text-justify">
        I tend to work on my own projects in my spare time and I'm always looking for new challenges to tackle. Most of the <a href="/projects" className="text-white">[stuff I've built]</a> are tools that I once needed or that I still use in my own projects and workflows.
      </p>

      <p className="text-sm text-stone-400 text-justify">
        Always open for a chat, so feel free to <a href={env.email} className="text-white">[reach out]</a>!
      </p>
    </div>
  );
}
