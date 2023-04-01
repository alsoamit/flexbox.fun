import Link from 'next/link';
import React from 'react';
import { HiOutlineStar } from 'react-icons/hi';

export default function Contributors() {
  return (
    <div className="group/wrapper relative">
      <div className="absolute inset-0 flex items-center justify-center gap-20">
        <div className="h-full w-full max-w-7xl">
          <img
            src="/images/bg-gradient.png"
            className="block h-full w-full"
            alt="gradient"
          />
        </div>
      </div>
      <div className="inset-0 bg-black/20 backdrop-blur-sm">
        <div className="c-container mx-auto flex flex-col items-center justify-center gap-y-8 pt-40">
          <h1 className="c-title c-heading-text mx-auto max-w-3xl text-center text-6xl !font-bold leading-tight">
            Give us a star!
          </h1>
          <div className="flex justify-center gap-4">
            <Link
              href="/app"
              className="group flex items-center justify-center gap-1 rounded-full bg-orange-500 p-3 px-6 font-bold text-white"
            >
              <HiOutlineStar className="text-xl" />
              <span className="font-semibold opacity-90 transition-none duration-300 group-hover:opacity-100">
                Star
              </span>
            </Link>
            <Link
              href="/tutorials"
              className="group flex items-center gap-1 rounded-full bg-gray-700 p-3 px-6 font-bold text-white"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-all duration-300 group-hover:rotate-180"
              >
                <path
                  d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7H16Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15 12C15 11.4477 15.4477 11 16 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H16C15.4477 13 15 12.5523 15 12Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H16Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H13V19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5ZM3 5H11V19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="font-semibold opacity-90 transition-none duration-300 group-hover:opacity-100">
                Contribute
              </span>
            </Link>
          </div>
          <div id="contributors" className="pt-16"></div>
        </div>
      </div>
    </div>
  );
}
