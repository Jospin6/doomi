
type ListTileProps = {
    className?: string
}

export const ListTile = ({className}: ListTileProps) => {
    return <div className={`h-[45px] w-full flex items-center cursor-pointer 
     px-2 rounded-lg ${className}`}>
        <div className="w-[35px] h-[35px] rounded-full bg-red-500"></div>
        <div className="ml-2">
            <div className="text-[12px] text-white">Jospin Ndagano</div>
            <div className="text-[10px] text-gray-300">persnal account</div>
        </div>
    </div>
}