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
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

interface NavbarProps {
  className?: string;
  onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ className = '', onClick }) => {
  return (
    <nav className={`flex gap-8 ${className}`}>
      {links.map((link, i) => {
        return (
          <NavLink
            to={link.path}
            key={i}
            className={({ isActive }) =>
              isActive ? 'button-nav text-accent-pink' : 'button-nav'
            }
            onClick={onClick}>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
