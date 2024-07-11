import Image from "next/image";
import Link from "next/link";

function Pill({ svg, text, accent = false }) {
    return (
        <div className={`${accent ? "bg-accent" : "bg-secondBG"} 
        flex items-center gap-2.5 text-textColor px-3.5 py-2.5 rounded-full whitespace-nowrap`}>
            <div className="w-max">
                <Image
                    src={svg}
                    height={20}
                    width={20}
                    alt="pillSvg"
                />
            </div>
            <div className="text-sm">
                {text}
            </div>
        </div>
    )
}

export default function ActionBar() {
    return (
        <div className="flex gap-2">
          <Link href="/createPost">
            <Pill svg="/images/svg/plus.svg" text="Create your post" accent={true}/>
          </Link>
          <Pill svg="/images/svg/checklist.svg" text="Checklist"/>
          <Pill svg="/images/svg/notify.svg" text="Notify & Fly"/>
          <Pill svg="/images/svg/planList.svg" text="Add to plan list"/>
        </div>
    )
}