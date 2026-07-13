import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="container-lg py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-sm tracking-tight text-text">
              {siteConfig.name}
            </p>
            <p className="body-sm text-text-tertiary mt-1 max-w-xs">
              AI Engineer &middot; Full Stack Developer &middot; Product Builder
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="body-sm text-text-tertiary hover:text-text transition-colors"
            >
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon width={15} height={15} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-text transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={15} height={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-thin my-8" />

        <p className="body-sm text-text-tertiary text-center md:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
