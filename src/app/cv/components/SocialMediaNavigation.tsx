import Link from 'next/link';
import Image from 'next/image';

const imgDimensions = { height: 24, width: 24 };

const SocialMediaNavigation: React.FC = () => {
  return (
    <nav>
      <div className="flex space-x-4 mt-8">
        <Link
          href="https://www.linkedin.com/in/marcellodefeo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/social_media/linkedin.svg"
            alt="LinkedIn Profile"
            width={imgDimensions.width}
            height={imgDimensions.height}
            priority
          />
        </Link>
        <Link
          href="https://bsky.app/profile/flyers.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/social_media/bluesky.svg"
            alt="BSky Profile"
            width={imgDimensions.width}
            height={imgDimensions.height}
            priority
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
            width={imgDimensions.width}
            height={imgDimensions.height}
            priority
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
            width={imgDimensions.width}
            height={imgDimensions.height}
            priority
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
            width={imgDimensions.width}
            height={imgDimensions.height}
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default SocialMediaNavigation;
