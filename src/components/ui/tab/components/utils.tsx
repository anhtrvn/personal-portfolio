import React, { ReactNode } from 'react';
import { TabBody, TabButton } from './Tab';

export interface TabProps {
  value: string;
  content: any[];
}

export const renderTabContent = (
  tabs: TabProps[],
  activeTab: string,
  children: (content: any[]) => ReactNode
) => {
  return tabs.map(({ value, content }) => (
    <TabBody key={value} value={value} activeTab={activeTab} className='w-full'>
      {children(content)}
    </TabBody>
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
