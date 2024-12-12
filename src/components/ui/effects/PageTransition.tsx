import React, { useState, useEffect, ReactNode } from 'react';

type TransitionProps = {
  children: ReactNode;
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
    <div className={`transition-200 h-full ${animationType}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
