import { useMemo } from 'react'
import { SortBy, User } from '../types.d'

interface Props {
  filteredUsers: User[]
  showSorted: SortBy
}

export function useSortUsers({ filteredUsers, showSorted }: Props) {
  const sortUsers = useMemo(() => {
    if (showSorted === SortBy.NONE) return filteredUsers

    const sortOptions = {
      [SortBy.COUNTRY]: (a: User, b: User) => {
        return a.location.country.localeCompare(b.location.country)
      },
      [SortBy.FIRST]: (a: User, b: User) => {
        return a.name.first.localeCompare(b.name.first)
      },
      [SortBy.LAST]: (a: User, b: User) => {
        return a.name.last.localeCompare(b.name.last)
      },
    }

    return [...filteredUsers].sort(sortOptions[showSorted])
  }, [showSorted, filteredUsers])

  return { sortUsers }
}
