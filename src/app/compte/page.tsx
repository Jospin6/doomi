"use client"
import { AccountComp } from "@/components/AccountComp";
import { SearchBar } from "@/components/SearchBar";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/features/store";
import { setIsTextHidden } from "@/features/navbarSlice"
import Link from "next/link";
import { IoLogOut } from "react-icons/io5";
import { FaBox, FaClipboardCheck, FaCog, FaQuestionCircle, FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default function Compte() {
    const dispatch = useDispatch<AppDispatch>()
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="p-6">
                <div className="border-[1px] px-4 border-[#121212] flex justify-between items-center text-gray-500 rounded-lg h-[150px] mb-4">
                    <div className="flex h-[60px] items-center">
                        <div className="h-[60px] text-white font-bold w-[60px] rounded-full bg-blue-800 flex justify-center items-center">
                            B
                        </div>
                        <span className="text-xl text-white pl-2">Bahati</span>
                    </div>
                    <div className="h-[40px]">
                        <button className="py-[2px] text-[14px] text-blue-500 px-[10px] border-[1px] border-blue-500">Voir mon profil</button>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2"><AccountComp text="Produits"><FaBox /></AccountComp></div>
                    <div className="col-span-2"><AccountComp text="Transactions"><FaMoneyBill1Wave /></AccountComp></div>
                    <div className="col-span-2"><AccountComp text="Profil"><FaUser /></AccountComp></div>

                    <div className="col-span-2"><AccountComp text="Reservations"><FaClipboardCheck /></AccountComp></div>
                    <div className="col-span-2"><AccountComp text="Parameètres"><FaCog /></AccountComp></div>
                    <div className="col-span-2"><AccountComp text="Aide"><FaQuestionCircle /></AccountComp></div>

                    <div className="col-span-2">
                    <Link href={"/connexion"} onClick={() => dispatch(setIsTextHidden(true))}><AccountComp text="Deconnaixion"><IoLogOut /></AccountComp></Link>
                    </div> 
                </div>
                <button className="py-[5px] mt-10 text-[14px] text-gray-400 px-[10px] border-[1px] border-[#121212]">Communauté doomi</button>

            </div>

        </div>

        <div className="w-[30%]">

        </div>

    </div>
}