"use client";
import Image from "next/image";
import ChatContainer from "@/components/chat/ChatContainer";

export default function Chat() {
  return (
    <section id="chat" aria-labelledby="chat-heading" role="contentinfo">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-full md:gap-8">
        <article className="w-full lg:flex lg:flex-col lg:justify-center mb-10">
            <Image
              src="/images/moc.png"
              alt="Master of the Classics design made by my business, Gearadelphia."
              className="hidden md:block hover:shadow-none pb-0 mb-5 w-full h-auto md:w-10/12 mx-auto text-center"
              width={1859}
              height={1183}
              priority
              />
            <div className="font-light">
              <p className="mb-2 italic">Some quick facts about me:</p>
              <ul className="list-disc list-outside mb-3 ml-0 md:ml-3">
                <li>I have owned award-winning businesses since 2008.</li>
                <li>My work ethic took root when I began working in kitchens at the age of 12.</li>
                <li>I have two decades of experience in software engineering.</li>
                <li>I am a hockey nerd who ran a site credentialed to cover hockey teams.</li>
                <li>I began playing in bands in high school and just started a new project.</li>
              </ul>
              <p>If you would like to learn more, ask me in the chat!</p>
            </div>
          </article>
          <aside className="w-full h-full flex justify-center items-center">
            <ChatContainer />
          </aside>
        </div>
    </section>
  );
}