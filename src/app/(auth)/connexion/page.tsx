"use client"
import { useDispatch } from 'react-redux'
import { setIsTextHidden } from "@/features/navbarSlice"
import { Input } from '@/components/Input'
import { MainButton } from '@/components/MainButton'
import { Checkbox } from '@/components/Checkbox'
import Link from 'next/link'
export default function Connexion() {
    return <div className="z-10 bg-black absolute top-0 left-0 w-full h-[100vh] text-white">
        <div className='flex justify-center h-[45px] bg-[#121212] w-full'>
            <div className='text-white flex items-center'>
                <span className='text-xl font-[500] border-r-[2px] border-white pr-2'>doomi</span>
                <span className='text-[14px] pl-2'>Connexion</span>
            </div>
        </div>
        <div className='w-[350px] h-[400px] bg-[#121212] m-auto rounded-lg mt-[50px]  relative'>
            <div className='text-center mb-4'>
                <p className='text-2xl text-white py-4'>Bonjour !</p>
                <p className='text-[12px] text-gray-500'>Connectez-vous et profiter de nos services</p>
            </div>
            <div className='px-4'>
                <Input id='phone' className='mb-4' placeholder='Entrer votre nurero' label='Numero télé' type='text' />
                <Input id='password' placeholder='Entrer le mot de passe' label='Mot de passe' type='password' />
                <div>
                    <span className='text-[10px] text-blue-500'>mot de passe oublié</span>
                    <Checkbox id='stay' label='Rester connecté' />
                </div>
                <MainButton text="Connexion" className="w-full py-[5px]" />
            </div>
            <div className='absolute left-0 bottom-0 text-center pb-4 w-full text-[12px]'>
                <span className='text-gray-500'>Envie de nous rejoindre ? </span>
                <Link href={"/inscription"} className='text-blue-500'>Créer un compte</Link>
            </div>
        </div>
    </div>
}