// /src/app/music/sections/Favorites.tsx
"use client";
import SpotifyPlayer from "@/components/music/SpotifyPlayer";

export default function Favorites() {
  return (
    <section aria-labelledby="favorites-heading" role="contentinfo">
      <h2 id="favorites-heading">Favorites</h2>
      <div className="relative overflow-hidden rounded-lg h-full w-full">
        <SpotifyPlayer spotifyUrl="https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF?utm_source=generator&theme=0" />
      </div>
    </section>
  );
}
