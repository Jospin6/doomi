import { IoAirplane, IoEllipsisHorizontal, IoHeart, IoHeartOutline, IoPaperPlaneOutline, IoTelescopeOutline } from "react-icons/io5"

export const MainItem = () => {
    return <div className="mx-[50px] w-[180px] h-auto mt-2 pb-2">
        <div className="text-white">
            <div className="flex justify-between items-center mb-[3px] text-[12px] text-gray-500">
                <div className="flex items-center">
                    <div className="w-[20px] h-[20px] rounded-full bg-red-300 mr-2"></div>
                    <div>Nom du vendeur</div>
                </div>
            </div>
        </div>
        <div className="w-[180px] h-[220px] bg-blue-300 rounded-lg"></div>
        <div>
            <div className="text-[14px] text-white">
                <span>Nom complet de l'article</span>
            </div>
            <div className="text-white flex justify-between">
                <IoHeartOutline className="text-[18px]"/>
                <span className="text-[14px] font-[500]">$300</span>
            </div>
            <div className="text-[12px] text-gray-500">
                <div>Location</div>
                <div>Aujourd'hui à 11h</div>
            </div>
        </div>
    </div>
}