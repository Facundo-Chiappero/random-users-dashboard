import { SortBy, User } from '../types.d'

interface Props {
  setShowColors: () => void
  setShowSorted: (sortBy: SortBy) => void
  showSorted: SortBy
  setResetUsers: (payload: User[]) => void
  setFilterCountry: (filter: string) => void
  originalUsers: React.RefObject<User[]>
}

export function Buttons({
  setShowColors,
  setShowSorted,
  showSorted,
  setResetUsers,
  setFilterCountry,
  originalUsers,
}: Props) {
  return (
    <div>
      <button onClick={setShowColors}>Colorear filas</button>

      <button onClick={() => setShowSorted(SortBy.COUNTRY)}>
        {showSorted === SortBy.COUNTRY
          ? 'No ordenar por país'
          : 'Ordenar por país'}
      </button>

      <button onClick={() => setResetUsers(originalUsers.current)}>
        Resetear usuarios
      </button>

      <input
        autoComplete="country"
        type="text"
        name="country"
        id="country"
        placeholder="filtra por país"
        onChange={(e) => setFilterCountry(e.target.value)}
      />
    </div>
  )
}
