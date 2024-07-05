import React from 'react';
import HeroCircles from './HeroCircles';
import { useTypewriter } from './useTypewriter';

export default function Hero() {
  const txts = ["hi, I'm Anh Tran", 'welcome!'];
  const { typed, text } = useTypewriter(txts);

  return (
    <section
      id='hero'
      className='flex h-screen snap-center flex-col items-center justify-center space-y-8 overflow-hidden text-center'
    >
      <div className='mt-60'>
        <h2 className='relative pb-5 text-xs uppercase tracking-[5px] text-[#fca6d1] sm:tracking-[10px] md:text-lg'>
          — Software Engineer —
        </h2>
        <HeroCircles />
        
        {/* Typewriter effect */}
        <h1>
          <span
            aria-label={text}
            className='cursor-blink text-3xl text-[#e1e7ec] '
          >
            {typed}
          </span>
        </h1>
      </div>
    </section>
  );
}
