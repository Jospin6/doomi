
type InputProps = {
    type: string,
    id: string,
    placeholder: string,
    label: string

}

export const Input = ({type, id, placeholder, label}: InputProps) => {
    return <div className="mb-4 text-white">
        <label htmlFor={id} className="font-[500] text-[14px] block mb-2"> {label} </label>
        <input 
            type={type} 
            className="w-full border-[1px] h-[35px] rounded-lg border-[#121212] 
            outline-none mr-2 bg-transparent pl-2" 
            id={id} 
            placeholder={placeholder}/>
    </div>
}