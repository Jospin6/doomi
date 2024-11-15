type SubmitBtnProps = {
    text: String
}
export const SubmitBtn = ({text}: SubmitBtnProps) => {
    return <button type='submit' className="w-full py-[5px] rounded-lg text-white bg-[#D14318]">
        {text}
    </button>
}