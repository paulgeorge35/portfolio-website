'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export type NavigationItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavigationItem({ href, children }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="vertical group">
      {children}
      <span
        className={cn(
          'w-0 border-b-[1px] border-stone-50 transition-all duration-300 ease-in-out group-hover:w-full',
          {
            'w-full': isActive,
          }
        )}
      />
    </Link>
  );
}
