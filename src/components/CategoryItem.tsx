
type CategoryItemProps = {
    title: String,
    isActive?: boolean
    className?: string
}
export const CategoryItem = ({ title, isActive = false, className }: CategoryItemProps) => {
    let style = "h-[100%] text-[14px]"
    return <button className={!isActive
        ? `${style} text-gray-500 hover:text-white ${className} hover:border-b-[4px] hover:border-[#D14318]`
        : `text-white border-b-[4px] ${className}  border-[#D14318] ${style}`}>
        {title}
    </button>
}