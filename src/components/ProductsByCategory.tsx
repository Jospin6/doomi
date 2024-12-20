"use client"
import { MainItem } from "./MainItem"
import {CategorieProduit} from '@/helpers/types'

type ProductsByCategoryProps = {
    category: CategorieProduit,
}

export const ProductsByCategory = ({category}: ProductsByCategoryProps) => {
    return <>
        <div className="px-2 text-white font-[500]"> {category.titre} </div>
        <div className="w-full px-4 flex h-auto pb-2">
        {category?.sub_categorie_produits.map(subCategory => (
          subCategory.produits.map(produit => (
            <>
                <MainItem 
                    key={produit.id} 
                    titre={produit.titre} 
                    vendeur={produit.vendeur} 
                    image={produit.image} 
                    location={produit.location} 
                />
            </>
          ))
        ))}
        </div>
    </>
}