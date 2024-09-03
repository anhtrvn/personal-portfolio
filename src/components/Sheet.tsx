import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface SheetProps {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

export default function Sheet({ isOpen, toggle, children }: SheetProps) {
  const closeNav = document.getElementById('close-nav');

  function onClose() {
    if (closeNav !== null) {
      closeNav.classList.add('animate-rotate-right');
      setTimeout(() => {
        toggle();
        closeNav.classList.remove('animate-rotate-right');
      }, 300);
    }
  }

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-[#17182c]/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-0 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggle}
      />

      {/* Sliding Sheet */}
      <div
        className={`fixed flex flex-col justify-start items-center top-0 right-0 z-10 h-full w-full sm:w-3/4 md:w-1/3 bg-[#1b1d36] rounded-l-[3rem] backdrop-blur-sm space-y-4 transition-all duration-700 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='p-5 w-full text-[#e1e7ec] flex justify-end'>
          <button onClick={onClose} id='close-nav'>
            <FontAwesomeIcon icon={faStar} size='lg' />
          </button>
        </div>

        <div className='p-5'>{children}</div>
      </div>
    </>
  );
}