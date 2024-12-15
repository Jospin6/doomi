"use client";
import React from 'react';
import { FormikProps, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import VehicleDetails from './sous_produits/VehicleDetails';
import ImmobilierDetails from './sous_produits/ImmobilierDetails';
import EmploiDetails from './sous_produits/EmploiDetails';
import EvenementDetails from './sous_produits/EvenementDetails';
import VetementChaussuresDetails from './sous_produits/VetementChaussuresDetails';
import AutreProduitDetails from './sous_produits/AutreProduitDetails';
import ServicesDetails from './sous_produits/ServicesDetails';
import { initialValues, validationSchema } from '@/helpers/produits';
import { useRouter } from 'next/navigation';
import { ProduitData } from '@/helpers/types'
import {
    VIHICULE,
    IMMOBILIER,
    EVENEMENT,
    EMPLOI,
    VETEMENT_CHAUSSURES,
    AUTRE_PRODUIT,
    SERVICE
} from '@/helpers/constants';
import { AppDispatch, RootState } from '@/features/store';
import ProduitDetails from './sous_produits/ProduitDetails';
import { postProduit } from '@/features/produits/produitsApi';

const ProduitForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory);
    const router = useRouter();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            // Créer un objet avec la structure attendue par l'API
            const produitData: ProduitData = {
                produit: {
                    user_id: values.produit.user_id,
                    titre: values.produit.titre,
                    prix: values.produit.prix,
                    devise: values.produit.devise,
                    description: values.produit.description,
                    localisation: values.produit.localisation,
                    sub_categorie_produit_id: values.produit.sub_categorie_produit_id,
                    images: values.produit.images, // Si vous avez des images
                },
            };

            // Ajouter les données spécifiques à la sous-catégorie
            switch (subCategory) {
                case VIHICULE:
                    produitData.vehicule = {
                        modele: values.vehicule.modele,
                        annee: values.vehicule.annee,
                        kilometrage: values.vehicule.kilometrage,
                        type_vehicule: values.vehicule.type_vehicule,
                        couleur: values.vehicule.couleur,
                        carburant: values.vehicule.carburant,
                        transmission: values.vehicule.transmission,
                        nombre_portes: values.vehicule.nombre_portes,
                        nombre_places: values.vehicule.nombre_places,
                        plan_de_paiement: values.vehicule.plan_de_paiement,
                        disponibilite: values.vehicule.disponibilite,
                    };
                    break;
                case IMMOBILIER:
                    produitData.immobilier = {
                        type_de_bien: values.immobilier.type_de_bien,
                        adresse: values.immobilier.adresse,
                        surface_habitable: values.immobilier.surface_habitable,
                        nombre_chambres: values.immobilier.nombre_chambres,
                        nombre_pieces: values.immobilier.nombre_pieces,
                    };
                    break;
                case EMPLOI:
                    produitData.emploi = {
                        type_contrat: values.emploi.type_contrat,
                        lieu: values.emploi.lieu,
                        secteur_activite: values.emploi.secteur_activite,
                        niveau_experience: values.emploi.niveau_experience,
                        date_limite: values.emploi.date_limite,
                        site_web: values.emploi.site_web,
                        formation_requise: values.emploi.formation_requise,
                        etat_offre: values.emploi.etat_offre,
                    };
                    break;
                case EVENEMENT:
                    produitData.evenement = {
                        date_evenement: values.evenement.date_evenement,
                        lieu: values.evenement.lieu,
                        type_prix: values.evenement.type_prix,
                        site_web: values.evenement.site_web,
                        etat_evenement: values.evenement.etat_evenement,
                    };
                    break;
                case VETEMENT_CHAUSSURES:
                    produitData.vetement_chaussures = {
                        type: values.vetement_chaussures.type,
                        taille: values.vetement_chaussures.taille,
                        matiere: values.vetement_chaussures.matiere,
                    };
                    break;
                case AUTRE_PRODUIT:
                    produitData.autre_produit = {
                        etat: values.autre_produit.etat,
                        marque: values.autre_produit.marque,
                    };
                    break;
                case SERVICE:
                    produitData.service = {
                        statut: values.service.statut,
                    };
                    break;
                default:
                    break;
            }

            console.log("Données à envoyer: ", produitData);
            dispatch(postProduit(produitData));
            resetForm();
            router.push("/");
        },
    });

    const getErrorMessage = (field: string, formik: FormikProps<any>): string | undefined => {
        const error = formik.errors[field];
        return typeof error === 'string' ? error : undefined;
    };

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