import { IoCallOutline, IoVideocamOutline } from "react-icons/io5"
import { ListTile } from "./ListTile"

export const MessageHeader = () => {
    return <div className="flex justify-between h-[45px] items-center w-full px-2 
    border-b-[1px] border-[#121212]">
        <div>
            <ListTile titre="Ernetine" sousTitre="personnel" lettre="E"/>
        </div>
        <div className="flex text-[18px]">
            <IoCallOutline className="mr-4"/>
            <IoVideocamOutline/>
        </div>
    </div>
}