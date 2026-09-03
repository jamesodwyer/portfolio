import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Vercel serves the static demo at /interactive/ and 404s on the explicit
  // /interactive/index.html, so the embed uses the directory path. Emitting
  // directory-style routes keeps the export consistent with how it is served.
  // Note: `next dev` does not serve a public/ directory index, so the embed
  // 404s in dev only — verify it against `npx serve out` instead.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
