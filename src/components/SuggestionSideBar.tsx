import { HorizontalItem } from "./HorizontalItem"
import { MainButton } from "./MainButton"

export const SuggestionSideBar = () => {
    return <div className="pt-[60px] px-4">
        <div className="flex justify-center">
            <MainButton text="A la une" className="py-[3px] text-[12px] mr-4"/>
            <MainButton text="Emplois" className="py-[3px] text-[12px]"/>
        </div>
        <div className="px-4 flex justify-between my-6">
            <span className="text-white text-[14px] font-[500]">Suggestions</span>
            <span className="text-blue-600 text-[12px]">Voir tous</span>
        </div>
        <div>
            <HorizontalItem/>
            <HorizontalItem/>
        </div>
    </div>
}