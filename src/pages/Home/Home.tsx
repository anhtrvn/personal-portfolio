import React from 'react';
import Circles from './components/Circles';
import Socials from './components/Socials';
import { useTypewriter } from './components/useTypeWriter';

export default function Home() {
  const texts = ["hi, I'm Anh Tran", 'welcome!'];
  const { typed, text } = useTypewriter(texts);

  return (
    <section className='flex flex-col h-full w-full justify-center items-center text-center space-y-24'>
      <div className='relative flex flex-col space-y-10'>
        <Circles />

        <div className='inset-x-0 z-10'>
          <Socials />
        </div>
      </div>

      <h1 className='w-[350px]'>
        <span
          className='cursor-blink text-3xl text-[#e1e7ec]'
          aria-label={text}>
          {typed}
        </span>
      </h1>
    </section>
  );
}
