import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Services from "@/src/components/sections/Services";
import Booking from "@/src/components/sections/Booking";
import Reviews from "@/src/components/sections/Reviews";
import Gallery from "@/src/components/sections/Gallery";
import Charities from "@/src/components/sections/Charities";
import Future from "@/src/components/sections/Future";

/*
Homepage
*/

export default function Home() {

  return (

    <main>

      <Hero />

      <About />

      <Services />

      <Booking />

      <Reviews />

      <Gallery />

      <Charities />

      <Future />

    </main>

  );
}