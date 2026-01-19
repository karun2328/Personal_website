import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FocusAreas />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}