import { useEffect, useState } from 'react';
import Toggle from 'src/fragments/Toggle';

export default function DisplayWidget() {
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
