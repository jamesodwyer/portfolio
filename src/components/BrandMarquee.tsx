const brands = [
  "Ticketmaster",
  "BBC",
  "Sky",
  "Disney",
  "UEFA",
  "Hargreaves Lansdown",
  "Expedia",
  "ATG Tickets",
  "Guinness",
  "Comic Relief",
  "CMC Invest",
  "Yell",
];

export function BrandMarquee() {
  return (
    <section
      aria-label="Brands I have worked with"
      className="brand-marquee border-t border-b border-swiss-gray overflow-hidden"
    >
      <div className="brand-marquee-track">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            aria-hidden={i >= brands.length}
            className="brand-marquee-item text-display text-swiss-muted"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
