import React from 'react';

const CresentTitle: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width='200' height='200' viewBox='0 0 200 200'>
      <defs>
        <path
          id='text-path'
          d='
            M 100, 100
            m -90, 0
            a 90,90 0 1,1 180,0
            a 90,90 0 1,1 -180,0
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

export default CresentTitle;
