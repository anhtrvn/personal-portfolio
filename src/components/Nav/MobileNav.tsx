import React, { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { icons } from '../../assets/misc/homeProfile';

import Sheet from '../ui/sheet/Sheet';
import Brand from './components/Brand';
import Navbar from './Navbar';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMobileNav = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <button
        onClick={toggleMobileNav}
        className='absolute top-12 right-10 button-icon text-secondary'>
        <FontAwesomeIcon icon={faBars} size='xl' />
      </button>

      <Sheet isOpen={isOpen} toggle={toggleMobileNav}>
        <div className='flex flex-col items-end gap-10 px-5'>
          <Brand onClick={toggleMobileNav} />

          <span className='flex-center gap-10'>
            <span className='flex-center gap-4'>
              {Array.from({ length: 3 }, (_, i) => (
                <Fragment key={i}>
                  {icons.map((icon, i) => (
                    <Fragment key={i}>{icons[icons.length - 1 - i]}</Fragment>
                  ))}
                </Fragment>
              ))}
            </span>
          </span>

          <Navbar
            className='flex-col items-end text-2xl'
            onClick={toggleMobileNav}
          />
        </div>
      </Sheet>
    </>
  );
};

export default MobileNav;
