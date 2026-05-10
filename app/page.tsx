export const revalidate = 60;

import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Memorial from "./components/Memorial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Spacer matches fixed nav height: h-14+pill on mobile, h-20+pill on sm, h-20 on md+ */}
      <div className="h-[101px] sm:h-[125px] md:h-20" aria-hidden="true" />
      <main className="flex flex-col">
        <HeroAbout />
        <Services />
        <Booking />
        <Reviews />
        <Memorial />
      </main>
      <Footer />
    </>
  );
}
