import React from 'react';

interface AboutMe {
  title: string;
  description: React.ReactElement;
  image: string;
}

interface AboutMapProps {
  items: AboutMe[];
  className?: string;
}

const AboutMap: React.FC<AboutMapProps> = ({ items, className }) => (
  <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6'>
    {items.map((item, i) => (
      <li key={i} className={`${className} group rounded-xl bg-tertiary`}>
        <div className='relative flex flex-col justify-center items-center shadow-lg transform transition-all group-hover:scale-105 group-hover:shadow-xl py-5 lg:py-8 h-full'>
          <div className='flex flex-col justify-between items-center text-accent-blue group-hover:text-secondary transition-colors px-5 gap-2'>
            <div className='text-4xl md:text-5xl lg:text-6xl space-x-2'>
              {item.image}
            </div>
            <div className='text-sm md:text-base lg:text-lg text-center'>
              {item.title}
            </div>
          </div>

          {/* Tooltip */}
          <div className='absolute bottom-full px-2 py-1 bg-secondary text-primary text-xs rounded tracking-wide opacity-0 group-hover:opacity-100 transition-opacity'>
            {item.description}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default AboutMap;
