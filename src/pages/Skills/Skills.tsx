import React, { useState } from 'react';
import { languages, technologies, tools } from './components/skillSet';
import { TabButton, TabContent } from '../../components/ui/Tab';
import SkillMap from './components/SkillMap';

const tabs = [
  { value: 'languages', content: languages },
  { value: 'technologies', content: technologies },
  { value: 'tools', content: tools },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const renderTabContent = () => {
    return tabs.map(({ value, content }) => (
      <TabContent
        key={value}
        value={value}
        activeTab={activeTab}
        className='w-full'>
        <SkillMap items={content} />
      </TabContent>
    ));
  };

  return (
    <section className='h-full flex justify-center items-center'>
      <div className='container flex flex-col items-center justify-center h-3/4 gap-4 max-w-5xl'>
        <div className='flex items-center justify-center w-full gap-2 bg-tertiary rounded-xl py-1'>
          {tabs.map(({ value }) => (
            <TabButton
              key={value}
              value={value}
              onClick={setActiveTab}
              isActive={activeTab === value}>
              {value}
            </TabButton>
          ))}
        </div>

        <div className='h-full w-full'>{renderTabContent()}</div>
      </div>
    </section>
  );
};

export default Skills;
