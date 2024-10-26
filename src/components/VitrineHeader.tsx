import { IoMenu, IoStar, IoStarOutline } from "react-icons/io5"
import { CategoryItem } from "./CategoryItem"
import { MainButton } from "./MainButton"

export const VitrineHeader = () => {
    return <div className="border-b-[1px] h-auto border-[#121212]">
        <div className={`flex justify-between text-white items-center p-2`}>
            <span className="text-[20px] font-[500]"> E-vitrine </span>
            <span className="text-[18px]"><IoMenu /></span>
        </div>
        <div className="w-full h-[200px] text-4xl font-bold flex justify-end items-end bg-white text-black p-6 rounded-b-lg">
            Bahati
        </div>
        <div className="z-10 mt-[-50px]">
            <div className="px-6 flex w-full">
                <div className="w-[100px] flex justify-center items-center text-white text-4xl font-bold h-[100px] rounded-full bg-yellow-800">
                    B
                </div>
                <div className="pt-[60px] w-[85%] px-2 mb-4">
                    <div className="flex justify-between font-[500] w-full">
                        <span className="text-[16px]">Bahati photographie</span>
                        <span className="text-blue-500 text-[14px]">suivre</span>
                    </div>
                    <div className="text-[12px] text-gray-500">
                        <div className="flex">
                            <div>20 Followers . 5 Posts . 3 Note</div>
                            <div className="text-center text-gray-500 flex pl-[10px]">
                                <IoStar className="text-yellow-500" />
                                <IoStar className="text-yellow-500" />
                                <IoStar className="text-yellow-500" />
                                <IoStarOutline />
                                <IoStarOutline />
                            </div>
                        </div>
                        <div>Photographie de mariages et d'événements spéciaux. Notre objectif est de capturer les moments les plus importants de votre vie.</div>
                        <div className="mt-2"><a href="#" className="text-blue-500">Modifier le profile</a></div>
                    </div>
                    {/* <button className="py-[3px] w-[20%] bg-blue-500 rounded-lg mt-2 mr-3 text-[12px]" >
                    Message
                </button> */}
                    <MainButton text="Publier" className="py-[3px] w-[20%] mt-2 text-[12px]" />
                </div>
            </div>

            <div className="w-full border-t-[1px] flex justify-between h-[40px] pt-[6px] border-[#121212] px-2">
                <CategoryItem title="Publications" className="mr-4" />
                <CategoryItem title="Services" className="mr-4" />
                <CategoryItem title="Achats" className="mr-4" />
                <CategoryItem title="Ventes" className="mr-4" />
                <CategoryItem title="A propos"  />
            </div>
        </div>
    </div>
}