import { CategoryItem } from "@/components/CategoryItem";
import { SearchBar } from "@/components/SearchBar";

export default function Nouveau() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <div className="border-b-[1px] border-[#121212]">
                <div className={`h-[44px] flex items-center justify-between px-4`}>
                    <CategoryItem title="Produits" isActive={true}/>
                    <CategoryItem title="Services" />
                    <CategoryItem title="Evenements" />
                    <CategoryItem title="Emplois" />
                </div>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}