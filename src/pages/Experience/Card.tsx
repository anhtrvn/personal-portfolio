import React from 'react';

interface cardContents {
  title: string | React.ReactNode;
  company: string | React.ReactNode;
  techs: string[];
  date: string;
  summaries: React.ReactNode[];
}

export default function ExperienceCard({
  title,
  company,
  techs,
  date,
  summaries,
}: cardContents) {
  return (
    <article className='group p-10 max-h-full w-full md:w-[700px] xl:w-[900px] flex-col flex-shrink-0 items-center snap-center text-center overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent bg-[#17182c] rounded-lg border border-[#17182c] hover:border-[#e1e7ec]'>
      <div className='flex-col pb-2 space-y-2'>
        <h1 className='pb-2 text-2xl text-[#fca6d1]'>{title}</h1>
        <h2 className='text-[#e1e7ec]'>{company}</h2>
        <h3 className='uppercase text-[#e1e7ec]/60'>{date}</h3>
      </div>

      <ul className='list-disc pl-2 pb-4 space-y-4 text-left text-[#e1e7ec]'>
        {summaries.map((summary, j) => (
          <li key={j}>{summary}</li>
        ))}
      </ul>

      <div className='flex items-center justify-center text-[#99d6ea] flex-wrap'>
        {techs.map((tech, i) => (
          <span key={i} className='px-1'>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
