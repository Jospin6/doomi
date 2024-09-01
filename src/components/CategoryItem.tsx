
type CategoryItemProps = {
    title: String,
    className: String
}
export const CategoryItem = ({title, className}: CategoryItemProps) => {
    return <button className={`h-[100%] text-[14px] mr-4 ${className}`}>
        {title}
    </button>
}