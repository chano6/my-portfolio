"use client";

import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Intro from "@/components/intro/Intro";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { useState } from "react";

export default function HomeClient() {
  const [isIntroDone, setIsIntroDone] = useState(false);

  if (!isIntroDone) {
    return <Intro onComplete={() => setIsIntroDone(true)} />;
  }

  return (
    <>
      <Header />
      <div>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
