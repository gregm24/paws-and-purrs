import FadeIn from "./FadeIn";

type ServiceData = {
  title: string;
  description: string;
  price: string;
};

const PET_SERVICES: ServiceData[] = [
  {
    title: "Dog Walking",
    description:
      "Daily or one-off walks around Lincoln Towers and Riverside Park. Your dog gets exercise, fresh air, and a familiar face.",
    price: "$18",
  },
  {
    title: "Cat Feeding",
    description:
      "I'll stop by, fill the bowl, refresh the water, and give them some attention. Perfect for travel or long work days.",
    price: "$18",
  },
  {
    title: "Pet Sitting",
    description:
      "30-minute in-home visits while you're away. Feeding, play time, and a check-in so you know everything's fine.",
    price: "$20",
  },
];

const NEIGHBORHOOD_SERVICES: ServiceData[] = [
  {
    title: "Errand Running",
    description:
      "Groceries, pharmacy pickups, dry cleaning, post office — whatever you need handled while you can't get out.",
    price: "Varies",
  },
  {
    title: "Organization",
    description:
      "Closets, storage units, home offices. I'll help you sort, declutter, and put things where they actually belong.",
    price: "Varies",
  },
  {
    title: "Computer Help",
    description:
      "Setup, troubleshooting, software questions, or just teaching you how to do something. Patient and clear, always.",
    price: "Varies",
  },
  {
    title: "Moving Help",
    description:
      "Loading boxes, moving furniture between rooms or to storage. I'm reliable, careful, and strong enough to actually be useful.",
    price: "Varies",
  },
  {
    title: "Tutoring",
    description:
      "Math, writing, general homework help. CS student, so especially good with anything technical or analytical.",
    price: "Varies",
  },
  {
    title: "Childcare",
    description:
      "Watching kids while you're out or working from home. Responsible, patient, and good with younger kids.",
    price: "Varies",
  },
];

function ServiceCard({ title, description, price }: ServiceData) {
  return (
    <div className="group h-36 sm:h-40 lg:h-44 bg-cream-dark hover:bg-navy transition-colors duration-300 cursor-default flex flex-col justify-end p-4 sm:p-5 overflow-hidden">
      <h3 className="font-serif text-lg sm:text-xl text-navy group-hover:text-white transition-colors duration-300 leading-tight">
        {title}
      </h3>
      <div className="mt-1.5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs text-white/75 leading-snug mb-1.5">{description}</p>
        <span className="text-sm font-semibold text-orange">{price}</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-8 lg:mb-10">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange mb-2">
            What I Do
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight">
            Services
          </h2>
        </FadeIn>

        {/* Pet Services */}
        <div className="mb-6 lg:mb-7">
          <FadeIn>
            <h3 className="font-serif text-lg sm:text-xl text-navy mb-3">
              Pet Services
            </h3>
          </FadeIn>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {PET_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Neighborhood Help */}
        <div>
          <FadeIn>
            <div className="mb-3">
              <h3 className="font-serif text-lg sm:text-xl text-navy">
                Neighborhood Help
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Not just a pet sitter.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {NEIGHBORHOOD_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 60}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <p className="text-center text-sm text-muted mt-8 lg:mt-10">
            Not sure if what you need is on the list?{" "}
            <a href="#booking" className="text-orange underline underline-offset-2">
              Just ask.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
