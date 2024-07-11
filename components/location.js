import { useState } from 'react'

function LocationList() {
    return (
        <div className="flex">
            <div className="w-[40px]"></div>
            <div className="container flex flex-col gap-2">
                <div className="h-10 bg-secondBG rounded-md px-4 font-medium flex items-center justify-between text-sm text-textColor">
                <p className="text-blue-400">Use current location</p>
                1111 S Arroyo
                </div>
                <div className="h-10 bg-secondBG rounded-md px-4 font-medium flex items-center justify-between text-sm text-textColor">
                    Select on map
                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.70498 6L8.29498 7.41L12.875 12L8.29498 16.59L9.70498 18L15.705 12L9.70498 6Z" fill="currentColor"/></svg>
                </div>
            </div>
        </div>
    )
}

function LocationUnselected({ expanded, toggleList }) {
    return (
        <div className="container flex justify-between font-medium text-textColor" onClick={toggleList}>
            <div className="flex items-center gap-4 text-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13013 5 9.0003C5 14.2505 12 22.0009 12 22.0009C12 22.0009 19 14.2505 19 9.0003C19 5.13013 15.87 2 12 2ZM7 9.0003C7 6.24018 9.24 4.00009 12 4.00009C14.76 4.00009 17 6.24018 17 9.0003C17 11.8804 14.12 16.1906 12 18.8807C9.92 16.2106 7 11.8504 7 9.0003Z" fill="#E4E4E4"/>
                    <path d="M12 11.5002C13.3807 11.5002 14.5 10.381 14.5 9.00024C14.5 7.61953 13.3807 6.50024 12 6.50024C10.6193 6.50024 9.5 7.61953 9.5 9.00024C9.5 10.381 10.6193 11.5002 12 11.5002Z" fill="#E4E4E4"/>
                </svg>
                Your Location
            </div>
            <div className={`${expanded ? "rotate-90" : ""} transition`}>
                <svg  width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.70498 6L8.29498 7.41L12.875 12L8.29498 16.59L9.70498 18L15.705 12L9.70498 6Z" fill="currentColor"/></svg>
            </div>
        </div>
    )
}


export default function location() {
    const [expanded, setExpanded] = useState(true);

    function handleClick() {
        setExpanded(!expanded);
    }

    return (
        <div className='flex flex-col gap-2'>
            <LocationUnselected expanded={expanded} toggleList={handleClick}/>
            <div className={`${expanded ? "h-[88px]" : "h-0"} overflow-hidden transition-all`}>
                <LocationList/>
            </div>
        </div>
    )
}