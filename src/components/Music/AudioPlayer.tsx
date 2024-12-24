import React from 'react';

interface SoundCloudPlayerProps {}

const AudioPlayer: React.FC<SoundCloudPlayerProps> = () => (
  <iframe 
    title="audio-player"
    id="audio-player"
    width="100%" 
    height="450" 
    allow="autoplay" 
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/31949918&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true">
  </iframe>
);

export default AudioPlayer;
