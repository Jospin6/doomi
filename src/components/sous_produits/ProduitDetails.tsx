import React, { SetStateAction, useState } from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import {setcurrentSubCategory} from '@/features/sub_categories/subCategoriesSlice'

interface ProduitDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: any
}

const ProduitDetails: React.FC<ProduitDetailsProps> = ({ formik, getErrorMessage }) => {

    const dispatch = useDispatch<AppDispatch>();
    const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory)

    const handleSubCategoryChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        dispatch(setcurrentSubCategory(`${event.target.value}`))
        formik.setFieldValue('sub_categorie_produit_id', event.target.value);
    };

    return <>
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
                type="number"
                id="prix"
                inputBorder="border-[#121212]"
                placeholder="Entrer le prix"
                label="Quel est le prix ?"
                fieldName={"prix"}
                onchange={formik.handleChange}
                value={formik.values.prix} />
            {getErrorMessage('prix', formik) && (
                <div className="error">{getErrorMessage('prix', formik)}</div>
            )}
        </div>

        <div>
            <label>Description</label><br></br>
            <textarea
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
            />
            {getErrorMessage('description',formik) && (
                <div className="error">{getErrorMessage('description', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="devise"
                inputBorder="border-[#121212]"
                placeholder="Entrer le devise"
                label="Quel est le devise ?"
                fieldName={"devise"}
                onchange={formik.handleChange}
                value={formik.values.devise} />
            {getErrorMessage('devise', formik) && (
                <div className="error">{getErrorMessage('devise', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="localisation"
                inputBorder="border-[#121212]"
                placeholder="Entrer la Localisation"
                label="Quel est ta Localisation ?"
                fieldName={"localisation"}
                onchange={formik.handleChange}
                value={formik.values.localisation} />
            {getErrorMessage('localisation', formik) && (
                <div className="error">{getErrorMessage('localisation', formik)}</div>
            )}
        </div>

        <div>
            <label>Sous-catégorie</label>
            <select
                name="sub_categorie_produit_id"
                onChange={handleSubCategoryChange}
                value={subCategory}
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
            {getErrorMessage('sub_categorie_produit_id', formik) && (
                <div className="error">{getErrorMessage('sub_categorie_produit_id', formik)}</div>
            )}
        </div>

        <div>
            <label>Images</label>
            <input
                type="file"
                name="images"
                onChange={(event) => {
                    formik.setFieldValue("images", event.currentTarget.files);
                }}
                multiple
            />
            {getErrorMessage('images', formik) && (
                <div className="error">{getErrorMessage('images', formik)}</div>
            )}
        </div>
    </>;
};

export default ProduitDetails;