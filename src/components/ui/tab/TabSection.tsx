import React, { ReactNode, FC } from 'react';
import { renderTabButton, renderTabContent } from './components/utils';

interface TabContent {
  value: string;
  content: any[];
}

interface TabSectionProps {
  tabs: TabContent[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: (content: TabContent['content']) => ReactNode;
}

const TabSection: FC<TabSectionProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  children,
}) => {
  return (
    <section>
      <div className='container flex-center flex-col gap-4 xl:max-w-5xl'>
        <div className='button-container'>
          {renderTabButton(tabs, activeTab, setActiveTab)}
        </div>

        <div className='w-full'>
          {renderTabContent(tabs, activeTab, (content) => children(content))}
        </div>
      </div>
    </section>
  );
};

export default TabSection;
