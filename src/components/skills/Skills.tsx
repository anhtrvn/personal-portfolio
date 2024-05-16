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
      className='relative mx-auto flex h-screen snap-center flex-col items-center justify-center text-center px-5 md:text-left xl:flex-row xl:space-y-0 xl:px-10'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-[#99d6ea] md:text-3xl'>
        Skills
      </h3>

      <div className='z-10 grid grid-cols-3 max-w-6xl gap-0 md:gap-3 md:grid-cols-8 overflow-auto p-4 items-center justify-center'>
        {skillData.map((skill, i) => (
          <div key={i} className='skill group py-1'>
            {skill}
          </div>
        ))}
      </div>
      <div className='absolute left-0 top-[30%] h-[300px] sm:h-[500px] w-full skew-y-6 bg-[#17182c]'></div>
    </section>
  );
}
