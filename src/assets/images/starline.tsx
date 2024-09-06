import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const starline = [
  <span>——</span>,
  <FontAwesomeIcon icon={faStar} size='xs' />,
  <FontAwesomeIcon icon={faStar} size='sm' />,
];

type StarLineProps = {
  className?: string;
};

export const SingleStarLine: React.FC<StarLineProps> = ({ className = '' }) => {
  return (
    <div
      className={`flex justify-center items-center gap-4 text-secondary ${className}`}>
      {starline.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
      {starline.map((_, index) => (
        <React.Fragment key={index}>
          {starline[starline.length - 1 - index]}
        </React.Fragment>
      ))}
    </div>
  );
};
