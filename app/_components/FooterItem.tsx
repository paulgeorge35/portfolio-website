import Link from 'next/link';

import { Icons } from './Icons';

type FooterItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function FooterItem({ href, children }: FooterItemProps) {
  return (
    <Link href={href} className="horizontal items-center gap-1 hover:text-white">
      <Icons.arrowUpRight className="size-4 shrink-0" />
      {children}
    </Link>
  );
}
