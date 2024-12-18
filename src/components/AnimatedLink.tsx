import React from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, children }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default behavior to handle animation

    // Animate the border color change when the link is clicked
    gsap.to('body', {
      duration: 1, // Duration of the animation
      borderColor: '#FF5733', // New border color during animation
      ease: 'power2.out', // Easing effect for smooth transition
      onComplete: () => {
        window.location.href = to; // Navigate after animation completion
      },
    });
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
