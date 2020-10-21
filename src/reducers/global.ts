import { GlobalActions, GlobalState } from '../actions/global'

const globalState: GlobalState = {
  collapsed: (localStorage.getItem('collapsed') || false) as any,
  locale: (localStorage.getItem('lang') || 'en_US') as any,
}

export type globalState = typeof globalState

// eslint-disable-next-line import/prefer-default-export
export const globalReducer = (state = globalState, actions: GlobalActions): GlobalState => {
  switch (actions.type) {
    case 'SET_GLOBAL_ITEM':
      return { ...state, ...actions.payload }
    default:
      return state
  }
}
