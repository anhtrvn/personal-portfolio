import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniSparkles } from 'react-icons/hi2';
import { VscSparkleFilled } from 'react-icons/vsc';

import Nav from './Nav';
import MobileNav from './MobileNav';

const Header: React.FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function showHeader() {
      if (leftRef.current && rightRef.current) {
        rightRef.current.style.marginRight = '0px';
        rightRef.current.style.opacity = '1';
        leftRef.current.style.marginLeft = '0px';
        leftRef.current.style.opacity = '1';
      }
    }

    showHeader();
  }, []);

  return (
    <header className='sticky pt-8 pb-5 top-0 bg-primary z-50'>
      <div className='container lg:flex max-w-6xl justify-between items-center'>
        <div
          className='-ml-[100px] opacity-0 transition-all duration-700 ease-out inline-flex gap-1'
          ref={leftRef}>
          <HiMiniSparkles className='text-accent-pink text-xl' />
          <Link
            to='/'
            className='button-nav font-semibold text-3xl text-secondary'>
            anhtran
          </Link>
        </div>

        <div
          className='-mr-[100px] opacity-0 transition-all duration-700 ease-out'
          ref={rightRef}>
          {/* Desktop nav */}
          <div className='hidden lg:inline-flex gap-1'>
            <Nav className='items-center text-xl' />
            <VscSparkleFilled className='text-accent-pink transform rotate-180' />
          </div>

          {/* Mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
