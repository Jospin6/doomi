import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';
import { initialValues } from '@/helpers/produits';

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
        fieldName={"vetement_chaussures.type"}
        onchange={formik.handleChange}
        value={formik.values.vetement_chaussures.type} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).type && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).type}</div>
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
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).taille && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).taille}</div>
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
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).matiere && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vetement_chaussures>).matiere}</div>
      )}
    </div>
  </>;
};

export default VetementChaussuresDetails;