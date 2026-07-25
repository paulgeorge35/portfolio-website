import { DateTime } from "luxon";

import { env } from "@/lib/config-env";

import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <footer className="mt-auto vertical center-h gap-3 pt-4 md:items-start!">
      <span className="horizontal flex-wrap gap-1">
        <FooterItem href={env.github}>github</FooterItem>
        <FooterItem href={env.linkedin}>linkedin</FooterItem>
        <FooterItem href={`${env.github}/portfolio-website`}>
          view source
        </FooterItem>
      </span>
      <p className="text-sm text-stone-500">
        © {DateTime.now().year} Paul George
      </p>
    </footer>
  );
}
