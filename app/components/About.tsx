import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-cream-dark paw-bg py-16 sm:py-20 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Photo */}
          <FadeIn
            direction="left"
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[200px] sm:max-w-xs lg:max-w-sm aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/home.jpeg"
                alt="Greg Myers"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn
            direction="right"
            delay={100}
            className="order-1 lg:order-2 flex flex-col gap-5 sm:gap-8"
          >
            <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-4 py-2 rounded-full w-fit">
              <span>👋</span>
              <span>About Greg</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Hey, I&apos;m Greg.
            </h2>

            <blockquote className="border-l-4 border-orange pl-5 text-base sm:text-xl italic text-charcoal">
              &ldquo;Available on short notice with affordable prices.&rdquo;
            </blockquote>

            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              I’m a junior studying Computer Science at the University of Florida. When I’m home in NYC, I’m usually out around the city with friends, playing basketball, or riding Citi Bike and exploring different parts of the city. I’ve always liked staying active and not wasting time sitting around.
            </p>

            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              During Covid, when I had a lot more free time, I decided to start Paws &amp; Purrs. I focused on being available on short notice and keeping prices reasonable, which helped me stand out. Over time, I built relationships with a lot of pets and their owners, and it turned into something people actually rely on. I’m really grateful for that and for all the dogs and cats I’ve gotten to know.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Upper West Side", "Lincoln Towers", "Since 2021", "UF CS Student"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium text-navy bg-white border border-cream-dark px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
