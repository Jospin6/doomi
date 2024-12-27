import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5"

type MainItemProps = {
    titre: string,
    vendeur: string,
    prix?: number,
    image: string,
    location: string,
    created_at: string
}

export const MainItem = ({titre, vendeur, prix, image, location, created_at}: MainItemProps) => {
    return <div className="w-[180px] h-auto mt-[3px] pb-2 mr-2">
        <div className="text-[14px] text-white pb-[2px]">
            <span>{titre}</span>
        </div>
        <div className="text-white">
            <div className="flex justify-between items-center mb-[3px] text-[12px] text-gray-500">
                <div className="flex items-center">
                    <div className="w-[18px] h-[18px] rounded-full bg-red-300 mr-2"></div>
                    <div> {vendeur} </div>
                </div>

            </div>
        </div>
        <div className="w-[180px] h-[220px] bg-blue-300 rounded-lg">
            <Image src={image} alt="image" className="w-[180px] h-[220px] rounded-lg" width={"180"} height={"220"}/>
        </div>
        <div className="pt-2">
            <div className="text-white flex justify-between">
                <span className="text-[14px] font-[500]"> {prix} </span>
                <IoHeartOutline className="text-[18px]" />
            </div>
            <div className="text-[12px] text-gray-500">
                <div> {location} </div>
                <div>{created_at}</div>
            </div>
        </div>
    </div>
}