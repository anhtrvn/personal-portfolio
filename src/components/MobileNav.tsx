import React, { useEffect, useState } from 'react';
import Sheet from './Sheet';
import { Link, NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { starLine } from '../assets/images/star_line';

const links = [
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'skills',
    path: '/skills',
  },
  {
    name: 'experience',
    path: '/experience',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hiddenw-full'>
      <button
        onClick={toggleMobileNav}
        className='absolute top-4 right-0 px-5 text-[#e1e7ec] '>
        <FontAwesomeIcon icon={faBars} size='xl' />
      </button>

      <Sheet isOpen={isOpen} toggle={toggleMobileNav}>
        <nav className='flex flex-col gap-8 justify-center items-center space-y-4'>
          <Link
            to='/'
            className='header-button text-[#fca6d1] text-4xl'
            onClick={toggleMobileNav}>
            anhtran.
          </Link>

          <div className='text-[#e1e7ec] m-auto flex items-center gap-4'>
            {starLine.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
            {starLine.reverse().map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </div>

          <div className='flex flex-col gap-8 justify-center items-center'>
            {links.map((link, i) => (
              <NavLink
                to={link.path}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? 'header-button text-[#e1e7ec] text-2xl'
                    : 'header-button text-[#99d6ea] text-2xl'
                }
                onClick={toggleMobileNav}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </Sheet>
    </div>
  );
}