"use client"
import { useDispatch, useSelector } from "react-redux"
import { MainItemOutline } from "../MainItemOutline"
import { ProductsByCategory } from "../ProductsByCategory"
import { SecondButton } from "../SecondButton"
import { fetchUserProduits } from '@/features/produits/produitsApi'
import { AppDispatch, RootState } from "@/features/store"
import { useEffect } from "react"

export const Publications = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { userProducts, loading, error } = useSelector((state: RootState) => state.produits)
    // const { user } = useSelector((state: RootState) => state.user)

    // useEffect(() => {
    //     dispatch(fetchUserProduits(user.id))
    // }, [])

    return <>
        <div className="py-2 px-4">
            <SecondButton text="Tous" />
            <SecondButton text="Vetements" />
            <SecondButton text="Immobiliers" />
            <SecondButton text="Béaute" />
        </div>

        <div className="px-[90px]">
            {/* {
                userProducts.map(produit => (<ProductsByCategory key={produit.id} category={produit} />))
            } */}
        </div>

        {/* <ProductsByCategory category={undefined} /> */}

    </>
}