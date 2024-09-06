import React, { useEffect, useRef } from 'react';
import Profile from './Profile';

const Circles: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onAnimationEnd = () => {
      if (!innerRef.current || !outerRef.current) return;
      outerRef.current.removeEventListener('animationend', onAnimationEnd);
      outerRef.current.style.height = '400px';
      outerRef.current.style.width = '400px';
      outerRef.current.classList.add('animate-pulse');
    };

    if (!innerRef.current || !outerRef.current) return;
    innerRef.current.classList.add('animate-inner-circle');
    outerRef.current.classList.add('animate-outer-circle');
    outerRef.current.addEventListener('animationend', onAnimationEnd);

    return () => {
      if (!innerRef.current || !outerRef.current) return;
      outerRef.current.removeEventListener('animationend', onAnimationEnd);
    };
  }, []);

  return (
    <div className='relative flex justify-center items-center'>
      <Profile />
      <div
        className='absolute mx-auto rounded-full border border-[#99d6ea]'
        ref={innerRef}
      />
      <div
        className='absolute mx-auto rounded-full border border-[#99d6ea]'
        ref={outerRef}
      />
    </div>
  );
};

export default Circles;
