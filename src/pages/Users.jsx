import { useContext, useEffect,useState } from "react"

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
  },
  {
    "header":"PHONE",
    "accessorKey":"phone"
  },
  {
    "header":"HEIGHT",
    "accessorKey":"height"
  },
  {
    "header":"WEIGHT",
    "accessorKey":"weight"
  }
]

const categories = ['Name', 'Email','BirthDate','Gender']

export default function Users() {
  //
  const {state, fetchUsers, updateSearchTerm, submitSearch, setEntries} = useContext(Context)

  // 
  useEffect(() => {
    fetchUsers(state.entries)
  },[state.entries])

  // 
  const handleEntriesChange = (nbr) => {
    setEntries(nbr)
  }

  const handleSearch = () => {
    if (!state.searchTerm) return fetchUsers(state.entries)
    submitSearch(state.data?.users, state.searchTerm)
  }
  
  
  const pageCount = Math.ceil(state.data?.total / state.entries);


  const onPageChange = (e) => {
    const newOffset = (e.selected * state.entries) % state.data?.total;
    // const skip;
    fetchUsers(state.entries, newOffset)
  }

  return (
    <div className="mx-4">
      <Filters categories={categories} handleEntries = {handleEntriesChange} updateSearchTerm={updateSearchTerm} onSubmitSearch={handleSearch} />
      <Table data={state.data?.users} columnHeaders={columnHeaders} searchResult = {state.search} />
      <Pagination onPageChange={onPageChange} pageCount={pageCount}/>
    </div>
  )
}
