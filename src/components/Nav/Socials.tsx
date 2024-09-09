import React from 'react';
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

const Socials = () => {
  return (
    <nav className='flex gap-8 justify-center items-center text-accent-blue'>
      {socials.map((social) => (
        <a
          href={social.path}
          key={social.path}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={social.label}
          className='button-icon hover:text-secondary active:text-accent-blue'>
          <FontAwesomeIcon icon={social.icon} size='lg' />
        </a>
      ))}
    </nav>
  );
};

export default Socials;
