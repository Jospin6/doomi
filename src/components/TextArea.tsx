
type TextAreaProps = {
    id: string, 
    label: string
}

export const TextArea = ({id, label}: TextAreaProps) => {
    return <div className="mb-4 text-white">
        <label htmlFor={id} className="font-[500] text-[14px] block mb-2"> {label} </label>
        <textarea name="" rows={3} id={id} className="w-full border-[1px] rounded-lg border-[#121212] 
            outline-none text-[12px] mr-2 bg-transparent pl-2" />
    </div>
}