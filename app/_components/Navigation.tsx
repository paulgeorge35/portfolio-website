import { env } from '@/lib/config-env';

import NavigationItem from './NavigationItom';

const navigationItems = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: env.email, label: 'contact' },
];

export default function Navigation() {
  return (
    <nav className="horizontal w-full gap-4">
      {navigationItems.map(item => (
        <NavigationItem href={item.href} key={item.href}>
          {item.label}
        </NavigationItem>
      ))}
    </nav>
  );
}
