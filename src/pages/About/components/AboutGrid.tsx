import React, { ReactElement, FC } from 'react';
import TabGrid from '../../../components/ui/tab/TabGrid';

interface AboutMapProps {
  items: { title: string; description: ReactElement; image: string }[];
  className?: string;
}

const AboutGrid: FC<AboutMapProps> = ({ items, className }) => (
  <TabGrid
    items={items}
    gridClass='grid-cols-2 md:grid-cols-3'
    liClass={className}
    renderItems={(item) => (
      <>
        <div className='li-content'>
          <div className='text-4xl md:text-5xl lg:text-6xl space-x-2'>
            {item.image}
          </div>
          <div className='text-sm md:text-base lg:text-lg text-center'>
            {item.title}
          </div>
        </div>
        <div className='li-popup'>{item.description}</div>
      </>
    )}
  />
);

export default AboutGrid;
