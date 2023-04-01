import { Button, Dropdown, Select } from 'flowbite-react';
import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { ActionKind, FlexItemsActionKind, IAppState } from './flexbox.types';

interface IToolBox {
  dispatch: any;
  dispatchItem: any;
  state: IAppState;
  children: React.ReactNode;
}

export default function ToolBox({
  dispatch,
  dispatchItem,
  state,
  children,
}: IToolBox) {
  const handleOptionChange = (payload: string, type: string) => {
    dispatch({
      payload: payload,
      type: type,
    });
  };

  const handleDisplayValueChange = (e: any) => {
    handleOptionChange(e.target.value, ActionKind.SetDisplay);
  };

  const handleFlexDirectionChange = (e: any) => {
    handleOptionChange(e.target.value, ActionKind.SetFlexDirection);
  };

  const handleJustifyContentChange = (e: any) => {
    handleOptionChange(e.target.value, ActionKind.SetJustifyContent);
  };

  const handleAlignContentChange = (e: any) => {
    handleOptionChange(e.target.value, ActionKind.SetAlignContent);
  };

  const handleAlignItemsChange = (e: any) => {
    handleOptionChange(e.target.value, ActionKind.SetAlignItems);
  };

  const handleFlexWrapChange = (e: any) => {
    handleOptionChange(e.target.value, ActionKind.SetWrap);
  };

  return (
    <>
      <div className="w-80"></div>
      <section className="fixed top-0 bottom-0 right-0 col-span-4 w-80 space-y-6 overflow-y-auto p-2 py-5 dark:bg-gray-800">
        <div className="">
          <button
            onClick={(e: any) =>
              dispatchItem({
                type: FlexItemsActionKind.AddItem,
              })
            }
            className="flex w-full items-center justify-center rounded-lg bg-blue-500 py-2.5 font-bold"
          >
            <HiOutlinePlus className="mr-2 text-lg" />
            Add Item
          </button>
        </div>
        <div className="c-border space-y-4 rounded-lg p-5 dark:bg-gray-900">
          <div className="c-title-faded">Flex Container</div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">Display</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.display}
              onChange={handleDisplayValueChange}
            >
              <option value="flex">Flex</option>
              <option value="block">Block</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">Flex Direction</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.flexDirection}
              onChange={handleFlexDirectionChange}
            >
              <option value="flex-col">Flex Col</option>
              <option value="flex-col-reverse">Col Reverse</option>
              <option value="flex-row">Row</option>
              <option value="flex-row-reverse">Row Reverse</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">Justify Content</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.justifyContent}
              onChange={handleJustifyContentChange}
            >
              <option value="justify-center">Center</option>
              <option value="justify-between">Between</option>
              <option value="justify-around">Around</option>
              <option value="justify-evenly">Evenly</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">Align Content</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.alignContent}
              onChange={handleAlignContentChange}
            >
              <option value="content-start">Start</option>
              <option value="content-center">Center</option>
              <option value="content-between">Between</option>
              <option value="content-around">Around</option>
              <option value="content-end">End</option>
              <option value="content-evenly">Evenly</option>
              <option value="content-baseline">Baseline</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">Align Items</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.alignItems}
              onChange={handleAlignItemsChange}
            >
              <option value="items-start">Start</option>
              <option value="items-center">Center</option>
              <option value="items-end">End</option>
              <option value="items-stretch">Stretch</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">Flex Wrap</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.wrap}
              onChange={handleFlexWrapChange}
            >
              <option value="flex-nowrap">No Wrap</option>
              <option value="flex-wrap">Wrap</option>
              <option value="flex-wrap-reverse">Wrap Reverse</option>
            </Select>
          </div>
        </div>
        {children}
      </section>
    </>
  );
}
