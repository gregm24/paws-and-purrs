import ReviewCard from "./ReviewCard";

const REVIEWS = [
  {
    name: "Margaret T.",
    location: "Lincoln Towers, 19th Floor",
    quote:
      "Greg walked my golden retriever Bailey every morning for two weeks while I was traveling for work. So reliable, sent me photos, and Bailey adores him. Didn't think twice about booking again.",
    stars: 5,
  },
  {
    name: "David & Priya S.",
    location: "Upper West Side",
    quote:
      "We left for a work trip and Greg checked in on our cats every single day. Sent us photos, let us know if anything seemed off. Total peace of mind the whole time.",
    stars: 5,
  },
  {
    name: "Carol W.",
    location: "Lincoln Towers, 7th Floor",
    quote:
      "He helped me set up my new laptop and was incredibly patient the whole time. I had no idea what I was doing. He explained everything clearly and never made me feel silly for asking.",
    stars: 5,
  },
  {
    name: "James R.",
    location: "Upper West Side",
    quote:
      "Greg helped me move boxes between my apartment and the building storage unit. Showed up exactly on time, worked hard, and charged a fair price. Would absolutely call him again.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-orange-pale py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-orange text-sm font-medium px-3 py-1.5 rounded-full mb-4">
            <span>⭐</span>
            <span>What Neighbors Say</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Reviews
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Real clients from the neighborhood. Every review is from someone
            I&apos;ve worked with personally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
