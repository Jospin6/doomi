import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';
import { initialValues } from '@/helpers/produits';

interface EvenementDetailsProps {
  formik: FormikProps<any>; 
}

const EvenementDetails: React.FC<EvenementDetailsProps> = ({ formik }) => {
  return <>
    <div>
      <Input
        type="date"
        id="date_evenement"
        inputBorder="border-[#121212]"
        placeholder="Entrer le date_evenement"
        label="Quel est le date_evenement ?"
        fieldName={"evenement.date_evenement"}
        onchange={formik.handleChange}
        value={formik.values.evenement.date_evenement} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).date_evenement && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).date_evenement}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="lieu"
        inputBorder="border-[#121212]"
        placeholder="Entrer le lieu"
        label="Quel est le lieu ?"
        fieldName={"evenement.lieu"}
        onchange={formik.handleChange}
        value={formik.values.evenement.lieu} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).lieu && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).lieu}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="type_prix"
        inputBorder="border-[#121212]"
        placeholder="Entrer le type_prix"
        label="Quel est le type_prix ?"
        fieldName={"evenement.type_prix"}
        onchange={formik.handleChange}
        value={formik.values.evenement.type_prix} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).type_prix && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).type_prix}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="site_web"
        inputBorder="border-[#121212]"
        placeholder="Entrer le site_web"
        label="Quel est le site_web ?"
        fieldName={"evenement.site_web"}
        onchange={formik.handleChange}
        value={formik.values.evenement.site_web} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).site_web && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).site_web}</div>
      )}
    </div>
  </>;
};

export default EvenementDetails;