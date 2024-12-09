import React from 'react';
import { FormikProps, useFormik } from 'formik';
import { Input } from '../Input';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/store';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {postSubCategories} from '@/features/sub_categories/subCategoriesApi'

const SubCategoryDetails = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const initialValues = {
        categorie_produit_id: "",
        titre: "",
        description: "",
    }

    const validationSchema = Yup.object({
        categorie_produit_id: Yup.number().required("Selectionner une categorie!"),
        titre: Yup.string().required("Le titre du categorie est requis"),
        description: Yup.string().required("La description du categorie est requis")
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            dispatch(postSubCategories(data))
            resetForm()
            navigate("/admin")
        }
    })

    const getErrorMessage = (field: string, formik: FormikProps<any>): string | undefined => {
        const error = formik.errors[field];
        return typeof error === 'string' ? error : undefined;
    };


    return <>
        <form onSubmit={formik.handleSubmit}>
        <div>
            <label>Sous-catégorie</label>
            <select
                name="sub_categorie_produit_id"
                onChange={formik.handleChange}
                value={formik.values.categorie_produit_id}
            >
                <option value="">Sélectionnez une sous-catégorie</option>
                <option value="1">Véhicules</option>
                <option value="2">Immobilier</option>
                <option value="3">Emplois</option>
                <option value="4">Événements</option>
                <option value="5">Vêtements/Chaussures</option>
                <option value="6">Autres Produits</option>
                <option value="7">Services</option>
            </select>
            {getErrorMessage('produit.sub_categorie_produit_id', formik) && (
                <div className="error">{getErrorMessage('produit.sub_categorie_produit_id', formik)}</div>
            )}
        </div>
            <div>
                <Input
                    type="text"
                    id="titre"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer le titre"
                    label="Quel est le titre ?"
                    fieldName={"titre"}
                    onchange={formik.handleChange}
                    value={formik.values.titre} />
                {getErrorMessage('titre', formik) && (
                    <div className="error">{getErrorMessage('titre', formik)}</div>
                )}
            </div>

            <div>
                <Input
                    type="text"
                    id="description"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer le description"
                    label="Quel est le description ?"
                    fieldName={"description"}
                    onchange={formik.handleChange}
                    value={formik.values.description} />
                {getErrorMessage('description', formik) && (
                    <div className="error">{getErrorMessage('description', formik)}</div>
                )}
            </div>

            <div>
                <button type="submit" className="bg-blue-500 rounded-lg text-[14px] px-[10px] py-[3px]">Ajouter</button>
            </div>
        </form>
    </>;
};

export default SubCategoryDetails;