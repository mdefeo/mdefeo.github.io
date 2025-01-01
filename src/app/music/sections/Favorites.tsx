"use client";
import SpotifyPlayer from "@/components/music/SpotifyPlayer";
import SectionHeader from "@/components/SectionHeading";

export default function Favorites() {
  return (
    <section aria-labelledby="favorites-heading" role="contentinfo">
      <SectionHeader id="favorites" name="Favorites" />
      <div className="relative overflow-hidden rounded-lg h-full w-full">
        <SpotifyPlayer spotifyUrl="https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF?utm_source=generator&theme=0" />
      </div>
    </section>
  );
}
