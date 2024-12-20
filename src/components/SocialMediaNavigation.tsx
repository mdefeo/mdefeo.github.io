import React from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';

const imgDimensions = { height: 24, width: 24}


const SocialMediaNavigation: React.FC = () => {
  return (
    <nav>
      <div className="flex space-x-4 mt-8">
        <Link 
          to="https://www.linkedin.com/in/marcellodefeo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
          >
          <Img 
            src="/social_media/linkedin.svg"
            alt="BSky Profile"
            style={imgDimensions}
          />
        </Link>
        <Link
          to="https://bsky.app/profile/flyers.bsky.social" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Img 
            src="/social_media/bluesky.svg"
            alt="BSky Profile"
            style={imgDimensions}
          />
        </Link>
        <Link 
          to="https://www.facebook.com/notmarchello" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Img 
            src="/social_media/facebook.svg"
            alt="Facebook Profile"
            style={imgDimensions}
          />
        </Link>
        <Link 
          to="https://www.instagram.com/thelastmeritocracy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
          >
          <Img 
            src="/social_media/instagram.svg"
            alt="Instagram Profile"
            style={imgDimensions}
          />
        </Link>
        <Link 
          to="https://slot-car-racers.bandcamp.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
          >
          <Img 
            src="/social_media/bandcamp.svg"
            alt="BSky Profile"
            style={imgDimensions}
          />            
        </Link>
      </div>
    </nav>
  );
};

export default SocialMediaNavigation;
