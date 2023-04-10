import classNames from 'classnames';
import { Select } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Toggle } from 'src/docs';
import {
  IAlignItems,
  IFlexWrap,
  IJustifyContent,
  TFlexDirection,
} from 'src/flexbox/flexbox.types';

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
            Unleash Your Creativity with Flexbox
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
                Tutorials
              </span>
            </Link>
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

export function HeroWidget() {
  const [animate, setAnimate] = useState(true);
  const [flexDirection, setFlexDirection] =
    useState<TFlexDirection>('flex-row');
  const [justifyContent, setJustifyContent] =
    useState<IJustifyContent>('justify-start');
  const [alignItems, setAlignItems] = useState<IAlignItems>('items-start');
  const [flexWrap, setFlexWrap] = useState<IFlexWrap>('flex-wrap');

  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {}, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [animate]);

  const containerClass = classNames(
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap
  );

  return (
    <div
      className="bg-stripes flex h-full w-full flex-col items-stretch overflow-hidden md:flex-row"
      onMouseEnter={() => setAnimate(false)}
      onMouseLeave={() => setAnimate(true)}
    >
      <div
        className={`flex h-80 w-full gap-2 overflow-hidden p-2 md:h-96 ${containerClass}`}
      >
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          1
        </div>
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          2
        </div>
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          3
        </div>
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          4
        </div>
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          5
        </div>
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          6
        </div>
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          7
        </div>
      </div>
      <div className="c-border flex gap-4 border-t-0 bg-gray-900 text-sm md:h-96 md:w-96">
        <div className="w-full space-y-4 p-5 dark:bg-gray-900">
          <div className="flex items-center justify-between space-x-2">
            <h3 className="c-title flex-1 whitespace-nowrap">flex-direction</h3>
            <Select
              value={flexDirection}
              onChange={(e) => setFlexDirection(e?.target?.value as any)}
              className="flex-1"
              sizing="sm"
            >
              <option value="flex-row">row</option>
              <option value="flex-row-reverse">row-reverse</option>
              <option value="flex-col">column</option>
              <option value="flex-col-reverse">column-reverse</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h3 className="c-title flex-1 whitespace-nowrap">
              justify-content
            </h3>
            <Select
              className="flex-1"
              sizing="sm"
              value={justifyContent}
              onChange={(e) => setJustifyContent(e?.target?.value as any)}
            >
              <option value="justify-start">flex-start</option>
              <option value="justify-end">flex-end</option>
              <option value="justify-center">center</option>
              <option value="justify-between">space-between</option>
              <option value="justify-around">space-around</option>
              <option value="justify-evenly">space-evenly</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h3 className="c-title flex-1 whitespace-nowrap">align-items</h3>
            <Select
              value={alignItems}
              className="flex-1"
              sizing="sm"
              onChange={(e) => setAlignItems(e?.target?.value as any)}
            >
              <option value="items-start">flex-start</option>
              <option value="items-end">flex-end</option>
              <option value="items-center">center</option>
              <option value="items-baseline">baseline</option>
              <option value="items-stretch">stretch</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h3 className="c-title flex-1 whitespace-nowrap">flex-wrap</h3>
            <Select
              value={flexWrap}
              onChange={(e) => setFlexWrap(e?.target?.value as any)}
              className="flex-1"
              sizing="sm"
            >
              <option value="flex-wrap">wrap</option>
              <option value="flex-nowrap">nowrap</option>
              <option value="flex-wrap-reverse">wrap-reverse</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
