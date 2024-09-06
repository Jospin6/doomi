import { IoMenu, IoMenuSharp, IoSearchOutline, IoSettings } from "react-icons/io5"
import { CategoryItem } from "./CategoryItem"
import { Categories } from "./Categories"

type SearchBarProps = {
    isHidden?: boolean,
    hideOtherComp?: boolean,
    topTitle?: string
}

export const SearchBar = ({ isHidden = false, hideOtherComp = false, topTitle }: SearchBarProps) => {

    return <div className="h-auto border-b-[1px] border-[#121212] w-full px-2">
        <div className={hideOtherComp ? `flex justify-between text-white items-center pt-4` : `hidden`}>
            <span className="text-[20px] font-[500]"> {topTitle} </span>
            <span className="text-[18px]"><IoMenu /></span>
        </div>
        <div className="flex items-center h-[60px]">
            <div className="flex items-center mt-2 w-full rounded-lg bg-[#121212] h-[35px]">
                <input
                    type="text"
                    className="w-[95%] outline-none mr-2 bg-transparent pl-2 text-gray-500"
                    placeholder="Rechercher sur doomi" />
                <IoSearchOutline className="text-white cursor-pointer" />
            </div>
        </div>
        <Categories isHidden={isHidden} />
    </div>
}