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
    setDirection(newIndex > currentIndex ? 1 : -1);
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
    <main className="h-screen overflow-hidden">
      <nav className="pt-6 bg-BG flex flex-col gap-3 px-6 shadow-xl shadow-black/10 z-20 relative">
        <Search small={true} />
        <TopNav
          button1={buttons[0]}
          button2={buttons[1]}
          button3={buttons[2]}
          sliderLeft={sliderLeft}
          handleClick1={() => handleClick(buttons[0])}
          handleClick2={() => handleClick(buttons[1])}
          handleClick3={() => handleClick(buttons[2])}
        />
      </nav>
      <div className="bg-BG p-6 pb-56 relative h-full w-full overflow-x-hidden">
        <AnimatePresence>
          {position === buttons[0] && (
            <motion.div
              key="postList"
              initial={isInitialLoad ? false : "initial"}
              animate="animate"
              exit="exit"
              variants={transitionDirection}
              className="">
              <PostList />
            </motion.div>
          )}
          {position === buttons[1] && (
            <motion.div
              key="gear"
              initial={isInitialLoad ? false : "initial"}
              animate="animate"
              exit="exit"
              variants={transitionDirection}>
              <div className="text-neutral-400">No sales at this moment...</div>
            </motion.div>
          )}
          {position === buttons[2] && (
            <motion.div
              key="planList"
              initial={isInitialLoad ? false : "initial"}
              animate="animate"
              exit="exit"
              variants={transitionDirection}>
              <div className="text-neutral-400">Nothing to see here yet...</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
