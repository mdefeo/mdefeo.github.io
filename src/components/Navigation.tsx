import React from 'react';
import AnimatedLink from './AnimatedLink';

const Navigation: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <AnimatedLink to="/about">
                About
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/cv">
                CV
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/music">
                Music
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/portfolio">
                Portfolio
              </AnimatedLink>
            </li>
            <li>
              <a 
                href="https://thelastmeritocracy.medium.com/" 
                className="menu-title"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
