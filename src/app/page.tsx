import Image from "next/image";
import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject"
import Testimonial from "@/components/sections/Testimonial";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects"
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject/>
      <Testimonial/>
      <About/>
      <Projects/>
      <Process/>
    
    </>
  );
}
