import React, { useRef, useEffect } from 'react';
import Circles from './components/Circles';
import Socials from '../../components/Nav/Socials';
import { useTypewriter } from '../../components/ui/useTypewriter';

const Home = () => {
  const { typed } = useTypewriter(["hi, I'm Anh Tran", 'welcome!']);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    navRef.current.style.opacity = '1';
  }, []);

  return (
    <section className='h-full flex justify-center items-center'>
      <div className='container flex flex-col items-center space-y-24'>
        <div className='flex flex-col space-y-10'>
          <Circles />
          <div
            className='z-10 opacity-0 transition-opacity delay-[2.7s] duration-300 ease-in'
            ref={navRef}>
            <Socials />
          </div>
        </div>
        <h1 className='text-3xl text-secondary text-center'>
          <span className='cursor-blink' aria-label={typed}>
            {typed}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Home;
