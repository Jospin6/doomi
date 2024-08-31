type MainButtonProps = {
    text: String,
}
export const MainButton = ({text}: MainButtonProps) => {
    return <button className="rounded-lg text-white w-full py-2 bg-[#D14318]">
        {text}
    </button>
}