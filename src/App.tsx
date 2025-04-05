import UsersTable from './components/UsersTable'
import { useGetUsers } from './hooks/useGetUsers'
import { Buttons } from './components/Buttons'
import { useFilteredUsers } from './hooks/useFilteredUsers'
import { useSortUsers } from './hooks/useSortUsers'
import { useStore } from './hooks/useStore'

function App() {
  const url = 'https://randomuser.me/api/?results=100'
  const {
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
  } = useStore()

  const { originalUsers } = useGetUsers({ url, setUsers })

  const { filteredUsers } = useFilteredUsers({ filterCountry, users })
  const { sortUsers } = useSortUsers({ filteredUsers, showSorted })

  return (
    <>
      <div className="container">
        <header>
          <h1>Dashboard</h1>
          <Buttons
            setShowColors={setShowColors}
            setFilterCountry={setFilterCountry}
            setResetUsers={setResetUsers}
            originalUsers={originalUsers}
            setShowSorted={setShowSorted}
            showSorted={showSorted}
          />
        </header>
        <main>
          <UsersTable
            users={sortUsers}
            showColors={showColors}
            setDeleteUsers={setDeleteUsers}
            setShowSorted={setShowSorted}
          />
        </main>
      </div>
    </>
  )
}

export default App
