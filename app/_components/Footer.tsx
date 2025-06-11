import { DateTime } from 'luxon';

import { env } from '@/lib/config-env';

import FooterItem from './FooterItem';

export default function Footer() {
  return (
    <footer className="vertical center-h mt-auto gap-4 md:items-start!">
      <span className="horizontal gap-2">
        <FooterItem href={env.github}>github</FooterItem>
        <FooterItem href={env.linkedin}>linkedin</FooterItem>
        <FooterItem href={`${env.github}/portfolio-website`}>view source</FooterItem>
      </span>
      <p className="text-stone-400">© {DateTime.now().year} Paul George</p>
    </footer>
  );
}
