import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, LinkedIn, Bandcamp, BlueSky } from './SocialMediaIcons/SocialMediaIcons';

const SocialMediaNavigation: React.FC = () => {
  return (
    <nav>
      <div className="flex space-x-4 mt-8">
        <Link
          to="https://bsky.app/profile/flyers.bsky.social" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <BlueSky />
        </Link>
        <Link 
          to="https://www.facebook.com/notmarchello" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Facebook />
        </Link>
        <Link 
          to="https://www.instagram.com/thelastmeritocracy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
          >
          <Instagram />
        </Link>
        <Link 
          to="https://slot-car-racers.bandcamp.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
          >
            <Bandcamp />
        </Link>
        <Link 
          to="https://www.linkedin.com/in/marcellodefeo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
          >
          <LinkedIn />
        </Link>
      </div>
    </nav>
  );
};

export default SocialMediaNavigation;
