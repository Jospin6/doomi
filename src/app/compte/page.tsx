"use client"
import { AccountComp } from "@/components/AccountComp";
import { SearchBar } from "@/components/SearchBar";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/features/store";
import {setIsTextHidden} from "@/features/navbarSlice"
import Link from "next/link";

export default function Compte() {
    const dispatch = useDispatch<AppDispatch>()
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true}/>
            <div className="p-6">
                <div className="border-[1px] border-[#121212] text-gray-500 rounded-lg h-[150px] mb-4">

                </div>
                <Link href={"/connexion"} onClick={() => dispatch(setIsTextHidden(true))}><AccountComp /></Link>

            </div>

        </div>

        <div className="w-[30%]">

        </div>

    </div>
}