import Image from "next/image";
import FadeIn from "./FadeIn";

export default function FutureGoal() {
  return (
    <section id="future-goal" className="bg-navy paw-bg-dark py-16 sm:py-20 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          {/* Image */}
          <FadeIn direction="left" className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/futuregoal.jpeg"
              alt="The vision for Paws & Purrs"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>

          {/* Text */}
          <div className="flex flex-col gap-6 sm:gap-10">
            <FadeIn className="inline-flex items-center gap-2 bg-white/10 text-orange text-sm font-medium px-4 py-2 rounded-full w-fit">
              <span>🌍</span>
              <span>The Vision</span>
            </FadeIn>

            <FadeIn delay={80}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Where This Is Headed
              </h2>
            </FadeIn>

            <FadeIn delay={160}>
              <blockquote className="border-l-4 border-orange pl-6 text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 leading-snug italic">
                &ldquo;What if the job and the adventure were the same thing?&rdquo;
              </blockquote>
            </FadeIn>

            <FadeIn delay={240} className="flex flex-col gap-6 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                I want to take Paws &amp; Purrs beyond the Upper West Side and eventually beyond New York. The goal is to travel and stay in different places while taking care of people’s pets when they’re away.
              </p>
             
              <p>
                I’m studying Computer Science at the University of Florida, and I’m interested in building tools that make it easier to find reliable pet care locally. For now I’m on the Upper West Side doing the work myself and getting experience with each client.
              </p>
            </FadeIn>

            <FadeIn delay={320} className="flex flex-wrap gap-3 pt-2">
              {["🗺️ Travel", "🏠 House Sitting", "🐾 Global Pet Care", "💻 Built on CS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium text-white/60 bg-white/10 border border-white/10 px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
