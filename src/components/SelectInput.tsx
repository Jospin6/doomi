type SelectInputProps = {
    id: string,
    name: string,
    label: string

}

export const SelectInput = ({ id, label, name }: SelectInputProps) => {
    return <div className="mb-4">
        <label htmlFor={id} className="font-[500] text-[12px] block"> {label} </label>
        <select name={name} id={id} className="w-full border-[1px] h-[35px] rounded-lg border-[#121212] 
            outline-none mr-2 bg-transparent pl-2 text-[12px]" >
            <option value="" className="text-gray-500">Choisi une categorie</option>
            <option value="" className="text-black">Vetements</option>
            <option value="" className="text-black">Bijoux</option>
        </select>
    </div>
}