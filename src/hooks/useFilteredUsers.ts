import { useMemo } from 'react'
import { User } from '../types'

interface Props {
  filterCountry: string
  users: User[]
}

export function useFilteredUsers({ filterCountry, users }: Props) {
  const filteredUsers = useMemo(() => {
    if (filterCountry.length <= 0) return users

    return users.filter((user: User) => {
      return user.location.country
        .toLowerCase()
        .includes(filterCountry.toLowerCase())
    })
  }, [filterCountry, users])

  return { filteredUsers }
}
