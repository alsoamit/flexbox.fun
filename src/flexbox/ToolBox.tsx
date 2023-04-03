import { Button, Dropdown, Select } from 'flowbite-react';
import React, { useEffect } from 'react';
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

  useEffect(() => {
    [1, 2, 3, 4, 5, 6].map((i: any) =>
      dispatchItem({
        type: FlexItemsActionKind.AddItem,
      })
    );
  }, []);

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
            <h2 className="c-title flex-1">display</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.display}
              onChange={handleDisplayValueChange}
            >
              <option value="flex">flex</option>
              <option value="block">block</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">flex-direction</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.flexDirection}
              onChange={handleFlexDirectionChange}
            >
              <option value="flex-row">row</option>
              <option value="flex-row-reverse">row-reverse</option>
              <option value="flex-col">column</option>
              <option value="flex-col-reverse">column-reverse</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">justify-content</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.justifyContent}
              onChange={handleJustifyContentChange}
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
            <h2 className="c-title flex-1">align-items</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.alignItems}
              onChange={handleAlignItemsChange}
            >
              <option value="items-start">flex-start</option>
              <option value="items-end">flex-end</option>
              <option value="items-center">center</option>
              <option value="items-baseline">baseline</option>
              <option value="items-stretch">stretch</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">align-content</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.alignContent}
              onChange={handleAlignContentChange}
            >
              <option value="content-start">flex-start</option>
              <option value="content-center">center</option>
              <option value="content-end">flex-end</option>
              <option value="content-between">space-between</option>
              <option value="content-around">space-around</option>
              <option value="content-evenly">space-evenly</option>
              <option value="content-baseline">baseline</option>
              <option value="content-stretch">stretch</option>
            </Select>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <h2 className="c-title flex-1">flex-wrap</h2>
            <Select
              sizing="sm"
              className="flex-1"
              value={state.wrap}
              onChange={handleFlexWrapChange}
            >
              <option value="flex-wrap">wrap</option>
              <option value="flex-nowrap">nowrap</option>
              <option value="flex-wrap-reverse">wrap-reverse</option>
            </Select>
          </div>
        </div>
        {children}
      </section>
    </>
  );
}
