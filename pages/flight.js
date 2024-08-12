import React, { useState, useEffect, useRef, useContext } from "react";
import { IdContext } from "../context/idContext";
import Search from "@/components/search";
import Weather from "@/components/weather";
import Create from "@/components/create";
import POIFocused from "@/components/poiFocused";
import Spot from "@/components/spot";
import SwipeWrapper from "@/components/swipeWrapper";
import MapComponent from "./map";

export default function Flight() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollableContent = useRef(null);
  const { id, setId } = useContext(IdContext); // Use context state

  //connecting with database
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://us-west-2.cdn.hygraph.com/content/clz60dz7202xp07wdr4rf5fzb/master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `query Spot {
              spots {
                id
                name
                image {
                  url
                }
                safetyRating
                numberOfPosts
                star
                latLng {
                  distance(from: {latitude: 34.1680011, longitude: -118.1844544})
                }
              }
            }`,
          }),
        }
      );
      const json = await response.json();
      setSpots(json.data.spots);
    };

    fetchData();
  }, []);

  //expand and condense
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

  //connecting with google map using context
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

  let selectedSpot = spots.find(spot => spot.id === id) || {};

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
          <div className={`${expanded || focused ? "hidden" : ""} flex flex-col gap-2 items-end px-6`}>
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
                      {spots && spots.map((spot) => (
                        <div className="px-6" key={spot.id} onClick={() => setId(spot.id)}>
                          <Spot
                            image={spot.image[0].url}
                            name={spot.name}
                            distance={Math.round(spot.latLng.distance/1000)}
                            numOfPosts={spot.numberOfPosts}
                            star={spot.star}
                            safetyRating={spot.safetyRating}
                          />
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
