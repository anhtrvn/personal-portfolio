import React from 'react';
import { skillSet } from './skillSet';

export default function Skills() {
  return (
    <section className='m-auto flex h-full max-w-screen-2xl items-center'>
      <div className='grid-cols-3'>
        {skillSet.map((skill, i) => (
          <div
            className='group flex items-center justify-center opacity-0 py-1'
            key={i}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
