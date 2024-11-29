import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface EvenementDetailsProps {
  formik: FormikProps<any>; 
  getErrorMessage: any
}

const EvenementDetails: React.FC<EvenementDetailsProps> = ({ formik, getErrorMessage }) => {
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
      {getErrorMessage('evenement.date_evenement') && (
        <div className="error">{getErrorMessage('evenement.date_evenement')}</div>
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
      {getErrorMessage('evenement.lieu') && (
        <div className="error">{getErrorMessage('evenement.lieu')}</div>
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
      {getErrorMessage('evenement.type_prix') && (
        <div className="error">{getErrorMessage('evenement.type_prix')}</div>
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
      {getErrorMessage('evenement.site_web') && (
        <div className="error">{getErrorMessage('evenement.site_web')}</div>
      )}
    </div>
  </>;
};

export default EvenementDetails;