import React, { useState } from 'react';
import {
  renderTabContent,
  renderTabButton,
} from '../../components/ui/tab/utils';
import { education, hobbies } from './components/aboutMe';
import AboutMap from './components/AboutMap';

const tabs = [
  { value: 'education', content: education },
  { value: 'hobbies', content: hobbies },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className='h-full flex justify-center items-center'>
      <div className='container flex flex-col items-center justify-center h-3/4 gap-4 max-w-5xl'>
        <div className='flex items-center justify-center w-full gap-2 bg-tertiary rounded-xl py-1'>
          {renderTabButton(tabs, activeTab, setActiveTab)}
        </div>

        <div className='h-full w-full'>
          {renderTabContent(tabs, activeTab, (content) => (
            <AboutMap
              items={content}
              className={content === education ? 'col-span-full' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
