import React, { useEffect, useRef } from 'react';
import HeroCircles from './HeroCircles';
import { useTypewriter } from './useTypewriter';

export default function Hero() {
  const txts = [
    'hi, I\'m Anh Tran',
    'welcome!',
  ];

  const { typed, text } = useTypewriter(txts);
  const pfpRef = useRef<HTMLImageElement>(null);

  function onLoadhero() {
    if (pfpRef.current == null) return;
    pfpRef.current.classList.add('load-pfp');
  }

  useEffect(() => {
    onLoadhero();
  }, []);

  return (
    <section
      id='hero'
      className='flex h-screen snap-center flex-col items-center justify-center space-y-8 overflow-hidden text-center'
    >
      {/* Profile */}
      <img
        ref={pfpRef}
        className='relative mt-20 sm:mt-10 z-20 mx-auto h-40 w-40 rounded-full border-4 border-double border-[#e1e7ec] bg-[#1b1d36] object-cover'
        src='https://cdn.discordapp.com/attachments/468879354299154432/1240431160270786631/image0.png?ex=6646890a&is=6645378a&hm=d6acbf4d917d8ab5848f974c5e813357b708acfbb58714bde63246c7cc5d1f62&'
      />

      <div>
        <h2 className=' pb-5 text-xs uppercase tracking-[10px] text-[#fca6d1] md:text-lg'>
          — Software Engineer —
        </h2>

        <HeroCircles />

        {/* Typewriter effect */}
        <h1>
          <span aria-label={text} className='cursor-blink text-3xl text-[#e1e7ec] '>
            {typed}
          </span>
        </h1>
      </div>
    </section>
  );
}
