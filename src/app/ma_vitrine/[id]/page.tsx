"use client"
import { Achats } from "@/components/user/achats";
import { Apropos } from "@/components/user/apropos";
import { Publications } from "@/components/user/publications";
import { Services } from "@/components/user/services";
import { Ventes } from "@/components/user/ventes";
import { VitrineHeader } from "@/components/VitrineHeader";
import { VitrineIntro } from "@/components/VitrineIntro";
import { RootState } from "@/features/store";
import { categoriItems, PUBLICATIONS, SERVICES, ACHATS, VENTES, APROPOS } from "@/helpers/vitrine"
import { useSelector } from "react-redux";

export default function MaVitrine() {
    const { index } = useSelector((state: RootState) => state.vitrineSubNavbar)

    const renderActiveComponent = () => {
        switch (categoriItems[index!]) {
            case PUBLICATIONS:
                return <Publications />;
            case SERVICES:
                return <Services />;
            case ACHATS:
                return <Achats />;
            case VENTES:
                return <Ventes />;
            case APROPOS:
                return <Apropos />;
            default:
                return null;
        }
    }

    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <VitrineHeader />

            <div className="flex flex-wrap px-[90px]">

                {renderActiveComponent()}

                {/* <SalesChart /> */}
                {/* <ServicesChart /> */}
            </div>
        </div>

        <div className="w-[30%] px-3 pt-[100px]">
            <VitrineIntro />
        </div>
    </div>
}