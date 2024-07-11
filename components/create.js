import Link from "next/link"

export default function Create() {
    return (
        <Link className="bg-BG h-14 w-14 rounded-full grid place-items-center" href="/createPost">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2102_1005)">
                <path d="M17 2C17 0.89543 16.1046 0 15 0C13.8954 0 13 0.89543 13 2V28C13 29.1046 13.8954 30 15 30C16.1046 30 17 29.1046 17 28V2Z" fill="#EDEDED"/>
                <path d="M28 17C29.1046 17 30 16.1046 30 15C30 13.8954 29.1046 13 28 13L2 13C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17H28Z" fill="#EDEDED"/>
                </g>
                <defs>
                <clipPath id="clip0_2102_1005">
                <rect width="30" height="30" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </Link>
    )
}