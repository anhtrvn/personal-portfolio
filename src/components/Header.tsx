import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const homeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  function onLoadHeader() {
    if (contactRef.current == null || homeRef.current == null) return;
    contactRef.current.style.marginRight = '0px';
    homeRef.current.style.marginLeft = '0px';
    contactRef.current.style.opacity = '1';
    homeRef.current.style.opacity = '1';
  }

  useEffect(() => {
    onLoadHeader();
  }, []);

  return (
    <header className='sticky top-0 z-50 bg-[#1b1d36] p-5 '>
      <section className='mx-auto sm:flex max-w-6xl justify-between items-center'>
        {/* Home buttons */}
        <div
          ref={homeRef}
          className='-ml-[100px] flex flex-row items-center space-x-2 md:space-x-4 opacity-0 transition-all duration-1000'
        >
          <a href='#hero'>
            <p className='hidden sm:inline-flex header-button text-[#fca6d1]'>anhtran.</p>
          </a>
          <a href='#about'>
            <button className='header-button'>about</button>
          </a>
          <a href='#skills'>
            <button className='header-button'>skills</button>
          </a>
          <a href='#experience'>
            <button className='header-button'>experience</button>
          </a>
        </div>

        {/* Contact */}
        <div
          ref={contactRef}
          className='-mr-[100px] flex cursor-pointer flex-row items-center space-x-2 opacity-0 transition-all duration-1000'
        >
          <a href='#contact'>
            <p className='header-button hidden sm:inline-flex text-[#fca6d1]'>contact.</p>
          </a>
          <a href='https://www.linkedin.com/in/anh-tran-12b233233/'>
            <FontAwesomeIcon icon={faLinkedin} size='xl' className='header-icon' />
          </a>
          <a href='https://github.com/anhtrvn'>
            <FontAwesomeIcon icon={faGithub} size='xl' className='header-icon' />
          </a>
        </div>
      </section>
    </header>
  );
}
