import { useState } from "react";

// hero icons
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";


export default function Filters () {
    const [open, setOpen] = useState(false)
    return (
        <div className="mt-4 flex items-center gap-2">
            <div className="flex space-x-4 border-r-4 border-gray-300 px-4">
                <select className="outline-none w-50 border-b-2 px-4">
                    <option value="">5</option>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">50</option>
                </select>
                <p>Entries</p>
            </div>
            <div className="border-r-4 border-gray-300 flex items-center justify-center px-4 pt-1">
                <MagnifyingGlassIcon className="h-5 text-gray-500 cursor-pointer" onClick={() => setOpen(!open)}/>
                {open && <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
                />}
            </div>

            <div className="flex space-x-4 border-r-4 border-gray-300 px-4">
                <select className="outline-none w-50  px-4">
                    <option value="">Name</option>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">50</option>
                </select>
            </div>
            <div className="flex space-x-4 border-r-4 border-gray-300 px-4">
                <select className="outline-none w-50  px-4">
                    <option value="">Email</option>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">50</option>
                </select>
                
            </div>
            <div className="flex space-x-4 border-r-4 border-gray-300 px-4">
                <select className="outline-none w-50  px-4">
                    <option value="">Birth Date</option>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">50</option>
                </select>
            </div>
            <div className="flex space-x-4 border-r-4 border-gray-300 px-4">
                <select className="outline-none w-50  px-4">
                    <option value="">5</option>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">50</option>
                </select>
            </div>
        </div>
    )
}