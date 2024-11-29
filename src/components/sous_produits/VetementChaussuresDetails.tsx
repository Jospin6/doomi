import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface VetementChaussuresDetailsProps {
  formik: FormikProps<any>; 
  getErrorMessage: any
}

const VetementChaussuresDetails: React.FC<VetementChaussuresDetailsProps> = ({ formik, getErrorMessage }) => {
  return <>
    <div>
      <Input
        type="text"
        id="type"
        inputBorder="border-[#121212]"
        placeholder="Entrer la type"
        label="Quel est ta type ?"
        fieldName={"vetement_chaussures.type"}
        onchange={formik.handleChange}
        value={formik.values.vetement_chaussures.type} />
      {getErrorMessage('vetement_chaussures.type', formik) && (
        <div className="error">{getErrorMessage('vetement_chaussures.type', formik)}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="taille"
        inputBorder="border-[#121212]"
        placeholder="Entrer la taille"
        label="Quel est ta taille ?"
        fieldName={"vetement_chaussures.taille"}
        onchange={formik.handleChange}
        value={formik.values.vetement_chaussures.taille} />
      {getErrorMessage('vetement_chaussures.taille', formik) && (
        <div className="error">{getErrorMessage('vetement_chaussures.taille', formik)}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="matiere"
        inputBorder="border-[#121212]"
        placeholder="Entrer la matiere"
        label="Quel est ta matiere ?"
        fieldName={"vetement_chaussures.matiere"}
        onchange={formik.handleChange}
        value={formik.values.vetement_chaussures.matiere} />
      {getErrorMessage('vetement_chaussures.matiere', formik) && (
        <div className="error">{getErrorMessage('vetement_chaussures.matiere', formik)}</div>
      )}
    </div>
  </>;
};

export default VetementChaussuresDetails;