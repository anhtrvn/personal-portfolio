import React, { useState } from 'react';
import { languages, technologies, tools } from './components/skillSet';
import {
  renderTabContent,
  renderTabButton,
} from '../../components/ui/tab/utils';
import SkillMap from './components/SkillMap';

const tabs = [
  { value: 'languages', content: languages },
  { value: 'technologies', content: technologies },
  { value: 'tools', content: tools },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section className='h-full flex justify-center items-center py-8 lg:py-16'>
      <div className='container flex flex-col items-center justify-center h-full gap-4 max-w-5xl'>
        <div className='flex items-center justify-center w-full gap-2 bg-tertiary rounded-xl py-1'>
          {renderTabButton(tabs, activeTab, setActiveTab)}
        </div>

        <div className='h-full w-full'>
          {renderTabContent(tabs, activeTab, (content) => (
            <SkillMap items={content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
