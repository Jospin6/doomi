"use client"
import { AuthComp } from "@/components/AuthComp"
import { Input } from "@/components/Input"
import { MainButton } from "@/components/MainButton"
import { SelectInput } from "@/components/SelectInput"
import { VerifAccount } from "@/components/VerifAccount"
import { useState } from "react";
import { AppDispatch } from '@/features/store'
import { useDispatch, useSelector } from 'react-redux'
import { siginUser } from '@/features/users/userApi'
import * as Yup from 'yup'
import { UserData } from '@/helpers/types'
import { useFormik } from "formik"
import { SubmitBtn } from "@/components/SubmitBtn"
import { setUser } from "@/features/users/userSlice"
import Select from 'react-select'
import { fetchCities, setSelectedCity } from '@/features/citySlice';
import { City } from '@/helpers/types';

export default function Inscription() {
    const dispatch = useDispatch<AppDispatch>()
    const { cities, selectedCity, pays, loading } = useSelector((state: any) => state.cities)
    const [error, setError] = useState<string | null>(null)

    const handleCityChange = (selectedOption: City | null) => {
        if (selectedOption) {
            dispatch(setSelectedCity(selectedOption));
        }
    }

    const handleInputChange = async (inputValue: string) => {
        if (inputValue) {
            dispatch(fetchCities(inputValue));
        }
    }

    const [step, setStep] = useState(1)
    const personel = "particulier"

    const initialValues = {
        username: '',
        email: '',
        phone_number: '',
        password: '',
        type_account: 'particulier',
        ville: '',
        pays: '',
        lat_lon: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Nom d\'utilisateur requis'),
        email: Yup.string().email('Email invalide').required('Email requis'),
        phone_number: Yup.string().required('Numéro de téléphone requis'),
        password: Yup.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères').required('Mot de passe requis'),
        ville: Yup.string().required('Ville requise'),
        pays: Yup.string().required('Pays requis'),
        lat_lon: Yup.string().required('Latitude et longitude requises'),
    });

    const handleContinue = () => {
        if (!selectedCity) {
            setError('Veuillez choisir une ville avant de continuer.');
        } else {
            continueStep
            console.log('Ville sélectionnée :', selectedCity);
        }
    };

    const continueStep = () => {
        if (step > 3) {
            setStep(1)
        }
        setStep(step + 1)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (data, { resetForm }) => {
            const userData: UserData = {
                user: {
                    username: data.username,
                    email: `${data.username}.${data.phone_number}@doomi.com`,
                    phone_number: data.phone_number,
                    password: data.password,
                    type_account: personel,
                },
                ville: selectedCity.ville,
                pays: selectedCity.pays,
                lat_lon: selectedCity.lat_lon,
            };
            resetForm()
            const resultAction = await dispatch(siginUser(userData));
            if (siginUser.fulfilled.match(resultAction)) {
                alert('Inscription réussie !');
                dispatch(setUser(resultAction));
            } else {
                alert('Erreur lors de l\'inscription');
                console.error(resultAction.error);
            }
        }
    })

    return <div>

        {step != 3 && (
            <AuthComp>
                <>
                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                        {step === 1 && (
                            <div className="px-4 pt-[80px]">
                                <Select
                                    options={cities}
                                    onChange={handleCityChange}
                                    onInputChange={handleInputChange}
                                    placeholder="Tapez le nom de votre ville..."
                                    isClearable
                                />
                                {loading && <p>Chargement...</p>}
                                {error && <p className="text-red-500">{error}</p>}
                                {selectedCity && (
                                    <h2 className="text-white">
                                        Ville: {selectedCity.ville}, Pays: {pays}
                                    </h2>
                                )}
                                <MainButton text="Continuer" className="w-full py-[5px] mt-4" onclick={handleContinue} />
                            </div>
                        )}
                        {step === 2 && (
                            <div className="px-4 pb-4">
                                <Input
                                    id='username'
                                    className='mb-4'
                                    placeholder='Entrer votre nom'
                                    label='Nom'
                                    fieldName="username"
                                    onchange={formik.handleChange}
                                    value={formik.values.username}
                                    inputBorder="border-gray-500"
                                    type='text' />
                                {formik.errors.username && formik.touched.username && (
                                    <div className="text-red-500">{formik.errors.username}</div>
                                )}
                                <Input
                                    id='phone'
                                    className='mb-4'
                                    placeholder='Entrer votre nurero'
                                    label='Numero télé'
                                    fieldName="phone_number"
                                    onchange={formik.handleChange}
                                    value={formik.values.phone_number}
                                    inputBorder="border-gray-500"
                                    type='text' />
                                {formik.errors.phone_number && formik.touched.phone_number && (
                                    <div className="text-red-500">{formik.errors.phone_number}</div>
                                )}
                                <Input
                                    id='password'
                                    placeholder='Entrer le mot de passe'
                                    label='Mot de passe'
                                    className='mb-4'
                                    fieldName="password"
                                    onchange={formik.handleChange}
                                    value={formik.values.password}
                                    inputBorder="border-gray-500"
                                    type='password' />
                                {formik.errors.password && formik.touched.password && (
                                    <div className="text-red-500">{formik.errors.password}</div>
                                )}
                                <p className="text-[10px] text-gray-500 mt-8">
                                    En m'inscrivant sur ce site je reconnais avoir lu et accepter les
                                    <span className="text-blue-500"> conditions générale de vent</span> et les
                                    <span className="text-blue-500"> conditions d'utilisation </span>
                                    et je confirme être âgé d'au moins 18 ans
                                </p>
                                <SubmitBtn text="S'inscrire" />
                            </div>
                        )}
                    </form>

                    {step === 3 && (
                        <VerifAccount id={3} />
                    )}
                </>
            </AuthComp>
        )}
    </div>
}