import { IoAirplane, IoEllipsisHorizontal, IoHeart, IoHeartOutline, IoPaperPlaneOutline, IoTelescopeOutline } from "react-icons/io5"

export const MainItem = () => {
    return <div className="mx-[50px] h-auto mt-2  border-b-[1px] border-[#121212] pb-2">
        <div className="text-white">
            <div className="text-[14px] flex justify-between">
                <span>Nom complet de l'article</span>
                <IoEllipsisHorizontal className="cursor-pointer"/>
            </div>
            <div className="flex justify-between items-center mb-[3px] text-[12px] text-gray-500">
                <div className="flex items-center">
                    <div className="w-[20px] h-[20px] rounded-full bg-red-300 mr-2"></div>
                    <div>Nom du vendeur</div>
                </div>
                <div>
                    Aujourd'hui à 11h
                </div>
            </div>
        </div>
        <div className="w-full h-[350px] bg-blue-300 rounded-lg"></div>
        <div>
            <div className="text-white font-[500] text-[14px]">$300</div>
            <div className="text-[12px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem, 
                autem id hic harum similique, soluta libero, nisi sunt quis suscipit!
            </div>
            <div className="flex justify-between text-[18px]">
                <IoHeartOutline className="text-white"/>
                <IoPaperPlaneOutline className="text-white"/>
            </div>
        </div>
    </div>
}