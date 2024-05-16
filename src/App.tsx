import React from 'react';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import About from './components/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Contact from './components/Contact';
import './index.css';

export default function App() {
  return (
    <div className='font-mono h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth bg-[#1b1d36] text-white'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
