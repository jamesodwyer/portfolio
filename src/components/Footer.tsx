import { siteConfig } from "@/lib/data";
import { DotPattern } from "./DotPattern";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-swiss-gray mt-grid-4">
      <div className="grid-container">
        <div className="py-grid-3 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-caption text-swiss-muted">GET IN TOUCH</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-heading link-hover"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Dot Pattern */}
          <div className="hidden md:block">
            <DotPattern rows={5} cols={5} dotSize={6} gap={6} className="text-swiss-muted" />
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <span className="text-caption text-swiss-muted">FOLLOW</span>
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption tracking-widest link-hover"
              >
                LI
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption tracking-widest link-hover"
              >
                GH
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption tracking-widest link-hover"
              >
                TW
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-swiss-gray">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <span className="text-small text-swiss-muted">
              {currentYear} {siteConfig.name}
            </span>
            <span className="text-small text-swiss-muted">
              {siteConfig.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
