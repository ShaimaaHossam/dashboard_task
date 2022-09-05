function InputsRow() {
    return (
        <div className="flex text-sm mx-8 mt-8">
            <div className="relative  border-none">
                <input type="text" className="py-2 pr-12  rounded-sm border-1 border-gray-300 pl-8" placeholder="Search..." />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute m-3  top-0 left-0 w-4  h-4"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
            </div>
            <input placeholder="User Name" className="py-2 pl-2 ml-2 w-28 placeholder-gray-500 border-1 border-gray-300 rounded-sm" />
            <select className=" py-2 pr-8 pl-2 rounded-sm ml-2 border-1 text-black font-semibold">
                <option>User Status</option>
            </select>
            <div className=" relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 absolute right-0 w-5 m-2 mr-4 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>

                <input placeholder="Creation Date" className=" py-2 border-1 border-gray-300 mx-2 rounded-sm pl-2" />
            </div>
            <p className="text-blue-500 cursor-pointer font-semibold my-auto mx-2">All Filters</p>
        </div>
    )
}
export default InputsRow;