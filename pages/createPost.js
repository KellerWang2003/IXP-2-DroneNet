import Gear from "@/components/gear"
import Location from "@/components/location"
import Post from "@/components/post"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

function UploadPage() {
    return (
        <div className="w-full flex-none p-6 flex flex-col gap-5 overflow-auto">
            <div className="bg-[#272727] min-h-56 w-full rounded-xl grid place-items-center"> {/*upload*/}
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2102_1005)">
                    <path d="M17 2C17 0.89543 16.1046 0 15 0C13.8954 0 13 0.89543 13 2V28C13 29.1046 13.8954 30 15 30C16.1046 30 17 29.1046 17 28V2Z" fill="#A1A1A1"/>
                    <path d="M28 17C29.1046 17 30 16.1046 30 15C30 13.8954 29.1046 13 28 13L2 13C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17H28Z" fill="#A1A1A1"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2102_1005">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="min-h-20 w-full flex gap-4">
                <div className="h-full w-1 bg-neutral-600 rounded-full"></div>
                <textarea className="w-full h-full bg-BG text-top placeholder:text-neutral-500 text-textColor" 
                type="text" placeholder="Say something about your flight..." ></textarea>
                <div className="h-full w-1 bg-neutral-600 rounded-full"></div>
            </div>
            <Location/>
            <Gear/>
        </div>
    )
}

function SurvayPage() {
    return (
        <div className="w-full flex-none">
            <div className="p-6">
                <Post
                content="/images/test.png"
                text="Hallo!!! My name is Hallo!"/>
            </div>
            <div className="h-2 w-full bg-[#272727]"></div>
            <div className="p-6 flex flex-col gap-5">
                <div>
                    <h1 className="text-textColor text-lg font-normal tracking-wide">Please complete this survey</h1>
                    <p className="text-neutral-400 text-sm font-normal tracking-wide">Optional</p>
                </div>
                <div className="text-textColor text-sm font-normal tracking-wide">Was there any safety control around this area?</div>
                <div className="w-full flex gap-3">
                    <div className="grow px-3 py-2 rounded-md border border-neutral-500 items-center gap-3 flex">
                        <div className="w-[18px] h-[18px] rounded-full border-2 border-neutral-200" />
                        <div className="text-neutral-200 text-sm tracking-wide">Yes</div>
                    </div>
                    <div className="grow px-3 py-2 rounded-md border border-neutral-500 items-center gap-3 flex">
                        <div className="w-[18px] h-[18px] rounded-full border-2 border-neutral-200" />
                        <div className="text-neutral-200 text-sm tracking-wide">No</div>
                    </div>
                </div>
                <div className="text-textColor text-sm font-normal tracking-wide">Was there any interference?</div>
                <div className="w-full flex gap-3">
                    <div className="grow px-3 py-2 rounded-md border border-neutral-500 items-center gap-3 flex">
                        <div className="w-[18px] h-[18px] rounded-full border-2 border-neutral-200" />
                        <div className="text-neutral-200 text-sm tracking-wide">Yes</div>
                    </div>
                    <div className="grow px-3 py-2 rounded-md border border-neutral-500 items-center gap-3 flex">
                        <div className="w-[18px] h-[18px] rounded-full border-2 border-neutral-200" />
                        <div className="text-neutral-200 text-sm tracking-wide">No</div>
                    </div>
                </div>
                <div className="text-textColor text-sm font-normal tracking-wide">How would you rate this spot?</div>
                <div className="flex justify-between">
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0489 1.92913C13.3483 1.00782 14.6517 1.00782 14.9511 1.92913L17.1432 8.67584C17.2771 9.08786 17.661 9.36682 18.0943 9.36682H25.1882C26.1569 9.36682 26.5597 10.6064 25.776 11.1758L20.0369 15.3455C19.6864 15.6002 19.5397 16.0515 19.6736 16.4636L21.8657 23.2103C22.1651 24.1316 21.1106 24.8977 20.3269 24.3283L14.5878 20.1586C14.2373 19.904 13.7627 19.904 13.4122 20.1586L7.67312 24.3283C6.88941 24.8977 5.83493 24.1316 6.13428 23.2103L8.32642 16.4636C8.46029 16.0515 8.31363 15.6002 7.96315 15.3455L2.22405 11.1758C1.44034 10.6064 1.84311 9.36682 2.81184 9.36682H9.90575C10.339 9.36682 10.7229 9.08786 10.8568 8.67584L13.0489 1.92913Z" stroke="#707070" stroke-width="2"/>
                    </svg>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0489 1.92913C13.3483 1.00782 14.6517 1.00782 14.9511 1.92913L17.1432 8.67584C17.2771 9.08786 17.661 9.36682 18.0943 9.36682H25.1882C26.1569 9.36682 26.5597 10.6064 25.776 11.1758L20.0369 15.3455C19.6864 15.6002 19.5397 16.0515 19.6736 16.4636L21.8657 23.2103C22.1651 24.1316 21.1106 24.8977 20.3269 24.3283L14.5878 20.1586C14.2373 19.904 13.7627 19.904 13.4122 20.1586L7.67312 24.3283C6.88941 24.8977 5.83493 24.1316 6.13428 23.2103L8.32642 16.4636C8.46029 16.0515 8.31363 15.6002 7.96315 15.3455L2.22405 11.1758C1.44034 10.6064 1.84311 9.36682 2.81184 9.36682H9.90575C10.339 9.36682 10.7229 9.08786 10.8568 8.67584L13.0489 1.92913Z" stroke="#707070" stroke-width="2"/>
                    </svg>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0489 1.92913C13.3483 1.00782 14.6517 1.00782 14.9511 1.92913L17.1432 8.67584C17.2771 9.08786 17.661 9.36682 18.0943 9.36682H25.1882C26.1569 9.36682 26.5597 10.6064 25.776 11.1758L20.0369 15.3455C19.6864 15.6002 19.5397 16.0515 19.6736 16.4636L21.8657 23.2103C22.1651 24.1316 21.1106 24.8977 20.3269 24.3283L14.5878 20.1586C14.2373 19.904 13.7627 19.904 13.4122 20.1586L7.67312 24.3283C6.88941 24.8977 5.83493 24.1316 6.13428 23.2103L8.32642 16.4636C8.46029 16.0515 8.31363 15.6002 7.96315 15.3455L2.22405 11.1758C1.44034 10.6064 1.84311 9.36682 2.81184 9.36682H9.90575C10.339 9.36682 10.7229 9.08786 10.8568 8.67584L13.0489 1.92913Z" stroke="#707070" stroke-width="2"/>
                    </svg>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0489 1.92913C13.3483 1.00782 14.6517 1.00782 14.9511 1.92913L17.1432 8.67584C17.2771 9.08786 17.661 9.36682 18.0943 9.36682H25.1882C26.1569 9.36682 26.5597 10.6064 25.776 11.1758L20.0369 15.3455C19.6864 15.6002 19.5397 16.0515 19.6736 16.4636L21.8657 23.2103C22.1651 24.1316 21.1106 24.8977 20.3269 24.3283L14.5878 20.1586C14.2373 19.904 13.7627 19.904 13.4122 20.1586L7.67312 24.3283C6.88941 24.8977 5.83493 24.1316 6.13428 23.2103L8.32642 16.4636C8.46029 16.0515 8.31363 15.6002 7.96315 15.3455L2.22405 11.1758C1.44034 10.6064 1.84311 9.36682 2.81184 9.36682H9.90575C10.339 9.36682 10.7229 9.08786 10.8568 8.67584L13.0489 1.92913Z" stroke="#707070" stroke-width="2"/>
                    </svg>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0489 1.92913C13.3483 1.00782 14.6517 1.00782 14.9511 1.92913L17.1432 8.67584C17.2771 9.08786 17.661 9.36682 18.0943 9.36682H25.1882C26.1569 9.36682 26.5597 10.6064 25.776 11.1758L20.0369 15.3455C19.6864 15.6002 19.5397 16.0515 19.6736 16.4636L21.8657 23.2103C22.1651 24.1316 21.1106 24.8977 20.3269 24.3283L14.5878 20.1586C14.2373 19.904 13.7627 19.904 13.4122 20.1586L7.67312 24.3283C6.88941 24.8977 5.83493 24.1316 6.13428 23.2103L8.32642 16.4636C8.46029 16.0515 8.31363 15.6002 7.96315 15.3455L2.22405 11.1758C1.44034 10.6064 1.84311 9.36682 2.81184 9.36682H9.90575C10.339 9.36682 10.7229 9.08786 10.8568 8.67584L13.0489 1.92913Z" stroke="#707070" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default function CreatePost() {
    const [progress, setProgress] = useState(0);

    const transitionDirection = {
        initial: (direction) => ({
            x: direction === 1 ? '100%' : '-100%',
            transition: {
                type: "tween",
                duration: .2
            }
        }),
        animate:  () => ({
            x: 0,
            transition: {
                type: "tween",
                duration: .2
            }
        }),
        exit: (direction) => ({
            x: direction === 1 ? '-100%' : '100%',
            transition: {
                type: "tween",
                duration: .2
            }
        })
    };

    return (
        <main className="bg-BG h-full flex flex-col gap-4 z-10 relative overflow-auto py-6 no-scrollbar">
            <div className="bg-BG w-full h-8 justify-between items-start inline-flex px-6">
                {progress ? (
                <div onClick={() => setProgress(0)} className="w-8 h-8" href="/flight">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons/navigate_before">
                        <path id="Vector" d="M20.94 9.88L19.06 8L11.06 16L19.06 24L20.94 22.12L14.8333 16L20.94 9.88Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                ) : (
                <Link className="w-8 h-8" href="/flight">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons/navigate_before">
                        <path id="Vector" d="M20.94 9.88L19.06 8L11.06 16L19.06 24L20.94 22.12L14.8333 16L20.94 9.88Z" fill="white"/>
                        </g>
                    </svg>
                </Link>
                )}
                {
                    progress ? (
                        <Link href="/" className="bg-accent py-2 w-16 rounded-md justify-center items-center flex text-textColor text-base font-normal tracking-wide">Post</Link>
                    ) : (
                        <div onClick={() => setProgress(1)} className="bg-[#7B999F] py-2 w-16 rounded-md justify-center items-center flex text-textColor text-base font-normal tracking-wide">Next</div>
                    )
                }
            </div>
            <main className="w-full h-full relative no-scrollbar">
                <div className={`w-full`}>
                    <AnimatePresence initial={false}>
                    {progress && (
                        <motion.div
                        key="survey"
                        initial={
                            { x: "100%" }
                        }
                        animate={
                            { x: 0 }
                        }
                        exit={
                            { x: "100%" }
                        }
                        transition={{ type: "tween", duration: 0.2 }}
                        className="w-full h-fit"
                        >
                            <div className="absolute w-full">
                                <SurvayPage/>
                            </div>
                        </motion.div>
                    )}
                    {!progress && (
                        <motion.div
                        key="upload"
                        initial={
                            { x: "-100%" }
                        }
                        animate={
                            { x: 0 }
                        }
                        exit={
                            { x: "-100%" }
                        }
                        transition={{ type: "tween", duration: 0.2 }}
                        className="w-full h-fit"
                        >
                            <div className="absolute w-full">
                                <UploadPage/>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </main>
        </main>
    )
}