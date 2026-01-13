"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bauhaus-white">
      <div className="grid-container">
        <nav className="flex items-center justify-between h-20 border-b-2 border-bauhaus-black">
          {/* Logo */}
          <Link
            href="/"
            className="text-caption tracking-widest hover:text-bauhaus-red transition-colors"
          >
            {siteConfig.name.toUpperCase()}
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-caption tracking-widest transition-colors ${
                pathname === "/"
                  ? "text-bauhaus-red"
                  : "hover:text-bauhaus-red"
              }`}
            >
              WORK
            </Link>
            <Link
              href="/about"
              className={`text-caption tracking-widest transition-colors ${
                pathname === "/about"
                  ? "text-bauhaus-red"
                  : "hover:text-bauhaus-red"
              }`}
            >
              ABOUT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
