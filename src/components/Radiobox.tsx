type RadioboxProps = {
    id: string,
    label: string,
    value: string,
    checked: boolean,
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radiobox = ({id, label, value, checked, onchange }: RadioboxProps) => {
    return <div className="text-white">
        <input type="radio"  id={id} value={value} checked={checked} onChange={onchange} />
        <label htmlFor={id} className="text-[12px] text-gray-300"> {label} </label>
    </div>
}