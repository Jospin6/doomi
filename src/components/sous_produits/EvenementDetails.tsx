import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';

interface EvenementDetailsProps {
  formik: FormikProps<any>; 
}

const EvenementDetails: React.FC<EvenementDetailsProps> = ({ formik }) => {
  return <>
    <div className='mt-4'>
      <Input
        type="date"
        id="date_evenement"
        inputBorder="border-gray-700"
        placeholder="Entrer le date_evenement"
        label="Quel est le date_evenement ?"
        fieldName={"date_evenement"}
        onchange={formik.handleChange}
        value={formik.values.date_evenement} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).date_evenement && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).date_evenement}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="lieu"
        inputBorder="border-gray-700"
        placeholder="Entrer le lieu"
        label="Quel est le lieu ?"
        fieldName={"lieu"}
        onchange={formik.handleChange}
        value={formik.values.lieu} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).lieu && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).lieu}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="type_prix"
        inputBorder="border-gray-700"
        placeholder="Entrer le type_prix"
        label="Quel est le type_prix ?"
        fieldName={"type_prix"}
        onchange={formik.handleChange}
        value={formik.values.type_prix} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).type_prix && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).type_prix}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="site_web"
        inputBorder="border-gray-700"
        placeholder="Entrer le site_web"
        label="Quel est le site_web ?"
        fieldName={"site_web"}
        onchange={formik.handleChange}
        value={formik.values.site_web} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.evenement>).site_web && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.evenement>).site_web}</div>
      )} */}
    </div>
  </>;
};

export default EvenementDetails;