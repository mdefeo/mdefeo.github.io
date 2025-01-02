"use client";
import Image from "next/image";
import AudioPlayer from "@/components/music/AudioPlayer";
import SectionHeader from "@/components/ui/SectionHeading";

export default function Bands() {
  return (
    <section
      aria-labelledby="about-heading"
      role="contentinfo"
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen text-gray-500 text-sm gap-4"
    >
      <div className="lg:w-1/2 hidden lg:flex lg:flex-col lg:justify-center">
        <SectionHeader id="about" name="About" />
        <Image
          src="/images/band.jpg"
          alt="This Radiant Boy after playing a show at The Black Cat in Washington, D.C."
          className="hover:shadow-none pb-0 mb-0"
          width={500}
          height={500}
        />
        <p className="mb-2 italic">Some quick facts about me:</p>
        <ul className="list-disc list-outside mb-2 leading-relaxed">
          <li>I have been a business owner since 2008.</li>
          <li>My work ethic took root when I began working in kitchens at the age of 12.</li>
          <li>I have two decades of eperience in software engineering.</li>
          <li>I am a hockey nerd who ran a site credentialed to cover hockey teams.</li>
          <li>I began playing in bands in high school and just started a new project.</li>
        </ul>
        <p>If you would like to learn more, ask me in the chat!</p>
      </div>
      <div className="lg:w-1/2 w-full h-[calc(100vh-200px)] flex justify-center items-center">
        <AudioPlayer
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/31949918&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"
          ariaLabel="Audio player for Marcello De Feo's music"
        />
      </div>
    </section>
  );
}