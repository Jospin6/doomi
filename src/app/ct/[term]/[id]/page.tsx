"use client"
import { MainItem } from "@/components/MainItem"
import { SearchBar } from "@/components/SearchBar"
import { SingleItem } from "@/components/singleItem"
import { fetchProduitsById } from "@/features/produits/produitsApi"
import { AppDispatch, RootState } from "@/features/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { data } from "@/data"
import Image from 'next/image';

interface ShowProps {
    params: {
        term: string,
        id: number,
    }
}

export default function Show({ params }: ShowProps) {

    // const dispatch = useDispatch<AppDispatch>()
    // const { loading, singleProduct, error } = useSelector((state: RootState) => state.produits)

    // useEffect(() => {
    //     dispatch(fetchProduitsById(params.id))
    // }, [dispatch])

    return <div className=" relative flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            {params.term != "emplois"
                ? (<SingleItem categ={params.term} index={params.id} />)
                : data.map((categ, index) => {
                    const categoryName = Object.keys(categ)[0];
                    const item = categ[categoryName][params.id];
                    if (categoryName === "emplois") {
                        return <div key={index} className="p-2">
                            <div className="flex">
                                <div className="w-[30px] h-[30px] rounded-lg bg-red-200 mr-2">
                                    <Image src={item.image} alt={item.titre} className="rounded-lg w-[30px] h-[30px]" width={30} height={30} />
                                </div>
                                <div>
                                    <div> {item.username} </div>
                                </div>
                            </div>
                            <div>
                                <div className="py-4 flex justify-between">
                                    <span className="text-2xl font-[500]">{item.titre}</span>
                                    <button className="rounded-lg bg-[#D14318] text-white px-6 py-[5px]">postuler</button>
                                </div>
                                <div className="text-[12px] text-blue-600 pb-4"> {item.mail} </div>
                                <p className="text-[14px] px-4 text-gray-400">
                                    {item.description?.split('\n').map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}
                                </p>
                            </div>
                        </div>
                    }
                })
            }

            <div className="mt-6">
                <h2 className="text-[16px] text-gray-300">Consulter aussi</h2>
                <div className="w-full flex h-auto pb-2">
                    {/* PRODUITS */}
                    {/* <MainItem titre="" vendeur="" prix="" image="" location="" />
                    <MainItem titre="" vendeur="" prix="" image="" location="" />
                    <MainItem titre="" vendeur="" prix="" image="" location="" /> */}
                </div>
            </div>
        </div>
        <div className="w-[30%]">

        </div>
    </div>
}