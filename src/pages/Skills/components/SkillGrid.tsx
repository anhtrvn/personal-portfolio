import React, { ReactElement, FC } from 'react';
import TabGrid from '../../../components/ui/tab/TabGrid';

interface SkillGridProps {
  items: { icon: ReactElement; name: string }[];
}

const SkillGrid: FC<SkillGridProps> = ({ items }) => (
  <TabGrid
    items={items}
    gridClass='grid-cols-2 md:grid-cols-4'
    renderItems={(item) => (
      <>
        <div className='li-content'>
          <div className='text-accent-blue text-4xl md:text-5xl lg:text-6xl mb-2 group-hover:text-secondary transition-colors'>
            {item.icon}
          </div>
        </div>
        <div className='li-popup'>{item.name}</div>
      </>
    )}
  />
);

export default SkillGrid;
