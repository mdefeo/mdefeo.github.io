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
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen md:h-[calc(100vh-120px)] gap-8 px-4 md:mx-10">
        <div className="w-full md:w-1/3 text-center md:text-right space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Music</h3>
          <p className="text-gray-600">
            Music is not just a hobby but a parallel passion. I have played in bands, toured the east coast, and even now, I find joy in refurbishing guitars. It is a therapeutic process, taking something overlooked and bringing out its hidden beauty and potential.
          </p>
        </div>

        <div className="w-full md:w-2/3">
        </div>
      </div>
    </div>
  );
};

export default MusicPage;