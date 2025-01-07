import { MainItem } from "@/components/MainItem";
import { SearchBar } from "@/components/SearchBar";
import { RootState } from "@/features/store";
import { useSelector } from "react-redux";

export default function MesRecherches() {
    // const {searchedProducts} = useSelector((state: RootState) => state.produits)

    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="px-2">
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

                <div className="mt-4">
                    {/* {
                        searchedProducts.map(produit => (
                            <>
                                <MainItem 
                                    key={produit.id} 
                                    titre={produit.titre} 
                                    vendeur={produit.vendeur} 
                                    image={produit.image} 
                                    location={produit.location} 
                                />
                            </>
                          ))
                    } */}
                </div>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}