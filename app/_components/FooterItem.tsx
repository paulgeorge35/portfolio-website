import Link from "next/link";

import { Icons } from "./Icons";

type FooterItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function FooterItem({ href, children }: FooterItemProps) {
  return (
    <Link
      href={href}
      className="horizontal relative min-h-10 items-center gap-1 px-1 py-2 text-stone-400 transition-[color,transform] duration-150 ease-out hover:text-white active:scale-[0.96]"
    >
      <Icons.arrowUpRight className="size-4 shrink-0" />
      {children}
    </Link>
  );
}
