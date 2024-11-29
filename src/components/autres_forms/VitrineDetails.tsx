import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface VitrineDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (text: string, formik: FormikProps<any>) => string | undefined
}

const VitrineDetails: React.FC<VitrineDetailsProps> = ({ formik, getErrorMessage }) => {
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
            <label>profil_img</label>
            <input
                type="file"
                name="profil_img"
                onChange={(event) => {
                    formik.setFieldValue("profil_img", event.currentTarget.files);
                }}
                multiple
            />
            {getErrorMessage('profil_img', formik) && (
                <div className="error">{getErrorMessage('profil_img', formik)}</div>
            )}
        </div>

        <div>
            <label>cover_img</label>
            <input
                type="file"
                name="cover_img"
                onChange={(event) => {
                    formik.setFieldValue("cover_img", event.currentTarget.files);
                }}
                multiple
            />
            {getErrorMessage('cover_img', formik) && (
                <div className="error">{getErrorMessage('cover_img', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="specialites"
                inputBorder="border-[#121212]"
                placeholder="Entrer le specialites"
                label="Quel est le specialites ?"
                fieldName={"specialites"}
                onchange={formik.handleChange}
                value={formik.values.specialites} />
            {getErrorMessage('specialites', formik) && (
                <div className="error">{getErrorMessage('specialites', formik)}</div>
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
    </>;
};

export default VitrineDetails;