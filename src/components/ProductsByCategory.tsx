"use client"
import { MainItem } from "./MainItem"
import {CategorieProduit} from '@/helpers/types'
import Link from "next/link"

type ProductsByCategoryProps = {
    category: CategorieProduit,
}

export const ProductsByCategory = ({category}: ProductsByCategoryProps) => {
    return <>
        <div className="px-2 flex justify-between"> 
            <span className="text-white font-[500]">{category.titre}</span> 
            <Link href={`/${category.titre}/${category.id}`} className="text-blue-600 text-[12px]">Voir plus</Link>
        </div>
        <div className="w-full px-4 flex h-auto pb-2">
        {category?.sub_categorie_produits.map(subCategory => (
          subCategory.produits.map(produit => (
            <>
                <Link href={`/ct/${subCategory.titre}/${produit.id}`} key={produit.id}>
                <MainItem  
                    titre={produit.titre} 
                    vendeur={produit.user.username} 
                    image={produit.image_urls[0]} 
                    location={produit.location}
                    created_at={produit.created_at} 
                />
                </Link>
            </>
          ))
        ))}
        </div>
    </>
}