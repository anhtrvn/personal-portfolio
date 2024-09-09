import React from 'react';
import { TabContent, TabButton } from './Tab';

export interface TabProps {
  value: string;
  content: any[];
}

export const renderTabContent = (
  tabs: TabProps[],
  activeTab: string,
  children: (content: any[]) => React.ReactNode
) => {
  return tabs.map(({ value, content }) => (
    <TabContent
      key={value}
      value={value}
      activeTab={activeTab}
      className='w-full'>
      {children(content)}
    </TabContent>
  ));
};

export const renderTabButton = (
  tabs: TabProps[],
  activeTab: string,
  setActiveTab: (value: string) => void
) => {
  return tabs.map(({ value }) => (
    <TabButton
      key={value}
      value={value}
      onClick={setActiveTab}
      isActive={activeTab === value}>
      {value}
    </TabButton>
  ));
};
