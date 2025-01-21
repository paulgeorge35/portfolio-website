import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type FooterItemProps = {
    href: string;
    children: React.ReactNode;
}

export default function FooterItem({ href, children }: FooterItemProps) {
    return (
        <Link href={href} className="horizontal items-center gap-1 hover:text-white">
            <ArrowUpRight className="size-4 shrink-0" />
            {children}
        </Link>
    )
}