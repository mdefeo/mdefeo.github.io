"use client";
import SpotifyPlayer from "@/components/music/SpotifyPlayer";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Favorites() {
  return (
    <section
      aria-labelledby="favorites-heading"
      role="contentinfo"
      className="favorites-section flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen gap-4"
    >
      <SectionHeader id="favorites" name="Favorites" />
      <div className="relative overflow-hidden rounded-lg h-full w-full">
        <SpotifyPlayer spotifyUrl="https://open.spotify.com/playlist/6fTj0s9lXElZY2NTY3thJF?utm_source=generator&theme=0" />
      </div>
    </section>
  );
}
