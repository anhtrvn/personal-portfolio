import React from 'react';

export interface TabButtonProps {
  value: string;
  onClick: (value: string) => void;
  isActive: boolean;
  children: React.ReactNode;
}

export const TabButton: React.FC<TabButtonProps> = ({
  value,
  onClick,
  isActive,
  children,
}) => (
  <button
    onClick={() => onClick(value)}
    className={`button-page w-full ${
      isActive
        ? 'translate-y-0 shadow-lg bg-accent-pink text-primary'
        : 'text-accent-blue'
    }`}>
    {children}
  </button>
);

export interface TabContentProps {
  value: string;
  activeTab: string;
  children: React.ReactNode;
  className?: string;
}

export const TabContent: React.FC<TabContentProps> = ({
  value,
  activeTab,
  children,
  className = '',
}) => (
  <div className={`${activeTab === value ? 'block' : 'hidden'} ${className}`}>
    {children}
  </div>
);
