import { Select, TextInput } from 'flowbite-react';
import React from 'react';
import { ActionKind, FlexItemsActionKind, IFlexItem } from './flexbox.types';
import { HiTrash } from 'react-icons/hi';

interface IActiveItemBoxProps {
  item: IFlexItem | null;
  dispatchItem: any;
}

export default function ActiveItemBox({
  item,
  dispatchItem,
}: IActiveItemBoxProps) {
  if (!item) {
    return (
      <div className="">
        <div className="c-border c-title flex items-center justify-center rounded-lg px-10 py-20 dark:bg-gray-900">
          Click on an item for details
        </div>
      </div>
    );
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatchItem({
      type: FlexItemsActionKind.RemoveItem,
      payload: { id: item?.id },
    });
    dispatchItem({
      type: ActionKind.ResetActiveFlexItem,
    });
  };

  const handleChange = (type: string, property: string, e: any) => {
    dispatchItem({
      type,
      payload: { id: item?.id, [property]: e.target.value },
    });
  };

  const handleChangeOrder = (e: any) => {
    handleChange(FlexItemsActionKind.ChangeOrder, 'order', e);
  };

  const handleChangeFlexGrow = (e: any) => {
    handleChange(FlexItemsActionKind.ChangeFlexGrow, 'flexGrow', e);
  };

  const handleChangeFlexShrink = (e: any) => {
    handleChange(FlexItemsActionKind.ChangeFlexShrink, 'flexShrink', e);
  };

  const handleAlignSelfChange = (e: any) => {
    handleChange(FlexItemsActionKind.SetAlignSelf, 'alignSelf', e);
  };

  return (
    <div
      key={item?.id}
      className="c-border space-y-4 overflow-hidden rounded-lg pb-4 dark:bg-gray-900"
    >
      <div className="c-border-directional flex items-center justify-between border-b px-4 py-2 dark:bg-gray-900">
        <h2 className="c-title text-xl">{item?.id}</h2>
        <button onClick={handleDelete}>
          <HiTrash className="text-xl text-white" />
        </button>
      </div>
      <h3 className="c-title-faded px-4">Flex Item</h3>
      <div className="flex items-center px-4">
        <label className="c-title flex-1">align-self</label>
        <Select
          sizing="sm"
          className="flex-1"
          value={item.alignSelf}
          onChange={handleAlignSelfChange}
        >
          <option value="self-auto">auto</option>
          <option value="self-start">flex-start</option>
          <option value="self-end">flex-end</option>
          <option value="self-center">center</option>
          <option value="self-baseline">baseline</option>
          <option value="self-stretch">stretch</option>
        </Select>
      </div>
      <div className="flex items-center px-4">
        <label htmlFor={`order-${item?.id}`} className="c-title flex-1">
          order
        </label>
        <TextInput
          sizing="sm"
          value={item?.order}
          onChange={handleChangeOrder}
          id={`order-${item?.id}`}
          type="number"
          className="flex-1"
        />
      </div>
      <div className="flex items-center px-4">
        <label htmlFor={`flex-grow-${item?.id}`} className="c-title flex-1">
          flex-grow
        </label>
        <TextInput
          sizing="sm"
          value={item?.flexGrow}
          onChange={handleChangeFlexGrow}
          id={`flex-grow-${item?.id}`}
          type="number"
          className="flex-1"
        />
      </div>
      <div className="flex items-center px-4">
        <label htmlFor={`flex-shrink-${item?.id}`} className="c-title flex-1">
          flex-shrink
        </label>
        <TextInput
          sizing="sm"
          value={item?.flexShrink}
          onChange={handleChangeFlexShrink}
          id={`flex-shrink-${item?.id}`}
          type="number"
          className="flex-1"
        />
      </div>
    </div>
  );
}
