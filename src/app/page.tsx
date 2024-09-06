import { ProductsByCategory } from "@/components/ProductsByCategory";
import { SearchBar } from "@/components/SearchBar";
import { SuggestionSideBar } from "@/components/SuggestionSideBar";

export default function Home() {
  return (
    <main className="flex w-full">

      <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
        <SearchBar />
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
