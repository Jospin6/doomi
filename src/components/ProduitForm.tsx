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
import useCurrentUser from '@/hooks/useCurrentUser';
import * as Yup from 'yup'

const ProduitForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory);
    const router = useRouter();
    const user_id = useCurrentUser();

    const initialValues = {
        titre: '',
        prix: '',
        description: '',
        devise: '',
        localisation: '',
        user_id: '',
        sub_categorie_produit_id: '',
        images: [],
        // VEHICULE
        modele: '',
        annee: 2010,
        kilometrage: '',
        type_vehicule: '',
        couleur: '',
        carburant: '',
        transmission: '',
        nombre_portes: '',
        nombre_places: '',
        plan_de_paiement: '',
        disponibilite: '',
        // IMMOBILIER
        type_de_bien: '',
        adresse: '',
        surface_habitable: '',
        nombre_chambres: 0,
        nombre_pieces: 0,
        // EMPLOI
        type_contrat: '',
        lieu: '',
        secteur_activite: '',
        niveau_experience: '',
        date_limite: '',
        site_web: '',
        formation_requise: '',
        etat_offre: '',
        // EVENEMENT
        date_evenement: '',
        // lieu: '',
        type_prix: '',
        // site_web: '',
        etat_evenement: '',
        // VETEMENT
        type: '',
        taille: '',
        matiere: '',
        // AUTRE PRODUITS
        etat: '',
        marque: '',
        // SERVICE
        statut: '',
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

            modele: Yup.string().when('sub_categorie_produit_id', ([sub_categorie_produit_id], 
                schema: Yup.StringSchema) => sub_categorie_produit_id === VIHICULE ? schema.required() : schema),
            annee: Yup.number().required('Année requise'),
            kilometrage: Yup.number().required('Kilométrage requis'),
            type_vehicule: Yup.string().required('Type de véhicule requis'),
            couleur: Yup.string().required('Couleur requise'),
            carburant: Yup.string().required('Carburant requis'),
            transmission: Yup.string().required('Transmission requise'),
            nombre_portes: Yup.number().required('Nombre de portes requis'),
            nombre_places: Yup.number().required('Nombre de places requis'),
            plan_de_paiement: Yup.string().required('Plan de paiement requis'),
            disponibilite: Yup.string().required('Disponibilité requise'),
            ...(subCategory === IMMOBILIER && {
                immobilier: Yup.object().shape({
                    type_de_bien: Yup.string().required('Type de bien requis'),
                    adresse: Yup.string().required('Adresse requise'),
                    surface_habitable: Yup.number().required('Surface habitable requise'),
                    nombre_chambres: Yup.number().required('Nombre de chambres requis'),
                    nombre_pieces: Yup.number().required('Nombre de pièces requis'),
                }),
            }),
            ...(subCategory === EMPLOI && {
                emploi: Yup.object().shape({
                    type_contrat: Yup.string().required('Type de contrat requis'),
                    lieu: Yup.string().required('Lieu requis'),
                    secteur_activite: Yup.string().required('Secteur d\'activité requis'),
                    niveau_experience: Yup.string().required('Niveau d\'expérience requis'),
                    date_limite: Yup.date().required('Date limite requise'),
                    site_web: Yup.string().url('URL invalide').required('Site web requis'),
                    formation_requise: Yup.string().required('Formation requise'),
                    etat_offre: Yup.string().required('État de l\'offre requis'),
                }),
            }),
            ...(subCategory === EVENEMENT && {
                evenement: Yup.object().shape({
                    date_evenement: Yup.date().required('Date de l\'événement requise'),
                    lieu: Yup.string().required('Lieu requis'),
                    type_prix: Yup.string().required('Type de prix requis'),
                    site_web: Yup.string().url('URL invalide').required('Site web requis'),
                    etat_evenement: Yup.string().required('État de l\'événement requis'),
                }),
            }),
            ...(subCategory === VETEMENT_CHAUSSURES && {
                vetement_chaussures: Yup.object().shape({
                    type: Yup.string().required('Type requis'),
                    taille: Yup.string().required('Taille requise'),
                    matiere: Yup.string().required('Matière requise'),
                }),
            }),
            ...(subCategory === AUTRE_PRODUIT && {
                autre_produit: Yup.object().shape({
                    etat: Yup.string().required('État requis'),
                    marque: Yup.string().required('Marque requise'),
                }),
            }),
            ...(subCategory === SERVICE && {
                service: Yup.object().shape({
                    statut: Yup.number().required('Statut requis'),
                }),
            })
        }
    )

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            // Créer un objet avec la structure attendue par l'API
            // const produitData: ProduitData = {
            //     produit: {
            //         user_id: Number(user_id),
            //         titre: values.titre,
            //         prix: values.prix,
            //         devise: values.devise,
            //         description: values.description,
            //         localisation: values.localisation,
            //         sub_categorie_produit_id: values.sub_categorie_produit_id,
            //         images: values.images, // Si vous avez des images
            //     },
            // };

            // Ajouter les données spécifiques à la sous-catégorie
            // switch (subCategory) {
            //     case VIHICULE:
            //         produitData.vehicule = {
            //             modele: values.modele || '',
            //             annee: values.annee || 0,
            //             kilometrage: values.kilometrage || '',
            //             type_vehicule: values.type_vehicule || '',
            //             couleur: values.couleur || '',
            //             carburant: values.carburant || '',
            //             transmission: values.transmission || '',
            //             nombre_portes: values.nombre_portes || '',
            //             nombre_places: values.nombre_places || '',
            //             plan_de_paiement: values.plan_de_paiement || '',
            //             disponibilite: values.disponibilite || '',
            //         };
            //         break;
            //     case IMMOBILIER:
            //         produitData.immobilier = {
            //             type_de_bien: values.type_de_bien || '',
            //             adresse: values.adresse || '',
            //             surface_habitable: values.surface_habitable || '',
            //             nombre_chambres: values.nombre_chambres || 0,
            //             nombre_pieces: values.nombre_pieces || 0,
            //         };
            //         break;
            //     case EMPLOI:
            //         produitData.emploi = {
            //             type_contrat: values.type_contrat || '',
            //             lieu: values.lieu || '',
            //             secteur_activite: values.secteur_activite || '',
            //             niveau_experience: values.niveau_experience || '',
            //             date_limite: values.date_limite || '',
            //             site_web: values.site_web || '',
            //             formation_requise: values.formation_requise || '',
            //             etat_offre: values.etat_offre || '',
            //         };
            //         break;
            //     case EVENEMENT:
            //         produitData.evenement = {
            //             date_evenement: values.date_evenement || '',
            //             lieu: values.lieu || '',
            //             type_prix: values.type_prix || '',
            //             site_web: values.site_web || '',
            //             etat_evenement: values.etat_evenement || '',
            //         };
            //         break;
            //     case VETEMENT_CHAUSSURES:
            //         produitData.vetement_chaussures = {
            //             type: values.type || '',
            //             taille: values.taille || '',
            //             matiere: values.matiere || '',
            //         };
            //         break;
            //     case AUTRE_PRODUIT:
            //         produitData.autre_produit = {
            //             etat: values.etat || '',
            //             marque: values.marque || '',
            //         };
            //         break;
            //     case SERVICE:
            //         produitData.service = {
            //             statut: values.statut || '',
            //         };
            //         break;
            //     default:
            //         break;
            // }

            try {
                // console.log("Données à envoyer: ", produitData);
                // await dispatch(postProduit(produitData)); // Envoyer les données à l'API
                resetForm(); // Réinitialiser le formulaire
                router.push("/"); // Rediriger après l'envoi
            } catch (error) {
                console.error("Erreur lors de l'envoi des données :", error);
            }
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