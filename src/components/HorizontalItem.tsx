import { IoEllipsisHorizontal, IoHeartOutline, IoPaperPlaneOutline } from "react-icons/io5"

export const HorizontalItem = () => {
    return <div className="w-full flex h-auto rounded-lg bg-[#121212] mb-2">
        <div className="m-2 w-[30%] h-[80px] bg-yellow-300 rounded-lg"></div>
        <div className="mr-2 my-2 w-[70%]">
            <div className="text-[12px] flex justify-between text-white ">
                <span>Nom complet de l'article</span>
            </div>
            <div className="text-white flex justify-between font-[500] text-[12px]">
                <span>$300</span>
                <IoHeartOutline className="text-white"/>
            </div>
            <div className="text-[10px] text-gray-500">
                <div>Location</div>
                <div>Aujourd'hui à 11h</div>
            </div>
        </div>
    </div>
}