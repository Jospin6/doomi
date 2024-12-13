"use client"
import { AuthComp } from "@/components/AuthComp"
import { Input } from "@/components/Input"
import { MainButton } from "@/components/MainButton"
import { SelectInput } from "@/components/SelectInput"
import { VerifAccount } from "@/components/VerifAccount"
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from '@/features/store'
import { useDispatch, useSelector } from 'react-redux'
import { siginUser } from '@/features/users/userApi'
import * as Yup from 'yup'
import { UserData } from '@/helpers/types'
import { useFormik } from "formik"
import { SubmitBtn } from "@/components/SubmitBtn"
import { setUser } from "@/features/users/userSlice"
import Select, { components } from 'react-select'
import { fetchCities, setSelectedCity } from '@/features/citySlice';
import { City } from '@/helpers/types';
import Image from "next/image"
import { useRouter } from 'next/navigation';

// const CustomOption = (props: any) => {
//     const { data } = props;
//     return (
//         <components.Option {...props}>
//             <Image src={data.flag} alt={`${data.pays} flag`} className="mr-2"  width={"30"} height={"30"}/>
//             {data.label}
//         </components.Option>
//     );
// };

export default function Inscription() {
    const dispatch = useDispatch<AppDispatch>();
    const selectedCity = useSelector((state: RootState) => state.cities.selectedCity); // Récupération de la ville sélectionnée depuis Redux
    const cities = useSelector((state: RootState) => state.cities.cities); // Récupération des villes depuis Redux
    const loading = useSelector((state: RootState) => state.cities.loading); // État de chargement
    const error = useSelector((state: RootState) => state.cities.error); // État d'erreur
    const [inputValue, setInputValue] = useState<string>('');
    const router = useRouter()

    // Utilisation de useEffect pour appeler la thunk lors du changement d'inputValue
    useEffect(() => {
        if (inputValue) {
            dispatch(fetchCities(inputValue)); // Appel de la thunk
        }
    }, [inputValue, dispatch]);

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    const handleCityChange = (selectedOption: City | null) => {
        dispatch(setSelectedCity(selectedOption)); // Met à jour la ville sélectionnée dans Redux
        if (selectedOption) {
            console.log('Ville sélectionnée:', selectedOption);
        }
    };

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            borderColor: 'lightgray',
            boxShadow: 'none',
            '&:hover': {
                borderColor: 'blue',
            },
        }),
        menu: (provided: any) => ({
            ...provided,
            zIndex: 9999,
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'blue' : state.isFocused ? 'lightgray' : 'white',
            color: state.isSelected ? 'white' : 'black',
        }),
    };




    const [step, setStep] = useState(1)

    const initialValues = {
        username: '',
        phone_number: '',
        password: ''
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Nom d\'utilisateur requis'),
        phone_number: Yup.string().required('Numéro de téléphone requis'),
        password: Yup.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères').required('Mot de passe requis'),
    });

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
                username: data.username,
                phone_number: data.phone_number,
                password: data.password,
                ville: selectedCity?.ville ?? "",
                pays: selectedCity?.pays ?? "",
                lat_lon: selectedCity?.lat_lon ?? "",
            };

            try {
                const resultAction = await dispatch(siginUser(userData));
                if (siginUser.fulfilled.match(resultAction)) {
                    dispatch(setUser(resultAction));
                    router.push("/")
                } else {
                    console.error(resultAction.error);
                }
            } catch (error) {
                console.error("Erreur lors de la soumission :", error);
            }
            resetForm();
        }
    })

    return <div>

        {step != 3 && (
            <AuthComp>
                <>
                    {step === 1 && (
                        <div className="px-4 pt-[80px]">
                            <Select
                                options={cities}
                                onChange={handleCityChange}
                                onInputChange={handleInputChange}
                                placeholder="Tapez le nom de votre ville..."
                                isClearable
                                isLoading={loading}
                                styles={customStyles}
                            />
                            {error && <p className="text-red-500">{error}</p>}

                            {/* Affichage des détails de la ville sélectionnée */}
                            {/* {selectedCity && (
                                    <div className="mt-4 p-4 border rounded shadow text-white">
                                        <h3 className="font-bold">Détails de la ville :</h3>
                                        <p><strong>Ville :</strong> {selectedCity.ville}</p>
                                        <p><strong>Pays :</strong> {selectedCity.pays} (Code: {selectedCity.countryCode})</p>
                                        <p><strong>Coordonnées :</strong> {selectedCity.lat_lon}</p>
                                    </div>
                                )} */}
                            <MainButton text="Continuer" className="w-full py-[5px] mt-4" onclick={continueStep} />
                        </div>
                    )}
                    {step === 2 && (
                        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
                        </form>
                    )}


                    {step === 3 && (
                        <VerifAccount id={3} />
                    )}
                </>
            </AuthComp>
        )}
    </div>
}