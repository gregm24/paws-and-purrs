import FadeIn from "./FadeIn";
import ReviewForm from "./ReviewForm";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-orange-pale paw-bg py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: copy */}
          <FadeIn direction="left" className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 bg-white text-orange text-sm font-medium px-4 py-2 rounded-full w-fit">
              <span>⭐</span>
              <span>Leave a Review</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-navy leading-tight">
              Share Your Experience
            </h2>

            <p className="text-lg text-charcoal/70 leading-relaxed">
              If I&apos;ve walked your dog, fed your cat, helped with an errand
              — I&apos;d love to hear from you. Reviews help neighbors find
              someone they can trust.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {[
                ["🐾", "Pet care & neighborhood help"],
                ["📍", "Upper West Side & Lincoln Towers"],
                ["📞", "917-900-8924"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-base text-charcoal/50"
                >
                  <span className="text-lg">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={150}>
            <ReviewForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
