import React, { useEffect, useRef, useState } from 'react';
import image0 from '../../icons/image0.png';

export default function HeroCircles() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const pfpRef = useRef<HTMLImageElement>(null);
  const [animPulse, setAnimPulse] = useState(false);
  
  function onLoadCircles() {
    if (innerRef.current == null || outerRef.current == null || pfpRef.current == null) return;
    pfpRef.current.classList.add('load-pfp');
    innerRef.current.classList.add('load-inner-circle');
    outerRef.current.classList.add('load-outer-circle');
  }
  
  setTimeout(() => {
    setAnimPulse(true);
    if (innerRef.current == null || outerRef.current == null) return;
    outerRef.current.classList.remove('load-outer-circle');
    outerRef.current.classList.add('pulse-circle');
  }, 1000);

  useEffect(() => {
    onLoadCircles();
  }, []);

  return (
    <div className='relative flex items-center justify-center'>
      <img
        ref={pfpRef}
        className='relative z-10 mx-auto -mt-[295px] h-40 w-40 rounded-full border-4 border-double border-[#e1e7ec] bg-[#1b1d36] object-cover md:-mt-[320px]'
        src={image0}
        alt='profile picture'
      />
      <div
        ref={innerRef}
        className='absolute -mt-[295px] h-[150px] w-[150px] rounded-full border border-[#99d6ea] md:-mt-[320px] md:h-[170px] md:w-[170px]'
      ></div>
      <div
        ref={outerRef}
        className='absolute -mt-[295px] rounded-full border border-[#99d6ea]'
      ></div>
    </div>
  );
}
