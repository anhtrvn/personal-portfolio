import React from 'react';

interface CardProps {
  title: string;
  date: string;
  description: string[];
  techs: {
    icon: React.ReactElement;
    name: string;
  }[];
  imgUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  techs,
  imgUrl,
  className = '',
}) => {
  return (
    <div
      className={`${className} group flex flex-col justify-between h-full gap-4 rounded-xl p-4 bg-tertiary shadow-lg transform transition-all hover:scale-105 hover:shadow-xl`}>
      <img
        src={imgUrl}
        alt={`${title} cover`}
        className='w-full object-cover min-h-24 rounded-lg shadow-md'
      />

      {/* Content */}
      <div className='text-secondary space-y-1'>
        {/* Title and Date */}
        <span className='flex justify-between items-center leading-normal'>
          <h5 className='font-semibold tracking-wide text-accent-blue group-hover:text-accent-pink'>
            {title}
          </h5>
          <h6 className='uppercase font-light text-xs text-secondary/50 text-right'>
            {date}
          </h6>
        </span>

        {/* Description */}
        <div className='text-xs leading-normal'>
          {description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>

        {/* Tech Icons */}
        <div className='flex flex-wrap gap-1 text-2xl group-hover:text-accent-blue text-secondary'>
          {techs.map((tech, i) => (
            <span
              key={i}
              className='flex items-center justify-center p-1 rounded-lg'
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
