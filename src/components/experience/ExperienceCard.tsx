import React from 'react';

type ExperienceData = {
  title: string | React.ReactNode;
  company: string | React.ReactNode;
  techs: string[];
  date: string;
  summaries: React.ReactNode[];
};

export default function ExperienceCard({
  title,
  company,
  techs,
  date,
  summaries,
}: ExperienceData) {
  return (
    <article className='card group'>
      <div className='px-0 md:px-10'>
        <h4 className='pb-5 text-3xl tracking-tight text-[#fca6d1]'>{title}</h4>
        <p className='-mt-3'>{company}</p>
        <p className='py-2 uppercase text-[#e1e7ec]/60'>{date}</p>
      </div>
      <ul className='ml-5 list-disc space-y-4 text-left'>
        {summaries.map((summary, j) => (
          <li key={j}>{summary}</li>
        ))}
      </ul>
      <div className='mb-2 mt-4 flex max-w-full flex-wrap items-center justify-center text-[#99d6ea]'>
        {techs.map((tech, i) => (
          <span key={i} className='px-1'>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
