import React, { useRef, useEffect } from 'react';
import Circles from './components/Circles';
import Socials from '../../components/Nav/components/Socials';
import { useTypewriter } from '../../components/ui/effects/useTypewriter';

const Home = () => {
  const { typed } = useTypewriter(["hi, I'm Anh Tran", 'welcome!']);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current === null) return;
    navRef.current.style.opacity = '1';
  }, []);

  return (
    <section>
      <div className='container flex-center flex-col h-full gap-y-24'>
        <div className='flex flex-col space-y-10'>
          <Circles />
          <div className='z-10 profile-decor' ref={navRef}>
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
