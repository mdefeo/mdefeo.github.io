"use client";

import AudioPlayer from "../../../components/music/AudioPlayer";

export default function Songs() {
  return (
    <section aria-labelledby="songs-heading" role="contentinfo">
      <h2 id="songs-heading">Songs</h2>
      <AudioPlayer
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/31949918&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"
        ariaLabel="Audio player for Marcello De Feo's music"
      />
    </section>
  );
}
