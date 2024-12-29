// /src/components/navigation/MainNavigation.tsx
"use client";

import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className="navbar ml-6 mt-6 bg-transparent fixed top-0 z-10">
      <div className="navbar-start flex">
        <div className="dropdown" data-dropdown-trigger="click">
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
            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2"
            data-dropdown-dismiss="true"
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
          </ul>
        </div>
        <div className="flex-1">
        </div>
      </div>
    </nav>
  );
}
