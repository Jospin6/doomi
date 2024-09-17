import { IoHeartOutline } from "react-icons/io5"

export const MainItemOutline = () => {
    return <div className="w-[180px] shadow border-[1px] border-[#121212] h-auto rounded-lg mt-2 p-2 mr-2">
        <div className="text-[12px] text-white pb-[2px] flex justify-between">
            <div className="flex">
                <div className="w-[30px] h-[30px] rounded-lg bg-red-200 mr-2">

                </div>
                <div>Nom du vendeur</div>
            </div>
            <IoHeartOutline />
        </div>
        <div>
            <h2 className="text-white text-[14px] my-[5px]">Titre du post</h2>
            <div className="text-gray-500 text-[12px]">temp plein 12$/heure</div>
            <div className="text-[10px] my-[5px] rounded-full bg-green-500 py-[3px] text-center text-white">
                Recrute activement
            </div>
            <div className="text-gray-500 text-[12px]">
                <div>Nyawera 12</div>
                <div>Ajourd'hui à 6h</div>
            </div>
        </div>
    </div>
}