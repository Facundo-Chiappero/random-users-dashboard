import { useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'
import { Action, SortBy, User } from '../types.d'

export function useStore() {
  const [{ users, showColors, showSorted, filterCountry }, dispatch] =
    useReducer(reducer, initialState)

  const setUsers = (payload: User[]) => {
    dispatch({ type: Action.SET_USERS, payload: payload })
  }

  const setDeleteUsers = (payload: string) => {
    dispatch({ type: Action.DELETE_USERS, payload: payload })
  }

  const setShowColors = () => {
    dispatch({ type: Action.SET_SHOW_COLORS })
  }

  const setShowSorted = (payload: SortBy) => {
    dispatch({ type: Action.SET_SHOW_SORTED, payload: payload })
  }

  const setFilterCountry = (payload: string) => {
    dispatch({ type: Action.SET_FILTER_COUNTRY, payload: payload })
  }

  const setResetUsers = (payload: User[]) => {
    dispatch({ type: Action.RESET_USERS, payload: payload })
  }

  return {
    users,
    showColors,
    showSorted,
    filterCountry,
    setUsers,
    setShowColors,
    setShowSorted,
    setFilterCountry,
    setResetUsers,
    setDeleteUsers,
  }
}
