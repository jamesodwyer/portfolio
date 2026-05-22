type Brand = { name: string; logo?: string };

const brands: Brand[] = [
  { name: "Ticketmaster", logo: "/logos/ticketmaster.svg" },
  { name: "BBC" },
  { name: "Sky", logo: "/logos/sky.svg" },
  { name: "Disney" },
  { name: "UEFA" },
  { name: "Hargreaves Lansdown" },
  { name: "Expedia", logo: "/logos/expedia.svg" },
  { name: "ATG Tickets" },
  { name: "Guinness" },
  { name: "Comic Relief" },
  { name: "CMC Invest" },
  { name: "Yell" },
];

export function BrandMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Brands I have worked with"
      className="brand-marquee border-t border-b border-swiss-gray overflow-hidden text-swiss-muted"
    >
      <div className="brand-marquee-track">
        {loop.map((brand, i) =>
          brand.logo ? (
            <img
              key={`${brand.name}-${i}`}
              src={brand.logo}
              alt={i < brands.length ? brand.name : ""}
              aria-hidden={i >= brands.length || undefined}
              className="brand-marquee-item brand-marquee-logo"
            />
          ) : (
            <span
              key={`${brand.name}-${i}`}
              aria-hidden={i >= brands.length || undefined}
              className="brand-marquee-item text-display"
            >
              {brand.name}
            </span>
          )
        )}
      </div>
    </section>
  );
}
