import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniSparkles } from 'react-icons/hi2';

type LinkProps = {
  onClick?: () => void;
};

const Brand: React.FC<LinkProps> = ({ onClick }) => {
  return (
    <span className='inline-flex gap-1'>
      <HiMiniSparkles className='text-accent-pink text-xl' />
      <Link
        to='/'
        onClick={onClick}
        className='button-nav font-semibold text-4xl text-secondary'>
        anh
      </Link>
    </span>
  );
};

export default Brand;
