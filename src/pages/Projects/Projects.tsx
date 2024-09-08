import React from 'react';
import { projectCards } from './components/projectCards';
import Card from './components/Card';

const multiSpan = (i: number) => {
  if (i === 0 || i === 3) {
    return 'lg:col-span-2';
  } else if (i === projectCards.length - 1) {
    return 'lg:col-span-3';
  } else {
    return 'col-span-1';
  }
};

export default function Projects() {
  return (
    <section className='flex justify-center items-center w-full h-full overflow-hidden pb-8'>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[18rem] gap-6 max-w-5xl h-full overflow-y-scroll scroller'>
        {projectCards.map((card, i) => (
          <a
            href={card.source}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={card.title}
            className={multiSpan(i)}>
            <Card
              key={i}
              title={card.title}
              date={card.date}
              techs={card.techs}
              description={card.description}
              imgUrl={card.image}
              srcUrl={card.source}
              className='cursor-pointer'
            />
          </a>
        ))}
      </div>
    </section>
  );
}
