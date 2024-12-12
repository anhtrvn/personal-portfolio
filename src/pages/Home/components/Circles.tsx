import React, { useEffect, useRef } from 'react';
import Profile from './Profile';

const Circles: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerRef.current === null || outerRef.current === null) return;

    const inner = innerRef.current;
    const outer = outerRef.current;

    inner.classList.add('animate-inner-circle');
    outer.classList.add('animate-outer-circle');

    const animationEnd = () => {
      outer.removeEventListener('animationend', animationEnd);
      outer.style.height = '400px';
      outer.style.width = '400px';
      outer.classList.add('animate-pulse');
    };

    outer.addEventListener('animationend', animationEnd);

    return () => {
      outer.removeEventListener('animationend', animationEnd);
    };
  }, []);

  return (
    <div className='relative flex-center'>
      <Profile />
      <div className='circle' ref={innerRef} />
      <div className='circle' ref={outerRef} />
    </div>
  );
};

export default Circles;
