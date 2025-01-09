"use client"
import { useDispatch, useSelector } from "react-redux"
import { MainItemOutline } from "../MainItemOutline"
import { ProductsByCategory } from "../ProductsByCategory"
import { SecondButton } from "../SecondButton"
import { fetchUserProduits } from '@/features/produits/produitsApi'
import { AppDispatch, RootState } from "@/features/store"
import { useEffect } from "react"
import { userProduits } from "@/data"
import Link from "next/link"
import Image from 'next/image';
import { IoHeartOutline } from "react-icons/io5"

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

        <div className="">
            {userProduits.map((category: any, index) => {
                const categoryName = Object.keys(category)[0];
                const items = category[categoryName];

                return (
                    <div key={index} className="text-white px-2">
                        <h2 className="text-[16px] font-[500] flex justify-between items-center">
                            <span>{categoryName}</span>
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {items.map((item: any, itemIndex: number) => (
                                <div key={itemIndex} className="mx-5 mb-3 mt-2">
                                    <Link href={`/ct/${categoryName}/${itemIndex}`}>
                                        <Image
                                            src={item.image}
                                            alt={item.titre}
                                            className="rounded-lg h-[200px] w-[200px]"
                                            width={150}
                                            height={150} />
                                    </Link>
                                    <h3 className="flex justify-between mt-[5px]"><span className="text-[16px]">{item.titre}</span><IoHeartOutline className="text-[18px]" /></h3>
                                    <p className="text-[12px]">{item.prix}</p>
                                    <p className="text-[12px] text-gray-400">{item.location}</p>
                                    <p className="text-[12px] text-gray-400">{item.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );


            })}
        </div>

        {/* <ProductsByCategory category={undefined} /> */}

    </>
}