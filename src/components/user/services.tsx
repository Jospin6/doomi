import { IoPencil } from "react-icons/io5"
import Image from "next/image"

export const Services = () => {
    return <>
        <div className="w-full flex h-[80px] text-white mt-2">
            <div className="w-[80px] h-[80px] rounded-lg bg-red-400">
                <Image src="/assets/serv1.jpg" alt="image" className="w-full h-full rounded-lg" width={"80"} height={"80"} />
            </div>
            <div className="text-gray-400 w-full pt-4 flex justify-between">
                <div className="h-[40px] pl-2">
                    <div className="text-[14px]">MARIAGE CIVIL</div>
                    <div className="text-[12px]">pour vos mariages</div>
                </div>
                <IoPencil className="text-[14px]" />
            </div>
        </div>
        <div className="w-full flex h-[80px] text-white mt-2">
            <div className="w-[80px] h-[80px] rounded-lg bg-red-400">
                <Image src="/assets/serv2.jpg" alt="image" className="w-full h-full rounded-lg" width={"80"} height={"80"} />
            </div>
            <div className="text-gray-400 w-full pt-4 flex justify-between">
                <div className="h-[40px] pl-2">
                    <div className="text-[14px]">ANNIVERSAIRES</div>
                    <div className="text-[12px]">pour vos anniversaires</div>
                </div>
                <IoPencil className="text-[14px]" />
            </div>
        </div>
        <div className="w-full flex h-[80px] text-white mt-2">
            <div className="w-[80px] h-[80px] rounded-lg bg-red-400">
                <Image src="/assets/serv3.jpg" alt="image" className="w-full h-full rounded-lg" width={"80"} height={"80"} />
            </div>
            <div className="text-gray-400 w-full pt-4 flex justify-between">
                <div className="h-[40px] pl-2">
                    <div className="text-[14px]">DESIGNS</div>
                    <div className="text-[12px]">Save the date, carte de visite, ...</div>
                </div>
                <IoPencil className="text-[14px]" />
            </div>
        </div>
    </>
}