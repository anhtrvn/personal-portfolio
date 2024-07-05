import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from './experienceData';

export default function Experience() {
  return (
    <section
      id='experience'
      className='relative mx-auto flex h-screen w-screen snap-start flex-col items-center justify-evenly overflow-hidden px-5 text-center'
    >
      <h3 className='absolute top-24 text-center text-2xl uppercase tracking-[10px] text-[#99d6ea] md:text-3xl'>
        Experience
      </h3>

      <div className='z-20 flex max-h-[75%] w-full snap-x snap-mandatory space-x-5 overflow-x-scroll pt-24 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#fca6d1]'>
        {experienceData.map((experience, i) => (
          <ExperienceCard
            key={i}
            title={experience.title}
            company={experience.company}
            techs={experience.techs}
            date={experience.date}
            summaries={experience.summaries}
          />
        ))}
      </div>
    </section>
  );
}
