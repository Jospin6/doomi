import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface AutreProduitDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: any
}

const AutreProduitDetails: React.FC<AutreProduitDetailsProps> = ({ formik, getErrorMessage }) => {
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
            {getErrorMessage('autre_produit.etat', formik) && (
                <div className="error">{getErrorMessage('autre_produit.etat', formik)}</div>
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
            {getErrorMessage('autre_produit.marque', formik) && (
                <div className="error">{getErrorMessage('autre_produit.marque', formik)}</div>
            )}
        </div>
    </>;
};

export default AutreProduitDetails;