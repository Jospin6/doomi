
type InputProps = {
    type: string,
    id: string,
    placeholder: string,
    label: string,
    className?: string

}

export const Input = ({type, id, placeholder, label, className}: InputProps) => {
    return <div className={`text-white ${className}`}>
        <label htmlFor={id} className="font-[500] text-[12px] block"> {label} </label>
        <input 
            type={type} 
            className="w-full border-[1px] h-[35px] rounded-lg border-gray-500 
            outline-none mr-2 text-[12px] bg-transparent pl-2" 
            id={id} 
            autoComplete="off"
            placeholder={placeholder}/>
    </div>
}