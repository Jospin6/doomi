import { IoHeartOutline } from "react-icons/io5"
import Image from "next/image"

type HorizontalItemProps = {
    titre: string,
    image: string,
    prix: string,
    location: string
}

export const HorizontalItem = ({titre, image, prix, location}: HorizontalItemProps) => {
    return <div className="w-full flex h-auto rounded-lg bg-[#121212] mb-2">
        <div className="m-2 w-[80px] h-[80px] bg-yellow-300 rounded-lg">
        <Image src={image} alt="image" className="w-[80px] h-[80px] rounded-lg" width={"80"} height={"80"}/>
        </div>
        <div className="mr-2 my-2 w-[83%]">
            <div className="text-[12px] flex justify-between text-white ">
                <span> {titre} </span>
                <IoHeartOutline className="text-white"/>
            </div>
            <div className="text-white flex justify-between font-[500] text-[12px]">
                <span> {prix} </span>
                
            </div>
            <div className="text-[10px] text-gray-500">
                <div> {location} </div>
                <div>Aujourd'hui à 11h</div>
            </div>
        </div>
    </div>
}