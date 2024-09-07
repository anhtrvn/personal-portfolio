import React from 'react';
import { projectCards } from './components/projectCards';
import Card from './components/Card';

export default function Projects() {
  return (
    <section className='h-full flex justify-center items-center'>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[18rem] gap-6 max-w-6xl lg:px-16'>
        {projectCards.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            date={card.date}
            techs={card.techs}
            description={card.description}
            imgUrl={card.image}
            className={i === 0 || i === 3 ? 'lg:col-span-2' : 'col-span-1'}
          />
        ))}
      </div>
    </section>
  );
}
