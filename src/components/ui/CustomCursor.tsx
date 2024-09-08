import React, { useState, useEffect } from 'react';
import { TbPointerStar, TbClick } from 'react-icons/tb';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    // console.log('Mouse over:', target.tagName);
    // If the element is clickable, like links, buttons, or has 'cursor: pointer'
    if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.style.cursor === 'pointer'
    ) {
      setIsPointer(true);
    } else {
      setIsPointer(false);
    }
  };

  // Handle mouse click event
  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className='fixed pointer-events-none z-[9999]'
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, -50%)',
      }}>
      {isPointer ? (
        <TbClick
          className={`text-4xl ${
            clicked ? 'text-[#f7a89e]' : 'text-[#fad5b0]'
          }`}
        />
      ) : (
        <TbPointerStar
          className={`text-3xl ${
            clicked ? 'text-[#f7a89e]' : 'text-[#fad5b0]'
          }`}
        />
      )}
    </div>
  );
};

export default CustomCursor;
