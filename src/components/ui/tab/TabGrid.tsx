import React, { ReactNode, ReactElement, FC } from 'react';

interface TabGridProps {
  items: any[];
  gridClass?: string;
  liClass?: string;
  renderItems: (item: any, index: number) => ReactNode;
}

const TabGrid: FC<TabGridProps> = ({
  items,
  gridClass,
  liClass,
  renderItems,
}) => (
  <ul className={`ul-grid ${gridClass}`}>
    {items.map((item, i) => (
      <li key={i} className={`group ${liClass}`}>
        <div className='li-container'>{renderItems(item, i)}</div>
      </li>
    ))}
  </ul>
);

export default TabGrid;
