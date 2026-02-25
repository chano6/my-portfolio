import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Intro from "@/components/intro/Intro";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
