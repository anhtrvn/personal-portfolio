import React, { useState, useEffect } from 'react';
import { TbPointerStar, TbClick } from 'react-icons/tb'; // Import both icons

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false); // Track hover state over clickable elements
  const [clicked, setClicked] = useState(false); // Track click state

  // Track the mouse position
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  // Track whether the mouse is over a clickable element
  const handleMouseOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
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
          size={30}
          className={`text-[#fad5b0] ${clicked ? 'text-[#f7a89e]' : ''}`}
        />
      ) : (
        <TbPointerStar
          size={24}
          className={`text-[#fad5b0] ${clicked ? 'text-[#f7a89e]' : ''}`}
        />
      )}
    </div>
  );
};

export default CustomCursor;
