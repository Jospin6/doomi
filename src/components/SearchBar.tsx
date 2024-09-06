import { IoSearchOutline } from "react-icons/io5"
import { CategoryItem } from "./CategoryItem"
import { Categories } from "./Categories"

type SearchBarProps = {
    isHidden?: boolean
}

export const SearchBar = ({isHidden = false}: SearchBarProps) => {
    let navbarStyle = "h-[80px] border-b-[1px] border-[#121212] w-full px-2"
    return <div className={!isHidden ? `${navbarStyle}` : `${navbarStyle} flex items-center`}>
    <div className="flex items-center mt-2 w-full rounded-lg bg-[#121212] h-[35px]">
      <input type="text" className="w-[95%] outline-none mr-2 bg-transparent pl-2 text-gray-500" placeholder="Rechercher sur doomi" />
      <IoSearchOutline className="text-white cursor-pointer" />
    </div>
    <Categories isHidden={isHidden}/>
  </div>
}