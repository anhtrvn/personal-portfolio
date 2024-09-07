import React, { useEffect, useRef } from 'react';
import profile from '../../../assets/images/profile.png';
import { starline } from '../../../assets/images/starline';
import SweTitle from '../../../assets/images/swe-title';

export default function Profile() {
  const profileRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const sweRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pfp = profileRef.current;

    const onAnimationEnd = () => {
      setTimeout(() => {
        if (!leftRef.current || !rightRef.current || !sweRef.current) return;
        leftRef.current?.classList.add('animate-pulse');
        rightRef.current?.classList.add('animate-pulse');
      }, 3000);

      if (!leftRef.current || !rightRef.current || !sweRef.current) return;
      leftRef.current.style.opacity = '1';
      rightRef.current.style.opacity = '1';
      sweRef.current.style.opacity = '1';
    };

    if (!pfp) return;
    pfp.classList.add('animate-profile');
    pfp.addEventListener('animationend', onAnimationEnd);

    return () => {
      if (!pfp) return;
      pfp.removeEventListener('animationend', onAnimationEnd);
    };
  }, []);

  return (
    <>
      <div
        className='flex items-center gap-4 text-secondary opacity-0 transition-opacity delay-300 duration-500 ease-in'
        ref={leftRef}>
        {starline.map((_, i) => (
          <React.Fragment key={i}>
            {starline[starline.length - 1 - i]}
          </React.Fragment>
        ))}
      </div>

      <img
        className='mx-auto h-40 w-40 rounded-full border-2 border-secondary object-contain'
        src={profile}
        alt='profile-picture'
        ref={profileRef}
      />

      <div
        className='flex items-center gap-4 text-secondary opacity-0 transition-opacity delay-300 duration-500 ease-in'
        ref={rightRef}>
        {starline.map((item, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>

      <div
        className='absolute uppercase opacity-0 transition-opacity duration-300 ease-in mb-4'
        ref={sweRef}>
        <SweTitle />
      </div>
    </>
  );
}
