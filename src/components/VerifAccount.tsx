import { useState } from "react"
import { confirmUser } from '@/features/users/userApi'
import { useDispatch } from 'react-redux'
import { AppDispatch } from "@/features/store"
import { CompteConfirmationData, userId } from '@/helpers/types'
import { useNavigate } from "react-router-dom"



export const VerifAccount = ({id}: userId) => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const [code, setCode] = useState(['', '', '', '', ''])
    const user_id = id; 

    const handleChange = (e: any, index: number) => {
        const value = e.target.value
        const newCode = [...code]
        newCode[index] = value
        if (value.length === 1 && index < 4) {
            document.getElementById(`input${index + 2}`)?.focus()
        }
        setCode(newCode)

        if (newCode.every(digit => digit.length === 1)) {
            handleSubmitConf();
        }
    }

    const handleSubmitConf = async () => {
        alert(`code de verification: ${code.join('')}`)
        const confirmation_code = code.join('')
        const userData: CompteConfirmationData = {
            user_id ,
            confirmation_code
        }
        const resultAction = await dispatch(confirmUser(userData));
            if (confirmUser.fulfilled.match(resultAction)) {
                alert('Inscription réussie !');
                navigate("/")
            } else {
                alert('Erreur lors de l\'inscription');
                console.error(resultAction.error);
            }
    }

    return <>
        <div className='text-center mb-4'>
            <p className='text-xl text-white pt-4'>Valider votre compte</p>
            <p className='text-[10px] text-gray-500'>
                Veuiller entrer le code de validation envoyé par message
            </p>
        </div>
        <div className="flex space-x-2 justify-center">
            {
                code.map((digit: string, index: number) => (
                    <input
                        key={index}
                        id={`input${index + 1}`}
                        maxLength={1}
                        value={digit}
                        placeholder="0"
                        onChange={(e) => handleChange(e, index)}
                        className="w-10 h-10 text-center text-2xl text-black border 
                    border-gray-300 rounded focus:outline-none focus:ring-blue-500"
                        type="number" />
                ))
            }
        </div>
        <div className="text-center mt-8">
            <p className="text-[14px] text-gray-300">Si vous n'avez rien reçu</p>
            <p className="text-[10px] text-gray-500 px-8">Veuiller patienter 30 secondes avant de pouvoir demander un autre</p>
        </div>
    </>
}