import { CategoryItem } from "@/components/CategoryItem";
import ProduitForm from "@/components/ProduitForm";
import { SearchBar } from "@/components/SearchBar";

export default function Nouveau() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <div className="border-b-[1px] border-[#121212]">
               {/* IL FAUT AJOUTER UN DESIGN ICI */}
            </div>
            <div className="p-4 w-full">
                <div className="text-white mb-6 mt-2 text-md" style={{"fontFamily": "Verdana"}}>Ajouter un nouveau produit</div>
                <div className="w-[80%] m-[auto]">
                    <ProduitForm />
                </div>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}