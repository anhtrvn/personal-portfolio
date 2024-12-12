import React, { useState } from 'react';
import { languages, technologies, tools } from './components/content';
import TabSection from '../../components/ui/tab/TabSection';
import SkillGrid from './components/SkillGrid';

const tabs = [
  { value: 'languages', content: languages },
  { value: 'technologies', content: technologies },
  { value: 'tools', content: tools },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <TabSection tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
      {(content) => <SkillGrid items={content} />}
    </TabSection>
  );
};

export default Skills;
