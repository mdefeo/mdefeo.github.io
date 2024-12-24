import React from 'react';
import useMetaData from '../hooks/useMetaData';
import { Applications, Themes, Projects, Plugins } from '../components/Portfolio/Sections';

const PortfolioPage: React.FC = () => {
  useMetaData({
    title: 'Portfolio',
    description: 'Welcome to Marcello De Feo’s homepage.',
    ogTitle: 'Marcello De Feo - Homepage',
    ogDescription: 'Learn about Marcello, his work, and his passions.'
  });

  return (
    <main
      className="max-w-4xl mx-auto px-6 sm:px-12 py-12 text-gray-700"
      aria-label="About Marcello"
    >
      <div className="space-y-8">
        <Applications />
        <Plugins />
        <Themes />
        <Projects />
      </div>
    </main>

  );
};

export default PortfolioPage;


