import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import AIEngineering from "@/components/AIEngineering";
import Architecture from "@/components/Architecture";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/ProjectCard";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <AIEngineering />
        <Architecture />
        <ExperienceTimeline />
        <Projects />
        <EngineeringPrinciples />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
