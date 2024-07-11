import flightSVG from '../public/images/svg/flight.svg';
import communitySVG from '../public/images/svg/community.svg';
import profileSVG from '../public/images/svg/profile.svg';
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

function NavButton({ name, SvgIcon, path }) {
    const activePage = usePathname() === path ? "text-[#1D192B]" : "";

    return (
        <Link className={`container z-10 text-xs font-bold flex flex-col items-center gap-1 py-1.5`} href={path}>
            <div className={`${activePage} transition rounded-full h-8 w-16 grid place-items-center`}>
                <SvgIcon/>
            </div>
            {name}
        </Link>
    )
}

export default function Nav() {
    const path = usePathname()

    let sliderLeft
    if (path == '/flight') {
        sliderLeft = '16.6%'
    } else if (path == '/') {
        sliderLeft = '50%'
    } else if (path == '/profile') {
        sliderLeft = '83.3%'
    }

    return (
        <div className="fixed bottom-0 w-full bg-BG text-textColor flex justify-between pt-1.5">
            <NavButton name="Flight" SvgIcon={flightSVG} path='/flight' />
            <NavButton name="Community" SvgIcon={communitySVG} path='/'/>
            <NavButton name="Profile" SvgIcon={profileSVG} path='/profile'/>
            <motion.div 
            animate={{ left: sliderLeft }}
            transition={{
                    type: "spring",
                    stiffness: 300 ,
                    damping: 20,
                    duration: 0.1
                }}
            className={`-translate-x-1/2 bg-[#D6DFF8] absolute top-[11px] w-16 h-8 rounded-full`}></motion.div>
        </div>
    )
}