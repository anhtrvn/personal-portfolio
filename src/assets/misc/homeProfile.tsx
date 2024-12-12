import React, { FC, SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMinus } from '@fortawesome/free-solid-svg-icons';

export const icons = [
  <FontAwesomeIcon icon={faMinus} />,
  <FontAwesomeIcon icon={faStar} size='xs' />,
];

const Swe: FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width='200' height='250' viewBox='0 0 200 200'>
      <defs>
        <path
          id='text-path'
          d='
            M 100, 100
            m -95, 0
            a 95,95 0 1,1 190,0
            a 95,95 0 1,1 -190,0
          '
        />
      </defs>

      <text
        fill='#fca6d1'
        fontSize='16'
        fontWeight='500'
        letterSpacing='2px'
        textAnchor='middle'>
        <textPath href='#text-path' startOffset='25%'>
          — Software Engineer —
        </textPath>
      </text>
    </svg>
  );
};

export default Swe;
