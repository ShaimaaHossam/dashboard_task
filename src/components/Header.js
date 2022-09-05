import {  useDispatch } from "react-redux"
import {open} from '../features/ModalSlice'
function Header(){
    const dispatch = useDispatch()
    return(
        <div className="flex justify-between px-8 my-4">
            <h1 className="text-lg font-bold">User Management</h1>
            <button onClick={()=>dispatch(open())}  className="bg-[#22a565] text-white px-4 py-1 rounded-md">+ Add New</button>
        </div>
    )
}
export default Header