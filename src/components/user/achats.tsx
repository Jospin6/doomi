import { IoStar, IoStarOutline } from "react-icons/io5"

export const Achats = () => {
    return <>
        <div className="shadow border-[1px] text-[12px] text-gray-400 border-[#121212] w-full h-auto rounded-lg mt-2 p-2">
            <div>Vendredi 18 octobre 2024 </div>
            <p>Vendeur: LA MANNE</p>
            <p>Article: tricot pour bébé</p>
            <p>prix: $10</p>
            <div className="text-center text-gray-500 flex pl-[45px]">
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStarOutline />
                <IoStarOutline />
            </div>
        </div>
        <div className="shadow border-[1px] text-[12px] text-gray-400 border-[#121212] w-full h-auto rounded-lg mt-2 p-2">
            <div>Vendredi 18 octobre 2024 </div>
            <p>Vendeur: Safi cuisine</p>
            <p>Serice de cuisine</p>
            <p>prix: $23</p>
            <div className="text-center text-gray-500 flex pl-[45px]">
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStarOutline />
            </div>
        </div>
    </>
}