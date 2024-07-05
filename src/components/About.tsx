import React, { useEffect, useRef } from 'react';

export default function About() {
  const bioRef = useRef<HTMLParagraphElement>(null);
  const hobbiesRef = useRef<HTMLParagraphElement>(null);

  function bioInView() {
    if (bioRef.current == null || hobbiesRef.current == null) return;
    bioRef.current.style.opacity = '1';
    hobbiesRef.current.style.opacity = '1';
  }

  function bioOutView() {
    if (bioRef.current == null || hobbiesRef.current == null) return;
    bioRef.current.style.opacity = '0';
    hobbiesRef.current.style.opacity = '0';
  }

  useEffect(() => {
    const bioObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) bioInView();
          else bioOutView();
        });
      },
      { threshold: 1 },
    );

    if (bioRef.current == null || hobbiesRef.current == null) return;
    bioObserver.observe(bioRef.current);
  }, []);

  return (
    <section
      id='about'
      className='mx-7xl relative mx-auto flex h-screen snap-start flex-col items-center justify-evenly px-5 text-center md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[10px] text-[#99d6ea] md:text-3xl'>
        About
      </h3>

      <div className='z-10 mt-10 space-y-4 md:px-10'>
        {/* Bio */}
        <div
          ref={bioRef}
          className='max-w-6xl text-left text-[#e1e7ec] opacity-0 transition-all delay-300 duration-1000 md:text-lg'
        >
          <span className='font-semibold text-[#fca6d1]'>{'background.'}</span>
          <br />
          <ul className='pl-4'>
            <li>
              🎓 I'm Anh, a recent computer science graduate from the University
              of Houston and an aspiring software engineer.
            </li>
            <li>
              💻 My technical experiences lie in fullstack web development,
              particularly in backend alley.
            </li>
          </ul>
        </div>

        {/* Hobbies */}
        <div
          ref={hobbiesRef}
          className='max-w-6xl text-left text-[#e1e7ec] opacity-0 transition-all delay-300 duration-1000 md:text-lg'
        >
          <span className='font-semibold text-[#fca6d1]'>{'hobbies.'}</span>
          <br />
          <ul className='pl-4'>
            <li>🏋️‍♂️ gym rat</li>
            <li>🐱 cat lover</li>
            <li>🎨 art and diy</li>
            <li>🚗 car and motorcycle enthusiast</li>
          </ul>
        </div>
      </div>

      <div className='absolute left-0 top-[30%] h-[300px] w-full -skew-y-6 bg-[#17182c] sm:h-[500px]'></div>
    </section>
  );
}
