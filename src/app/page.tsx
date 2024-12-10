"use client"
import { CategoryItemWithImg } from "@/components/CategoryItemWithImg";
import { SearchBar } from "@/components/SearchBar";
import { SuggestionSideBar } from "@/components/SuggestionSideBar";
import { AppDispatch, RootState } from "@/features/store";
import { setIsTextHidden } from "@/features/navbarSlice"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from '@/features/categories/categoriesApi'
import { ProductsByCategory } from "@/components/ProductsByCategory";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, categories, error } = useSelector((state: RootState) => state.categories)
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(setIsTextHidden(false))
  }, [])
  return (
    <main className="flex w-full">

      <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
        <SearchBar />
        <div>
          {
            categories.map(category => (<ProductsByCategory key={category.id} category={category} />))
          }
        </div>
        <div>
          <div className="p-2 text-white font-[500]">Explorer nos categories</div>
          <div className="w-full flex m-auto px-6">
            {
              categories.map(category => (<CategoryItemWithImg category={category} />))
            }
          </div>
        </div>
      </div>

      <div className="w-[30%]">
        <SuggestionSideBar />
      </div>

    </main>
  );
}
