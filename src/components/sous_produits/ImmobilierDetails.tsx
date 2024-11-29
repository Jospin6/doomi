import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface ImmobilierDetailsProps {
  formik: FormikProps<any>;
  getErrorMessage: any 
}

const ImmobilierDetails: React.FC<ImmobilierDetailsProps> = ({ formik, getErrorMessage }) => {
  return <>
    <div>
      <Input
        type="text"
        id="type_de_bien"
        inputBorder="border-[#121212]"
        placeholder="Entrer le type_de_bien"
        label="Quel est le type_de_bien ?"
        fieldName={"immobilier.type_de_bien"}
        onchange={formik.handleChange}
        value={formik.values.immobilier.type_de_bien} />
      {getErrorMessage('immobilier.type_de_bien', formik) && (
        <div className="error">{getErrorMessage('immobilier.type_de_bien', formik)}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="adresse"
        inputBorder="border-[#121212]"
        placeholder="Entrer le adresse"
        label="Quel est le adresse ?"
        fieldName={"immobilier.adresse"}
        onchange={formik.handleChange}
        value={formik.values.immobilier.adresse} />
      {getErrorMessage('immobilier.adresse', formik) && (
        <div className="error">{getErrorMessage('immobilier.adresse', formik)}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="surface_habitable"
        inputBorder="border-[#121212]"
        placeholder="Entrer le surface_habitable"
        label="Quel est le surface_habitable ?"
        fieldName={"immobilier.surface_habitable"}
        onchange={formik.handleChange}
        value={formik.values.immobilier.surface_habitable} />
      {getErrorMessage('immobilier.surface_habitable', formik) && (
        <div className="error">{getErrorMessage('immobilier.surface_habitable', formik)}</div>
      )}
    </div>

    <div>
      <Input
        type="number"
        id="nombre_chambres"
        inputBorder="border-[#121212]"
        placeholder="Entrer le nombre_chambres"
        label="Quel est le nombre_chambres ?"
        fieldName={"immobilier.nombre_chambres"}
        onchange={formik.handleChange}
        value={formik.values.immobilier.nombre_chambres} />
      {getErrorMessage('immobilier.nombre_chambres', formik) && (
        <div className="error">{getErrorMessage('immobilier.nombre_chambres', formik)}</div>
      )}
    </div>

    <div>
      <Input
        type="number"
        id="nombre_pieces"
        inputBorder="border-[#121212]"
        placeholder="Entrer le nombre_pieces"
        label="Quel est le nombre_pieces ?"
        fieldName={"immobilier.nombre_pieces"}
        onchange={formik.handleChange}
        value={formik.values.immobilier.nombre_pieces} />
      {getErrorMessage('immobilier.nombre_pieces', formik) && (
        <div className="error">{getErrorMessage('immobilier.nombre_pieces', formik)}</div>
      )}
    </div>
  </>;
};

export default ImmobilierDetails;