import { Action } from 'redux';

export interface GlobalState {
  // 侧边栏是否收缩
  collapsed: boolean;
  // 语言
  locale: 'zh_CN' | 'en_US';
}

const SET_GLOBAL_ITEM = 'SET_GLOBAL_ITEM';

type SET_GLOBAL_ITEM = typeof SET_GLOBAL_ITEM;

interface SetGlobalItem extends Action<SET_GLOBAL_ITEM> {
  payload: Partial<GlobalState>;
}

export const setGlobalItem = (payload: Partial<GlobalState>): SetGlobalItem => ({
  type: 'SET_GLOBAL_ITEM',
  payload,
});

export type GlobalActions = SetGlobalItem;
