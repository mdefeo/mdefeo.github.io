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
  );
};

export default CVPage;
