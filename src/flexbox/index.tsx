import React, { useReducer } from 'react';
import ActiveItemBox from './ActiveItemBox';
import {
  IAppState,
  ActionKind,
  IFlexItemsInitialState,
  IAction,
  IFlexItem,
  IFlexItemsAction,
  FlexItemsActionKind,
} from './flexbox.types';
import FlexBoxItem from './FlexBoxItem';
import FlexBoxContainer from './Hero';
import ToolBox from './ToolBox';

// STATE
const initialState: IAppState = {
  display: 'flex',
  flexDirection: 'flex-row',
  justifyContent: 'justify-start',
  alignItems: 'items-stretch',
  alignContent: 'content-stretch',
  wrap: 'flex-nowrap',
  activeItem: null,
};

const initialItemsState: IFlexItemsInitialState = {
  items: [],
};

const itemReducer = (
  state: IFlexItemsInitialState,
  action: IFlexItemsAction
): IFlexItemsInitialState => {
  const { type, payload } = action;

  const newItem: IFlexItem = {
    alignSelf: 'self-auto',
    order: 0,
    id: `${state.items.length}`,
    flexGrow: 0,
    flexShrink: 1,
  };

  switch (type) {
    case FlexItemsActionKind.AddItem:
      return { ...state, items: [...state.items, newItem] };
    case FlexItemsActionKind.RemoveItem:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== payload.id),
      };
    case FlexItemsActionKind.ChangeOrder:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === payload.id ? { ...i, order: Number(payload.order) } : i
        ),
      };
    case FlexItemsActionKind.ChangeFlexGrow:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === payload.id ? { ...i, flexGrow: Number(payload.flexGrow) } : i
        ),
      };
    case FlexItemsActionKind.ChangeFlexShrink:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === payload.id
            ? { ...i, flexShrink: Number(payload.flexShrink) }
            : i
        ),
      };
    case FlexItemsActionKind.SetAlignSelf:
      console.log({ payload });

      return {
        ...state,
        items: state.items.map((i) =>
          i.id === payload.id ? { ...i, alignSelf: payload.alignSelf } : i
        ),
      };
    default:
      return state;
  }
};

const reducer = (state: IAppState, action: IAction): IAppState => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.SetDisplay:
      return { ...state, display: payload };
    case ActionKind.SetFlexDirection:
      return { ...state, flexDirection: payload };
    case ActionKind.SetJustifyContent:
      return { ...state, justifyContent: payload };
    case ActionKind.SetAlignContent:
      return { ...state, alignContent: payload };
    case ActionKind.SetAlignItems:
      return { ...state, alignItems: payload };
    case ActionKind.SetWrap:
      return { ...state, wrap: payload };
    case ActionKind.SetActiveFlexItem:
      return { ...state, activeItem: payload };
    case ActionKind.ResetActiveFlexItem:
      return { ...state, activeItem: null };
    default:
      return state;
  }
};

export default function FlexBox() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [itemsState, dispatchItem] = useReducer(itemReducer, initialItemsState);

  return (
    <div className="flex w-full max-w-full flex-col py-5 md:flex-row md:gap-5 md:pl-5">
      <FlexBoxContainer appState={state}>
        {itemsState.items?.map((i: IFlexItem) => (
          <FlexBoxItem
            dispatch={dispatch}
            key={i.id}
            item={i}
            activeItemId={state?.activeItem?.id || ''}
          />
        ))}
      </FlexBoxContainer>
      <ToolBox dispatchItem={dispatchItem} dispatch={dispatch} state={state}>
        <ActiveItemBox
          dispatchItem={dispatchItem}
          item={itemsState.items[state?.activeItem?.id as any]}
        />
      </ToolBox>
      {/* <Items itemsState={itemsState} /> */}
    </div>
  );
}
