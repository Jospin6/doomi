import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface CategoryDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (text: string, formik: FormikProps<any>) => string | undefined
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ formik, getErrorMessage }) => {
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
            <label>image</label>
            <input
                type="file"
                name="image"
                onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files);
                }}
                multiple
            />
            {getErrorMessage('image', formik) && (
                <div className="error">{getErrorMessage('image', formik)}</div>
            )}
        </div>
    </>;
};

export default CategoryDetails;