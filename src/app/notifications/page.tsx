import { HorizontalItem } from "@/components/HorizontalItem";
import { SearchBar } from "@/components/SearchBar";
import { SecondButton } from "@/components/SecondButton";

export default function Notifications() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <SearchBar isHidden={true} />
            <div className="px-4 py-2">
                <SecondButton text="tous"/>
                <SecondButton text="ventes"/>
                <SecondButton text="achants"/>
                <SecondButton text="emplois"/>
                <SecondButton text="services"/>
            </div>
            <div className="px-[90px]">
                <HorizontalItem titre="Location voiture" image="/assets/vh1.png" prix="$150" location="Bukavu"/>
                <HorizontalItem titre="Maison à louer" image="/assets/msn2.png" prix="$200" location="Bukavu"/>
                <HorizontalItem titre="Tricot" image="/assets/vt4.png" prix="$10" location="Bukavu"/>
                <HorizontalItem titre="T-shirt" image="/assets/vt5.png" prix="$20" location="Bukavu"/>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}