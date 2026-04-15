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
          <Header />
          <main>{children}</main>
        </PasswordGate>
      </body>
    </html>
  );
}
