import FadeIn from "./FadeIn";
import GalleryCard from "./GalleryCard";

const PETS = [
  {
    name: "Pookah",
    breed: "Cat",
    description:
      "A fluffy tabby with an enormous personality. Pookah is very clear about when it's feeding time and will absolutely let you know.",
    color: "#F5E8D0",
  },
  {
    name: "Bobo",
    breed: "Dog",
    description:
      "A golden mix who lives for Riverside Park. Bobo has never met a stranger and makes every walk feel like an adventure.",
    color: "#FDE8D8",
  },
  {
    name: "Oliver",
    breed: "Cat",
    description:
      "Shy at first, but once Oliver decides you're okay, you've made a friend for life. He's got a purr loud enough to hear from the hallway.",
    color: "#E8EFF8",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream paw-bg py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-4 py-2 rounded-full mb-5">
            <span>📷</span>
            <span>The Regulars</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-navy mb-5">
            Friends I&apos;ve Cared For
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Every animal I work with becomes a real connection — not just a
            job. Here are a few of the regulars.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {PETS.map((pet, i) => (
            <FadeIn key={pet.name} delay={i * 120}>
              <GalleryCard {...pet} />
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-base text-muted mt-14">
          Photos coming soon — real ones, not stock.
        </p>
      </div>
    </section>
  );
}
