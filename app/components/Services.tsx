"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

type ServiceData = {
  title: string;
  description: string;
  price: string;
  image: string;
  alwaysShowPrice?: boolean;
};

const PET_SERVICES: ServiceData[] = [
  {
    title: "Dog Walking",
    description:
      "Daily or one-off walks around Lincoln Towers and Riverside Park. Your dog gets exercise, fresh air, and a familiar face.",
    price: "$18",
    image: "/images/dogwalking.webp",
    alwaysShowPrice: true,
  },
  {
    title: "Cat Feeding",
    description:
      "I'll stop by, fill the bowl, refresh the water, and give them some attention. Perfect for travel or long work days.",
    price: "$18",
    image: "/images/catsitting.png",
    alwaysShowPrice: true,
  },
  {
    title: "Pet Sitting",
    description:
      "30-minute in-home visits while you're away. Feeding, play time, and a check-in so you know everything's fine.",
    price: "$20",
    image: "/images/petsitting.webp",
    alwaysShowPrice: true,
  },
];

const NEIGHBORHOOD_SERVICES: ServiceData[] = [
  {
    title: "Errand Running",
    description:
      "Groceries, pharmacy pickups, dry cleaning, post office — whatever you need handled while you can't get out.",
    price: "Varies",
    image: "/images/errand.webp",
  },
  {
    title: "Organization",
    description:
      "Closets, storage units, home offices. I'll help you sort, declutter, and put things where they actually belong.",
    price: "Varies",
    image: "/images/organization.webp",
  },
  {
    title: "Computer Help",
    description:
      "Setup, troubleshooting, software questions, or just teaching you how to do something. Patient and clear, always.",
    price: "Varies",
    image: "/images/computerhelp.jpg",
  },
  {
    title: "Moving Help",
    description:
      "Loading boxes, moving furniture between rooms or to storage. I'm reliable, careful, and strong enough to actually be useful.",
    price: "Varies",
    image: "/images/movinghelp.jpg",
  },
  {
    title: "Tutoring",
    description:
      "Math, writing, general homework help. CS student, so especially good with anything technical or analytical.",
    price: "Varies",
    image: "/images/tutoring.jpg",
  },
  {
    title: "Childcare",
    description:
      "Watching kids while you're out or working from home. Responsible, patient, and good with younger kids.",
    price: "Varies",
    image: "/images/childcare.jpg",
  },
];

function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceData;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col sm:hidden">
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white text-lg"
        aria-label="Close"
      >
        ✕
      </button>

      <div className="relative z-10 mt-auto p-8 pb-12">
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange mb-3">
          Service
        </p>
        <h2 className="font-serif text-5xl text-white leading-tight mb-5">
          {service.title}
        </h2>
        <p className="text-white/80 text-base leading-relaxed mb-6">
          {service.description}
        </p>
        <span className="text-2xl font-semibold text-orange">{service.price}</span>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  onMoreClick,
}: {
  service: ServiceData;
  onMoreClick: () => void;
}) {
  const { title, description, price, image, alwaysShowPrice } = service;
  return (
    <div
      className="group relative h-36 sm:h-40 lg:h-44 overflow-hidden transition-transform duration-500 hover:scale-[1.02] cursor-pointer sm:cursor-default"
      onClick={onMoreClick}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
      />
      <div className="absolute inset-0 bg-navy/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-navy/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5">
        <h3 className="font-serif text-xs sm:text-xl text-white leading-tight line-clamp-2">
          {title}
        </h3>
        {alwaysShowPrice && (
          <span className="text-[11px] sm:text-sm font-semibold text-orange mt-0.5 sm:mt-1">
            {price}
          </span>
        )}
        {/* Desktop hover-reveal */}
        <div className="hidden sm:block mt-1 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs text-white/75 leading-snug mb-1.5">{description}</p>
          {!alwaysShowPrice && (
            <span className="text-sm font-semibold text-orange">{price}</span>
          )}
        </div>

        {/* Mobile tap hint */}
        <p className="sm:hidden text-[10px] text-white/40 mt-1">Tap for info</p>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceData | null>(null);

  const handleMoreClick = (service: ServiceData) => {
    if (window.innerWidth < 640) setActiveService(service);
  };

  return (
    <section id="services" className="bg-white py-12 lg:py-16">
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-8 lg:mb-10">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange mb-2">
            What I Do
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight">
            Services
          </h2>
        </FadeIn>

        <div className="mb-6 lg:mb-7">
          <FadeIn>
            <h3 className="font-serif text-lg sm:text-xl text-navy mb-3">
              Pet Services
            </h3>
          </FadeIn>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {PET_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <ServiceCard service={s} onMoreClick={() => handleMoreClick(s)} />
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn>
            <div className="mb-3">
              <h3 className="font-serif text-lg sm:text-xl text-navy">
                Neighborhood Help
              </h3>
              <p className="text-xs text-muted mt-0.5">Not just a pet sitter.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {NEIGHBORHOOD_SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 60}>
                <ServiceCard service={s} onMoreClick={() => handleMoreClick(s)} />
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
