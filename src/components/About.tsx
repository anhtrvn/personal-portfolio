import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  function bioInView() {
    if (headerRef.current == null || bioRef.current == null) return;
    headerRef.current.style.marginLeft = '0px';
    headerRef.current.style.opacity = '1';
    bioRef.current.style.opacity = '1';
  }

  function bioOutView() {
    if (headerRef.current == null || bioRef.current == null) return;
    headerRef.current.style.marginLeft = '-400px';
    headerRef.current.style.opacity = '0';
    bioRef.current.style.opacity = '0';
  }

  useEffect(() => {
    const bioObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) bioInView();
          else bioOutView();
        });
      },
      {
        threshold: 1,
      },
    );
    if (headerRef.current == null || bioRef.current == null) return;
    bioObserver.observe(bioRef.current);
  }, []);

  return (
    <section
      id='about'
      className='mx-7xl relative mx-auto flex h-screen snap-start flex-col items-center justify-evenly px-5 text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-[#99d6ea] md:text-3xl'>
        About
      </h3>

      <div className='z-10 space-y-10 md:px-10'>
        <h4
          ref={headerRef}
          className='mt-20 sm:mt-auto sm:-ml-[400px] text-2xl font-semibold text-[#99d6ea] opacity-0 transition-all delay-300 duration-1000 md:text-3xl'
        >
          <FontAwesomeIcon icon={faBookmark} className='pr-4' />a{' '}
          <span className='group relative'>
            <span className='relative z-10 delay-100 hover:text-[#1b1d36]'>
              bit
            </span>
            <div className='highlighter'></div>
          </span>{' '}
          about me
        </h4>

        {/* Bio */}
        <p
          ref={bioRef}
          className='text-base opacity-0 transition-all delay-300 duration-1000 md:text-lg max-w-6xl'
        >
          <span className='text-xl font-semibold text-[#fca6d1]'>{'<>'}</span>
          <br />
          I'm Anh, a recent computer science graduate from the University of
          Houston, passionate about pursuing a career as a software engineer. My
          technical experiences lie in fullstack web development, particularly
          in backend alley. Outside of productivity, I'm a gym rat and cat
          lover. Striving for growth is the driving force behind everything I
          do.
          <br />
          <span className='text-xl font-semibold text-[#fca6d1]'>{'</>'}</span>
        </p>
      </div>

      <div className='absolute left-0 top-[30%] h-[300px] sm:h-[500px] w-full -skew-y-6 bg-[#17182c]'></div>
    </section>
  );
}
