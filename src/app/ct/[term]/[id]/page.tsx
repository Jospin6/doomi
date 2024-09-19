import { MainItem } from "@/components/MainItem"
import { ProductsByCategory } from "@/components/ProductsByCategory"
import { SearchBar } from "@/components/SearchBar"
import { IoHeartOutline, IoShareOutline, IoShareSocialOutline, IoStar, IoStarOutline } from "react-icons/io5"

interface ShowProps {
    params: {
        term: string,
        id: number,
    }
}

export default function Show({ params }: ShowProps) {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="px-[50px] pt-4">
                <div className="rounded-lg h-[350px] bg-green-700"></div>
                <div className="text-xl py-4 text-white flex justify-between">
                    <span className="font-[500]">Nom du produit</span>
                    <div className="text-[16px] flex">
                        <IoShareSocialOutline className="mr-2" />
                        <IoHeartOutline />
                    </div>
                </div>
                <div className="text-[14px] text-gray-300 mb-4">
                    Une petite desciption des criteres
                </div>
                <div className="text-xl font-[500] mb-2 text-gray-300">200$</div>
                <div className="text-[12px] text-gray-500">
                    Ajourd'hui 14h
                </div>
                <div className="flex justify-between items-center pt-4">
                    <div>
                        <div className="flex h-[50px] items-center">
                            <div className="w-[40px] h-[40px] rounded-full bg-red-300 mr-2"></div>
                            <div className="text-[14px]">User name</div>
                        </div>
                        <div className="text-center text-gray-500 flex pl-[45px]">
                            <IoStar className="text-yellow-500"/>
                            <IoStar className="text-yellow-500"/>
                            <IoStar className="text-yellow-500"/>
                            <IoStarOutline/>
                            <IoStarOutline/>
                        </div>
                    </div>
                    <div>
                        <button className="text-[12px] py-[5px] mr-2 px-[10px] rounded-lg bg-[#D14318] bg-opacity-30">
                            Réserver
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
                    <p className="text-[12px] text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Laborum ratione quaerat qui incidunt quibusdam inventore
                        necessitatibus cumque explicabo cum corporis, libero quas,
                        a, quisquam minus officiis labore est iure quia?
                    </p>
                </div>
                <div className="mt-6">
                    <h2 className="text-[16px] text-gray-300">Consulter aussi</h2>
                    <div className="w-full flex h-auto pb-2">
                        <MainItem />
                        <MainItem />
                        <MainItem />
                    </div>
                </div>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}