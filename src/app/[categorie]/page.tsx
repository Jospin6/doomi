import { MainItem } from "@/components/MainItem"
import { MainItemOutline } from "@/components/MainItemOutline"
import { SearchBar } from "@/components/SearchBar"
import { SecondButton } from "@/components/SecondButton"

interface CategoriesProps {
    params: {
        categorie: string[]
    }
}

export default function Categorie({ params }: CategoriesProps) {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="px-4 py-2">
                <SecondButton text="les plus vendus"/>
                <SecondButton text="prix"/>
                <SecondButton text="date publication"/>
                <SecondButton text="taille"/>
                <SecondButton text="marque"/>
            </div>
            <div className="text-xl font-[500] text-white px-4 pt-2">
                Vêtements
            </div>
            {/* <div className="px-[90px]">
                <MainItemOutline className="w-full"/>
                <MainItemOutline className="w-full"/>
            </div> */}
            <div className="flex flex-wrap px-[90px]">
            <MainItem titre="tricot pour bébé" vendeur="LA MANNE" prix="FC6000" image="/assets/vt3.png" location="Bukavu" />
            <MainItem titre="T-shirt" vendeur="Glody business" prix="$3" image="/assets/vt5.png" location="Bukavu" />
            <MainItem titre="tricot" vendeur="Nadine" prix="$10" image="/assets/vt4.png" location="Bukavu" />
            <MainItem titre="Chemises pour hommes" vendeur="LA MANNE" prix="FC6000" image="/assets/vet1.png" location="Bukavu" />
            <MainItem titre="Pull" vendeur="Glody business" prix="$3" image="/assets/vet2.png" location="Bukavu" />
            <MainItem titre="tricot" vendeur="Nadine" prix="$10" image="/assets/vt4.png" location="Bukavu" />
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}