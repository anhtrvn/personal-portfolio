import React from 'react';
import { projectCards } from './components/content';
import Card from './components/Card';

const multiSpan = (i: number) => {
  if (i === 0 || i === 3) {
    return 'lg:col-span-2';
  }
  if (i === projectCards.length - 1) {
    return 'md:col-span-2 lg:col-span-3';
  }
  return 'col-span-1';
};

const Projects = () => {
  return (
    <section className=''>
      <div className='project-container'>
        {projectCards.map((card, i) => (
          <a
            key={i}
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
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
