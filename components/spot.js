import Image from "next/image";
import SafetyBar from "./safetyBar";
import { useEffect } from "react";

export default function Spot({image, name, distance, numOfPosts, star, safetyRating }) {
    return (
        <div className="h-28 bg-secondBG rounded-xl p-3 flex gap-3">
            <div className="relative min-w-24">
                <Image
                    className="rounded-md h-full object-cover"
                    src={image}
                    width={100}
                    height={88}
                    alt="thumbnail"
                />
            </div>
            <div className="w-full flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-bold text-white">{name}</h2>
                    <div className="text-gray-500 text-xs">{distance} mi</div>
                </div>
                <div className="grid gap-2">
                    <div className="text-xs text-textColor flex justify-between">
                        <div>{numOfPosts} {numOfPosts === 1 ? "post" : "posts"}</div>
                        <div className="flex gap-1">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.54894 0.927052C7.8483 0.0057416 9.1517 0.00573945 9.45106 0.92705L10.6329 4.56434C10.7668 4.97636 11.1507 5.25532 11.5839 5.25532H15.4084C16.3771 5.25532 16.7799 6.49494 15.9962 7.06434L12.9021 9.31231C12.5516 9.56695 12.405 10.0183 12.5389 10.4303L13.7207 14.0676C14.02 14.9889 12.9656 15.7551 12.1818 15.1857L9.08779 12.9377C8.7373 12.6831 8.2627 12.6831 7.91222 12.9377L4.81815 15.1857C4.03444 15.7551 2.97996 14.9889 3.27931 14.0676L4.46114 10.4303C4.59501 10.0183 4.44835 9.56695 4.09787 9.31231L1.00381 7.06434C0.220092 6.49494 0.622867 5.25532 1.59159 5.25532H5.41606C5.84929 5.25532 6.23324 4.97636 6.36712 4.56434L7.54894 0.927052Z" fill="#E7B56A"/>
                            </svg>
                            {star}
                        </div>
                    </div>
                    <SafetyBar rating={safetyRating}/>
                </div>
            </div>
        </div>
    );
}
