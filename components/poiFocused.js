import POIBasicInformation from "./poiBasicInformation"
import PostList from "./postList"
import ActionBar from "./actionBar"

export default function POIFocused({ name, star, safetyRating, expanded }) {
    return (
        <div className="bg-[#272727] flex flex-col gap-2 z-10 pb-16">
            <POIBasicInformation 
                name={name}
                star={star}
                safetyRating={safetyRating}
                expanded = {expanded}
            />
            <div className="bg-BG text-textColor text-base flex flex-col gap-4 px-6 pt-6 pb-10">
                <h1>Posts around this spot</h1>
                <PostList/>
            </div>
            <div className={`${expanded ? "overflow-auto" : "hidden"} w-full bg-BG p-4 fixed bottom-0 z-20 no-scrollbar`}>
                <ActionBar/>
            </div>
        </div>
    )
}