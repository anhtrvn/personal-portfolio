import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const socials = [
  {
    icon: faLinkedin,
    path: 'https://www.linkedin.com/in/anh-tran-12b233233/',
  },
  {
    icon: faGithub,
    path: 'https://github.com/anhtrvn',
  },
  {
    icon: faFilePdf,
    path: '/AnhTran_Resume.pdf', // TODO: download resume pdf
  },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (navRef.current == null) return;
      navRef.current.style.opacity = '1';
    }, 1000);
  }, []);

  return (
    <nav
      className='flex space-x-4 justify-center items-center text-[#99d6ea] opacity-0 transition-opacity delay-1000 duration-500 ease-in'
      ref={navRef}>
      {socials.map((social, i) => {
        return (
          <a
            href={social.path}
            key={i}
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon
              icon={social.icon}
              size='lg'
              className='header-icon'
            />
          </a>
        );
      })}
    </nav>
  );
}
