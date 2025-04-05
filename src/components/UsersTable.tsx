import { SortBy, User } from '../types.d'

interface Props {
  users: User[]
  showColors: boolean
  setDeleteUsers: (uuid: string) => void
  setShowSorted: (sortBy: SortBy) => void
}

export default function UsersTable({
  users,
  showColors,
  setDeleteUsers,
  setShowSorted,
}: Props) {
  const coloredRow = showColors ? 'row-color' : ''

  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th className="pointer" onClick={() => setShowSorted(SortBy.FIRST)}>
            Nombre
          </th>
          <th className="pointer" onClick={() => setShowSorted(SortBy.LAST)}>
            Apellido
          </th>
          <th className="pointer" onClick={() => setShowSorted(SortBy.COUNTRY)}>
            País
          </th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user: User) => (
          <tr key={user.login.uuid} className={coloredRow}>
            <td>
              <img src={user.picture.thumbnail} alt="" />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button onClick={() => setDeleteUsers(user.login.uuid)}>
                Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
