"use client";

import Marquee from "react-fast-marquee";

const brands = [
  { name: "BBC", logo: "/images/bbc.png" },
  { name: "Disney", logo: "/images/disney.png" },
  { name: "Sky Sports", logo: "/images/sky-sports.png" },
  { name: "Guinness", logo: "/images/guinness.png" },
  { name: "Virgin Money", logo: "/images/virgin-money.png" },
  { name: "Comic Relief", logo: "/images/comic-relief.png" },
  { name: "Cravendale", logo: "/images/cravendale.png" },
  { name: "Dr Who", logo: "/images/dr-who.png" },
];

export function BrandMarquee() {
  return (
    <section
      aria-label="Brands I have worked with"
      className="brand-marquee border-t border-b border-swiss-gray"
    >
      <Marquee speed={80} gradient={false} autoFill direction="left">
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            className={`brand-marquee-logo${
              brand.name === "BBC" ? " brand-marquee-logo--bbc" : ""
            }`}
          />
        ))}
      </Marquee>
    </section>
  );
}
