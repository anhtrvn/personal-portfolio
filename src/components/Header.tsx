import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Socials from './Socials';

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
    <header className='sticky p-5 top-0 bg-[#1b1d36] z-50'>
      <div className='mx-auto flex max-w-6xl justify-between items-center'>
        <div
          className='flex items-center -ml-[100px] opacity-0 transition-all duration-1000 space-x-4'
          ref={leftRef}>
          <Link to='/' className='header-button text-[#fca6d1]'>
            anhtran.
          </Link>

          <Nav />
        </div>

        <div
          className='flex items-center -mr-[100px] opacity-0 transition-all duration-1000 space-x-4'
          ref={rightRef}>
          <Link to='/contact' className='header-button text-[#fca6d1]'>
            contact.
          </Link>

          <Socials />
        </div>
      </div>
      </div>
    </header>
  );
}
