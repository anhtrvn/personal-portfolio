import React, { useEffect, useRef, useState } from 'react';

export default function HeroCircles() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [animPulse, setAnimPulse] = useState(false);

  function onLoadCircles() {
    if (innerRef.current == null || outerRef.current == null) return;
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
    <div className='relative z-0 flex items-center justify-center'>
      <div
        ref={innerRef}
        className='absolute -mt-[295px] h-[150px] rounded-full border border-[#99d6ea] md:-mt-[320px] md:h-[170px]
        md:w-[170px]'
      ></div>
      <div
        ref={outerRef}
        className='absolute -mt-[295px] rounded-full border border-[#99d6ea]'
      ></div>
    </div>
  );
}
