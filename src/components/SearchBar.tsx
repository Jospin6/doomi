"use client"
import { IoSearchOutline } from "react-icons/io5"
import { Categories } from "./Categories"
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/features/store";
import { searchProduits } from "@/features/produits/produitsApi"

type SearchBarProps = {
    isHidden?: boolean,
}

export const SearchBar = ({ isHidden = false }: SearchBarProps) => {
    const dispatch = useDispatch<AppDispatch>()

    const initialValues = {
        title: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (data) => {
            dispatch(searchProduits(data.title))
        },
    });

    return <div className="h-auto border-b-[1px] border-[#121212] w-full px-2">
        <div className="flex items-center h-[60px]">
            <div className="flex items-center mt-2 w-full rounded-lg bg-[#121212] h-[35px]">
                <form onSubmit={formik.handleSubmit} >
                    <input
                        type="text"
                        className="w-[95%] outline-none mr-2 bg-transparent pl-2"
                        placeholder="Rechercher sur doomi" />
                    <button><IoSearchOutline className="text-white cursor-pointer" /></button>
                </form>
            </div>
        </div>
        <Categories isHidden={isHidden} />
    </div>
}