type CheckboxProps = {
    id: string,
    label: string

}

export const Checkbox = ({id, label}: CheckboxProps) => {
    return <div className="mb-4 text-white">
        <input type="checkbox" id={id} />
        <label htmlFor={id} className="text-[12px]"> {label} </label>
    </div>
}