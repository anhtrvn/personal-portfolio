import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    icon: faLinkedin,
    path: 'https://www.linkedin.com/in/anh-tran-12b233233/',
  },
  {
    icon: faGithub,
    path: 'https://github.com/anhtrvn',
  },
];

export default function Nav() {
  return (
    <nav className='flex space-x-4'>
      {socials.map((social, i) => {
        return (
          <a href={social.path} key={i}>
            <FontAwesomeIcon
              icon={social.icon}
              size='lg'
              className='header-icon text-[#99d6ea]'
            />
          </a>
        );
      })}
    </nav>
  );
}
