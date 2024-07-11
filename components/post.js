import Image from "next/image"
import Gear from "@/components/gear"
import Location from "@/components/location"

export default function Post({ profile, name, content, spot, gear, text }) {
    return (
        <div className="flex flex-col gap-3 text-textColor">
            { profile && name &&
            <div className="flex gap-4 items-center text-base font-medium">
                <Image className="rounded-full"
                    src={profile}
                    width={36}
                    height={36}
                    alt="profile_pic"
                />
                {name}
            </div>
            }
            <main>
            <Image className="rounded-xl"
                    src={content}
                    width={342}
                    height={342}
                    alt="content"
                    layout="responsive"
                />
            </main>
            <p className="text-sm">{text}</p>
        </div>
    )
}