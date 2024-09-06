import React from 'react';
import { projectCards } from './components/projectCards';
import Card from './components/Card';

export default function Projects() {
  return (
    <section className='flex justify-center items-center h-full max-w-screen-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:auto-rows-[18rem] gap-4 max-w-6xl mx-auto'>
        {projectCards.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            date={card.date}
            techs={card.techs}
            description={card.description}
            imgUrl={card.image}
          />
        ))}
      </div>
    </section>
  );
}
