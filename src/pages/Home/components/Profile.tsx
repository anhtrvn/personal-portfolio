import React, { useEffect, useRef, Fragment } from 'react';
import profile from '../../../assets/images/profile.png';
import Swe, { icons } from '../../../assets/misc/homeProfile';

const Profile = () => {
  const profileRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const sweRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      profileRef.current === null ||
      leftRef.current === null ||
      rightRef.current === null ||
      sweRef.current === null
    )
      return;

    const pfp = profileRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const swe = sweRef.current;

    left.style.opacity = '1';
    right.style.opacity = '1';
    swe.style.opacity = '1';

    const animationEnd = () => {
      left.classList.add('animate-pulse');
      right.classList.add('animate-pulse');
    };

    pfp.classList.add('animate-profile');
    pfp.addEventListener('animationend', animationEnd);

    return () => {
      pfp.removeEventListener('animationend', animationEnd);
    };
  }, []);

  return (
    <>
      <span className='profile-decor flex-center gap-4' ref={leftRef}>
        {icons.map((_, i) => (
          <Fragment key={i}>{icons[icons.length - 1 - i]}</Fragment>
        ))}
      </span>

      <img
        className='mx-auto h-40 w-40 rounded-full border-2 border-secondary object-contain'
        src={profile}
        alt='profile-picture'
        ref={profileRef}
      />

      <span className='profile-decor flex-center gap-4' ref={rightRef}>
        {icons.map((item, i) => (
          <Fragment key={i}>{item}</Fragment>
        ))}
      </span>

      <div className='absolute uppercase mb-4 profile-decor' ref={sweRef}>
        <Swe />
      </div>
    </>
  );
};

export default Profile;
