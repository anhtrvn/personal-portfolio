import React from 'react';

interface TabButtonProps {
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
    className={`px-4 py-2 tracking-[1px] font-medium rounded-xl transition-colors w-full ${
      isActive ? 'text-accent-blue' : 'text-secondary'
    }`}>
    {children}
  </button>
);

interface TabContentProps {
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
