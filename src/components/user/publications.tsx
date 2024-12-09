import { MainItemOutline } from "../MainItemOutline"
import { ProductsByCategory } from "../ProductsByCategory"
import { SecondButton } from "../SecondButton"

export const Publications = () => {
    return <>
        <div className="py-2 px-4">
            <SecondButton text="Tous" />
            <SecondButton text="Vetements" />
            <SecondButton text="Immobiliers" />
            <SecondButton text="Béaute" />
        </div>

        <div className="px-[90px]">
            <MainItemOutline className="w-full" entreprise={""} description={""} poste={""} />
        </div>

        <ProductsByCategory category={undefined} />

    </>
}