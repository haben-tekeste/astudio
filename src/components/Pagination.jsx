// hero icons
import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react"


export default function Pagination() {
    const [active, setActive] = useState(1)
    return (
        <ul className="w-[30%] flex flex-row justify-between m-auto items-center mt-6">
            <ArrowLeftIcon className="h-5"/>
            <li className="mb-3">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <ArrowRightIcon className="h-5"/>
        </ul>
    )
}