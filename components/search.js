export default function Search({ small = false }) {
    return (
        <div className={`${ small ? "h-8 rounded-full border border-[#636363]" : "h-12 rounded-md"} container bg-BG px-6 flex items-center text-base text-textColor`}>Search</div>
    )
}