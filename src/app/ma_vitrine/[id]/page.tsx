"use client"
import { MainItem } from "@/components/MainItem";
import { MainItemOutline } from "@/components/MainItemOutline";
import { ProductsByCategory } from "@/components/ProductsByCategory";
import { SecondButton } from "@/components/SecondButton";
import { VitrineHeader } from "@/components/VitrineHeader";
import { VitrineIntro } from "@/components/VitrineIntro";
import { IoPencil, IoStar, IoStarOutline } from "react-icons/io5";
import SalesChart from '@/components/SalesChart';
import ServicesChart from '@/components/ServicesChart';
import Image from "next/image"

export default function MaVitrine() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <VitrineHeader />
            {/* <div className="py-2 px-4">
                <SecondButton text="Tous" />
                <SecondButton text="Vetements" />
                <SecondButton text="Immobiliers" />
                <SecondButton text="Béaute" />
            </div> */}
            {/* <div className="px-[90px]">
                <MainItemOutline className="w-full" />
            </div> */}

            <div className="flex flex-wrap px-[90px]">
                {/* <ProductsByCategory titre="Vêtements">
                    <MainItem titre="tricot pour bébé" vendeur="LA MANNE" prix="FC6000" image="/assets/vt3.png" location="Bukavu" />
                    <MainItem titre="T-shirt" vendeur="LA MANNE" prix="$3" image="/assets/vt5.png" location="Bukavu" />
                    <MainItem titre="tricot" vendeur="LA MANNE" prix="$10" image="/assets/vt4.png" location="Bukavu" />
                </ProductsByCategory>
                <ProductsByCategory titre="Beauté">
                    <MainItem titre="Mascara" vendeur="LA MANNE" prix="FC2000" image="/assets/beaute/mac1.png" location="Bukavu" />
                    <MainItem titre="Pomme de beauté" vendeur="LA MANNE" prix="$2" image="/assets/beaute/mac2.png" location="Bukavu" />
                    <MainItem titre="Pomade" vendeur="LA MANNE" prix="$1.3" image="/assets/beaute/mac4.png" location="Bukavu" />
                </ProductsByCategory> */}
                {/* <div className="shadow border-[1px] text-[12px] text-gray-400 border-[#121212] w-full h-auto rounded-lg mt-2 p-2">
                    <div>Vendredi 18 octobre 2024 </div>
                    <p>Vendeur: LA MANNE</p>
                    <p>Article: tricot pour bébé</p>
                    <p>prix: $10</p>
                    <div className="text-center text-gray-500 flex pl-[45px]">
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                </div>
                <div className="shadow border-[1px] text-[12px] text-gray-400 border-[#121212] w-full h-auto rounded-lg mt-2 p-2">
                    <div>Vendredi 18 octobre 2024 </div>
                    <p>Vendeur: Safi cuisine</p>
                    <p>Serice de cuisine</p>
                    <p>prix: $23</p>
                    <div className="text-center text-gray-500 flex pl-[45px]">
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStarOutline />
                    </div>
                </div>
                <div className="shadow border-[1px] text-[12px] text-gray-400 border-[#121212] w-full h-auto rounded-lg mt-2 p-2">
                    <div>Jeudi 17 octobre 2024 </div>
                    <p>Client: Diane</p>
                    <p>Article: Mascara</p>
                    <p>prix: FC2000</p>
                    <div className="text-center text-gray-500 flex pl-[45px]">
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStar className="text-yellow-500" />
                        <IoStarOutline />
                    </div>
                </div> */}
                {/* <div className="w-full flex h-[80px] text-white mt-2">
                    <div className="w-[80px] h-[80px] rounded-lg bg-red-400">
                        <Image src="/assets/serv1.jpg" alt="image" className="w-full h-full rounded-lg" width={"80"} height={"80"}/>
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
                    <Image src="/assets/serv2.jpg" alt="image" className="w-full h-full rounded-lg" width={"80"} height={"80"}/>
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
                    <Image src="/assets/serv3.jpg" alt="image" className="w-full h-full rounded-lg" width={"80"} height={"80"}/>
                    </div>
                    <div className="text-gray-400 w-full pt-4 flex justify-between">
                        <div className="h-[40px] pl-2">
                            <div className="text-[14px]">DESIGNS</div>
                            <div className="text-[12px]">Save the date, carte de visite, ...</div>
                        </div>
                        <IoPencil className="text-[14px]" />
                    </div>
                </div> */}
                {/* <div>
                    <p className="text-gray-400 pb-4 pt-2">
                    Bienvenue chez Bahati Photographie, où chaque image raconte une histoire unique. 
                    Je suis passionné par la capture des moments précieux de la vie, qu'il s'agisse de 
                    , de portraits ou d'événements spéciaux. Mon objectif est de créer des souvenirs 
                    intemporels qui vous feront sourire à chaque fois que vous les regardez.
                    </p>

                    <p className="text-gray-400 pb-4 pt-2">
                    Avec une approche artistique et un souci du détail, je m'efforce de saisir l'essence 
                    de chaque instant. Chaque séance photo est une collaboration, où je m'assure de comprendre 
                    vos besoins et vos désirs pour créer des images qui vous ressemblent.
                    </p>

                    <p className="text-gray-400 pb-4 pt-2">
                    Je suis situé à Kadutu, au carrefour du quartier Kasali. Que vous soyez en quête d'une 
                    séance en extérieur, d'un studio photo ou d'une couverture d'événements, je suis là pour 
                    vous accompagner à chaque étape. Ensemble, nous créerons des souvenirs qui dureront toute 
                    une vie.
                    </p>

                </div> */}
                {/* <SalesChart /> */}
                <ServicesChart />
            </div>
        </div>

        <div className="w-[30%] px-3 pt-[100px]">
            <VitrineIntro />
        </div>
    </div>
}