import React from 'react';
import { FormikErrors, FormikProps } from 'formik';

interface ServicesDetailsProps {
  formik: FormikProps<any>; 
}

const ServicesDetails: React.FC<ServicesDetailsProps> = ({ formik }) => {
  return (
    <div className=''>
      <input
        type="text"
        id="statut"
        name="statut"
        className='hidden'
        onChange={formik.handleChange}
        value={formik.values.statut}
      />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.service>).statut && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.service>).statut}</div>
      )} */}
    </div>
  );
};

export default ServicesDetails;