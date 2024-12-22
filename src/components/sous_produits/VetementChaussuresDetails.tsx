import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';

interface VetementChaussuresDetailsProps {
  formik: FormikProps<any>;
}

const VetementChaussuresDetails: React.FC<VetementChaussuresDetailsProps> = ({ formik }) => {
  return <>
    <div>
      <Input
        type="text"
        id="type"
        inputBorder="border-[#121212]"
        placeholder="Entrer la type"
        label="Quel est ta type ?"
        fieldName={"type"}
        onchange={formik.handleChange}
        value={formik.values.type} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).type && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).type}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="taille"
        inputBorder="border-[#121212]"
        placeholder="Entrer la taille"
        label="Quel est ta taille ?"
        fieldName={"taille"}
        onchange={formik.handleChange}
        value={formik.values.taille} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).taille && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).taille}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="matiere"
        inputBorder="border-[#121212]"
        placeholder="Entrer la matiere"
        label="Quel est ta matiere ?"
        fieldName={"matiere"}
        onchange={formik.handleChange}
        value={formik.values.matiere} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).matiere && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).matiere}</div>
      )} */}
    </div>
  </>;
};

export default VetementChaussuresDetails;