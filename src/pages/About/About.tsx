import React, { useState } from 'react';
import { education } from './components/content';
import TabSection from '../../components/ui/tab/TabSection';
import AboutGrid from './components/AboutGrid';

const tabs = [{ value: 'education', content: education }];

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <TabSection tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
      {(content) => (
        <AboutGrid
          items={content}
          className={content === education ? 'col-span-full' : ''}
        />
      )}
    </TabSection>
  );
};

export default About;
