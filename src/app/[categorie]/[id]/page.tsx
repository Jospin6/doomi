"use client"
import { MainItem } from "@/components/MainItem"
import { MainItemOutline } from "@/components/MainItemOutline"
import { SearchBar } from "@/components/SearchBar"
import { SecondButton } from "@/components/SecondButton"
import { data } from "@/data"
import { fetchCategoryById } from "@/features/categories/categoriesApi"
import { AppDispatch, RootState } from "@/features/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image';
import { IoHeartOutline } from "react-icons/io5"
import Link from "next/link";

interface CategoriesProps {
    params: {
        categorie: string,
        id: number

    }
}

export default function Categorie({ params }: CategoriesProps) {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, category, error } = useSelector((state: RootState) => state.categories)
    // useEffect(() => {
    //     dispatch(fetchCategoryById(params.id))
    // }, [])
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

            <div className="">
                {/* MAP LES PRODUITS DE LA CATEGORIE */}
                {/* {category?.sub_categorie_produits.map(subCategory => (
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
                ))} */}
                <div>
                    {data.map((category, index) => {
                        const categoryName = Object.keys(category)[0];
                        const items = category[categoryName];

                        if (categoryName === params.categorie && categoryName === "emplois") {
                            return (
                                <>
                                    {
                                        items.map((item, itemIndex) => (<MainItemOutline
                                            key={itemIndex}
                                            className={"ml-2"}
                                            image={item.image}
                                            entreprise={item.username}
                                            categ={categoryName}
                                            index={itemIndex}
                                            salaireHoraire={item.salaireHoraire}
                                            typeContrat={item.typeContrat}
                                            date={item.date}
                                            description={""}
                                            poste={item.titre} />))
                                    }
                                </>

                            )
                        } else if (categoryName === params.categorie) {
                            return (
                                <div key={index} className="text-white px-2">
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="m-5">
                                                <div className="flex items-center">
                                                    <div className="flex justify-center mr-2 mb-[5px] items-center rounded-full h-[25px] bg-blue-400 text-[12px] w-[25px]">
                                                        {item.username.charAt(0).toUpperCase()}
                                                    </div>
                                                    <p className="text-[12px]">{item.username}</p>
                                                </div>
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
                        }


                    })}
                </div>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}