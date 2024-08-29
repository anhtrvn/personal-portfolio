import React from 'react';
import Circles from './Circles';
import { useTypewriter } from './useTypeWriter';

export default function Home() {
  const texts = ["hi, I'm Anh Tran", 'welcome!'];
  const { typed, text } = useTypewriter(texts);

  return (
    <section className='flex h-screen justify-center items-center text-center m-auto'>
      <div className='flex-col justify-center items-center space-y-8 m-auto'>
        <Circles />

        <h2 className='uppercase tracking-wider text-[#fca6d1] text-lg font-medium'>
          — Software Engineer —
        </h2>

        <h1 className='pt-14'>
          <span
            className='cursor-blink text-3xl text-[#e1e7ec]'
            aria-label={text}>
            {typed}
          </span>
        </h1>
      </div>
    </section>
  );
}
