import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-cream-dark paw-bg py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <FadeIn
            direction="left"
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-navy flex items-center justify-center shadow-xl">
              <span className="text-cream text-5xl font-bold tracking-tight">
                GM
              </span>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn
            direction="right"
            delay={100}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-3 py-1.5 rounded-full w-fit">
              <span>👋</span>
              <span>About Greg</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
              Hey, I&apos;m Greg.
            </h2>

            <blockquote className="border-l-4 border-orange pl-4 text-lg italic text-charcoal">
              &ldquo;It started with a stack of flyers and a quiet hallway.&rdquo;
            </blockquote>

            <p className="text-base text-charcoal leading-relaxed">
              I&apos;m a sophomore studying Computer Science at the University of
              Florida, and when I&apos;m home in NYC — summers, winter break,
              spring break — I run Paws &amp; Purrs full time. The business
              started simply: I made a flyer, printed a stack of them, and
              slid one under every door in my building at Lincoln Towers on the
              Upper West Side.
            </p>

            <p className="text-base text-charcoal leading-relaxed">
              People called. Then they called back. Then they told their
              neighbors. What started as dog walking grew into something more:
              cat feeding, pet sitting, errands, computer help, tutoring,
              moving assistance, childcare. Real neighbors with real needs,
              and I genuinely enjoy helping.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Upper West Side", "Lincoln Towers", "Since 2023", "UF CS Student"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-navy bg-white border border-cream-dark px-3 py-1.5 rounded-full"
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
