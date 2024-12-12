import React, { ReactElement, FC } from 'react';

interface CardProps {
  title: string;
  date: string;
  description: string[];
  techs: {
    icon: ReactElement;
    name: string;
  }[];
  imgUrl: string;
  srcUrl: string;
  className?: string;
}

const Card: FC<CardProps> = ({
  title,
  date,
  description,
  techs,
  imgUrl,
  srcUrl,
}) => {
  return (
    <div className='group project-card'>
      <img
        src={imgUrl}
        alt={`${title} cover`}
        className='object-cover w-full min-h-24 rounded-lg'
      />

      <div className='text-secondary space-y-1'>
        <span className='flex-between leading-normal'>
          <h5 className='font-semibold tracking-wide text-accent-blue group-hover:text-accent-pink'>
            {title}
          </h5>
          <h6 className='uppercase font-light text-xs text-secondary/50 text-right'>
            {date}
          </h6>
        </span>

        <div className='text-xs leading-normal'>
          {description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>

        <div className='flex flex-wrap gap-1 text-2xl group-hover:text-accent-blue text-secondary'>
          {techs.map((tech, i) => (
            <span
              key={i}
              className='flex-center pt-1 rounded-lg'
              title={tech.name}>
              {tech.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
