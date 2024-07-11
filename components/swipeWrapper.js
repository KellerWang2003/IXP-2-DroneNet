import { useEffect, useState } from "react";

export default function SwipeWrapper({ children, expanded, upAction, downAction, scrollPosition }) {
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);

    useEffect(() => {
        const handleGesture = () => {
            if (!expanded && touchStartY - touchEndY > 50) { // Detects swipe up
                upAction && upAction();
            } else if (!scrollPosition && expanded && touchEndY - touchStartY > 50) { // Detects swipe down
                downAction && downAction();
            }
        };

        handleGesture();
    }, [touchEndY, expanded]);

    const handleTouchStart = (event) => {
        setTouchStartY(event.targetTouches[0].clientY);
    };

    const handleTouchEnd = (event) => {
        setTouchEndY(event.changedTouches[0].clientY);
    };

    return (
        <div className="h-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
}
