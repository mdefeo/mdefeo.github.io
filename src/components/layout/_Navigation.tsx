'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import Signature from '../ui/Signature';

export default function Navigation() {
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
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 primary-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-base-300"
          >
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/cv">CV</Link>
            </li>
            <li>
              <Link href="/music">Music</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link
                href="https://thelastmeritocracy.medium.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
            <div ref={signatureRef} className="flex-1">
              <Link href="/">
                <Signature />
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
