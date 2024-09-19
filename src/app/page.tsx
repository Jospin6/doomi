import { CategoryItemWithImg } from "@/components/CategoryItemWithImg";
import { MainItem } from "@/components/MainItem";
import { MainItemOutline } from "@/components/MainItemOutline";
import { ProductsByCategory } from "@/components/ProductsByCategory";
import { SearchBar } from "@/components/SearchBar";
import { SuggestionSideBar } from "@/components/SuggestionSideBar";

export default function Home() {
  return (
    <main className="flex w-full">

      <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
        <SearchBar />
        <div>
          <ProductsByCategory>
            <MainItemOutline className={"w-[180px]"} />
            <MainItemOutline className={"w-[180px]"} />
          </ProductsByCategory>
          <ProductsByCategory>
            <MainItem />
            <MainItem />
            <MainItem />
          </ProductsByCategory>
          <ProductsByCategory>
            <MainItem />
            <MainItem />
            <MainItem />
          </ProductsByCategory>
        </div>
        <div>
          <div className="p-2 text-white font-[500]">Explorer nos categories</div>
          <div className="w-full flex m-auto px-6">
            <CategoryItemWithImg category="Vetement" />
            <CategoryItemWithImg category="Immobilier" />
            <CategoryItemWithImg category="Beauté" />
            <CategoryItemWithImg category="Vehicule" />
            <CategoryItemWithImg category="Loisir" />
          </div>
        </div>
      </div>

      <div className="w-[30%]">
        <SuggestionSideBar />
      </div>

    </main>
  );
}
