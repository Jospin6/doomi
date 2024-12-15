import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';
import { initialValues } from '@/helpers/produits';

interface AutreProduitDetailsProps {
    formik: FormikProps<any>;
}

const AutreProduitDetails: React.FC<AutreProduitDetailsProps> = ({ formik }) => {
    return <>
        <div>
            <Input
                type="text"
                id="etat"
                inputBorder="border-[#121212]"
                placeholder="Entrer le etat"
                label="Quel est le etat ?"
                fieldName={"autre_produit.etat"}
                onchange={formik.handleChange}
                value={formik.values.autre_produit.etat} />
            {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.autre_produit>).etat && (
                <div>{(formik.errors.produit as FormikErrors<typeof initialValues.autre_produit>).etat}</div>
            )}
        </div>
        <div>
            <Input
                type="text"
                id="marque"
                inputBorder="border-[#121212]"
                placeholder="Entrer le marque"
                label="Quel est le marque ?"
                fieldName={"autre_produit.marque"}
                onchange={formik.handleChange}
                value={formik.values.autre_produit.marque} />
            {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.autre_produit>).marque && (
                <div>{(formik.errors.produit as FormikErrors<typeof initialValues.autre_produit>).marque}</div>
            )}
        </div>
    </>;
};

export default AutreProduitDetails;