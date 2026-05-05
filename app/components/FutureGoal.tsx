export default function FutureGoal() {
  return (
    <section id="future-goal" className="bg-navy py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-orange text-sm font-medium px-3 py-1.5 rounded-full w-fit">
            <span>🌍</span>
            <span>The Vision</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Where This Is Headed
          </h2>

          <blockquote className="border-l-4 border-orange pl-6 text-2xl sm:text-3xl font-medium text-white/90 leading-snug italic">
            &ldquo;What if the job and the adventure were the same thing?&rdquo;
          </blockquote>

          <div className="flex flex-col gap-5 text-white/70 leading-relaxed">
            <p>
              Long term, I want to take Paws &amp; Purrs beyond the Upper West
              Side — beyond New York, honestly. The vision is simple: travel
              the world, stay in people&apos;s homes, and care for their animals
              while they&apos;re away. House sitting and pet care as a way of
              life, not just a summer gig.
            </p>
            <p>
              I&apos;m studying Computer Science at the University of Florida,
              and I want to build the tools that make this kind of trust-based,
              personal pet care scalable — not by turning it into a faceless
              app, but by making it easier to find someone like me in whatever
              neighborhood you live in.
            </p>
            <p>
              For now, I&apos;m here on the Upper West Side, doing the work
              myself and learning everything I can. Every client, every animal,
              every neighbor who calls — that&apos;s the foundation of something
              bigger. I&apos;m in no rush. The journey is the point.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {["🗺️ Travel", "🏠 House Sitting", "🐾 Global Pet Care", "💻 Built on CS"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-white/60 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
