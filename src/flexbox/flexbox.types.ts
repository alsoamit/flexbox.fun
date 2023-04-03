export type TDisplay = 'block' | 'flex' | 'inline-flex';
export type TAlignSelf =
  | 'self-auto'
  | 'self-start'
  | 'self-center'
  | 'self-stretch'
  | 'self-end'
  | 'self-baseline';
export type TFlexDirection =
  | 'flex-row'
  | 'row-reverse'
  | 'flex-col'
  | 'flex-col-reverse';
export type IJustifyContent =
  | 'justify-start'
  | 'justify-center'
  | 'justify-end'
  | 'justify-around'
  | 'justify-evenly'
  | 'justify-between';
export type IAlignContent =
  | 'content-start'
  | 'content-center'
  | 'content-end'
  | 'content-between'
  | 'content-around'
  | 'content-evenly'
  | 'content-stretch'
  | 'content-baseline';
export type IAlignItems =
  | 'items-start'
  | 'items-end'
  | 'items-center'
  | 'items-stretch'
  | 'items-baseline';

export type IFlexWrap = 'flex-nowrap' | 'flex-wrap' | 'flex-wrap-reverse';

export interface IAppState {
  display: TDisplay;
  flexDirection: TFlexDirection;
  justifyContent: IJustifyContent;
  alignItems: IAlignItems;
  alignContent: IAlignContent;
  wrap: IFlexWrap;
  activeItem: IFlexItem | null;
}

export interface IFlexItem {
  id: string;
  order: number;
  alignSelf: TAlignSelf;
  flexShrink: number;
  flexGrow: number;
}

export interface IFlexItemsInitialState {
  items: IFlexItem[];
}

export enum ActionKind {
  SetDisplay = 'SET_DISPLAY',
  SetFlexDirection = 'SET_FLEX_DIRECTION',
  SetJustifyContent = 'SET_JUSTIFY_CONTENT',
  SetAlignItems = 'SET_ALIGN_ITEMS',
  SetAlignContent = 'SET_ALIGN_CONTENT',
  SetWrap = 'SET_WRAP',
  SetActiveFlexItem = 'SET_ACTIVE_FLEX_ITEM',
  ResetActiveFlexItem = 'RESET_ACTIVE_FLEX_ITEM',
}

export interface IAction {
  type: ActionKind;
  payload: any;
}

export enum FlexItemsActionKind {
  AddItem = 'ADD_ITEM',
  RemoveItem = 'REMOVE_ITEM',
  ChangeOrder = 'CHANGE_ITEM_ORDER',
  ChangeFlexGrow = 'SET_FLEX_GROW',
  ChangeFlexShrink = 'SET_FLEX_SHRINK',
  SetAlignSelf = 'SET_ALIGN_SELF',
}

export interface IFlexItemsAction {
  type: FlexItemsActionKind;
  payload: any;
}
