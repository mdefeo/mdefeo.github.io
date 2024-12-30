"use client";
import React, { useState, useEffect } from "react";
import { SpotifyPlayerProps } from "@/types/SpotifyPlayerProps";

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ spotifyUrl }) => {
  const [oEmbedHtml, setOEmbedHtml] = useState<string | null>(null);

  useEffect(() => {
    const fetchOEmbedData = async () => {
      try {
        const response = await fetch(`/api/spotify-oembed?url=${encodeURIComponent(spotifyUrl)}`);
        if (!response.ok) throw new Error("Failed to fetch Spotify oEmbed data");

        const data = await response.json();

        const sanitizedHtml = data.html.replace(/allowfullscreen/gi, "");
        setOEmbedHtml(sanitizedHtml);
      } catch (error) {
        console.error("Error fetching Spotify oEmbed data:", error);
      }
    };

    fetchOEmbedData();
  }, [spotifyUrl]);

  if (!oEmbedHtml) {
    return <p>Loading...</p>;
  }

  return <div dangerouslySetInnerHTML={{ __html: oEmbedHtml }} />;
};

export default SpotifyPlayer;
