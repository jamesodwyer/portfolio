"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "./Logo";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "WORK" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-swiss-black">
      <div className="grid-container">
        <nav className="flex items-center justify-between h-24 border-b border-swiss-gray">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 link-hover">
            <LogoMark size={24} />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-caption tracking-widest transition-colors ${
                  pathname === item.href ? "text-swiss-yellow" : "link-hover"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
