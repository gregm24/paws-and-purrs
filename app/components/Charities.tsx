import FadeIn from "./FadeIn";
import CharityCard from "./CharityCard";

const CHARITIES = [
  {
    emoji: "🐾",
    name: "ASPCA",
    description:
      "The American Society for the Prevention of Cruelty to Animals — one of the world's leading animal welfare organizations, rescuing animals and fighting cruelty since 1866.",
    url: "https://www.aspca.org/donate",
  },
  {
    emoji: "🐕",
    name: "Humane Society of the United States",
    description:
      "Fighting to protect all animals through advocacy, rescue, and education. The largest animal protection organization in the country.",
    url: "https://www.humanesociety.org/donate",
  },
  {
    emoji: "🐈",
    name: "Best Friends Animal Society",
    description:
      "Working toward a world where no shelter pet is euthanized. Best Friends runs life-saving programs and no-kill shelters across the country.",
    url: "https://bestfriends.org/donate",
  },
];

export default function Charities() {
  return (
    <section id="charities" className="bg-cream-dark paw-bg py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-3 py-1.5 rounded-full mb-4">
            <span>❤️</span>
            <span>Give Back</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Causes Worth Supporting
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            If you care about animals as much as I do, these organizations are
            doing incredible work. Every dollar helps.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CHARITIES.map((c, i) => (
            <FadeIn key={c.name} delay={i * 120}>
              <CharityCard {...c} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
