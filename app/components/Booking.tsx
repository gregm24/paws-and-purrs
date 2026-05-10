import Image from "next/image";
import BookingForm from "./BookingForm";
import FadeIn from "./FadeIn";

const STRIP_IMAGES = [
  "/images/Gin.jpeg",
  "/images/Bobo.jpeg",
  "/images/Hugo.jpeg",
  "/images/Lexi.jpeg",
  "/images/Oliver.jpeg",
  "/images/Ribeye.jpeg",
  "/images/Rufus.jpeg",
  "/images/Slurpee.jpeg",
  "/images/Brooklyn.jpeg",
  "/images/lukeleia.jpeg",
];

export default function Booking() {
  const row1 = [...STRIP_IMAGES, ...STRIP_IMAGES];
  const row2 = [...[...STRIP_IMAGES].reverse(), ...[...STRIP_IMAGES].reverse()];

  return (
    <section id="booking" className="relative bg-navy overflow-hidden py-16 sm:py-20 lg:py-40">
      {/* Two-row scrolling photo strip — decorative background */}
      <div
        className="absolute inset-0 pointer-events-none select-none flex flex-col opacity-[0.09]"
        aria-hidden="true"
      >
        {/* Row 1 — scrolls left */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee flex gap-2 h-full">
            {row1.map((src, i) => (
              <div key={i} className="relative shrink-0 w-48 sm:w-64 h-full">
                <Image src={src} alt="" fill sizes="256px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right, different image order */}
        <div className="flex-1 overflow-hidden mt-2">
          <div className="animate-marquee-reverse flex gap-2 h-full">
            {row2.map((src, i) => (
              <div key={i} className="relative shrink-0 w-48 sm:w-64 h-full">
                <Image src={src} alt="" fill sizes="256px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          {/* Left: copy */}
          <FadeIn direction="left" className="flex flex-col gap-5 sm:gap-8">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-orange">
              Get Started
            </p>

            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight">
              Book a Service
            </h2>

            <p className="text-lg text-white/70 leading-relaxed">
              Fill out the form and I&apos;ll follow up within 24 hours to
              confirm details and scheduling. No payment up front — we&apos;ll
              sort out the specifics together.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {[
                ["Upper West Side & Lincoln Towers"],
                ["917-900-8924"],
                ["Available summers, winter & spring break"],
              ].map(([text]) => (
                <div key={text} className="flex items-center gap-3 text-base text-white/60">
                  <span className="w-1 h-1 rounded-full bg-orange shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={150}>
            <BookingForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
