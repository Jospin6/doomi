import { SearchBar } from "@/components/SearchBar";

export default function Notifications() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}