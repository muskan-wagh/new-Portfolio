import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="container-lg section-gap-sm">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-display text-[0.8125rem] font-medium text-text tracking-[-0.01em]">
              {siteConfig.name}
            </p>
            <p className="body-sm mt-1.5 max-w-xs">
              AI Engineer &middot; Full Stack Developer &middot; Product Builder
            </p>
            <p className="body-sm mt-3">{siteConfig.location}</p>
          </div>

          <div className="md:text-right flex flex-col gap-2.5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline body-sm"
            >
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-4 md:justify-end mt-1.5">
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

        <div className="divider-thin mt-8 mb-5" />

        <p className="body-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
