// react
import { useContext, useEffect } from "react"

// user context
import { Context } from "../context/productsContext"

// components
import Filters from "../components/Filters"
import Table from "../components/Table"

const columnHeaders = [
  {
    "header":"ID",
    "accessorKey":"id"
  },
  {
    "header":"TITLE",
    "accessorKey":"title"
  },
  {
    "header":"DESCRIPTION",
    "accessorKey":"description"
  },
  {
    "header":"PRICE",
    "accessorKey":"price"
  },
  {
    "header":"BRAND",
    "accessorKey":"brand"
  },
  {
    "header":"RATING",
    "accessorKey":"rating"
  },
  {
    "header":"STOCK",
    "accessorKey":"stock"
  },
  {
    "header":"CATEGORY",
    "accessorKey":"category"
  },
]

export default function Products() {
  //
  const {state, fetchProducts} = useContext(Context)

  // 
  useEffect(() => {
    fetchProducts()
  },[])


  return (
    <div>
      <Filters />
      <Table data={state?.data?.products} columnHeaders={columnHeaders} />
    </div>
  )
}
