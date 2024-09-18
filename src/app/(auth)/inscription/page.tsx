import { AuthComp } from "@/components/AuthComp";
import { Radiobox } from "@/components/Radiobox";

export default function Inscription() {
    return <AuthComp>
        <div className="flex items-center h-full">
            <div className="pl-6">
                <div className='mb-4'>
                    <p className='text-xl text-white'>Bienvenue !</p>
                    <p className='text-[12px] text-gray-500'>Vous créez ce compte pour qui ? </p>
                </div>
                <div>
                    <Radiobox id="personal" label="Moi" />
                    <Radiobox id="personal" label="Mon entreprise" />
                </div>
                <div className="text-[10px] mt-3">
                    <p className="text-gray-500"> Nous choisir c'est choisir l'excelence</p>
                    <span className="text-blue-500">Savoir plus sur nous</span>
                </div>
            </div>
        </div>
    </AuthComp>
}