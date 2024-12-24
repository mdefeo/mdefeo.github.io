import React from 'react';
import useMetaData from '../hooks/useMetaData';
import { Headline, Summary, Experience, Education, Skills, Achievements, Awards, Entrepreneurship } from '../components/CV/Sections';

const CVPage: React.FC = () => {
  useMetaData({
    title: 'Curriculum Vitae - Marcello De Feo',
    description: 'Explore Marcello’s professional background and achievements.',
    ogTitle: 'Marcello De Feo CV',
    ogDescription: 'Detailed CV and career accomplishments of Marcello De Feo.'
  });

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
