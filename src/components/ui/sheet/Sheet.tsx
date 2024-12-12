import React, { useRef, ReactNode, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface SheetProps {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
}

const Sheet: FC<SheetProps> = ({ isOpen, toggle, children }) => {
  const sheetRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    if (sheetRef.current === null) return;

    const sheet = sheetRef.current;
    sheet.classList.add('animate-rotate-right');

    const animationEnd = () => {
      sheet.classList.remove('animate-rotate-right');
      toggle();
      sheet.removeEventListener('animationend', animationEnd);
    };

    sheet.addEventListener('animationend', animationEnd);
  };

  return (
    <>
      <div
        className={`sheet-bg ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggle}
      />

      <div className={`sheet ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className='absolute top-12 right-12'
          onClick={onClose}
          ref={sheetRef}>
          <FontAwesomeIcon icon={faXmark} size='xl' />
        </button>

        <div className='pt-24'>{children}</div>
      </div>
    </>
  );
};

export default Sheet;
