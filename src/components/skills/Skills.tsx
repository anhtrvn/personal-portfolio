import React, { useEffect } from 'react';
import { skillData } from './skillData';

export default function Skills() {
  useEffect(() => {
    const skills = document.querySelectorAll<HTMLDivElement>('.skill');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('bounce-show', entry.isIntersecting);
      });
    });

    skills.forEach((skill) => {
      skillObserver.observe(skill);
    });
  }, []);

  return (
    <section
      id='skills'
      className='relative mx-auto flex h-screen snap-center flex-col items-center justify-center px-5 text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[10px] text-[#99d6ea] md:text-3xl'>
        Skills
      </h3>

      <div className='z-10 grid max-w-6xl grid-cols-3 items-center justify-center gap-0 overflow-auto p-4 md:grid-cols-8 md:gap-3'>
        {skillData.map((skill, i) => (
          <div key={i} className='skill group py-1'>
            {skill}
          </div>
        ))}
      </div>
      <div className='absolute left-0 top-[30%] h-[300px] w-full skew-y-6 bg-[#17182c] sm:h-[500px]'></div>
    </section>
  );
}
