import React from 'react';
import { FormikProps, useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VehicleDetails from './sous_produits/VehicleDetails';
import ImmobilierDetails from './sous_produits/ImmobilierDetails';
import EmploiDetails from './sous_produits/EmploiDetails';
import EvenementDetails from './sous_produits/EvenementDetails';
import VetementChaussuresDetails from './sous_produits/VetementChaussuresDetails';
import AutreProduitDetails from './sous_produits/AutreProduitDetails';
import ServicesDetails from './sous_produits/ServicesDetails';
import { initialValues, validationSchema } from '@/helpers/produits'
import ProduitDetails from './sous_produits/produitDetails';
import { 
    VIHICULE,
    IMMOBILIER,
    EVENEMENT,
    EMPLOI,
    VETEMENT_CHAUSSURES,
    AUTRE_PRODUIT,
    SERVICE } from '@/helpers/constants'
import { AppDispatch, RootState } from '@/features/store';

const ProduitForm = () => {

    const dispatch = useDispatch<AppDispatch>();
    const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory)

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            //   try {
            //     const response = await axios.post('/api/produits', { produit: values });
            //     dispatch(setProduct(response.data));
            //     alert('Produit ajouté avec succès!');
            //   } catch (error) {
            //     console.error('Erreur lors de l\'ajout du produit:', error);
            //   }
        },
    });

    const getErrorMessage = (field: string, formik: FormikProps<any>): string | undefined => {
        const error = formik.errors[field];
        return typeof error === 'string' ? error : undefined;
    };

    return <>
        <form onSubmit={formik.handleSubmit}>

            <ProduitDetails formik={formik} getErrorMessage={getErrorMessage} />

            {subCategory === VIHICULE && <VehicleDetails formik={formik} getErrorMessage={getErrorMessage} />}

            {subCategory === IMMOBILIER && <ImmobilierDetails formik={formik} getErrorMessage={getErrorMessage} />}

            {subCategory === EMPLOI && <EmploiDetails formik={formik} getErrorMessage={getErrorMessage} />}

            {subCategory === EVENEMENT && <EvenementDetails formik={formik} getErrorMessage={getErrorMessage} />}

            {subCategory === VETEMENT_CHAUSSURES && <VetementChaussuresDetails formik={formik} getErrorMessage={getErrorMessage} />}

            {subCategory === AUTRE_PRODUIT && <AutreProduitDetails formik={formik} getErrorMessage={getErrorMessage} />}

            {subCategory === SERVICE && <ServicesDetails formik={formik} getErrorMessage={getErrorMessage} />}

            <div>
                <button type="submit" className="bg-blue-500 rounded-lg text-[14px] px-[10px] py-[3px]">Publier</button>
            </div>
        </form>
    </>
};

export default ProduitForm;