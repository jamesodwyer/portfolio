"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "WORK" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-swiss-black">
      <div className="grid-container">
        <nav aria-label="Main navigation" className="flex items-center justify-between h-24 border-b border-swiss-gray">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 link-hover" aria-label="James O'Dwyer - Home">
            <LogoMark size={48} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`text-caption tracking-widest transition-colors ${
                  pathname === item.href ? "text-swiss-yellow" : "link-hover"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-swiss-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-swiss-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-swiss-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-swiss-black border-b border-swiss-gray">
          <div className="grid-container py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-caption tracking-widest transition-colors ${
                  pathname === item.href ? "text-swiss-yellow" : "link-hover"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
