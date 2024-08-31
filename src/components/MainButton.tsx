type MainButtonProps = {
    text: String,
    className: String
}
export const MainButton = ({text, className}: MainButtonProps) => {
    return <button className={`rounded-lg text-white w-full bg-[#D14318] ${className}`}>
        {text}
    </button>
}