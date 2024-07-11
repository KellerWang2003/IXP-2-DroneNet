import { useState } from "react"
import { motion } from "framer-motion"

function TopNavButton({ name, onClick }) {
    return <button className="container" onClick={onClick}>{name}</button>
}

export default function TopNav({ loadState, button1, button2, button3, sliderLeft, handleClick1, handleClick2, handleClick3}) {
    

    return (
        <div className="relative flex justify-between text-sm text-textColor pb-2">
            <TopNavButton name={button1} onClick={handleClick1}/>
            <TopNavButton name={button2} onClick={handleClick2}/>
            <TopNavButton name={button3} onClick={handleClick3}/>
            <motion.div
            animate={loadState ? false : {
                 left: sliderLeft,
                 duration: 0.1
                }} 
            className="absolute bottom-0 bg-indigo-200 w-1/3 h-0.5 -translate-x-1/2"></motion.div>
        </div>
    )
}