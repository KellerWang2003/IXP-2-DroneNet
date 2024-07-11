import Search from "@/components/search"
import Weather from "@/components/weather"
import Create from "@/components/create"
import POIFocused from "@/components/poiFocused"
import Spot from "@/components/spot"
import { useState, useEffect, useRef } from "react"
import SwipeWrapper from "@/components/swipeWrapper"
import Image from "next/image"

let spotList = [
    {
        image: "/images/profile.jpg",
        name: "Central Park",
        distance: "7",
        numOfPosts: "6",
        star: "4.7",
        safetyRating: "80",
    },
    {
        image: "/images/profile.jpg",
        name: "Rose Bowl Stadium",
        distance: "5",
        numOfPosts: "3",
        star: "3.5",
        safetyRating: "20"
    },
    {
        image: "/images/profile.jpg",
        name: "123 Sad Rd.",
        distance: "7",
        numOfPosts: "20",
        star: "4.5",
        safetyRating: "65"
    },
    {
        image: "/images/profile.jpg",
        name: "456 Happy St.",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95"
    },
    {
        image: "/images/profile.jpg",
        name: "456 Happy St.",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95"
    },
    {
        image: "/images/profile.jpg",
        name: "456 Happy St.",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95"
    },
]


export default function Flight() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollableContent = useRef(null)

    useEffect(() => {
        const currentElement = scrollableContent.current;

        const handleScroll = () => {
            setScrollPosition(currentElement.scrollTop)
        }
        currentElement.addEventListener('scroll', handleScroll)

        return () => { //unmounting? how do I check
            currentElement.removeEventListener('scroll', handleScroll)
        }
    })


    const [focused, setFocused] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [id, setId] = useState(null)

    function unfocus() {
        setId(null)
        setExpanded(false)
        console.log("ran")
    }

    useEffect(() => {
        if (id != null) {
        setFocused(true);
        setExpanded(false)
        } else {
        setFocused(false);
        }
    }, [id]);

    let selectedSpot = spotList[id] || {};

    let height = expanded ? (focused ? "h-[800px]" : "h-[710px]") : (focused ? "h-[380px]" : "h-[360px]")

    return (
        <>
            <div onClick={unfocus} className="fixed no-scrollbar overflow-auto top-0 h-full w-full bg-[#272727] z-0">
                <div className="w-[1500px]">
                    <Image
                    src="/images/map.png"
                    width={1500}
                    height={1500}
                    alt="map"
                    />
                </div>
            </div>
            <main className={`pointer-events-none relative h-full flex flex-col ${expanded && focused ? "justify-end" : "justify-between"}`}>
                <div className={`${expanded && focused ? "hidden" : ""} pointer-events-auto px-4 grid gap-2 pt-6`}>
                    <Search/>
                    <Weather/>
                </div>
                <div className={`${height} pointer-events-auto flex flex-col gap-2 overflow-hidden transition-all`}>
                    <div className={`${expanded || focused ? "hidden" : ""} flex flex-col gap-2 items-end px-4`}>
                        <Create/>
                        <div className="container flex gap-2 text-textColor text-base">
                            <button className="container bg-BG py-2 rounded-md">Pre-flight Checklist</button>
                            <button className="container bg-BG py-2 rounded-md">Notify and Fly</button>
                        </div>
                    </div>
                    <SwipeWrapper expanded={expanded} 
                    upAction={() => setExpanded(true)} 
                    downAction={() => setExpanded(false)}
                    scrollPosition={scrollPosition}>
                        <main className="bg-BG rounded-[20px] h-full">
                            <div className="container grid place-items-center p-4">
                                <div className="h-1.5 w-16 bg-[#959595] rounded-full"></div>
                            </div>
                            <div ref={scrollableContent} className={`${expanded ? "overflow-y-scroll" : "overflow-hidden"} container h-full`}>
                                <content className="flex flex-col gap-4">
                                    {focused ? (
                                        <POIFocused 
                                            name={selectedSpot.name} 
                                            star={selectedSpot.star} 
                                            safetyRating={selectedSpot.safetyRating}
                                            expanded={expanded} 
                                        />
                                    ) : (
                                        <div className="flex flex-col gap-4 pb-32">
                                            {spotList && spotList.map((spots, i) => (
                                                <div className="px-6" key={i} onClick={() => setId(i)}>
                                                    <Spot {...spots} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </content>
                            </div>
                        </main>
                    </SwipeWrapper>
                </div>
            </main>
        </>
    )
}