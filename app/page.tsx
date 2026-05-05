import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Charities from "./components/Charities";
import FutureGoal from "./components/FutureGoal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Services />
        <Booking />
        <Reviews />
        <Gallery />
        <Charities />
        <FutureGoal />
      </main>
    </>
  );
}
