import POIFocused from "@/components/poiFocused";
import { useParams } from "next/navigation";

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
]

export default function FlghtSpot() {
    const params = useParams();

    return (
        <>
        {params?.id && (<POIFocused {...spotList[params.id]}/>)}
        </>
    )
}