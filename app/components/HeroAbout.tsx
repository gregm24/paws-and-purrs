import Image from "next/image";
import FadeIn from "./FadeIn";

export default function HeroAbout() {
  return (
    <section id="home" className="bg-cream overflow-hidden">
      <span id="about" className="sr-only" />
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] lg:min-h-[calc(100vh-5rem)] lg:items-stretch">
        {/* Photo — top on mobile, left on desktop */}
        <div className="relative h-72 sm:h-96 lg:h-full order-first">
          <Image
            src="/images/banner2.jpeg"
            alt="Paws & Purrs — pet care on the Upper West Side"
            fill
            className="object-cover object-[center_60%]"
            priority
          />
        </div>

        {/* Text — bottom on mobile, right on desktop */}
        <FadeIn
          direction="right"
          delay={100}
          className="flex flex-col justify-center gap-6 sm:gap-8 px-7 sm:px-12 lg:px-14 xl:px-16 py-14 lg:py-20"
        >
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-orange">
            Upper West Side · New York City
          </p>

          <h1 className="font-serif text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-8xl leading-[0.88] tracking-tight text-navy">
            Paws<br />&amp;<br />Purrs
          </h1>

          <p className="text-lg sm:text-xl text-charcoal leading-relaxed max-w-sm">
            Pet care, errands, and whatever else you need,{" "}
            <span className="text-orange">right in your neighborhood.</span>
          </p>

          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xs">
            What started as a simple flyer in my building turned into something
            people actually rely on. I focused on being available on short
            notice and keeping prices reasonable.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#booking"
              className="px-7 py-3 bg-navy text-cream text-xs font-semibold uppercase tracking-widest hover:bg-navy-light transition-colors duration-200"
            >
              Book a Service
            </a>
            <a
              href="#services"
              className="px-7 py-3 border border-navy/50 text-navy text-xs font-semibold uppercase tracking-widest hover:bg-navy hover:text-cream transition-colors duration-200"
            >
              View Services
            </a>
          </div>

          <div className="pt-5 border-t border-cream-dark flex flex-col gap-1.5">
            <a
              href="tel:9179008924"
              className="text-sm text-muted hover:text-orange transition-colors duration-150"
            >
              917-900-8924
            </a>
            <a
              href="mailto:gregorylomyers@gmail.com"
              className="text-sm text-muted hover:text-orange transition-colors duration-150"
            >
              gregorylomyers@gmail.com
            </a>
            <p className="text-xs text-muted/70 italic mt-1">
              Available summers, winter break, and spring break — home from
              University of Florida.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
