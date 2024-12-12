import React, { ReactNode, FC } from 'react';

export interface TabButtonProps {
  value: string;
  onClick: (value: string) => void;
  isActive: boolean;
  children: ReactNode;
}

export const TabButton: FC<TabButtonProps> = ({
  value,
  onClick,
  isActive,
  children,
}) => (
  <button
    onClick={() => onClick(value)}
    className={`button-default ${isActive ? 'button-active' : ''}`}>
    {children}
  </button>
);

export interface TabBodyProps {
  value: string;
  activeTab: string;
  children: ReactNode;
  className?: string;
}

export const TabBody: FC<TabBodyProps> = ({
  value,
  activeTab,
  children,
  className = '',
}) => (
  <div className={`${activeTab === value ? 'block' : 'hidden'} ${className}`}>
    {children}
  </div>
);
