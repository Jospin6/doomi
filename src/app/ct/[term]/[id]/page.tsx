"use client"
import { MainItem } from "@/components/MainItem"
import { SearchBar } from "@/components/SearchBar"
import { SingleItem } from "@/components/singleItem"
import {fetchProduitsById} from "@/features/produits/produitsApi"
import { AppDispatch, RootState } from "@/features/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

interface ShowProps {
    params: {
        term: string,
        id: number,
    }
}

export default function Show({ params }: ShowProps) {

    const dispatch = useDispatch<AppDispatch>()
    const {loading, singleProduct, error} = useSelector((state: RootState) => state.produits)

    useEffect(() => {
        dispatch(fetchProduitsById(params.id))
    }, [dispatch])
    
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <SingleItem produit={singleProduct} />
            <div className="mt-6">
                <h2 className="text-[16px] text-gray-300">Consulter aussi</h2>
                <div className="w-full flex h-auto pb-2">
                    {/* PRODUITS */}
                    <MainItem titre="" vendeur="" prix="" image="" location="" />
                    <MainItem titre="" vendeur="" prix="" image="" location="" />
                    <MainItem titre="" vendeur="" prix="" image="" location="" />
                </div>
            </div>
        </div>
        <div className="w-[30%]">

        </div>
    </div>
}