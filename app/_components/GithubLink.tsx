import { env } from "@/lib/config-env";
import { useOpenPanel } from "@openpanel/nextjs";

export default function GithubLink() {
  const { track } = useOpenPanel();
  const handleClick = () => {
    track("github_link_clicked");
  };
  return (
    <a
      href={env.github}
      className="text-white"
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      [GitHub]
    </a>
  );
}
