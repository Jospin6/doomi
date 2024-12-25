"use client";
import React, { useEffect, useState } from 'react';
import { FormikProps, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import VehicleDetails from './sous_produits/VehicleDetails';
import ImmobilierDetails from './sous_produits/ImmobilierDetails';
import EmploiDetails from './sous_produits/EmploiDetails';
import EvenementDetails from './sous_produits/EvenementDetails';
import VetementChaussuresDetails from './sous_produits/VetementChaussuresDetails';
import AutreProduitDetails from './sous_produits/AutreProduitDetails';
import ServicesDetails from './sous_produits/ServicesDetails';
import { useRouter } from 'next/navigation';
import {
    VIHICULE,
    IMMOBILIER,
    EVENEMENT,
    EMPLOI,
    VETEMENT_CHAUSSURES,
    AUTRE_PRODUIT,
    SERVICE,
    produitVehicule,
    produitImmobilier,
    produitEmploi,
    produitEvenement,
    produitVetement,
    produitAutres,
    produitService
} from '@/helpers/constants';
import { AppDispatch, RootState } from '@/features/store';
import ProduitDetails from './sous_produits/ProduitDetails';
import { postProduit } from '@/features/produits/produitsApi';
import useCurrentUser from '@/hooks/useCurrentUser';
import * as Yup from 'yup'
import { ProduitData } from '@/helpers/types';

const ProduitForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory);
    const router = useRouter();
    const user_id = useCurrentUser();

    const [currentCategory, setCurrentCategory] = useState<string>('')

    const handleCurrentCategory = (value: string) => {
        setCurrentCategory(value)
    }

    useEffect(() => {

        const handeSubProduitChange = () => {
            switch (subCategory) {
                case VIHICULE:
                    handleCurrentCategory(produitVehicule)
                    break;
                case IMMOBILIER:
                    handleCurrentCategory(produitImmobilier)
                    break;
                case EVENEMENT:
                    handleCurrentCategory(produitEvenement)
                    break;
                case EMPLOI:
                    handleCurrentCategory(produitEmploi)
                    break;
                case VETEMENT_CHAUSSURES:
                    handleCurrentCategory(produitVetement)
                    break;
                case AUTRE_PRODUIT:
                    handleCurrentCategory(produitAutres)
                    break;
                case SERVICE:
                    handleCurrentCategory(produitService)
                    break;
                default:
                    break;
            }
        }

        handeSubProduitChange()
    }, [subCategory])

    

    const initialValues = {
        titre: '',
        prix: '',
        description: '',
        devise: '',
        localisation: '',
        user_id: 0,
        sub_categorie_produit_id: '',
        images: [] as File[],
    }

    const validationSchema = Yup.object().shape(
        {
            titre: Yup.string().required('Titre requis'),
            prix: Yup.number().required('Prix requis').positive(),
            description: Yup.string().required('Description requise'),
            devise: Yup.string().required('Devise requise'),
            localisation: Yup.string().required('Localisation requise'),
            sub_categorie_produit_id: Yup.number().required('Sous-catégorie requise'),
            images: Yup.array().required('Images requises'),
        }
    )


    const formik = useFormik<ProduitData>({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const formData = new FormData()
            const produit = {
                user_id: Number(user_id?.id),
                titre: values.titre,
                prix: values.prix,
                devise: values.devise,
                description: values.description,
                localisation: values.localisation,
                sub_categorie_produit_id: values.sub_categorie_produit_id,
            }
            values.images.forEach((image) => {
                formData.append('images[]', image);
            })

            const produitJson = JSON.stringify(produit)
            formData.append('produit', produitJson)

            const categoryAttributes = {
                [produitVehicule]: {
                    modele: values.modele,
                    annee: values.annee,
                    kilometrage: values.kilometrage,
                    type_vehicule: values.type_vehicule,
                    couleur: values.couleur,
                    carburant: values.carburant,
                    transmission: values.transmission,
                    nombre_portes: values.nombre_portes,
                    nombre_places: values.nombre_places,
                    plan_de_paiement: values.plan_de_paiement,
                    disponibilite: values.disponibilite,
                },
                [produitImmobilier]: {
                    type_de_bien: values.type_de_bien,
                    adresse: values.adresse,
                    surface_habitable: values.surface_habitable,
                    nombre_chambres: values.nombre_chambres,
                    nombre_pieces: values.nombre_pieces,
                },
                [produitEmploi]: {
                    type_contrat: values.type_contrat,
                    lieu: values.lieu,
                    secteur_activite: values.secteur_activite,
                    niveau_experience: values.niveau_experience,
                    date_limite: values.date_limite,
                    site_web: values.site_web,
                    formation_requise: values.formation_requise,
                    etat_offre: values.etat_offre,
                },
                [produitEvenement]: {
                    date_evenement: values.date_evenement,
                    lieu: values.lieu,
                    type_prix: values.type_prix,
                    site_web: values.site_web,
                    etat_evenement: values.etat_evenement,
                },
                [produitVetement]: {
                    type_vetement: values.type_vetement,
                    taille: values.taille,
                    matiere: values.matiere,
                },
                [produitAutres]: {
                    etat: values.etat,
                    marque: values.marque,
                },
                [produitService]: {
                    statut: values.statut,
                }
            }

            if (categoryAttributes[currentCategory]) {
                const subProduitJson = JSON.stringify(categoryAttributes[currentCategory])
                formData.append(`${currentCategory}`, subProduitJson)
            }

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`)
            })

            dispatch(postProduit(formData));
            resetForm();
            router.push("/");
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <ProduitDetails formik={formik} />

                {subCategory === VIHICULE && <VehicleDetails formik={formik} />}
                {subCategory === IMMOBILIER && <ImmobilierDetails formik={formik} />}
                {subCategory === EMPLOI && <EmploiDetails formik={formik} />}
                {subCategory === EVENEMENT && <EvenementDetails formik={formik} />}
                {subCategory === VETEMENT_CHAUSSURES && <VetementChaussuresDetails formik={formik} />}
                {subCategory === AUTRE_PRODUIT && <AutreProduitDetails formik={formik} />}
                {subCategory === SERVICE && <ServicesDetails formik={formik} />}

                <div>
                    <button type="submit" className="bg-blue-500 rounded-lg text-[14px] px-[10px] py-[3px]">Publier</button>
                </div>
            </form>
        </>
    );
};

export default ProduitForm;