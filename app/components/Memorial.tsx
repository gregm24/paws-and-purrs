import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Memorial() {
  return (
    <section className="bg-cream-dark py-28 lg:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <p className="text-orange text-sm font-medium tracking-widest uppercase mb-4">
            Always Remembered
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
            In Loving Memory of Cheddar and Leo
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            { name: "Cheddar", src: "/images/cheddar.jpeg" },
            { name: "Leo", src: "/images/leo.jpeg" },
          ].map((pet, i) => (
            <FadeIn key={pet.name} delay={i * 150}>
              <div className="flex flex-col items-center gap-5">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={pet.src}
                    alt={pet.name}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <p className="text-2xl font-semibold text-navy">{pet.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
