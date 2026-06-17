import { Hero } from "@/components/sections/Hero";
import { ScrollReveal } from "@/components/sections/ScrollReveal";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { VideoSection } from "@/components/sections/VideoSection";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { BlogTeaser } from "@/components/sections/BlogTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal />
      <Projects limit={5} />
      <Services />
      <VideoSection />
      <Stats />
      <Testimonials />
      <Faq />
      <BlogTeaser />
    </>
  );
}
