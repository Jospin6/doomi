"use client"
import { MainItem } from "./MainItem"

type ProductsByCategoryProps = {
    category: object | undefined,
}

export const ProductsByCategory = ({category}: ProductsByCategoryProps) => {
    return <>
        <div className="px-2 text-white font-[500]"> {'titre'} </div>
        <div className="w-full px-4 flex h-auto pb-2">
            {/* <MainItem/> */}
        </div>
    </>
}