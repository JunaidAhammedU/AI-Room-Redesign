import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-32">
      <small className="mb-2 block text-xs">
        &copy;{new Date().getFullYear()} Artifex.ai | By Junaid. All rights reserved.

        <a
          className="ml-1 text-gray-600 hover:text-gray-700"
          href="https://junaid-portfolio-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bio |
        </a>
        <a
          className="ml-1 text-gray-600 hover:text-gray-700"
          href="https://www.instagram.com/imjunaid.u/profilecard/?igsh=MTl5Nnc1MzA2ZTdnZg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </small>
    </footer>
  );
}
