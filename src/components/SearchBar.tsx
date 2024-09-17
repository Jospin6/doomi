import { IoSearchOutline } from "react-icons/io5"
import { Categories } from "./Categories"

type SearchBarProps = {
    isHidden?: boolean,
}

export const SearchBar = ({ isHidden = false }: SearchBarProps) => {

    return <div className="h-auto border-b-[1px] border-[#121212] w-full px-2 pb-2">
        <div className="flex items-center h-[60px]">
            <div className="flex items-center mt-2 w-full rounded-lg bg-[#121212] h-[35px]">
                <input
                    type="text"
                    className="w-[95%] outline-none mr-2 bg-transparent pl-2"
                    placeholder="Rechercher sur doomi" />
                <IoSearchOutline className="text-white cursor-pointer" />
            </div>
        </div>
        <Categories isHidden={isHidden} />
    </div>
}