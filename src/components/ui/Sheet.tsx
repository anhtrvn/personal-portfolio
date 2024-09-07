import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface SheetProps {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

const Sheet: React.FC<SheetProps> = ({ isOpen, toggle, children }) => {
  const sheetRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    if (sheetRef.current !== null) {
      sheetRef.current.classList.add('animate-rotate-right');
      setTimeout(() => {
        sheetRef.current?.classList.remove('animate-rotate-right');
        toggle();
      }, 200);
    }
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-primary/70 backdrop-blur-lg transition-opacity duration-200 ease-in z-0 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggle}
      />

      {/* Sliding sheet */}
      <div
        className={`fixed flex flex-col justify-start items-end top-0 right-0 z-10 p-8 h-full w-full sm:w-3/4 md:w-1/3 gap-4 text-secondary transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <button onClick={onClose} ref={sheetRef}>
          <FontAwesomeIcon icon={faXmark} size='xl' />
        </button>

        <div className='pt-8'>{children}</div>
      </div>
    </>
  );
};

export default Sheet;
