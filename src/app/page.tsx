import Image from "next/image";
import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject"
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject/>
      <Testimonial/>
    
    </>
  );
}
