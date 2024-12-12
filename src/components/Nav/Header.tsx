import React, { useRef, useEffect } from 'react';
import { VscSparkleFilled } from 'react-icons/vsc';

import Brand from './components/Brand';
import Navbar from './Navbar';
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
    <header className='bg-primary sticky pt-10 pb-5 top-0 z-20'>
      <div className='container lg:flex-between xl:max-w-6xl'>
        <div className='header-container -ml-[100px]' ref={leftRef}>
          <Brand />
        </div>

        <div className='header-container -mr-[100px]' ref={rightRef}>
          <span className='hidden lg:inline-flex gap-1'>
            <Navbar className='items-center text-xl' />
            <VscSparkleFilled className='text-accent-pink rotate-180' />
          </span>

          <div className='lg:hidden'>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
