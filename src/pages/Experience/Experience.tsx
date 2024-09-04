import React from 'react';
import { expList } from './expList';
import ExpCard from './ExpCard';

export default function Experience() {
  return (
    <section className='m-auto flex justify-center items-center h-full max-w-screen-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:auto-rows-[18rem] gap-4 max-w-6xl mx-auto'>
        {expList.map((card, i) => (
          <ExpCard
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
