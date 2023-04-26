import classNames from 'classnames';
import { Select } from 'flowbite-react';
import { useState, useEffect } from 'react';
import {
  TFlexDirection,
  IJustifyContent,
  IAlignItems,
  IFlexWrap,
} from 'src/flexbox/flexbox.types';

export default function HeroWidget() {
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
