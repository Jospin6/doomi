"use client"
import { SearchBar } from "@/components/SearchBar";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function CompteModification() {
    const user = useCurrentUser()
    
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="px-2">
                
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}