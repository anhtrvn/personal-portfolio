import React, { useEffect, useRef } from 'react';
import Profile from './Profile';
import CresentTitle from '../../../assets/images/cresent_title';

export default function Circles() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  function animateCircles() {
    if (innerRef.current === null || outerRef.current === null) return;
    innerRef.current.classList.add('inner-circle');
    outerRef.current.classList.add('outer-circle');
  }

  useEffect(() => {
    setTimeout(() => {
      if (outerRef.current === null || titleRef.current === null) return;
      outerRef.current.classList.remove('outer-circle');
      outerRef.current.classList.add('circle-pulse');
      titleRef.current.style.opacity = '1';
    }, 1000);

    animateCircles();
  }, []);

  return (
    <div className='relative flex justify-center items-center h-full'>
      <Profile />

      <div
        className='absolute uppercase opacity-0 transition-opacity delay-500 duration-500 ease-in mb-4'
        ref={titleRef}>
        <CresentTitle />
      </div>

      <div
        className='absolute mx-auto h-[150px] w-[150px] rounded-full border border-[#99d6ea]'
        ref={innerRef}
      />

      <div
        className='absolute mx-auto rounded-full border border-[#99d6ea]'
        ref={outerRef}
      />
    </div>
  );
}
