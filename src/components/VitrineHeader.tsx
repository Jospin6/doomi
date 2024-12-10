import { IoMenu, IoStar, IoStarOutline } from "react-icons/io5"
import { CategoryItem } from "./CategoryItem"
import { MainButton } from "./MainButton"
import {categoriItems} from "@/helpers/vitrine"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/features/store"
import {setActiveIndex} from '@/features/vitrines/vitrineSubNavbarSlice'
import Image from "next/image"

export const VitrineHeader = () => {

    const dispatch = useDispatch<AppDispatch>()
    const {index} = useSelector((state: RootState) => state.vitrineSubNavbar)
    const {loading, vitrines, error} = useSelector((state: RootState) => state.vitrines)

    const handleClick = (index: number) => {
        dispatch(setActiveIndex(index))
    };

    return <div className="border-b-[1px] h-auto border-[#121212]">
        <div className={`flex justify-between text-white items-center p-2`}>
            <span className="text-[20px] font-[500]"> Vitrine </span>
            <span className="text-[18px]"><IoMenu /></span>
        </div>
        <div className="w-full h-[200px] text-4xl font-bold flex justify-end items-end bg-white text-black p-6 rounded-b-lg">
            <Image src={vitrines!.cover_img} alt="image" className="w-[100%] h-[100%] rounded-lg"/>
        </div>
        <div className="z-10 mt-[-50px]">
            <div className="px-6 flex w-full">
                <div className="w-[100px] flex justify-center items-center text-white text-4xl font-bold h-[100px] rounded-full bg-yellow-800">
                <Image src={vitrines!.profil_img} alt="image" className="w-[100px] h-[100px] rounded-full"/>
                </div>
                <div className="pt-[60px] w-[85%] px-2 mb-4">
                    <div className="flex justify-between font-[500] w-full">
                        <span className="text-[16px]"> {vitrines?.titre} </span>
                        <span className="text-blue-500 text-[14px]">suivre</span>
                    </div>
                    <div className="text-[12px] text-gray-500">
                        <div className="flex">
                            <div>{vitrines?.followers_count} Followers . 5 Posts . 3 Note</div>
                            <div className="text-center text-gray-500 flex pl-[10px]">
                                <IoStar className="text-yellow-500" />
                                <IoStar className="text-yellow-500" />
                                <IoStar className="text-yellow-500" />
                                <IoStarOutline />
                                <IoStarOutline />
                            </div>
                        </div>
                        <div> {vitrines?.description} </div>
                        <div className="mt-2"><a href="#" className="text-blue-500">Modifier le profile</a></div>
                    </div>
                    {/* <button className="py-[3px] w-[20%] bg-blue-500 rounded-lg mt-2 mr-3 text-[12px]" >
                    Message
                </button> */}
                    <MainButton text="Publier" className="py-[3px] w-[20%] mt-2 text-[12px]" />
                </div>
            </div>

            <div className="w-full border-t-[1px] flex justify-between h-[40px] pt-[6px] border-[#121212] px-2">
                {categoriItems.map((title, index) => (
                    <CategoryItem
                        key={index}
                        title={title}
                        isActive={index === index}
                        className="mr-4"
                        onClick={() => handleClick(index)}
                    />
                ))}
                <div>
                    
                </div>
            </div>
        </div>
    </div>
}