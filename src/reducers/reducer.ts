import { Action, SortBy, User } from '../types.d'

type ActionPayload =
  | { type: Action.SET_USERS; payload: User[] }
  | { type: Action.DELETE_USERS; payload: string }
  | { type: Action.SET_SHOW_COLORS; payload?: undefined }
  | { type: Action.SET_SHOW_SORTED; payload: SortBy }
  | { type: Action.SET_FILTER_COUNTRY; payload: string }
  | { type: Action.RESET_USERS; payload: User[] }

interface Props {
  users: User[]
  showColors: boolean
  showSorted: SortBy
  filterCountry: string
}

export const initialState = {
  users: [],
  showColors: false,
  showSorted: SortBy.NONE,
  filterCountry: '',
}

export function reducer(state: Props, action: ActionPayload) {
  const { type, payload } = action

  if (type === Action.SET_USERS) {
    return {
      ...state,
      users: payload,
    }
  }

  if (type === Action.DELETE_USERS) {
    const newUsers = state.users.filter((user) => {
      return user.login.uuid !== payload
    })

    return {
      ...state,
      users: newUsers,
    }
  }

  if (type === Action.SET_SHOW_COLORS) {
    return {
      ...state,
      showColors: !state.showColors,
    }
  }

  if (type === Action.SET_SHOW_SORTED) {
    return {
      ...state,
      showSorted: state.showSorted == payload ? SortBy.NONE : payload,
    }
  }

  if (type === Action.SET_FILTER_COUNTRY) {
    return {
      ...state,
      filterCountry: payload,
    }
  }

  if (type === Action.RESET_USERS) {
    return {
      ...state,
      users: payload,
    }
  }

  return state
}
