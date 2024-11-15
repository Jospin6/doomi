"use client"
import { Input } from '@/components/Input'
import { Checkbox } from '@/components/Checkbox'
import Link from 'next/link'
import { AuthComp } from '@/components/AuthComp'
import { loginUser } from '@/features/users/userApi'
import { AppDispatch } from '@/features/store'
import { useDispatch } from 'react-redux'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { UserData } from '@/helpers/types'
import { SubmitBtn } from '@/components/SubmitBtn'
import { useNavigate } from "react-router-dom"


export default function Connexion() {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Email invalide').required('Email requis'),
        password: Yup.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères').required('Mot de passe requis')
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (data, { resetForm }) => {
            const userData: UserData = {
                user: {
                    email: data.email,
                    password: data.password,
                }
            };
            resetForm()
            const resultAction = await dispatch(loginUser(userData));
            if (loginUser.fulfilled.match(resultAction)) {
                alert('Connexion réussie !');
                navigate("/")
            } else {
                alert('Erreur lors de la connexion');
                console.error(resultAction.error);
            }
        }
    })


    return <AuthComp hTitle='Bonjour !' hSubTitle='Connectez-vous et profiter de nos services'>
        <div className='px-4'>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <Input
                    id='phone'
                    inputBorder="border-gray-500"
                    className='mb-4'
                    placeholder='Entrer votre nurero'
                    fieldName="email"
                    onchange={formik.handleChange}
                    value={formik.values.email}
                    label='Numero télé'
                    type='text' />
                {formik.errors.email && formik.touched.email && (
                    <div className="text-red-500">{formik.errors.email}</div>
                )}
                <Input
                    id='password'
                    inputBorder="border-gray-500"
                    placeholder='Entrer le mot de passe'
                    fieldName="password"
                    onchange={formik.handleChange}
                    value={formik.values.password}
                    label='Mot de passe'
                    type='password' />
                {formik.errors.password && formik.touched.password && (
                    <div className="text-red-500">{formik.errors.password}</div>
                )}
                <div>
                    <span className='text-[10px] text-blue-500'>mot de passe oublié</span>
                    <Checkbox id='stay' label='Rester connecté' />
                </div>
                <SubmitBtn text="Connexion"/>
            </form>
        </div>
        <div className='absolute left-0 bottom-0 text-center pb-4 w-full text-[12px]'>
            <span className='text-gray-500'>Envie de nous rejoindre ? </span>
            <Link href={"/inscription"} className='text-blue-500'>Créer un compte</Link>
        </div>
    </AuthComp>
}