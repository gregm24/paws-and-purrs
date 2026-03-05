import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Services from "@/src/components/sections/Services";

/*
Homepage

Combines all main sections of the website.
*/

export default function Home() {
  return (
    <main>

      <Hero />

      <About />

      <Services />

    </main>
  );
}