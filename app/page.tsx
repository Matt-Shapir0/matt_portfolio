import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}