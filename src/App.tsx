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
    <div className='scrollbar-track-transparent scrollbar-thin scrollbar-thumb-[#99d6ea] h-screen w-screen snap-y snap-mandatory overflow-auto bg-[#1b1d36] font-mono'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
