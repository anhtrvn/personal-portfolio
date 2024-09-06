import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <header className='sticky pt-8 pb-5 top-0 bg-primary mx-auto z-50'>
      <div className='container lg:flex max-w-6xl justify-between items-center'>
        <div
          className='-ml-[100px] opacity-0 transition-all duration-700 ease-out'
          ref={leftRef}>
          <Link
            to='/'
            className='button-nav font-semibold text-3xl text-accent-pink hover:text-secondary'>
            anhtran.
          </Link>
        </div>

        <div
          className='-mr-[100px] opacity-0 transition-all duration-700 ease-out'
          ref={rightRef}>
          {/* Desktop nav */}
          <Nav className='hidden lg:flex items-center text-lg' />

          {/* Mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
