import TableData from '../components/TableData'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
function Table(){
    const page = useSelector(state => state.page.value)
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://dummyapi.io/data/v1/user?page="+page+"=1&limit=5",{
                method:'get',
                headers: new Headers({
                    'app-id': "63159e930878d43a32cb3630"
                })
            })
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)
                    setData(data)
                })
                .catch(err => console.log(err))
        }, 1000)
    }, [page])
    
 return(
<div className="w-full h-full">
        <div className="overflow-x-auto">
            <div className="w-full  rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal border-1">
                    <thead>
                        <tr className="border-1">
                            <th
                                className="py-3 px-4 text-start  border-gray-200 bg-[#f8fafb] text-xs font-semibold text-gray-400  tracking-wider">
                                Picture
                            </th>
                            <th
                                className="py-3 px-4 text-start  border-gray-200 bg-[#f8fafb] text-xs font-semibold text-gray-400  tracking-wider">
                                Title
                            </th>
                            <th
                                className="py-3 px-4 text-start  border-gray-200 bg-[#f8fafb] text-xs font-semibold text-gray-400  tracking-wider">
                                First Name
                            </th>
                            <th
                                className="py-3 px-4 text-start  border-gray-200 bg-[#f8fafb] text-xs font-semibold text-gray-400  tracking-wider">
                                Last Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.data.map((user)=>{
                                return <tr key={user.id} className="hover:bg-[#f2f4f8]">
                                <td className="px-5  py-5 border-b border-gray-200  text-sm w-1/4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
                                            <img className="w-full h-full rounded-full"
                                                src={user.picture}
                                                alt="" />
                                        </div>
                                    </div>
                                </td>
                                <TableData data={user.title} />
                                <TableData data={user.firstName} />
                                <TableData data={user.lastName} />
                            </tr>
                            })
                        }
                      
                    </tbody>
                </table>
            </div>
        </div>
</div>
 )
}
export default Table;