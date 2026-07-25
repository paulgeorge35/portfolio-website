"use client";

import { useOpenPanel } from "@openpanel/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Icons } from "./Icons";

export type NavigationItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavigationItem({
  href,
  children,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { track } = useOpenPanel();

  const handleClick = () => {
    track("navigation_item_clicked", {
      href,
    });
  };
  return (
    <Link
      href={href}
      className="group relative vertical min-h-10 justify-center py-2 transition-transform duration-150 ease-out active:scale-[0.96]"
      onClick={handleClick}
    >
      <span className="horizontal center-v gap-1 text-stone-300 transition-colors duration-150 ease group-hover:text-stone-50">
        {children}
        {href.startsWith("mailto") && (
          <Icons.arrowUpRight className="size-4 shrink-0" />
        )}
      </span>
      <span
        className={cn(
          "w-0 border-b border-stone-50 transition-[width] duration-300 ease-out group-hover:w-full",
          {
            "w-full": isActive,
          },
        )}
      />
    </Link>
  );
}
