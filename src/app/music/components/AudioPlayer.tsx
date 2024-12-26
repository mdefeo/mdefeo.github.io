"use client";

import React from "react";
import { SoundCloudPlayerProps } from "@/interfaces/SoundCloudPlayerProps";

const AudioPlayer: React.FC<SoundCloudPlayerProps> = ({ src, height = 450 }) => (
  <div className="relative overflow-hidden w-full" style={{ height }}>
    <iframe
      title="audio-player"
      id="audio-player"
      width="100%"
      height={height}
      allow="autoplay"
      src={src}
      className="w-full h-full"
    ></iframe>
  </div>
);

export default AudioPlayer;
