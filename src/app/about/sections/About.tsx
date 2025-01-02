"use client";
import Image from "next/image";
import ChatContainer from "@/components/about/chatbot/ChatContainer";
import SectionHeader from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      role="contentinfo"
      className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen text-gray-500 text-sm gp-4"
    >
      <div className="lg:w-5/12 p-4 hidden lg:flex lg:flex-col lg:justify-center">
        <SectionHeader id="about" name="About" />
        <Image
          src="/images/moc.png"
          alt="Master of the Classics design made by my business, Gearadelphia."
          className="hover:shadow-none pb-0 mb-0"
          width={500}
          height={500}
        />
        <p className="mb-2 italic">Some quick facts about me:</p>
        <ul className="list-disc list-outside mb-2 leading-relaxed">
          <li>I have owned award-winning businesses since 2008.</li>
          <li>My work ethic took root when I began working in kitchens at the age of 12.</li>
          <li>I have two decades of eperience in software engineering.</li>
          <li>I am a hockey nerd who ran a site credentialed to cover hockey teams.</li>
          <li>I began playing in bands in high school and just started a new project.</li>
        </ul>
        <p>If you would like to learn more, ask me in the chat!</p>
      </div>
      <div className="lg:w-7/12 p-4 w-full flex justify-center items-center">
        <ChatContainer />
      </div>
    </section>
  );
} 