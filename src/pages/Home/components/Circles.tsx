import React, { useEffect, useRef } from 'react';
import Profile from './Profile';

const Circles: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;

    const onAnimationEnd = () => {
      if (!inner || !outer) return;
      outer.removeEventListener('animationend', onAnimationEnd);
      outer.style.height = '400px';
      outer.style.width = '400px';
      outer.classList.add('animate-pulse');
    };

    if (!inner || !outer) return;
    inner.classList.add('animate-inner-circle');
    outer.classList.add('animate-outer-circle');
    outer.addEventListener('animationend', onAnimationEnd);

    return () => {
      if (!inner || !outer) return;
      outer.removeEventListener('animationend', onAnimationEnd);
    };
  }, []);

  return (
    <div className='relative flex justify-center items-center'>
      <Profile />
      <div
        className='absolute mx-auto rounded-full border border-accent-blue'
        ref={innerRef}
      />
      <div
        className='absolute mx-auto rounded-full border border-accent-blue'
        ref={outerRef}
      />
    </div>
  );
};

export default Circles;
