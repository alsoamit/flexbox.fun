import classNames from 'classnames';
import React from 'react';
import { ActionKind, IFlexItem } from './flexbox.types';

interface IFlexBoxItemProps {
  item: IFlexItem;
  dispatch: any;
  activeItemId: string;
}

export default function FlexBoxItem({
  item,
  dispatch,
  activeItemId,
}: IFlexBoxItemProps) {
  const handleSetActiveItem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: ActionKind.SetActiveFlexItem,
      payload: item,
    });
  };

  const itemClass = classNames(
    `flex md:px-16 px-5 items-center justify-center rounded-lg bg-blue-500 py-4 md:py-10`,
    { 'border-white border': item?.id === activeItemId },
    { [item?.alignSelf]: true }
  );

  const style = {
    order: item.order,
    flexGrow: item.flexGrow,
    flexShrink: item.flexShrink,
  };

  return (
    <div className={itemClass} style={style} onClick={handleSetActiveItem}>
      {item.id}
    </div>
  );
}
