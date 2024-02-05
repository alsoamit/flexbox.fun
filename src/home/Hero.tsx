import Link from 'next/link';
import React from 'react';
import HeroWidget from 'src/widgets/HeroWidget';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
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
        <div className="c-container mx-auto flex flex-col items-center justify-center gap-y-6 pt-32 md:pt-40">
          <h1 className="c-title c-heading-text mx-auto max-w-2xl text-center text-5xl !font-bold leading-tight md:text-6xl">
            Master Flexbox with our Fun Playground
          </h1>
          <p className="px-4 text-center">
            A Flexbox Playground that Lets You Experiment and Master Web Layouts
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/app"
              className="group flex items-center justify-center gap-1 rounded-full bg-blue-500 p-3 px-6 font-bold text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                stroke-width="2.5"
                stroke-linecap="round"
                className="h-4 w-4 transition-all duration-300 group-hover:rotate-180"
              >
                <path
                  fill="currentcolor"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  d="M7.38 5.555l15.592-1.367A3.419 3.419 0 0126.673 7.3L28.05 23.06a3.422 3.422 0 01-3.106 3.71L9.352 28.137a3.419 3.419 0 01-3.702-3.113L4.275 9.265a3.422 3.422 0 013.106-3.71zm.2 2.274a1.14 1.14 0 00-1.036 1.237l1.375 15.759a1.14 1.14 0 001.234 1.038l15.591-1.368a1.14 1.14 0 001.036-1.236l-1.376-15.76a1.14 1.14 0 00-1.234-1.037L7.58 7.829zm3.254 5.39a1.69 1.69 0 01-1.825-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.546 1.692 1.692 0 01-1.53 1.839zm10.065-.883a1.69 1.69 0 01-1.826-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.546 1.692 1.692 0 01-1.53 1.84zM11.72 23.373a1.69 1.69 0 01-1.825-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.545 1.692 1.692 0 01-1.53 1.84zm10.065-.883a1.69 1.69 0 01-1.825-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.546 1.692 1.692 0 01-1.53 1.84zm-5.476-4.635a1.69 1.69 0 01-1.825-1.546 1.692 1.692 0 011.53-1.839 1.69 1.69 0 011.825 1.545 1.692 1.692 0 01-1.53 1.84zM29.183 6.823l-.015.002A.915.915 0 0128.167 6c-.265-2.544-2.523-4.39-5.045-4.121h-.007a.916.916 0 01-1.002-.824.922.922 0 01.808-1.018h.002l.007-.001a6.387 6.387 0 014.718 1.408 6.498 6.498 0 012.347 4.363.922.922 0 01-.812 1.016zM8.547 32h-.008a6.395 6.395 0 01-4.578-1.818 6.51 6.51 0 01-1.96-4.553.92.92 0 01.895-.942h.016c.503-.008.917.4.926.91.044 2.559 2.134 4.595 4.67 4.55h.006a.918.918 0 01.927.91.92.92 0 01-.894.943z"
                ></path>
              </svg>
              <span className="font-semibold opacity-90 transition-none duration-300 group-hover:opacity-100">
                Playground
              </span>
            </Link>
            <a
              href="https://github.com/alsoamit/flexbox.fun"
              className="group flex items-center gap-1 rounded-full bg-gray-700 p-3 px-6 font-bold text-white"
            >
              <FaGithub className="h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
              <span className="font-semibold opacity-90 transition-none duration-300 group-hover:opacity-100">
                Github
              </span>
            </a>
          </div>
          <div id="hero_video" className="-mb-32 h-auto w-full pt-16">
            <div className="w-full overflow-hidden rounded-xl border bg-gray-900 shadow-xl dark:border-gray-700/40">
              <HeroWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
