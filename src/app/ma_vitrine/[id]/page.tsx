import { MainButton } from "@/components/MainButton";
import { IoCall, IoLocation, IoMenu, IoTime } from "react-icons/io5";

export default function MaVitrine() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">

            <div className="border-b-[1px] h-auto border-[#121212]">
                <div className={`flex justify-between text-white items-center p-2`}>
                    <span className="text-[20px] font-[500]"> E-vitrine </span>
                    <span className="text-[18px]"><IoMenu /></span>
                </div>
                <div className="w-full h-[200px] bg-yellow-300 rounded-b-lg">

                </div>
                <div className="z-10 mt-[-50px]">
                    <div className="px-6 flex w-full">
                        <div className="w-[100px] h-[100px] rounded-full bg-blue-200">

                        </div>
                        <div className="pt-[60px] w-[85%] px-2 mb-4">
                            <div className="flex justify-between font-[500] w-full">
                                <span className="text-[16px]">Nom de la boutique</span>
                                <span className="text-blue-500 text-[14px]">suivre</span>
                            </div>
                            <div className="text-[12px] text-gray-500">
                                <div>20 Followers . 5 Posts . 3 Note</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                            </div>
                            <MainButton text="Modifier le profile" className="py-[3px] w-[20%] mt-2 mr-3 text-[12px]" />
                            <MainButton text="Publier" className="py-[3px] w-[20%] mt-2 mr-3 text-[12px]" />
                            <MainButton text="Message" className="py-[3px] w-[20%] mt-2 text-[12px]" />
                        </div>
                    </div>

                    <div className="w-full border-t-[1px] h-[40px] pt-[6px] border-[#121212] px-2">
                        <button className="bg-[#D14318] bg-opacity-30 
                        text-white rounded-full px-[10px] py-[3px] text-gray-500 
                        text-[12px] mr-2">
                            Tous
                        </button>
                        <button className="bg-[#121212] hover:bg-[#D14318] hover:bg-opacity-30 
                        hover:text-white rounded-full px-[10px] py-[3px] text-gray-500 
                        text-[12px] mr-2">
                            Vetements
                        </button>
                        <button className="bg-[#121212] hover:bg-[#D14318] hover:bg-opacity-30 
                        hover:text-white rounded-full px-[10px] py-[3px] text-gray-500 
                        text-[12px] mr-2">
                            Beauté
                        </button>
                        <button className="bg-[#121212] hover:bg-[#D14318] hover:bg-opacity-30 
                        hover:text-white rounded-full px-[10px] py-[3px] text-gray-500 
                        text-[12px] mr-2">
                            Immobilier
                        </button>
                        <button className="bg-[#121212] hover:bg-[#D14318] hover:bg-opacity-30 
                        hover:text-white rounded-full px-[10px] py-[3px] text-gray-500 
                        text-[12px] mr-2">
                            Maison et meubles
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <div className="w-[30%] px-3 pt-[100px]">
            <div className="rounded-lg h-auto">
                <div className="text-white mb-2 font-[500]">
                    Intro
                </div>
                <div className="text-gray-500">
                    <div className="text-center text-[12px] pb-2 mb-4 border-b-[1px] border-[#121212]">
                        Alimemntation & Resto
                    </div>
                    <div className="flex items-center pl-2 w-full mb-2">
                        <IoCall className="text-[18px] mr-2" />
                        <span className="font-[500] text-[14px]">0976774112</span>
                    </div>
                    <div className="flex items-center pl-2 w-full mb-2">
                        <IoLocation className="text-[18px] mr-2" />
                        <span className="font-[500] text-[14px]">Bukavu, Kasali</span>
                    </div>
                    <div className="flex items-center pl-2 w-full mb-2">
                        <IoTime className="text-[18px] mr-2" />
                        <span className="font-[500] text-[14px]">Disponible de 8h à 20h</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}