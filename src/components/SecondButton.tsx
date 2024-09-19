
type SecondButtonProps = {
    text: string
}

export const SecondButton = ({ text }: SecondButtonProps) => {
    return <button className="bg-[#121212] hover:bg-[#D14318] hover:bg-opacity-30 
    hover:text-white rounded-full px-[10px] py-[3px] text-gray-500 
    text-[12px] mr-2">
        {text}
    </button>
}