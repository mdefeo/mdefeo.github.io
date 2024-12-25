"use client";

import React from 'react';
import { Headline, Summary, Experience, Education, Skills, Achievements, Awards, Entrepreneurship } from './components/Index';

const CVPage: React.FC = () => {

  return (
    <main
      className="max-w-4xl mx-auto px-6 sm:px-12 py-12 text-gray-700"
      aria-label="About Marcello"
    >
      <div className="space-y-8">
        <Headline />
        <Summary />
        <Experience />
        <Entrepreneurship />
        <Education />
        <Skills />
        <Achievements />
        <Awards />
      </div>
    </main>
  );
};

export default CVPage;