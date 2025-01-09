import { IoStar, IoStarOutline } from "react-icons/io5"

export const Ventes = () => {
    return <div className="px-4 w-full">
        <div className="shadow border-[1px] text-[12px] text-gray-400 border-[#121212] w-full h-auto rounded-lg mt-2 p-2">
            <div>Jeudi 17 octobre 2024 </div>
            <p>Client: Diane</p>
            <p>Article: Mascara</p>
            <p>prix: FC2000</p>
            <div className="text-center text-gray-500 flex pl-[45px]">
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStarOutline />
            </div>
        </div>
    </div>
}