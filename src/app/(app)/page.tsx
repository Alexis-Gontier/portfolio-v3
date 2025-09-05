import SectionWrapper from "@/components/layout/section-wrapper";
import Banner from "@/components/ui/banner";

import Hero from "@/components/section/hero/hero";
import About from "@/components/section/about/about";
import Skills from "@/components/section/skills/skills";
import Formations from "@/components/section/formations/formations";
import Experiences from "@/components/section/experiences/experiences";
import Projects from "@/components/section/projects/projects";
import Contact from "@/components/section/contact/contact";

export default function Page() {
  return (
    <>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <Banner title="about" direction={1} />
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <Banner title="skills" direction={-1} />
      <SectionWrapper>
        <Skills />
      </SectionWrapper>
      <Banner title="experiences" direction={1} />
      <SectionWrapper>
        <Experiences />
      </SectionWrapper>
      <Banner title="formations" direction={-1} />
      <SectionWrapper>
        <Formations />
      </SectionWrapper>
      <Banner title="projects" direction={1} />
      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      <Banner title="contact" direction={-1} />
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </>
  )
}
