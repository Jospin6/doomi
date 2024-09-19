import { MainItem } from "@/components/MainItem";
import { MainItemOutline } from "@/components/MainItemOutline";
import { SecondButton } from "@/components/SecondButton";
import { VitrineHeader } from "@/components/VitrineHeader";
import { VitrineIntro } from "@/components/VitrineIntro";

export default function MaVitrine() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <VitrineHeader/>
            <div className="py-2 px-4">
                <SecondButton text="Tous"/>
                <SecondButton text="Vetements"/>
                <SecondButton text="Immobiliers"/>
                <SecondButton text="Béaute"/>
            </div>
            <div className="px-[90px]">
                <MainItemOutline className="w-full" />
            </div>
            <div className="flex flex-wrap px-[90px]">
                <MainItem />
                <MainItem />
                <MainItem />
                <MainItem />
                <MainItem />
            </div>
        </div>

        <div className="w-[30%] px-3 pt-[100px]">
            <VitrineIntro/>
        </div>
    </div>
}