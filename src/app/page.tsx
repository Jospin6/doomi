import { CategoryItem } from "@/components/CategoryItem";
import { MainItem } from "@/components/MainItem";
import { ProductsByCategory } from "@/components/ProductsByCategory";
import { SideNavbar } from "@/components/SideNavbar";
import { SuggestionSideBar } from "@/components/SuggestionSideBar";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex w-full">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
          <div className="h-[80px] border-b-[1px] border-[#121212] w-full px-2">
            <div className="flex items-center mt-2 rounded-lg bg-[#121212] h-[35px]">
              <input type="text" className="w-[95%] outline-none mr-2 bg-transparent pl-2 text-gray-500" placeholder="Rechercher sur doomi" />
              <IoSearchOutline className="text-white cursor-pointer" />
            </div>
            <div className="h-[44px] flex items-center justify-between">
              <CategoryItem title="Tous" />
              <CategoryItem title="Produits" isActive={true} />
              <CategoryItem title="Services" />
              <CategoryItem title="Evenements" />
              <CategoryItem title="Emplois" />
            </div>
          </div>
          <div>
            <ProductsByCategory />
            <ProductsByCategory />
          </div>
        </div>

        <div className="w-[30%]">
          <SuggestionSideBar />
        </div>
    </main>
  );
}
