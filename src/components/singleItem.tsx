import { IoHeartOutline, IoShareSocialOutline, IoStar, IoStarOutline } from "react-icons/io5"
import { MainItem } from "./MainItem"
import Image from "next/image"
import { useState } from "react"
import { Popup } from "./Popup"
import { Input } from "./Input"
import {Produit} from '@/helpers/types'

interface SingleItemProps {
    produit: Produit | null
}

export const SingleItem = ({produit}: SingleItemProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    return <>
        <div className="px-[50px] pt-4">
            <div className="rounded-lg h-[350px] bg-green-700">
                <Image src={produit!.titre} alt="image" className="w-full h-[350px] rounded-lg" width={"180"} height={"220"} />
            </div>
            <div className="text-xl py-4 text-white flex justify-between">
                <span className="font-[500]">{"Maison à louer"}</span>
                <div className="text-[16px] flex">
                    <IoShareSocialOutline className="mr-2" />
                    <IoHeartOutline />
                </div>
            </div>
            <div className="text-[14px] text-gray-300 mb-4">
                <p className="text-[20px]">Critères</p>
                <p>Chambres: 4 chambres</p>
                <p>Salons: 2 salons</p>
                <p>Salles de bain: 2 salles de bain</p>
                <p>Cuisines: 1 cuisine</p>
            </div>
            <div className="text-xl font-[500] mb-2 text-gray-300"> {produit?.devise}{produit?.prix} </div>
            <div className="text-[12px] text-gray-500">
                {produit?.date}
            </div>
            <div className="flex justify-between items-center pt-4">
                <div>
                    <div className="flex h-[50px] items-center">
                        <div className="w-[40px] h-[40px] rounded-full bg-red-300 mr-2"></div>
                        <div className="text-[14px]">{produit?.user.username}</div>
                    </div>
                    <div className="text-center text-gray-500 flex pl-[45px]">
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                </div>
                <div>
                    <button className="text-[12px] py-[5px] mr-2 px-[10px] rounded-lg bg-[#D14318] bg-opacity-30" onClick={toggleOpen}>
                        Achat
                    </button>
                    <button className="text-[12px] py-[5px] px-[10px] rounded-lg bg-blue-500 bg-opacity-30">
                        Envoyer un message
                    </button>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-[16px] text-gray-300 mb-2">Details</h2>
                <div className="text-[12px] text-gray-500">

                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-[16px] text-gray-300 mb-2">Description</h2>
                <p className="text-[12px] text-gray-500">
                    {produit?.description}
                </p>
            </div>
        </div>

        {isOpen && (<Popup handleClose={toggleOpen}>
            <div className=" text-gray-800 ">
                <div className="font-bold">Paiement mobile</div>
                <p className="text-[12px] pb-2">Payer vos vendeur facilement sur notre plateforme</p>
                <Input
                    id='phone'
                    inputBorder="border-gray-500"
                    className='mb-4'
                    placeholder='Entrer votre nurero'
                    label='Numero de téléphone'
                    type='text'
                    fieldName={""}
                    onchange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                        throw new Error("Function not implemented.")
                    }}
                    value={undefined} />
                <div className="flex justify-between">
                    <button className="border-[1px] border-gray-400 py-[2px] px-[10px] rounded">Annuler</button>
                    <button className="bg-blue-500 text-white py-[2px] px-[10px] rounded">Suivant</button>
                </div>
                <div className="flex mt-2">
                    <Image src="/assets/orange.png" alt="image" className="w-[60px] h-[60px] mr-2 rounded-lg" width={"80"} height={"80"} />
                    <Image src="/assets/airtel.png" alt="image" className="w-[60px] h-[60px] mr-2 rounded-lg" width={"80"} height={"80"} />
                    <Image src="/assets/mpesa.png" alt="image" className="w-[60px] h-[60px] mr-2 rounded-lg" width={"80"} height={"80"} />
                    <Image src="/assets/affricell.png" alt="image" className="w-[60px] h-[60px] mr-2 rounded-lg" width={"80"} height={"80"} />
                </div>
            </div>
        </Popup>)}
    </>
}