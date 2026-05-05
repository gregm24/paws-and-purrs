import ServiceCard from "./ServiceCard";

const PET_SERVICES = [
  {
    icon: "🐕",
    title: "Dog Walking",
    description:
      "Daily or one-off walks around Lincoln Towers and Riverside Park. Your dog gets exercise, fresh air, and a familiar face.",
    price: "$15",
  },
  {
    icon: "🐈",
    title: "Cat Feeding",
    description:
      "I'll stop by, fill the bowl, refresh the water, and give them some attention. Perfect for travel or long work days.",
    price: "$15",
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
    <section id="services" className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-3 py-1.5 rounded-full mb-4">
            <span>✨</span>
            <span>What I Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Services
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From pets to people — I help with whatever life throws at you.
          </p>
        </div>

        {/* Pet Services */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
            <span>🐾</span> Pet Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PET_SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Neighborhood Help */}
        <div>
          <div className="flex items-start gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                <span>🏙️</span> Neighborhood Help
              </h3>
              <p className="text-sm text-muted mt-1">
                This is what sets Paws &amp; Purrs apart — I&apos;m not just a
                pet sitter.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEIGHBORHOOD_SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted mt-10">
          Not sure if what you need is on the list?{" "}
          <a href="#booking" className="text-orange underline underline-offset-2">
            Just ask.
          </a>
        </p>
      </div>
    </section>
  );
}
