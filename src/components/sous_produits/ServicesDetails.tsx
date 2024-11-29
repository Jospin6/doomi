import React from 'react';
import { FormikProps } from 'formik';

interface ServicesDetailsProps {
  formik: FormikProps<any>; 
  getErrorMessage: any
}

const ServicesDetails: React.FC<ServicesDetailsProps> = ({ formik, getErrorMessage }) => {
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
    </div>
  );
};

export default ServicesDetails;