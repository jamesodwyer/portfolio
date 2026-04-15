import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { PasswordGate } from "@/components/PasswordGate";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description: siteConfig.bio,
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.title}`,
    description: siteConfig.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PasswordGate>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-swiss-yellow focus:text-swiss-black focus:px-4 focus:py-2 focus:text-caption">
            Skip to content
          </a>
          <Header />
          <main id="main-content">{children}</main>
        </PasswordGate>
      </body>
    </html>
  );
}
