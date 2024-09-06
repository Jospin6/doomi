import { SearchBar } from "@/components/SearchBar"

interface CategoriesProps {
    params: {
        categorie: string[]
    }
}

export default function Categorie({ params }: CategoriesProps) {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} hideOtherComp={true} topTitle={params.categorie[0]} />
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}