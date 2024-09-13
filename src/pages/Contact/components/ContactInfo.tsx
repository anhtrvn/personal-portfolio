import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PiSparkleFill } from 'react-icons/pi';

import Socials from '../../../components/Nav/Socials';
import { useTypewriter } from '../../../components/ui/effects/useTypewriter';

const ContactInfo = () => {
  const { typed } = useTypewriter(['anhtran18202@gmail.com']);

  return (
    <div className='flex flex-col justify-center items-center gap-3 md:gap-5'>
      <div className='inline-flex gap-1 justify-center mb-6 md:mb-10'>
        <h4 className='text-center text-2xl md:text-3xl text-secondary tracking-wide'>
          connect with me
        </h4>
        <PiSparkleFill className='text-accent-pink text-xl' />
      </div>

      <div className='group flex items-center justify-center gap-5 text-accent-blue'>
        <FontAwesomeIcon
          icon={faEnvelope}
          size='lg'
          className='group-hover:text-accent-pink transition-colors'
        />
        <h5 className='tracking-wide text-lg md:text-xl group-hover:text-accent-pink transition-colors'>
          <span className='cursor-blink'>{typed}</span>
        </h5>
      </div>

      <Socials />
    </div>
  );
};

export default ContactInfo;
