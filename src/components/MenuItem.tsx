
type MenuItemProps = {
    title: String,
    children: JSX.Element
}

export const MenuItem = ({title, children}: MenuItemProps) => {
    return <div className="flex items-center pl-2 text-white w-full hover:bg-[#121212] cursor-pointer mb-2 py-2 rounded-lg">
        <div className="text-[20px] mr-2"> {children} </div>
        <div className="font-[500]"> {title} </div>
    </div>
}