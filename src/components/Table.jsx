import { v4 as uuidv4 } from 'uuid';

export default function Table ({columnHeaders, data, searchResult}) { 
    return (
        <div className="mt-12">
            <table className="table-fixed w-full text-sm border-spacing-4 border-2">
                <thead className="bg-[#c0e3e5]">
                    <tr>
                        {
                            columnHeaders.map((col, i) => (
                                <th key={i} className="border-r-4 px-2 py-3">
                                    {
                                        col.header
                                    }
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        searchResult === null && (
                        data?.map((row, i) => (
                            <tr key={i} className={`${i == 0 && 'bg-[#ebebeb]'}`}>

                               { columnHeaders.map(col => {
                                   return <td key={uuidv4()} className="text-sm text-center border-2 font-thin text-gray-500 p-2">
                                        {row[`${col?.accessorKey}`]}
                                   </td> 
                                })}
                            </tr>
                        ))
                        )  
                    }
                    {
                        searchResult?.length !=0 && searchResult?.map((row, i) => (
                            <tr key={i} className={`${i == 0 && 'bg-[#ebebeb]'}`}>

                               { columnHeaders.map(col => {
                                   return <td key={uuidv4()} className="text-sm text-center border-2 font-thin text-gray-500 p-2">
                                        {row[`${col?.accessorKey}`]}
                                   </td> 
                                })}
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            {
                    searchResult?.length == 0 ?
                    <h1 className='text-center mt-3'>No Record Found</h1>
                      : null
                }
        </div>
    )
}
