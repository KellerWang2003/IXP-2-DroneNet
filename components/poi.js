import SafetyBar from "./safetyBar";
import Image from "next/image";

export default function POI({ safetyRating, image }) {
    return (
        <div className="w-14 flex flex-col items-center gap-2">
            <div className="flex flex-col m-[-10] items-center">
                <div className="flex flex-col gap-1.5 bg-BG p-1.5 rounded-[10px]">
                    <SafetyBar rating={safetyRating}/>
                    <div className="relative min-w-10">
                <Image
                    className="rounded-md min-h-10 min-w-10 object-cover"
                    src={image[0].url}
                    width={40}
                    height={40}
                    alt="thumbnail"
                />
            </div>
                </div>
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 21L0.607695 -5.0249e-08L21.3923 1.7668e-06L11 21Z" fill="#2d2d2d"/>
                </svg>
            </div>
            <div className="w-2 h-2 bg-BG rounded-full"></div>
        </div>
    )
}