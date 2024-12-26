"use client";

import Link from "next/link";
import Image from "next/image";

const SocialMediaNavigation: React.FC = () => {
  return (
    <nav>
      <div className="flex space-x-4 mt-8">
        <Link
          href="https://bsky.app/profile/flyers.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/social_media/bluesky.svg"
            alt="BSky Profile"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marcellodefeo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/social_media/linkedin.svg"
            alt="LinkedIn Profile"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>
        <Link
          href="https://www.facebook.com/notmarchello"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/social_media/facebook.svg"
            alt="Facebook Profile"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>
        <Link
          href="https://www.instagram.com/thelastmeritocracy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/social_media/instagram.svg"
            alt="Instagram Profile"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>
        <Link
          href="https://slot-car-racers.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/social_media/bandcamp.svg"
            alt="Slot Car Racers Bandcamp"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>
      </div>
    </nav>
  );
};

export default SocialMediaNavigation;
