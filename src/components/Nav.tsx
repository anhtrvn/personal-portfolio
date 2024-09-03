import React from 'react';
import { NavLink } from 'react-router-dom';

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
];

export default function Nav() {
  return (
    <nav className='flex space-x-5 items-center justify-center'>
      {links.map((link, i) => {
        return (
          <NavLink
            to={link.path}
            key={i}
            className={({ isActive }) =>
              isActive
                ? 'header-button text-[#e1e7ec]'
                : 'header-button text-[#99d6ea]'
            }>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
