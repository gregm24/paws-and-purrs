import FadeIn from "./FadeIn";
import ServiceCard from "./ServiceCard";

const PET_SERVICES = [
  {
    icon: "🐕",
    title: "Dog Walking",
    description:
      "Daily or one-off walks around Lincoln Towers and Riverside Park. Your dog gets exercise, fresh air, and a familiar face.",
    price: "$18",
  },
  {
    icon: "🐈",
    title: "Cat Feeding",
    description:
      "I'll stop by, fill the bowl, refresh the water, and give them some attention. Perfect for travel or long work days.",
    price: "$18",
  },
  {
    icon: "🏠",
    title: "Pet Sitting",
    description:
      "30-minute in-home visits while you're away. Feeding, play time, and a check-in so you know everything's fine.",
    price: "$20",
  },
];

const NEIGHBORHOOD_SERVICES = [
  {
    icon: "🛍️",
    title: "Errand Running",
    description:
      "Groceries, pharmacy pickups, dry cleaning, post office — whatever you need handled while you can't get out.",
    price: "Varies",
  },
  {
    icon: "📦",
    title: "Organization",
    description:
      "Closets, storage units, home offices. I'll help you sort, declutter, and put things where they actually belong.",
    price: "Varies",
  },
  {
    icon: "💻",
    title: "Computer Help",
    description:
      "Setup, troubleshooting, software questions, or just teaching you how to do something. Patient and clear, always.",
    price: "Varies",
  },
  {
    icon: "📦",
    title: "Moving Help",
    description:
      "Loading boxes, moving furniture between rooms or to storage. I'm reliable, careful, and strong enough to actually be useful.",
    price: "Varies",
  },
  {
    icon: "📚",
    title: "Tutoring",
    description:
      "Math, writing, general homework help. CS student, so especially good with anything technical or analytical.",
    price: "Varies",
  },
  {
    icon: "👶",
    title: "Childcare",
    description:
      "Watching kids while you're out or working from home. Responsible, patient, and good with younger kids.",
    price: "Varies",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream paw-bg py-16 sm:py-20 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-4 py-2 rounded-full mb-5">
            <span>✨</span>
            <span>What I Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-5">
            Services
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            From pets to people — I help with whatever life throws at you.
          </p>
        </FadeIn>

        {/* Pet Services */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-navy mb-5 sm:mb-8 flex items-center gap-2">
            <span>🐾</span> Pet Services
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {PET_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Neighborhood Help */}
        <div>
          <div className="flex items-start gap-4 mb-5 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy flex items-center gap-2">
                <span>🏙️</span> Neighborhood Help
              </h3>
              <p className="text-base text-muted mt-2">
                This is what sets Paws &amp; Purrs apart — I&apos;m not just a
                pet sitter.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {NEIGHBORHOOD_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>

        <p className="text-center text-base text-muted mt-14">
          Not sure if what you need is on the list?{" "}
          <a href="#booking" className="text-orange underline underline-offset-2">
            Just ask.
          </a>
        </p>
      </div>
    </section>
  );
}
