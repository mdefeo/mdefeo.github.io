import React from 'react';
import AudioPlayer from "./components/AudioPlayer";
import { generateMetadata } from "@/utils/metaData";

export const metadata = generateMetadata({
  title: "Music",
  description: "Explore the musical journey and passion of Marcello De Feo.",
  url: "/music",
});

const MusicPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen md:h-[calc(100vh-120px)] gap-8 px-4 md:mx-10">
        <div className="w-full md:w-1/3 text-center md:text-right space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Music</h3>
          <p className="text-gray-600 leading-relaxed">
            Music is not just a hobby but a parallel passion. I have played in bands, toured the east coast, and even now, I find joy in refurbishing guitars. It is a therapeutic process, taking something overlooked and bringing out its hidden beauty and potential.
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <AudioPlayer 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/31949918&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true" 
            aria-label="Audio player for Marcello De Feo's music"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPage;