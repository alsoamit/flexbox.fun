import { Switch } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { TAlignSelf } from 'src/flexbox/flexbox.types';

export default function Docs() {
  return (
    <div id="docs">
      <div className="bg-gray-800 py-40"></div>
      <div className="c-container-sm space-y-4 py-20">
        <h2 className="c-title c-heading-text text-4xl">
          Introduction to Flexbox
        </h2>
        <p>
          CSS is comprised of many different layout algorithms, known officially
          as “layout modes”. Each layout mode is its own little sub-language
          within CSS. The default layout mode is Flow layout, but we can opt in
          to Flexbox by changing the display property on the parent container:
        </p>
        <FlexBlockWidget />
      </div>
    </div>
  );
}

export function FlexBlockWidget() {
  const [isFlex, setIsFlex] = useState(true);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {
      setIsFlex((val: boolean) => !val);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [animate]);

  return (
    <div
      className="h-full w-full"
      onMouseEnter={() => setAnimate(false)}
      onMouseLeave={() => setAnimate(true)}
    >
      <div
        className={`c-border bg-stripes h-60 w-full overflow-hidden rounded-t-lg p-2 md:h-full ${
          isFlex ? 'flex gap-2' : 'block space-y-2'
        }`}
      >
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          1
        </div>
        <div className="flex h-10 w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:h-20 md:w-40">
          1
        </div>
      </div>
      <div className="c-border flex items-center gap-4 rounded-b-lg border-t-0 bg-gray-900 text-sm">
        <div className="h-full p-2 text-xs font-bold text-orange-300">
          Display:
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>Block</span>
          <Toggle enabled={isFlex} setEnabled={setIsFlex} />
          <span>Flex</span>
        </div>
      </div>
    </div>
  );
}

interface IAlignSelfWidgetOption {
  id: string;
  value: TAlignSelf;
}
const options: IAlignSelfWidgetOption[] = [
  {
    id: '#111',
    value: 'self-stretch',
  },
  {
    id: '#112',
    value: 'self-start',
  },
  {
    id: '#113',
    value: 'self-center',
  },
  {
    id: '#114',
    value: 'self-end',
  },
  // {
  //   id: '#115',
  //   value: 'self-baseline',
  // },
  // {
  //   id: '#116',
  //   value: 'self-auto',
  // },
];

export function ItemSelfAlignWidget() {
  const [selected, setSelected] = useState<IAlignSelfWidgetOption>(options[0]);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {
      setSelected(
        (selected) =>
          options[
            options.indexOf(selected) < options.length - 1
              ? options.indexOf(selected) + 1
              : 0
          ]
      );
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [animate]);

  console.log({ animate });

  return (
    <div
      className="h-full w-full"
      onMouseEnter={() => setAnimate(false)}
      onMouseLeave={() => setAnimate(true)}
    >
      <div
        className={`c-border bg-stripes flex h-60 w-full gap-2 overflow-hidden rounded-t-lg p-2 transition-all duration-300 md:h-full`}
      >
        <div
          className={`${selected.value} flex w-20 items-center justify-center rounded-lg bg-orange-500 py-10 transition-all duration-300 md:w-28`}
        >
          1
        </div>
        <div className="flex w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:w-28">
          2
        </div>
        <div className="flex w-20 items-center justify-center rounded-lg bg-blue-500 py-10 transition-all duration-300 md:w-28">
          3
        </div>
      </div>
      <div className="c-border flex items-center gap-4 rounded-b-lg border-t-0 bg-gray-900 text-sm">
        <div className="h-full p-2 text-xs font-bold text-orange-300">
          Align Self:
        </div>
        <div className="flex items-center gap-4 text-xs">
          <SingleSelect
            selected={selected}
            setSelected={setSelected}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

interface ISingleSelectProps {
  selected: any;
  options: any;
  setSelected: any;
}

export function SingleSelect({
  selected,
  options,
  setSelected,
}: ISingleSelectProps) {
  return (
    <div className="flex gap-3 rounded p-1">
      {options?.map((i: any) => (
        <button
          key={i}
          className={`${
            selected?.id === i?.id ? 'bg-gray-700 px-2 py-1' : ''
          } rounded-full transition-all duration-300`}
          onClick={() => setSelected(i)}
        >
          {i?.value}
        </button>
      ))}
    </div>
  );
}

export interface IToggleProps {
  enabled: boolean;
  setEnabled: any;
}

export function Toggle({ enabled, setEnabled }: IToggleProps) {
  return (
    <Switch checked={enabled} onChange={setEnabled} as="span">
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button
          className={`${
            checked ? 'bg-blue-500' : 'bg-gray-600'
          } relative inline-flex h-2 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked
                ? 'translate-x-8 dark:border-blue-500'
                : 'translate-x-0 dark:border-gray-600'
            } inline-flex h-4 w-4 transform items-center justify-center rounded-full border bg-gray-900 transition`}
          >
            <span
              className={`block h-2 w-2 rounded-full border ${
                checked ? 'dark:border-blue-500' : 'dark:border-gray-600'
              }`}
            ></span>
          </span>
        </button>
      )}
    </Switch>
  );
}
