import { CategoryItem } from "@/components/CategoryItem";
import { Input } from "@/components/Input";
import { SearchBar } from "@/components/SearchBar";
import { SelectInput } from "@/components/SelectInput";
import { TextArea } from "@/components/TextArea";

export default function Nouveau() {
    return <div className=" flex w-full text-white">
        <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
            <div className="border-b-[1px] border-[#121212]">
                <div className={`h-[44px] flex items-center justify-between px-4`}>
                    <CategoryItem title="Produits" isActive={true} />
                    <CategoryItem title="Services" />
                    <CategoryItem title="Evenements" />
                    <CategoryItem title="Emplois" />
                </div>
            </div>
            <div className="p-4 ">
                <div className="w-[60%]">
                    <Input
                        type="text"
                        id="title"
                        inputBorder="border-[#121212]"
                        placeholder="Entrer le titre"
                        label="Quel est le titre ?" />
                </div>
                <div className="w-[60%]">
                    <SelectInput id="categ" name="category" label="Choisissez une categorie" />
                    <SelectInput id="categ" name="category" label="Etat" />
                </div>
                <div className="w-[60%]">
                    <Input
                        type="text"
                        id="price"
                        inputBorder="border-[#121212]"
                        placeholder="Entrer le prix"
                        label="Quel est le prix ?" />
                </div>
                <TextArea id="descr" label="Description" />
                <div>
                    <button className="bg-blue-500 rounded-lg text-[14px] px-[10px] py-[3px]">Publier</button>
                </div>
            </div>
        </div>

        <div className="w-[30%]">

        </div>

    </div>
}