import FadeIn from "./FadeIn";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-orange-pale paw-bg py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-orange text-sm font-medium px-4 py-2 rounded-full mb-5">
            <span>⭐</span>
            <span>What Neighbors Say</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-navy mb-5">
            Reviews
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Reviews from neighbors are coming soon. If you&apos;ve worked with
            me, I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={100} className="flex flex-col items-center gap-8">
          <div className="bg-white rounded-3xl px-12 py-14 text-center max-w-lg w-full shadow-sm">
            <div className="text-6xl mb-6">⭐</div>
            <p className="text-2xl font-semibold text-navy mb-3">
              Reviews coming soon
            </p>
            <p className="text-base text-muted">
              Check back after I&apos;ve had a chance to collect some from clients.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition-colors duration-150 shadow-sm text-lg"
          >
            <span>✏️</span>
            <span>Leave a Review</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
