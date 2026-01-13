import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-bauhaus-black mt-grid-4">
      <div className="grid-container">
        <div className="py-grid-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-caption text-bauhaus-gray">GET IN TOUCH</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-heading link-underline inline-block"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption tracking-widest hover:text-bauhaus-red transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption tracking-widest hover:text-bauhaus-red transition-colors"
            >
              GITHUB
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption tracking-widest hover:text-bauhaus-red transition-colors"
            >
              TWITTER
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-bauhaus-black/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <span className="text-small text-bauhaus-gray">
              {currentYear} {siteConfig.name}. All rights reserved.
            </span>
            <span className="text-small text-bauhaus-gray">
              {siteConfig.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
