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
      <li
        key={index}
        className='relative group flex flex-col justify-center items-center rounded-xl bg-tertiary py-5 lg:py-8'>
        <div className='text-secondary text-4xl md:text-5xl lg:text-6xl mb-2 group-hover:text-accent-blue transition-colors'>
          {item.icon}
        </div>

        {/* Tooltip */}
        <div className='absolute bottom-full px-2 py-1 bg-secondary text-tertiary text-xs rounded tracking-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity'>
          {item.name}
        </div>
      </li>
    ))}
  </ul>
);

export default SkillMap;
