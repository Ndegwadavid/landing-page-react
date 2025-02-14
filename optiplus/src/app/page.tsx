import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
