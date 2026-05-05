import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cream paw-bg flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <FadeIn direction="left" className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-4 py-2 rounded-full w-fit">
              <span>🐾</span>
              <span>Upper West Side, NYC</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-navy leading-tight tracking-tight">
              Paws &amp; Purrs
            </h1>

            <p className="text-2xl sm:text-3xl text-charcoal font-medium leading-snug max-w-md">
              Pet care and a helping hand,{" "}
              <span className="text-orange">right in your neighborhood.</span>
            </p>

            <p className="text-lg text-muted leading-relaxed max-w-md">
              What started as a flyer slid under apartment doors at Lincoln
              Towers is now your go-to for dog walking, cat feeding, pet
              sitting — and so much more. Errands, tutoring, computer help,
              moving, childcare. Real help, from a real neighbor.
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

            <p className="text-sm text-muted italic">
              Available summers, winter break, and spring break — home from
              University of Florida.
            </p>
          </FadeIn>

          {/* Hero photo */}
          <FadeIn
            direction="right"
            delay={150}
            className="relative h-96 sm:h-[480px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
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
