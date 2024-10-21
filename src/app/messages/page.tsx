import { ListTile } from "@/components/ListTile";
import { MessageHeader } from "@/components/MessageHeader";
import { IoPaperPlaneOutline, IoSearchOutline } from "react-icons/io5";
import Image from "next/image"

export default function Messages() {
    return <div className=" flex w-full text-white">
        <div className="w-[30%] min-h-[100vh] h-auto border-x-[1px] border-[#121212] p-2">
            <div className="flex justify-between h-[45px] items-center text-white">
                <span className="text-[20px] font-[500]"> Messages </span>
                <span className="text-[18px]"><IoSearchOutline /></span>
            </div>

            <div className="mt-4">
                <ListTile titre="LA MANNE" sousTitre="entreprise"/>
            </div>

        </div>

        <div className="w-[70%] relative">
            <MessageHeader />

            <div>
                {/* Messages */}
                <div className="flex justify-end h-auto px-4 pt-4">
                    <div className="w-[150px] h-[200px] pb-2 rounded-lg bg-[#121212]">
                        <div>
                            <Image src="/assets/vt5.png" alt="image" className="w-[150px] h-[150px] rounded-lg" width={"150"} height={"150"}/>
                        </div>
                        <div>
                            <p className="text-white text-[12px] pt-[4px]">T-shirt $10</p>
                            <button className="text-[12px] py-[2px] mr-2 px-[10px] rounded-lg bg-[#D14318] bg-opacity-30">
                                Achater
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-2 px-4">
                    <span className="text-[12px] py-[5px] mr-2 px-[10px] rounded-lg bg-[#121212]">
                        Bonjour LA MANNE j'aimerais discuter le prix de 5 T-shirt noire
                    </span>
                </div>
                <div className="mt-2 px-4">
                    <span className="text-[12px] py-[5px] mr-2 px-[10px] rounded-lg bg-blue-500">
                        Bonjour cher client nous vendons un T-shirt à $2 quand c'est une vente en gros
                    </span>
                </div>
            </div>
            
            <div className="w-full absolute bottom-0 right-0 h-[80px] px-4">
                <div className="flex items-center mt-2 w-full rounded-lg bg-[#121212] h-[35px]">
                    <input
                        type="text"
                        className="w-[95%] outline-none mr-2 bg-transparent pl-2"
                        placeholder="Message" />
                    <IoPaperPlaneOutline className="text-white cursor-pointer" />
                </div>
            </div>
        </div>

    </div>
}