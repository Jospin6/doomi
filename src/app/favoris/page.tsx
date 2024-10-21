import { MainItemOutline } from "@/components/MainItemOutline";
import { SearchBar } from "@/components/SearchBar";
import { SecondButton } from "@/components/SecondButton";

export default function Favoris() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="px-4 py-2">
                <SecondButton text="tous"/>
                <SecondButton text="produits"/>
                <SecondButton text="services"/>
                <SecondButton text="emplois"/>
            </div>
            <div className="px-[90px]">
                <MainItemOutline className="w-full" entreprise="LA MANNE" description="alimentation" poste="Caissier"/>
                <MainItemOutline className="w-full" entreprise="MAPASA CAR" description="Agence de transport" poste="Chauffeur"/>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}