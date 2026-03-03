"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useOpenPanel } from "@openpanel/nextjs";

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
    <Link href={href} className="vertical group" onClick={handleClick}>
      {children}
      <span
        className={cn(
          "w-0 border-b border-stone-50 transition-all duration-300 ease-in-out group-hover:w-full",
          {
            "w-full": isActive,
          },
        )}
      />
    </Link>
  );
}
