import Search from "@/components/search";
import TopNav from "@/components/topNav";
import PostList from "@/components/postList";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const buttons = ["Posts", "Item sale", "Chat"];
  const [position, setPosition] = useState(buttons[0]);
  const [direction, setDirection] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  const handleClick = (buttonName) => {
    const currentIndex = buttons.indexOf(position);
    const newIndex = buttons.indexOf(buttonName);
    setDirection(newIndex > currentIndex ? 1 : 0);
    setPosition(buttonName);
    console.log(direction)
  };

  let sliderLeft;
  if (position === buttons[0]) {
    sliderLeft = '16.6%';
  } else if (position === buttons[1]) {
    sliderLeft = '50%';
  } else if (position === buttons[2]) {
    sliderLeft = '83.3%';
  }

  const transitionDirection = {
        initial: (direction) => ({
            x: direction === 1 ? '100%' : '-100%',
            transition: {
                type: "tween",
                duration: .2
            }
        }),
        animate:  () => ({
            x: 0,
            transition: {
                type: "tween",
                duration: .2
            }
        }),
        exit: (direction) => ({
            x: direction === 1 ? '-100%' : '100%',
            transition: {
                type: "tween",
                duration: .2
            }
        })
    };

  return (
    <main className="h-screen overflow-hidden">
      <nav className="pt-6 bg-BG flex flex-col gap-3 px-6 shadow-xl shadow-black/10 z-20 relative">
        <Search small={true} />
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
      </nav>
     <div className="bg-BG w-full h-full relative overflow-auto no-scrollbar">
            <AnimatePresence initial={false} custom={direction}>
                {position === buttons[0] && (
                    <motion.div
                        key="postList"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={direction}
                        variants={transitionDirection}
                        className="w-full h-fit">
                        <div className="absolute px-6 pb-48">
                            <PostList/>
                        </div>
                    </motion.div>
                )}
                {position === buttons[1] && (
                    <motion.div
                        key="gear"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={direction}
                        variants={transitionDirection}>
                        <div className="absolute px-6 top-6 text-textColor">Nothing to see here yet...</div>
                    </motion.div>
                )}
                {position === buttons[2] && (
                    <motion.div
                        key="planList"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={direction}
                        variants={transitionDirection}>
                        <div className="absolute px-6 top-6 text-textColor">Nothing to see here yet...</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </main>
  );
}
