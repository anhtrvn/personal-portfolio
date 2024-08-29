import React, { useEffect, useRef, useState } from 'react';
import profile from '../../assets/images/profile.png';

export default function Circles() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLImageElement>(null);

  const [pulse, setPulse] = useState(false);

  function animateCircles() {
    if (
      innerRef.current == null ||
      outerRef.current == null ||
      profileRef.current == null
    )
      return;
    profileRef.current.classList.add('show-profile');
    innerRef.current.classList.add('inner-circle');
    outerRef.current.classList.add('outer-circle');
  }

  useEffect(() => {
    setTimeout(() => {
      setPulse(true);
      if (innerRef.current == null || outerRef.current == null) return;
      outerRef.current.classList.remove('outer-circle');
      outerRef.current.classList.add('circle-pulse');
    }, 1000);

    animateCircles();
  }, []);

  return (
    <div className='relative flex justify-center items-center mt-64 max-w-6xl'>
      <img
        className='relative mx-auto h-40 w-40 rounded-full border-2 border-[#e1e7ec] object-contain'
        src={profile}
        alt='profile-picture'
        ref={profileRef}
      />
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
