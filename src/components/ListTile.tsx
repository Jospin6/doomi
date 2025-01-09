
type ListTileProps = {
    className?: string
    titre: string,
    sousTitre: string,
    lettre?: string
}

export const ListTile = ({className, titre, sousTitre, lettre = "B"}: ListTileProps) => {
    return <div className={`h-[45px] w-full flex items-center cursor-pointer 
     px-2 rounded-lg ${className}`}>
        <div className="w-[35px] h-[35px] flex justify-center items-center font-bold rounded-full bg-red-500"> {lettre} </div>
        <div className="ml-2">
            <div className="text-[12px] text-white"> {titre} </div>
            <div className="text-[10px] text-gray-300"> {sousTitre} </div>
        </div>
    </div>
}