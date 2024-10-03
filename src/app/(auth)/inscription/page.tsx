"use client"
import { AuthComp } from "@/components/AuthComp";
import { Input } from "@/components/Input";
import { MainButton } from "@/components/MainButton";
import { Radiobox } from "@/components/Radiobox";
import { SelectInput } from "@/components/SelectInput";
import { VerifAccount } from "@/components/VerifAccount";
import { useState } from "react";

export default function Inscription() {

    const [step, setStep] = useState(1)
    const [selectedOption, setSelectedOption] = useState('')
    const personel = "particulier"
    const entreprise = "entreprise"

    const continueStep = () => {
        if (step > 4) {
            setStep(1)
        }
        setStep(step + 1)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        setStep(2)
    }
    
    return <div>
        {step != 4 && (
            <AuthComp>
                {step === 1 && (
                    <div className="flex items-center h-full">
                        <div className="pl-6">
                            <div className='mb-4'>
                                <p className='text-xl text-white'>Bienvenue !</p>
                                <p className='text-[12px] text-gray-500'>Vous créez ce compte pour qui ? </p>
                            </div>
                            <div>
                                <Radiobox 
                                    id="personal" 
                                    label="Moi" 
                                    value={personel} 
                                    checked={selectedOption === personel}
                                    onchange={handleChange} />
                                <Radiobox 
                                    id="personal" 
                                    label="Mon entreprise" 
                                    value={entreprise} 
                                    checked={selectedOption === entreprise}
                                    onchange={handleChange} />
                            </div>
                            <div className="text-[10px] mt-3">
                                <p className="text-gray-500"> Nous choisir c'est choisir l'excelence</p>
                                <span className="text-blue-500">Savoir plus sur nous</span>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className="px-4 pt-[80px]">
                        <SelectInput id="address" borderColor="border-gray-400" label="Ville (ou village)" name="Address" />
                        <MainButton text="Continuer" className="w-full py-[5px] mt-4" onclick={continueStep} />
                    </div>
                )}
                {step === 3 && (
                    <div className="px-4 pb-4">
                        <Input
                            id='username'
                            className='mb-4'
                            placeholder='Entrer votre nom'
                            label='Nom'
                            inputBorder="border-gray-500"
                            type='text' />
                        <Input
                            id='phone'
                            className='mb-4'
                            placeholder='Entrer votre nurero'
                            label='Numero télé'
                            inputBorder="border-gray-500"
                            type='number' />
                        <Input
                            id='password'
                            placeholder='Entrer le mot de passe'
                            label='Mot de passe'
                            className='mb-4'
                            inputBorder="border-gray-500"
                            type='password' />
                        <Input
                            id='password_conf'
                            placeholder='Confirmer le mot de passe'
                            label='Mot de passe confirmation'
                            inputBorder="bg-[#121212]"
                            type='password' />
                        <p className="text-[10px] text-gray-500 mt-8">
                            En m'inscrivant sur ce site je reconnais avoir lu et accepter les
                            <span className="text-blue-500"> conditions générale de vent</span> et les
                            <span className="text-blue-500"> conditions d'utilisation </span>
                            et je confirme être âgé d'au moins 18 ans
                        </p>
                        <MainButton text="S'inscrire" className="w-full py-[5px] mt-4" />
                    </div>
                )}
            </AuthComp>
        )}

        {step === 4 && (
            <VerifAccount />
        )}
    </div>
}