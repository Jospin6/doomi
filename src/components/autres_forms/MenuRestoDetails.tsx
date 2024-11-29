import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface MenuRestoDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (text: string, formik: FormikProps<any>) => string | undefined
}

const MenuRestoDetails: React.FC<MenuRestoDetailsProps> = ({ formik, getErrorMessage }) => {
    return <>
        <div>
            <Input
                type="text"
                id="nom_plat"
                inputBorder="border-[#121212]"
                placeholder="Entrer le nom_plat"
                label="Quel est le nom_plat ?"
                fieldName={"nom_plat"}
                onchange={formik.handleChange}
                value={formik.values.nom_plat} />
            {getErrorMessage('nom_plat', formik) && (
                <div className="error">{getErrorMessage('nom_plat', formik)}</div>
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
                value={formik.values.nom_plat} />
            {getErrorMessage('description', formik) && (
                <div className="error">{getErrorMessage('description', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="prix"
                inputBorder="border-[#121212]"
                placeholder="Entrer le prix"
                label="Quel est le prix ?"
                fieldName={"prix"}
                onchange={formik.handleChange}
                value={formik.values.nom_plat} />
            {getErrorMessage('prix', formik) && (
                <div className="error">{getErrorMessage('prix', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="categorie_plat"
                inputBorder="border-[#121212]"
                placeholder="Entrer le categorie_plat"
                label="Quel est le categorie_plat ?"
                fieldName={"categorie_plat"}
                onchange={formik.handleChange}
                value={formik.values.categorie_plat} />
            {getErrorMessage('categorie_plat', formik) && (
                <div className="error">{getErrorMessage('categorie_plat', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="ingredient"
                inputBorder="border-[#121212]"
                placeholder="Entrer le ingredient"
                label="Quel est le ingredient ?"
                fieldName={"ingredient"}
                onchange={formik.handleChange}
                value={formik.values.ingredient} />
            {getErrorMessage('ingredient', formik) && (
                <div className="error">{getErrorMessage('ingredient', formik)}</div>
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

export default MenuRestoDetails;