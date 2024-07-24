import React, { useState, useEffect, useRef, useContext } from "react";
import { IdContext } from "./idContext";
import Search from "@/components/search";
import Weather from "@/components/weather";
import Create from "@/components/create";
import POIFocused from "@/components/poiFocused";
import Spot from "@/components/spot";
import SwipeWrapper from "@/components/swipeWrapper";
import MapComponent from "./map";

let spotList = [
    {
        key: "centralPark",
        image: "/images/centralPark.png",
        name: "Central Park",
        distance: "7",
        numOfPosts: "6",
        star: "4.7",
        safetyRating: "80",
        location: { lat: 34.1419588, lng: -118.1497474 }
    },
    {
        key: "roseBowlStadium",
        image: "/images/roseBowl.png",
        name: "Rose Bowl Stadium",
        distance: "5",
        numOfPosts: "3",
        star: "3.5",
        safetyRating: "20",
        location: { lat: 34.1613, lng: -118.1676 }
    },
    {
        key: "1111SouthArroyo",
        image: "/images/1111.png",
        name: "1111 South Arroyo",
        distance: "7",
        numOfPosts: "20",
        star: "4.5",
        safetyRating: "65",
        location: { lat: 34.128190, lng: -118.147710 }
    },
    {
        key: "870",
        image: "/images/950.png",
        name: "870",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95",
        location: { lat: 34.1315032, lng: -118.148362 }
    },
    {
        key: "1700LidaStreet",
        image: "/images/870.png",
        name: "Artcenter Hillside Campus",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95",
        location: { lat: 34.1786, lng: -118.1966 }
    },
    {
        key: "456HappyStreet",
        image: "/images/profile.jpg",
        name: "456 Happy St.",
        distance: "11",
        numOfPosts: "1",
        star: "4.7",
        safetyRating: "95"
    },
];

export default function Flight() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollableContent = useRef(null);
  const { id, setId } = useContext(IdContext); // Use context state

  useEffect(() => {
    const currentElement = scrollableContent.current;

    const handleScroll = () => {
      setScrollPosition(currentElement.scrollTop);
    };
    currentElement.addEventListener('scroll', handleScroll);

    return () => {
      currentElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function unfocus() {
    if (focused){
        setId(null);
        setExpanded(false);
    }
  }

  useEffect(() => {
    console.log('Context ID in Flight component:', id);
    if (id != null) {
      setFocused(true);
      setExpanded(false);
      scrollableContent.current.scrollTop = 0;
    } else {
      setFocused(false);
    }
  }, [id]);

  let selectedSpot = spotList.find(spot => spot.key === id) || {};

  let height = expanded ? (focused ? "h-[800px]" : "h-[670px]") : (focused ? "h-[450px]" : "h-[430px]");

  return (
    <>
      <div onClick={unfocus} className="fixed no-scrollbar top-0 h-full w-full z-0">
        <MapComponent />
      </div>
      <main className={`pointer-events-none relative h-full flex flex-col ${expanded && focused ? "justify-end" : "justify-between"}`}>
        <div className={`${expanded && focused ? "hidden" : ""} pointer-events-auto px-4 grid gap-2 pt-6`}>
          <Search />
          <Weather />
        </div>
        <div className={`${height} pointer-events-auto flex flex-col gap-2 overflow-hidden transition-all`}>
          <div className={`${expanded || focused ? "hidden" : ""} flex flex-col gap-2 items-end px-4`}>
            <Create />
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
                      {spotList && spotList.map((spot) => (
                        <div className="px-6" key={spot.key} onClick={() => setId(spot.key)}>
                          <Spot {...spot} />
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
  );
}
