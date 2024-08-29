import React from 'react';
import Card from './Card';
import { cardContents } from './cardContents';

export default function Experience() {
  return (
    <section className='m-auto flex items-center h-screen max-w-screen-2xl'>
      <div className='flex max-h-[75%] w-full snap-x snap-mandatory gap-5 overflow-x-scroll py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#fca6d1]'>
        {cardContents.map((content, i) => (
          <Card
            key={i}
            title={content.title}
            company={content.company}
            techs={content.techs}
            date={content.date}
            summaries={content.summaries}
          />
        ))}
      </div>
    </section>
  );
}
