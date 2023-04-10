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
    { 'gap-4': isFlex },
    { 'space-y-4': appState.display === 'block' }
  );

  return (
    <section className="w-full max-w-full flex-1 pt-7 md:pt-0">
      <div className="bg-stripes w-full max-w-full overflow-hidden md:rounded-lg">
        <div
          className={`c-border h-80 w-full overflow-hidden rounded-lg p-4 md:h-[600px] ${containerClassNames}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
