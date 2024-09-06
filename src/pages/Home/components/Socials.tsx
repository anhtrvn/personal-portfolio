import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const socials = [
  {
    icon: faLinkedin,
    path: 'https://www.linkedin.com/in/anh-tran-12b233233/',
    label: 'LinkedIn Profile',
  },
  {
    icon: faGithub,
    path: 'https://github.com/anhtrvn',
    label: 'GitHub Profile',
  },
  {
    icon: faFilePdf,
    path: '/AnhTran_Resume.pdf',
    label: 'Resume PDF',
  },
];

const Nav = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    navRef.current.style.opacity = '1';
  }, []);

  return (
    <nav
      className='flex gap-8 justify-center items-center text-accent-blue opacity-0 transition-opacity delay-[2.7s] duration-300 ease-in'
      ref={navRef}>
      {socials.map((social) => (
        <a
          href={social.path}
          key={social.path}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={social.label}>
          <FontAwesomeIcon
            icon={social.icon}
            size='lg'
            className='button-icon'
          />
        </a>
      ))}
    </nav>
  );
};

export default Nav;
