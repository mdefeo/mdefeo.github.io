"use client";

import { AudioPlayerProps } from "../../types/AudioPlayerProps";

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, ariaLabel, height = 450 }) => {
  return (
    <iframe
      width="100%"
      height={height}
      allow="autoplay"
      src={src}
      aria-label={ariaLabel}
      title={ariaLabel}
      id="audio-player"
      className="w-full h-full"
      ></iframe>
  );
};

export default AudioPlayer;
