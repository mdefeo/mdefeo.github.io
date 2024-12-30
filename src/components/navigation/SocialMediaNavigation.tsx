// /src/components/navigation/SocialMediaNavigation.tsx
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faLinkedin,
  faFacebook,
  faSquareInstagram,
  faBandcamp,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaNavigation: React.FC = () => {
  return (
    <nav className="flex space-x-4 mt-8">
      <Link
        href="https://bsky.app/profile/flyers.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBluesky} className="mr-4 text-[#87CEEB]" size="xl" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/marcellodefeo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="mr-4 text-[#0077B5]" size="xl" />
      </Link>

      <Link
        href="https://www.facebook.com/notmarchello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="mr-4 text-[#316FF6]" size="xl" />
      </Link>

      <Link
        href="https://www.instagram.com/thelastmeritocracy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareInstagram} className="mr-4 text-[#c13584]" size="xl" />
      </Link>

      <Link
        href="https://slot-car-racers.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBandcamp} className="text-[#629aa9]" size="xl" />
      </Link>
    </nav>
  );
};

export default SocialMediaNavigation;
