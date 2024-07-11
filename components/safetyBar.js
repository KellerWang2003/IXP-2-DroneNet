export default function SafetyBar({ rating }) {
    return (
        <>
            <div className="w-full h-1.5 flex gap-1">
                <div className="bg-[#5EC3C3] rounded-full" 
                     style={{ width: `${rating}%` }}></div>
                <div className="bg-[#D14949] grow rounded-full"></div>
            </div>
        </>
    );
}