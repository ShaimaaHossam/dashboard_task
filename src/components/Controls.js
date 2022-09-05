import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from '../features/PageSlice'
function Controls() {
    const page = useSelector(state => state.page.value)
    const dispatch = useDispatch()

    return (
        <div className="float-right flex m-8">
            <svg onClick={() => dispatch(decrement())} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <p>Current Page: {page}</p>
            <svg onClick={() => dispatch(increment())} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    )
}
export default Controls;