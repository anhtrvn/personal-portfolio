import React from 'react';

interface Skill {
  icon: React.ReactElement;
  name: string;
}

interface SkillMapProps {
  items: Skill[];
}

const SkillMap: React.FC<SkillMapProps> = ({ items }) => (
  <ul className='grid grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6'>
    {items.map((item, index) => (
      <li key={index} className='group rounded-xl bg-tertiary'>
        <div className='relative flex flex-col justify-center items-center shadow-lg transform transition-all group-hover:scale-105 group-hover:shadow-xl py-5 lg:py-8'>
          <div className='text-accent-blue text-4xl md:text-5xl lg:text-6xl mb-2 group-hover:text-secondary transition-colors'>
            {item.icon}
          </div>

          {/* Tooltip */}
          <div className='absolute bottom-full px-2 py-1 bg-secondary text-primary text-xs rounded tracking-wide opacity-0 group-hover:opacity-100 transition-opacity'>
            {item.name}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default SkillMap;
