"use client"
import { CategoryItemWithImg } from "@/components/CategoryItemWithImg";
import { MainItem } from "@/components/MainItem";
import { MainItemOutline } from "@/components/MainItemOutline";
import { ProductsByCategory } from "@/components/ProductsByCategory";
import { SearchBar } from "@/components/SearchBar";
import { SuggestionSideBar } from "@/components/SuggestionSideBar";
import { AppDispatch } from "@/features/store";
import {setIsTextHidden} from "@/features/navbarSlice"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(setIsTextHidden(false))
  }, [])
  return (
    <main className="flex w-full">

      <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
        <SearchBar />
        <div>
          {/* <ProductsByCategory>
            <MainItemOutline className={"w-[180px]"} />
            <MainItemOutline className={"w-[180px]"} />
          </ProductsByCategory> */}
          <ProductsByCategory titre="Vêtements">
            <MainItem titre="tricot pour bébé" vendeur="LA MANNE" prix="FC6000" image="/assets/vt3.png" location="Bukavu" />
            <MainItem titre="T-shirt" vendeur="Glody business" prix="$3" image="/assets/vt5.png" location="Bukavu" />
            <MainItem titre="tricot" vendeur="Nadine" prix="$10" image="/assets/vt4.png" location="Bukavu" />
          </ProductsByCategory>
          <ProductsByCategory titre="Beauté">
            <MainItem titre="Mascara" vendeur="Marie causmetique" prix="FC2000" image="/assets/beaute/mac1.png" location="Bukavu" />
            <MainItem titre="Pomme de beauté" vendeur="LA MANNE" prix="$2" image="/assets/beaute/mac2.png" location="Bukavu" />
            <MainItem titre="Pomade" vendeur="" prix="$1.3" image="/assets/beaute/mac4.png" location="Bukavu" />
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
