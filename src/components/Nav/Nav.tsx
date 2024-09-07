import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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

interface NavProps {
  className?: string;
  onClick?: () => void;
}

const Nav: React.FC<NavProps> = ({ className = '', onClick }) => {
  const location = useLocation();

  return (
    <nav className={`flex gap-8 ${className}`}>
      {links.map((link, i) => {
        return (
          <NavLink
            to={link.path}
            key={i}
            className={({ isActive }) =>
              isActive
                ? 'button-nav text-accent-pink'
                : 'button-nav text-accent-blue hover:text-secondary active:text-accent-blue'
            }
            onClick={onClick}>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
