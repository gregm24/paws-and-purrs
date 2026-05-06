import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-cream paw-bg flex flex-col"
    >
      {/* Full-width banner */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/banner.jpeg"
          alt="Cats cared for by Paws & Purrs"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text */}
          <FadeIn direction="left" className="flex flex-col gap-5 sm:gap-8">
            <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-4 py-2 rounded-full w-fit">
              <span>🐾</span>
              <span>Upper West Side, NYC</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-navy leading-tight tracking-tight">
              Paws &amp; Purrs
            </h1>

            <p className="text-lg sm:text-2xl lg:text-3xl text-charcoal font-medium leading-snug max-w-md">
              Pet care and a helping hand,{" "}
              <span className="text-orange">right in your neighborhood.</span>
            </p>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-md">
              What started as a simple flyer in my building turned into something people actually rely on. I’ve been helping out with dog walking, cat feeding, and pet sitting for a few years now, and over time it grew into more — errands, computer help, moving things, whatever people need. Nothing complicated, just being someone nearby people can count on.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition-colors duration-150 shadow-sm text-lg"
              >
                Book a Service
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-cream transition-colors duration-150 text-lg"
              >
                View Services
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
              <a
                href="tel:9179008924"
                className="flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors duration-150"
              >
                <span>📞</span> 917-900-8924
              </a>
              <span className="text-muted/30 hidden sm:inline">·</span>
              <a
                href="mailto:gregorylomyers@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors duration-150"
              >
                <span>✉️</span> gregorylomyers@gmail.com
              </a>
            </div>

            <p className="text-sm text-muted italic -mt-4">
              Available summers, winter break, and spring break — home from
              University of Florida.
            </p>
          </FadeIn>

          {/* Hero photo */}
          <FadeIn
            direction="right"
            delay={150}
            className="relative h-60 sm:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/home.jpeg"
              alt="Paws & Purrs"
              fill
              className="object-cover"
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
