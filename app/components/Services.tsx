import Image from "next/image";
import FadeIn from "./FadeIn";

type ServiceData = {
  title: string;
  description: string;
  price: string;
  image: string;
};

const PET_SERVICES: ServiceData[] = [
  {
    title: "Dog Walking",
    description:
      "Daily or one-off walks around Lincoln Towers and Riverside Park. Your dog gets exercise, fresh air, and a familiar face.",
    price: "$18",
    image: "/images/Rufus.jpeg",
  },
  {
    title: "Cat Feeding",
    description:
      "I'll stop by, fill the bowl, refresh the water, and give them some attention. Perfect for travel or long work days.",
    price: "$18",
    image: "/images/Oliver.jpeg",
  },
  {
    title: "Pet Sitting",
    description:
      "30-minute in-home visits while you're away. Feeding, play time, and a check-in so you know everything's fine.",
    price: "$20",
    image: "/images/Bobo.jpeg",
  },
];

const NEIGHBORHOOD_SERVICES: ServiceData[] = [
  {
    title: "Errand Running",
    description:
      "Groceries, pharmacy pickups, dry cleaning, post office — whatever you need handled while you can't get out.",
    price: "Varies",
    image: "/images/Hugo.jpeg",
  },
  {
    title: "Organization",
    description:
      "Closets, storage units, home offices. I'll help you sort, declutter, and put things where they actually belong.",
    price: "Varies",
    image: "/images/Brooklyn.jpeg",
  },
  {
    title: "Computer Help",
    description:
      "Setup, troubleshooting, software questions, or just teaching you how to do something. Patient and clear, always.",
    price: "Varies",
    image: "/images/Gin.jpeg",
  },
  {
    title: "Moving Help",
    description:
      "Loading boxes, moving furniture between rooms or to storage. I'm reliable, careful, and strong enough to actually be useful.",
    price: "Varies",
    image: "/images/Ribeye.jpeg",
  },
  {
    title: "Tutoring",
    description:
      "Math, writing, general homework help. CS student, so especially good with anything technical or analytical.",
    price: "Varies",
    image: "/images/Lexi.jpeg",
  },
  {
    title: "Childcare",
    description:
      "Watching kids while you're out or working from home. Responsible, patient, and good with younger kids.",
    price: "Varies",
    image: "/images/Slurpee.jpeg",
  },
];

function ImageServiceCard({ title, description, price, image }: ServiceData) {
  return (
    <div className="group relative overflow-hidden aspect-[3/4] transition-transform duration-500 hover:scale-[1.02]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
      />
      {/* Gradient overlay — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
      {/* Hover overlay — dims photo on hover */}
      <div className="absolute inset-0 bg-navy/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <h3 className="font-serif text-xl sm:text-2xl text-white leading-tight">
          {title}
        </h3>
        {/* Revealed on hover */}
        <div className="mt-2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs sm:text-sm text-white/80 leading-snug mb-2">
            {description}
          </p>
          <span className="text-sm font-semibold text-orange">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-orange mb-4">
            What I Do
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-navy leading-tight">
            Services
          </h2>
        </FadeIn>

        {/* Pet Services */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <FadeIn>
            <h3 className="font-serif text-2xl sm:text-3xl text-navy mb-6 sm:mb-8 pb-4 border-b border-cream-dark">
              Pet Services
            </h3>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {PET_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <ImageServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Neighborhood Help */}
        <div>
          <FadeIn>
            <div className="mb-3 pb-4 border-b border-cream-dark">
              <h3 className="font-serif text-2xl sm:text-3xl text-navy">
                Neighborhood Help
              </h3>
              <p className="text-sm text-muted mt-1">
                This is what sets Paws &amp; Purrs apart — I&apos;m not just a
                pet sitter.
              </p>
            </div>
          </FadeIn>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {NEIGHBORHOOD_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <ImageServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <p className="text-center text-sm text-muted mt-14">
            Not sure if what you need is on the list?{" "}
            <a
              href="#booking"
              className="text-orange underline underline-offset-2"
            >
              Just ask.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
