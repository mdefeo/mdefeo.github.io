import React from 'react';
import useMetaData from '../hooks/useMetaData';

const HomePage: React.FC = () => {
  useMetaData({
    title: 'Welcome',
    description: 'Welcome to Marcello De Feo’s homepage.',
    ogTitle: 'Marcello De Feo - Homepage',
    ogDescription: 'Learn about Marcello, his work, and his passions.'
  });

  return (
    <div>
      <h1>Welcome to Marcello De Feo’s Home Page</h1>
      <p>This is the content of the home page.</p>
    </div>
  );
};

export default HomePage;
