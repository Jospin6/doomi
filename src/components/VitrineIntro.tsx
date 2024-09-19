import { IoCall, IoLocation, IoTime } from "react-icons/io5"

export const VitrineIntro = () => {
    return <div className="rounded-lg h-auto">
    <div className="text-white mb-2 font-[500]">
        Intro
    </div>
    <div className="text-gray-500">
        <div className="text-center text-[12px] pb-2 mb-4 border-b-[1px] border-[#121212]">
            Alimemntation . Resto
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
}