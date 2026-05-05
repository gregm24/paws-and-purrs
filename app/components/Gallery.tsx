"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PETS = [
  { name: "Gin", src: "/images/Gin.jpeg" },
  { name: "Bobo", src: "/images/bobo.jpeg" },
  { name: "Hugo", src: "/images/hugo.jpeg" },
  { name: "Lexi", src: "/images/lexi.jpeg" },
  { name: "Luke & Leia", src: "/images/lukeleia.jpeg" },
  { name: "Millie", src: "/images/millie.JPG" },
  { name: "Oliver", src: "/images/oliver.jpeg" },
  { name: "Pookah", src: "/images/pookah.JPG" },
  { name: "Ribeye", src: "/images/ribeye.jpeg" },
  { name: "Rufus", src: "/images/rufus.jpeg" },
  { name: "Slurpee", src: "/images/slurpee.jpeg" },
  { name: "Brooklyn", src: "/images/brooklyn.jpeg" },
];

// Pair pets: cell i shows PETS[i*2] and PETS[i*2+1] alternating
function GalleryCell({ pairIndex, staggerMs }: { pairIndex: number; staggerMs: number }) {
  const petA = PETS[pairIndex * 2];
  const petB = PETS[pairIndex * 2 + 1];
  const [showA, setShowA] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setShowA((prev) => !prev);
          setVisible(true);
        }, 900);
      }, 7000);
      return () => clearInterval(interval);
    }, staggerMs);
    return () => clearTimeout(timeout);
  }, [staggerMs]);

  const pet = showA ? petA : petB;

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={pet.src}
        alt={pet.name}
        fill
        className={`object-cover transition-opacity duration-900 ${visible ? "opacity-100" : "opacity-0"}`}
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span
        className={`absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow transition-opacity duration-900 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {pet.name}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream paw-bg py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-pale text-orange text-sm font-medium px-4 py-2 rounded-full mb-5">
            <span>📷</span>
            <span>The Regulars</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-navy mb-5">
            Friends I&apos;ve Cared For
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Every animal I work with becomes a real connection — not just a job.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <GalleryCell key={i} pairIndex={i} staggerMs={i * 1200} />
          ))}
        </div>
      </div>
    </section>
  );
}
