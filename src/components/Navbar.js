function Navbar() {
    const getDate = () => {
        const date = new Date()
        return date.toDateString()
    }
    const getTime = () => {
        const date = new Date()
        return date.toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
    return (
        <div className="flex justify-between px-8 py-2 text-gray-600 bg-white border-b-gray-200 border-1">

            <div className="flex">
                <div className="flex mr-4 my-auto font-bold cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-3 h-3 my-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.3" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <p className="font-bold text-md">Good Morning!</p>
                <p className="text-gray-500 text-md ml-2">{getDate()}</p>
                <p className="text-gray-500 text-md ml-2">{getTime()}</p>
            </div>
        </div>
    )
}
export default Navbar;