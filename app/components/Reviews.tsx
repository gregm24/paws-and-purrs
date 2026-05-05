import FadeIn from "./FadeIn";
import ReviewForm from "./ReviewForm";

function PlaceholderCard() {
  return (
    <div className="bg-white/60 rounded-2xl p-6 border border-cream-dark flex flex-col gap-3">
      <div className="flex gap-0.5 mb-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-3 bg-cream-dark rounded w-full" />
        <div className="h-3 bg-cream-dark rounded w-5/6" />
        <div className="h-3 bg-cream-dark rounded w-3/4" />
      </div>
      <div className="h-3 bg-cream-dark rounded w-1/3 mt-1" />
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-orange-pale paw-bg py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-14">
          <div className="inline-flex items-center gap-2 bg-white text-orange text-sm font-medium px-4 py-2 rounded-full mb-5">
            <span>⭐</span>
            <span>Reviews</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-navy">
            What Neighbors Say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          {/* Left 1/3: form */}
          <FadeIn direction="left" className="flex flex-col gap-6">
            <p className="text-base text-charcoal/70 leading-relaxed">
              Worked with me? I&apos;d love to hear from you — reviews help
              neighbors find someone they can trust.
            </p>
            <ReviewForm />
          </FadeIn>

          {/* Right 2/3: placeholder cards */}
          <FadeIn direction="right" delay={150} className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
            </div>
            <p className="text-sm text-muted text-center mt-6">
              Reviews will appear here once submitted
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
