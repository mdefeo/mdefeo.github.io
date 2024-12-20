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
    <div className="space-y-8">
      <Applications />
      <Plugins />
      <Themes />
      <Projects />
    </div>

  );
};

export default PortfolioPage;


