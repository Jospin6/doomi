import { MainItem } from "@/components/MainItem"
import { MainItemOutline } from "@/components/MainItemOutline"
import { SearchBar } from "@/components/SearchBar"
import { SecondButton } from "@/components/SecondButton"
import { fetchCategoryById } from "@/features/categories/categoriesApi"
import { AppDispatch, RootState } from "@/features/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

interface CategoriesProps {
    params: {
        categorie: string,
        id: number

    }
}

export default function Categorie({ params }: CategoriesProps) {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, category, error } = useSelector((state: RootState) => state.categories)
    useEffect(() => {
        dispatch(fetchCategoryById(params.id))
    }, [])
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="px-4 py-2">
                <SecondButton text="les plus vendus" />
                <SecondButton text="prix" />
                <SecondButton text="date publication" />
                <SecondButton text="taille" />
                <SecondButton text="marque" />
            </div>
            
            <div className="text-xl font-[500] text-white px-4 pt-2">
                {params.categorie}
            </div>

            <div className="flex flex-wrap px-[90px]">
                {/* MAP LES PRODUITS DE LA CATEGORIE */}
                {category?.sub_categorie_produits.map(subCategory => (
                    subCategory.produits.map(produit => (
                        <MainItem
                            key={produit.id}
                            titre={produit.titre}
                            vendeur={produit.vendeur}
                            prix={produit.prix}
                            image={produit.image_urls[0]}
                            location={produit.location}
                            created_at={produit.created_at}
                        />
                    ))
                ))}
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}