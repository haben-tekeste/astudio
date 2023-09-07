import { useContext, useEffect } from "react"


// user context
import { Context } from "../context/usersContext"

// components
import Filters from "../components/Filters"
import Table from "../components/Table"
import Pagination from "../components/Pagination"

const columnHeaders = [
  {
    "header":"FIRST NAME",
    "accessorKey":"firstName"
  },
  {
    "header":"LAST NAME",
    "accessorKey":"lastName"
  },
  {
    "header":"MAIDEN NAME",
    "accessorKey":"maidenName"
  },
  {
    "header":"AGE",
    "accessorKey":"age"
  },
  {
    "header":"Gender",
    "accessorKey":"gender"
  },
  {
    "header":"EMAIL",
    "accessorKey":"email"
  },
  {
    "header":"USERNAME",
    "accessorKey":"username"
  },
  {
    "header":"BLOODGROUP",
    "accessorKey":"bloodGroup"
  },
  {
    "header":"EYECOLOR",
    "accessorKey":"eyeColor"
  }
]

export default function Users() {
  //
  const {state, fetchUsers, updateSearchTerm, submitSearch} = useContext(Context)

  // 
  useEffect(() => {
    fetchUsers()
  },[])

  // 
  const handleEntriesChange = (nbr) => {
    fetchUsers(nbr)
  }

  const handleSearch = () => {  
    submitSearch(state.data?.users, state.searchTerm)
  }

  return (
    <div>
      <Filters handleEntries = {handleEntriesChange} handleSearch={handleSearch} updateSearchTerm={updateSearchTerm} onSubmitSearch={handleSearch}/>
      <Table data={state.data?.users} columnHeaders={columnHeaders} searchResult = {state.search} />
      <Pagination />
    </div>
  )
}
