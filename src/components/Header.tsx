import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import MobileNav from './MobileNav';

export default function Header() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  function showHeader() {
    if (rightRef.current == null || leftRef.current == null) return;
    rightRef.current.style.marginRight = '0px';
    leftRef.current.style.marginLeft = '0px';
    rightRef.current.style.opacity = '1';
    leftRef.current.style.opacity = '1';
  }

  useEffect(() => {
    showHeader();
  }, []);

  return (
    <header className='sticky pt-8 pb-2 top-0 bg-[#1b1d36] z-50'>
      {/* Desktop Nav */}
      <div className='hidden mx-auto lg:flex max-w-6xl justify-between items-center'>
        <div
          className='flex items-center gap-5 -ml-[100px] opacity-0 transition-all duration-700 ease-out'
          ref={leftRef}>
          <Link to='/' className='header-button text-[#fca6d1]'>
            anhtran.
          </Link>
        </div>

        <div
          className='flex items-center gap-5 -mr-[100px] opacity-0 transition-all duration-700 ease-out'
          ref={rightRef}>
          <Nav />

          <Link to='/contact' className='header-button text-[#fca6d1]'>
            contact.
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
}
