// hero icons
import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

//
import ReactPaginate from "react-paginate"


export default function Pagination({onPageChange, pageCount}) {
    const [active, setActive] = useState(1)
    return (
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowRightIcon className="h-5"/>}
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<ArrowLeftIcon className="h-5"/>}
        renderOnZeroPageCount={null}
        className="w-[30%] flex flex-row justify-between m-auto items-center mt-6"
      />
    )
}