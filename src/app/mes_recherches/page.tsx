import { SearchBar } from "@/components/SearchBar";

export default function MesRecherches() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] px-2 h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true}/>
            <div className="mt-4">
                <div className="text-white mb-2 text-[14px]">Recherches recents</div>
                <div className="pl-2">
                    <button className="py-[3px] rounded-full border-[1px] border-[#121212] 
                    px-[10px] text-gray-500 text-[12px]">
                        iphone pros max <span className="text-white bg-red-500 rounded-full ml-2 px-[4px] text-center">x</span>
                    </button>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-white mb-2 text-[14px]">Recherches populaires dans votre region</div>
                <div className="pl-2">
                    <button className="py-[3px] rounded-full border-[1px] border-[#121212] px-[10px] text-gray-500 text-[12px]">chambre a louer</button>
                </div>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}