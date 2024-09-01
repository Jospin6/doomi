import { CategoryItem } from "@/components/CategoryItem";
import { MainItem } from "@/components/MainItem";
import { SideNavbar } from "@/components/SideNavbar";
import { SuggestionSideBar } from "@/components/SuggestionSideBar";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="grid grid-cols-8 gap-4 bg-[#000000]">
      <div className="col-span-2 h-[100vh] p-2">
        <SideNavbar/>
      </div>
      <div className="col-span-4 h-[100vh] border-x-[1px] border-[#121212]">
        <div className="h-[80px] border-b-[1px] border-[#121212] w-full px-2">
          <div className="flex items-center mt-2 rounded-lg bg-[#121212] h-[35px]">
            <input type="text" className="w-[95%] outline-none mr-2 bg-transparent pl-2 text-gray-500" placeholder="Rechercher..." />
            <IoSearchOutline className="text-white cursor-pointer"/>
          </div>
          <div className="h-[44px] flex items-center">
            <CategoryItem title="Vetements" className="text-gray-500"/>
            <CategoryItem title="Beauté" className="text-white border-b-[4px] border-[#D14318]"/>
            <CategoryItem title="Cuisine" className="text-gray-500"/>
            <CategoryItem title="Loisir" className="text-gray-500"/>
          </div>
        </div>
        <div>
          <MainItem/>
        </div>
      </div>
      <div className="col-span-2 h-[100vh]">
        <SuggestionSideBar/>
      </div>
    </main>
  );
}
