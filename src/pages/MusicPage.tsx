import React from 'react';
import useMetaData from '../hooks/useMetaData';

const MusicPage: React.FC = () => {
  useMetaData({
    title: 'Marcello De Feo Music',
    description: 'Listen to music by Marcello De Feo.',
    ogTitle: 'Marcello De Feo - Music',
    ogDescription: 'Explore Marcello’s musical journey and creations.'
  });

  return (
    <div>
      <h1>Marcello De Feo’s Music</h1>
      <p>This is the content of the music page.</p>
    </div>
  );
};

export default MusicPage;
