import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HiMiniSparkles } from 'react-icons/hi2';

import Sheet from '../ui/Sheet';
import Nav from './Nav';
import { SingleStarLine } from '../../assets/starline';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMobileNav = () => setIsOpen((prevState) => !prevState);

  return (
    <div className='lg:hidden'>
      <button
        onClick={toggleMobileNav}
        className='button-icon absolute top-8 right-5 text-secondary'>
        <FontAwesomeIcon icon={faBars} size='xl' />
      </button>

      <Sheet isOpen={isOpen} toggle={toggleMobileNav}>
        <nav className='flex flex-col items-end gap-10'>
          <div className='inline-flex gap-1'>
            <HiMiniSparkles className='text-accent-pink text-xl' />
            <Link
              to='/'
              className='button-nav font-semibold text-4xl text-secondary'
              onClick={toggleMobileNav}>
              anhtran
            </Link>
          </div>

          <SingleStarLine />

          <Nav
            className='flex-col items-end text-2xl'
            onClick={toggleMobileNav}
          />
        </nav>
      </Sheet>
    </div>
  );
};

export default MobileNav;
