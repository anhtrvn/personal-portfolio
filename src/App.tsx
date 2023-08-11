import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth bg-[#282c34] text-white">
      <Header />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
