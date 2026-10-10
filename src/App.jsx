import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Causes from "./components/Causes.jsx";
import Volunteers from "./components/Volunteers.jsx";
import Events from "./components/Events.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Blog from "./components/Blog.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import { useGsapAnimations } from "./hooks/useGsapAnimations.js";

export default function App() {
  // Registers all scroll + entrance animations (see hooks/useGsapAnimations.js)
  useGsapAnimations();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Causes />
        <Volunteers />
        <Events />
        <Stats />
        <Testimonials />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
