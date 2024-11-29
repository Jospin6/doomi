import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface RestaurationDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (text: string, formik: FormikProps<any>) => string | undefined
}

const RestaurationDetails: React.FC<RestaurationDetailsProps> = ({ formik, getErrorMessage }) => {
    return <>
        <div>
            <Input
                type="text"
                id="nom"
                inputBorder="border-[#121212]"
                placeholder="Entrer le nom"
                label="Quel est le nom ?"
                fieldName={"nom"}
                onchange={formik.handleChange}
                value={formik.values.nom} />
            {getErrorMessage('nom', formik) && (
                <div className="error">{getErrorMessage('nom', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="type_cuisine"
                inputBorder="border-[#121212]"
                placeholder="Entrer le type_cuisine"
                label="Quel est le type_cuisine ?"
                fieldName={"type_cuisine"}
                onchange={formik.handleChange}
                value={formik.values.type_cuisine} />
            {getErrorMessage('type_cuisine', formik) && (
                <div className="error">{getErrorMessage('type_cuisine', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="adresse"
                inputBorder="border-[#121212]"
                placeholder="Entrer le adresse"
                label="Quel est le adresse ?"
                fieldName={"adresse"}
                onchange={formik.handleChange}
                value={formik.values.adresse} />
            {getErrorMessage('adresse', formik) && (
                <div className="error">{getErrorMessage('adresse', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="contacts"
                inputBorder="border-[#121212]"
                placeholder="Entrer le contacts"
                label="Quel est le contacts ?"
                fieldName={"contacts"}
                onchange={formik.handleChange}
                value={formik.values.contacts} />
            {getErrorMessage('contacts', formik) && (
                <div className="error">{getErrorMessage('contacts', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="site_web"
                inputBorder="border-[#121212]"
                placeholder="Entrer le site_web"
                label="Quel est le site_web ?"
                fieldName={"site_web"}
                onchange={formik.handleChange}
                value={formik.values.site_web} />
            {getErrorMessage('site_web', formik) && (
                <div className="error">{getErrorMessage('site_web', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="capacite"
                inputBorder="border-[#121212]"
                placeholder="Entrer le capacite"
                label="Quel est le capacite ?"
                fieldName={"capacite"}
                onchange={formik.handleChange}
                value={formik.values.capacite} />
            {getErrorMessage('capacite', formik) && (
                <div className="error">{getErrorMessage('capacite', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="horaires"
                inputBorder="border-[#121212]"
                placeholder="Entrer le horaires"
                label="Quel est le horaires ?"
                fieldName={"horaires"}
                onchange={formik.handleChange}
                value={formik.values.horaires} />
            {getErrorMessage('horaires', formik) && (
                <div className="error">{getErrorMessage('horaires', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="localisation"
                inputBorder="border-[#121212]"
                placeholder="Entrer le localisation"
                label="Quel est le localisation ?"
                fieldName={"localisation"}
                onchange={formik.handleChange}
                value={formik.values.localisation} />
            {getErrorMessage('localisation', formik) && (
                <div className="error">{getErrorMessage('localisation', formik)}</div>
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

export default RestaurationDetails;