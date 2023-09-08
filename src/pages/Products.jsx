// react
import { useContext, useEffect } from "react"

// user context
import { Context } from "../context/productsContext"

// components
import Filters from "../components/Filters"
import Table from "../components/Table"
import Pagination from "../components/Pagination"

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
  {
    "header":"DISCOUNT %",
    "accessorKey":"discountPercentage"
  },
]

const categories = ["Title","Brand","Category"]
const Tabs = ['All', 'Laptops']

export default function Products() {
  //
  const {state, fetchProducts, setEntries, submitSearch, updateSearchTerm} = useContext(Context)

  // 
  useEffect(() => {
    fetchProducts(state.entries)
  },[state.entries])

  //
  const handleEntriesChange = (nbr) => {
    setEntries(nbr)
  }

  const handleSearch = () => {
    submitSearch(state.data?.products, state.searchTerm)
  }

  
  const pageCount = Math.ceil(state.data?.total / state.entries)
  const onPageChange = (e) => {
    const newOffset = (e.selected * state.entries) % state.data?.total;
    fetchProducts(state.entries, newOffset)
  }

  const onChangeTab = (value) => {
    fetchProducts(state.entries, 0,value)
  }

  return (
    <div className="mx-6">
      <Filters onChangeTab={onChangeTab} tabs={Tabs} categories={categories} updateSearchTerm={updateSearchTerm} handleEntries={handleEntriesChange} onSubmitSearch={handleSearch}/>
      <Table data={state?.data?.products} columnHeaders={columnHeaders} searchResult = {state.search}/>
      <Pagination onPageChange={onPageChange} pageCount={pageCount}/>
    </div>
  )
}
