import { IoEllipsisHorizontal, IoHeartOutline, IoPaperPlaneOutline } from "react-icons/io5"

export const HorizontalItem = () => {
    return <div className="w-full flex h-auto rounded-lg bg-[#121212] mb-2">
        <div className="m-2 w-[30%] h-[80px] bg-yellow-300 rounded-lg"></div>
        <div className="mr-2 my-2 w-[70%]">
            <div className="text-[12px] flex justify-between text-white ">
                <span>Nom complet de l'article</span>
                <IoEllipsisHorizontal className="cursor-pointer" />
            </div>
            <div className="text-white font-[500] text-[12px]">$300</div>
            <div className="text-[10px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem, 
                autem id hic harum similique
            </div>
            <div className="flex justify-between text-[14px] mt-2">
                <IoHeartOutline className="text-white"/>
                <IoPaperPlaneOutline className="text-white"/>
            </div>
        </div>
    </div>
}