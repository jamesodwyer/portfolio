const brands = [
  { name: "BBC", logo: "/images/bbc.png" },
  { name: "Disney", logo: "/images/disney.png" },
  { name: "Sky Sports", logo: "/images/sky-sports.png" },
  { name: "Guinness", logo: "/images/guinness.png" },
  { name: "Virgin Money", logo: "/images/virgin-money.png" },
  { name: "Comic Relief", logo: "/images/comic-relief.png" },
  { name: "Cravendale", logo: "/images/cravendale.png" },
];

export function BrandMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Brands I have worked with"
      className="brand-marquee border-t border-b border-swiss-gray overflow-hidden"
    >
      <div className="brand-marquee-track">
        {loop.map((brand, i) => (
          <img
            key={`${brand.name}-${i}`}
            src={brand.logo}
            alt={i < brands.length ? brand.name : ""}
            aria-hidden={i >= brands.length || undefined}
            className="brand-marquee-item brand-marquee-logo"
          />
        ))}
      </div>
    </section>
  );
}
