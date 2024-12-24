import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Signature from './Animations/Signature';

const Navigation: React.FC = () => {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hamburger opacity
    const timeline = gsap.timeline();

    timeline.to(hamburgerRef.current, {
      duration: .5,
      opacity: 1,
      ease: 'power2.out',
    });

    timeline.add(() => {
      const signatureEvent = new Event('startSignatureAnimation');
      document.dispatchEvent(signatureEvent);
    }, "+=.5");
  }, []);

  return (
    <div className="navbar ml-6 mt-6 bg-transparent fixed top-0 z-50 bg-opacity-75">
      <div className="navbar-start flex">
        <div className="dropdown">
          <div
            ref={hamburgerRef}
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle opacity-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 primary-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-base-300"
          >
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link
                to="https://thelastmeritocracy.medium.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div ref={signatureRef} className="flex-1">
          <Link to="/">
            <Signature />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
