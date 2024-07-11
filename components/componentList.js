import Spot from "@/components/spot"
import POI from "@/components/poi"
import Weather from "@/components/weather"
import ActionBar from "@/components/actionBar"
import POIBasicInformation from "@/components/poiBasicInformation"
import Post from "@/components/post"
import Gear from "@/components/gear"
import Location from "@/components/location"
import TopNav from "@/components/topNav"

export default function ComponentList() {
    return (
        <>
            <div className="p-6 bg-BG flex flex-col gap-4">
            <TopNav/>
            <Spot 
            image="/images/profile.jpg"
            name="Central Park"
            distance="7"
            numOfPosts="6"
            star="4.7"
            safetyRating="80"
            />
            <div className="flex gap-2">
                <POI safetyRating="67" image="/images/profile.jpg"/>
                <Weather/>
                </div>
                <Gear/>
                <Location/>
                <ActionBar/>
            </div>
            <Post
                profile="/images/profile.jpg"
                name="Jay"
                content="/images/test.png"
                text="This spot is awesome!!!"
            />
            <POIBasicInformation 
                name="Central park, Pasadena"
                star="4.7"
                safetyRating="80"
            />
        </>
    )
}