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
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SocialMediaNavigationProps } from "@/interfaces/SocialMediaNavigationInterface";


const SocialMediaNavigation: React.FC<SocialMediaNavigationProps> = ({ size = "xl" }) => {
  return (
    <nav className="flex space-x-4">
      <Link
        href="https://bsky.app/profile/flyers.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBluesky} className="mr-4 text-[#87CEEB]" size={size} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/marcellodefeo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="mr-4 text-[#0077B5]" size={size} />
      </Link>

      <Link
        href="https://www.facebook.com/notmarchello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="mr-4 text-[#316FF6]" size={size} />
      </Link>

      <Link
        href="https://www.instagram.com/thelastmeritocracy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareInstagram} className="mr-4 text-[#c13584]" size={size} />
      </Link>

      <Link
        href="https://slot-car-racers.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBandcamp} className="mr-4 text-[#629aa9]" size={size} />
      </Link>

      <Link
        href="https://github.com/mdefeo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="text-[#333333]" size={size} />
      </Link>
    </nav>
  );
};

export default SocialMediaNavigation;
