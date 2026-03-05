import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Services from "@/src/components/sections/Services";
import Booking from "@/src/components/sections/Booking";

/*
Homepage

Combines all sections of the website.
*/

export default function Home() {
  return (
    <main>

      <Hero />

      <About />

      <Services />

      <Booking />

    </main>
  );
}