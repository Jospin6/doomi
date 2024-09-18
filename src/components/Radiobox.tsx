type RadioboxProps = {
    id: string,
    label: string

}

export const Radiobox = ({id, label}: RadioboxProps) => {
    return <div className="text-white">
        <input type="radio"  id={id} />
        <label htmlFor={id} className="text-[12px] text-gray-300"> {label} </label>
    </div>
}