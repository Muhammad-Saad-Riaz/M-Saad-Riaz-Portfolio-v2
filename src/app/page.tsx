import Image from "next/image";
import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject"
import Testimonial from "@/components/sections/Testimonial";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects"
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject/>
      <Experience/>
      <Testimonial/>
      <About/>
      <Projects/>
      <Process/>
      <TechStack/>
      <Contact/>
    </>
  );
}
