import React, { useEffect, useRef } from 'react';
import profile from '../../../assets/images/profile.png';
import { starLine } from '../../../assets/images/star_line';

export default function Profile() {
  const profileRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  function animateCircles() {
    if (profileRef.current === null) return;
    profileRef.current.classList.add('show-profile');
  }

  useEffect(() => {
    setTimeout(() => {
      if (leftRef.current === null || rightRef.current === null) return;
      leftRef.current.style.opacity = '1';
      rightRef.current.style.opacity = '1';
    }, 1000);

    setTimeout(() => {
      if (leftRef.current === null || rightRef.current === null) return;

      leftRef.current.classList.add('animate-pulse');
      rightRef.current.classList.add('animate-pulse');
    }, 3000);

    animateCircles();
  }, []);

  return (
    <>
      <div
        className='text-[#e1e7ec] m-auto opacity-0 transition-opacity delay-1000 duration-500 ease-in flex items-center gap-4'
        ref={leftRef}>
        {starLine.map((_, i) => (
          <React.Fragment key={i}>
            {starLine[starLine.length - 1 - i]}
          </React.Fragment>
        ))}
      </div>

      <img
        className='mx-auto h-40 w-40 rounded-full border-2 border-[#e1e7ec] object-contain'
        src={profile}
        alt='profile-picture'
        ref={profileRef}
      />

      <div
        className='text-[#e1e7ec] m-auto opacity-0 transition-opacity delay-1000 duration-500 ease-in flex items-center gap-4'
        ref={rightRef}>
        {starLine.map((item, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>
    </>
  );
}
