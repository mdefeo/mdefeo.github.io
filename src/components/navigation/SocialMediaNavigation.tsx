"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faBandcamp,
  faBluesky
} from "@fortawesome/free-brands-svg-icons";


const SocialMediaNavigation: React.FC = () => {
  return (
    <nav>
      <div className="flex space-x-4 mt-8">
        <Link
          href="https://bsky.app/profile/flyers.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBluesky} className="h-8 w-8" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/marcellodefeo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
        </Link>

        <Link
          href="https://www.facebook.com/notmarchello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
        </Link>

        <Link
          href="https://www.instagram.com/thelastmeritocracy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-8 w-8"
          />
        </Link>

        <Link
          href="https://slot-car-racers.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBandcamp} className="h-8 w-8" />
        </Link>
      </div>
    </nav>
  );
};

export default SocialMediaNavigation;
