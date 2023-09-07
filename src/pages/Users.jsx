import { useContext, useEffect } from "react"


// user context
import { Context } from "../context/usersContext"

// components
import Filters from "../components/Filters"
import Table from "../components/Table"

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
  const {state, fetchUsers} = useContext(Context)

  // 
  useEffect(() => {
    fetchUsers()
  },[])


  return (
    <div>
      <Filters />
      <Table data={state?.data?.users} columnHeaders={columnHeaders} />
    </div>
  )
}
