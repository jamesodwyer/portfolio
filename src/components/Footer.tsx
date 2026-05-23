import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-swiss-gray mt-grid-4">
      <div className="grid-container">
        <div className="py-grid-5 flex flex-col gap-6">
          {/* Contact */}
          <span className="text-caption text-swiss-muted">GET IN TOUCH</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-heading link-hover"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Copyright */}
        <div className="py-8 border-t border-swiss-gray">
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
