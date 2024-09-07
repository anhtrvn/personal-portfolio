import React, { useState, useEffect } from 'react';

type TransitionProps = {
  children: React.ReactNode;
};

const transition = {
  in: 'opacity-1',
  out: 'opacity-0',
};

const PageTransition: React.FC<TransitionProps> = ({ children }) => {
  const [animationType, setAnimationType] = useState(transition.in);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setAnimationType(transition.out);

    const timeoutId = setTimeout(() => {
      setDisplayChildren(children);
      setAnimationType(transition.in);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [children]);

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${animationType}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
