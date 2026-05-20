interface MockupSlideshowProps {
  slides: string[];
  mockup?: string;
  className?: string;
}

export function MockupSlideshow({
  slides,
  mockup = "/mockup-slides/images/mockup.png",
  className = "",
}: MockupSlideshowProps) {
  const groupClass =
    slides.length === 2
      ? "mockup-slideshow--2"
      : slides.length === 3
      ? "mockup-slideshow--3"
      : "mockup-slideshow--4";

  return (
    <div className={`mockup ${className}`}>
      <div className="mockup__screen">
        <div className={`mockup-slideshow ${groupClass}`}>
          {slides.map((src, i) => (
            <img
              key={src}
              className="mockup-slide"
              src={src}
              alt=""
              aria-hidden="true"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
      <img
        className="mockup__frame"
        src={mockup}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
