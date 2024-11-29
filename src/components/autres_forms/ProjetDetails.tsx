import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface ProjetDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (text: string, formik: FormikProps<any>) => string | undefined
}

const ProjetDetails: React.FC<ProjetDetailsProps> = ({ formik, getErrorMessage }) => {
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

export default ProjetDetails;