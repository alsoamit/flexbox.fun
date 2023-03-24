import classNames from 'classnames';
import React from 'react';
import { IAppState } from './flexbox.types';

interface IFlexBoxContainerProps {
  children: React.ReactNode;
  appState: IAppState;
}

export default function FlexBoxContainer({
  children,
  appState,
}: IFlexBoxContainerProps) {
  const isFlex = appState.display === 'flex';

  const containerClassNames = classNames(
    appState.display,
    { [appState.flexDirection]: isFlex },
    { [appState.justifyContent]: isFlex },
    { [appState.alignItems]: isFlex },
    { [appState.alignContent]: isFlex },
    { [appState.wrap]: isFlex },
    { 'gap-5': isFlex },
    { 'space-y-5': appState.display === 'block' }
  );

  return (
    <section className="flex-1">
      <div
        className={`c-border bg-stripes h-[500px] w-full overflow-hidden rounded-lg p-5 ${containerClassNames}`}
      >
        {children}
      </div>
    </section>
  );
}
