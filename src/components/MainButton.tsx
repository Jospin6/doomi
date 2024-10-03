type MainButtonProps = {
    text: String,
    className: String
    onclick?: () => void
}
export const MainButton = ({text, className, onclick}: MainButtonProps) => {
    return <button className={`rounded-lg text-white bg-[#D14318] ${className}`} onClick={onclick}>
        {text}
    </button>
}