import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PiSparkleFill } from 'react-icons/pi';

import Socials from '../../../components/Nav/components/Socials';
import { useTypewriter } from '../../../components/ui/effects/useTypewriter';

const ContactInfo = () => {
  const { typed } = useTypewriter(['anhtran18202@gmail.com']);

  return (
    <div className='flex-center flex-col gap-3 md:gap-5'>
      <span className='inline-flex justify-center gap-1 mb-6 md:mb-10'>
        <h4 className='text-center text-2xl md:text-3xl text-secondary tracking-wide'>
          connect with me
        </h4>
        <PiSparkleFill className='text-accent-pink text-xl' />
      </span>

      <span className='group flex-center gap-5 text-accent-blue transition-colors'>
        <FontAwesomeIcon
          icon={faEnvelope}
          size='lg'
          className='group-hover:text-accent-pink'
        />
        <h5 className='tracking-wide text-lg md:text-xl group-hover:text-accent-pink'>
          <span className='cursor-blink'>{typed}</span>
        </h5>
      </span>

      <Socials />
    </div>
  );
};

export default ContactInfo;
