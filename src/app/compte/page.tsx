import { SearchBar } from "@/components/SearchBar";

export default function Compte() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} hideOtherComp={true} topTitle="Compte" />
            
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}