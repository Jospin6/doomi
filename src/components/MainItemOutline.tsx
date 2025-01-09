import { IoHeart, IoHeartOutline } from "react-icons/io5"
import Image from 'next/image';
import Link from "next/link";

type MainItemOutlineProps = {
    className: string,
    entreprise: string,
    description: string,
    poste: string
    image?: string
    typeContrat?: string
    salaireHoraire?: string,
    date?: string,
    categ?: string,
    index?: number
}

export const MainItemOutline = ({ className, categ, index, entreprise, description, poste, image, typeContrat, date, salaireHoraire }: MainItemOutlineProps) => {
    return <div className={`${className} shadow border-[1px] border-[#121212] h-auto rounded-lg mt-2 p-2 mr-2`}>
        <div className="text-[12px] text-white pb-[2px] flex justify-between">
            <Link href={`/ct/${categ}/${index}`}>
                <div className="flex">
                    <div className="w-[30px] h-[30px] rounded-lg bg-red-200 mr-2">
                        <Image src={image!} alt={poste} className="rounded-lg w-[30px] h-[30px]" width={30} height={30} />
                    </div>
                    <div>
                        <div> {entreprise} </div>
                        <div className="text-[10px] text-gray-500">
                            {description}
                        </div>
                    </div>
                </div>
            </Link>
            <IoHeart className="text-red-500" />
        </div>
        <div>
            <Link href={`/ct/${categ}/${index}`} className="text-white text-[14px] my-[5px]"> {poste} </Link>
            <div className="text-gray-500 text-[12px]">{typeContrat} {salaireHoraire}</div>
            <div className="text-[10px] my-[5px] w-[160px] rounded-full bg-green-500 py-[3px] text-center text-white">
                Recrute activement
            </div>
            <div className="text-gray-500 text-[12px]">
                <div>Bukavu</div>
                <div className="text-[10px] pt-3">{date}</div>
            </div>
        </div>
    </div>
}