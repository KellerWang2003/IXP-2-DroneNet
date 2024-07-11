import { useState, useEffect } from "react";
import PostList from "@/components/postList";
import TopNav from "@/components/topNav";
import Image from "next/image";
import Gear from "@/components/gear";
import { motion, AnimatePresence } from "framer-motion";

export default function Flight() {
    const buttons = ["Posts", "Gear Presets", "Plan List"];
    const [position, setPosition] = useState(buttons[0]);
    const [direction, setDirection] = useState(1);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        setIsInitialLoad(false);
    }, []);

    const handleClick = (buttonName) => {
        const currentIndex = buttons.indexOf(position);
        const newIndex = buttons.indexOf(buttonName);
        setDirection(newIndex > currentIndex ? 1 : -1);
        console.log(currentIndex, newIndex, direction);
        setPosition(buttonName);
    };

    let sliderLeft;
    if (position === buttons[0]) {
        sliderLeft = '16.6%';
    } else if (position === buttons[1]) {
        sliderLeft = '50%';
    } else if (position === buttons[2]) {
        sliderLeft = '83.3%';
    }

    const variant = {
        initial: { x: "100%" },
        animate: { 
            x: 0, 
            transition: {
                type: "tween",
                duration: 0.2
            }
        },
    };

    const variantReversed = {
        initial: { x: "-100%" },
        animate: { 
            x: 0, 
            transition: {
                type: "tween",
                duration: 0.2
            }
        },
    };

    const transitionDirection = direction === 1 ? variant : variantReversed;

    return (
        <main className="h-screen w-full bg-BG text-textColor">
            <div className="p-6 shadow-xl shadow-black/10 z-20">
                <h1 className="text-textColor text-2xl">Your Profile</h1>
            </div>
            <div className="h-full w-full px-6 pt-6 flex flex-col gap-4 overflow-x-auto">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <Image className="rounded-full"
                                src="/images/profile.jpg"
                                width={60}
                                height={60}
                                alt="profile_pic"
                            />
                            <h1 className="text-2xl font-medium">Jay</h1>
                        </div>
                        <div className="flex text-sm font-medium">
                            <div className="flex flex-col items-center min-w-[68px]">
                                <h2>1</h2>
                                <div className="text-neutral-400">Posts</div>
                            </div>
                            <div className="flex flex-col items-center min-w-[68px]">
                                <h2>1</h2>
                                <div className="text-neutral-400">Follower</div>
                            </div>
                            <div className="flex flex-col items-center min-w-[68px]">
                                <h2>1</h2>
                                <div className="text-neutral-400">Following</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs leading-5">
                        FPV pilot defying gravity one flight at a time 🚀 <br />
                        | Drone racer 🏁 <br />
                        | Aerial filmmaker 🎥 <br />
                        | Advocate for the FPV community ✊ <br />
                        | Join me in the skies!
                    </div>
                    <div className="flex gap-1.5 text-xs">
                        <div className="w-fit text-neutral-400 px-3 py-2.5 rounded-full border border-neutral-500 ">Expert</div>
                        <div className="w-fit text-neutral-400 px-3 py-2.5 rounded-full border border-neutral-500 ">Cinematographer</div>
                        <div className="w-fit text-neutral-400 px-3 py-2.5 rounded-full border border-neutral-500 ">Extreme Sport</div>
                    </div>
                </div>
                <div className="min-h-0.5 bg-neutral-500 w-full rounded-full"></div>
                <div className="h-fit flex flex-col">
                    <TopNav
                        loadState={isInitialLoad}
                        button1={buttons[0]}
                        button2={buttons[1]}
                        button3={buttons[2]}
                        sliderLeft={sliderLeft}
                        handleClick1={() => handleClick(buttons[0])}
                        handleClick2={() => handleClick(buttons[1])}
                        handleClick3={() => handleClick(buttons[2])}
                    />
                    <div className="py-6 relative overflow-x-hidden">
                        <AnimatePresence>
                            {position === buttons[0] && (
                                <motion.div
                                    key="postList"
                                    initial={isInitialLoad ? false : "initial"}
                                    animate="animate"
                                    exit="exit"
                                    variants={transitionDirection}
                                    className="w-full h-fit pb-52">
                                    <PostList />
                                </motion.div>
                            )}
                            {position === buttons[1] && (
                                <motion.div
                                    key="gear"
                                    initial={isInitialLoad ? false : "initial"}
                                    animate="animate"
                                    exit="exit"
                                    variants={transitionDirection}
                                    className="w-full h-full">
                                    <Gear />
                                </motion.div>
                            )}
                            {position === buttons[2] && (
                                <motion.div
                                    key="planList"
                                    initial={isInitialLoad ? false : "initial"}
                                    animate="animate"
                                    exit="exit"
                                    variants={transitionDirection}
                                    className="w-full h-full">
                                    <Gear />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}
