import { useEffect, useState } from "react";

export default function SwipeWrapper({ children, expanded, upAction, downAction, scrollPosition }) {
    const [startY, setStartY] = useState(0);
    const [endY, setEndY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        const handleGesture = () => {
            if (!expanded && startY - endY > 50) { // Detects swipe up
                upAction && upAction();
            } else if (!scrollPosition && expanded && endY - startY > 50) { // Detects swipe down
                downAction && downAction();
            }
        };

        handleGesture();
    }, [endY, expanded]);

    const handleTouchStart = (event) => {
        setStartY(event.targetTouches[0].clientY);
    };

    const handleTouchEnd = (event) => {
        setEndY(event.changedTouches[0].clientY);
    };

    const handleMouseDown = (event) => {
        setIsMouseDown(true);
        setStartY(event.clientY);
    };

    const handleMouseMove = (event) => {
        if (isMouseDown) {
            setEndY(event.clientY);
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div
            className="h-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    );
}
