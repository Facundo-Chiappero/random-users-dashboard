import { useEffect, useRef } from 'react'
import { User } from '../types'

interface Props {
  url: string
  setUsers: (payload: User[]) => void
}

export function useGetUsers({ url, setUsers }: Props) {
  const originalUsers = useRef<User[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setUsers(data.results)
        originalUsers.current = data.results
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  return { originalUsers }
}
