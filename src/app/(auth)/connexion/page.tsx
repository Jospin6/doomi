"use client"
import { Input } from '@/components/Input'
import { MainButton } from '@/components/MainButton'
import { Checkbox } from '@/components/Checkbox'
import Link from 'next/link'
import { AuthComp } from '@/components/AuthComp'
export default function Connexion() {
    return <AuthComp hTitle='Bonjour !' hSubTitle='Connectez-vous et profiter de nos services'>
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
    </AuthComp>
}