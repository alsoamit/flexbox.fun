import { useEffect, useState } from 'react';
import { TAlignSelf } from 'src/flexbox/flexbox.types';
import SingleSelect from 'src/fragments/SingleSelect';

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

export default function ItemSelfAlignWidget() {
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
