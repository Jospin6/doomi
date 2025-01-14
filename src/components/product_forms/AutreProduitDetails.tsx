import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';


interface AutreProduitDetailsProps {
    formik: FormikProps<any>;
}

const AutreProduitDetails: React.FC<AutreProduitDetailsProps> = ({ formik }) => {
    return <>
        <div className='mt-4'>
            <Input
                type="text"
                id="etat"
                inputBorder="border-gray-700"
                placeholder="Entrer le etat"
                label="Quel est le etat ?"
                fieldName={"etat"}
                onchange={formik.handleChange}
                value={formik.values.etat} />
            {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues>)?.etat && (
                <div>{(formik.errors.produit as FormikErrors<typeof initialValues>)?.etat}</div>
            )} */}
        </div>
        <div className='mt-4'>
            <Input
                type="text"
                id="marque"
                inputBorder="border-gray-700"
                placeholder="Entrer le marque"
                label="Quel est le marque ?"
                fieldName={"marque"}
                onchange={formik.handleChange}
                value={formik.values.marque} />
            {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues>)?.marque && (
                <div>{(formik.errors.produit as FormikErrors<typeof initialValues>)?.marque}</div>
            )} */}
        </div>
    </>;
};

export default AutreProduitDetails;