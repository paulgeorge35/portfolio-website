"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationItemProps = {
    href: string;
    children: React.ReactNode;
}

export default function NavigationItem({ href, children }: NavigationItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className="vertical group">
            {children}
            <span className={cn("border-b-[1px] border-stone-50 w-0 transition-all duration-300 ease-in-out group-hover:w-full", {
                "w-full": isActive,
            })} />
        </Link>
    )
}