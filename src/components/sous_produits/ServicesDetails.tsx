import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { initialValues } from '@/helpers/produits';

interface ServicesDetailsProps {
  formik: FormikProps<any>; 
}

const ServicesDetails: React.FC<ServicesDetailsProps> = ({ formik }) => {
  return (
    <div className='hidden'>
      <input
        type="text"
        id="service.statut"
        name="service.statut"
        className='hidden'
        onChange={formik.handleChange}
        value={formik.values.service.statut}
      />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.service>).statut && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.service>).statut}</div>
      )}
    </div>
  );
};

export default ServicesDetails;