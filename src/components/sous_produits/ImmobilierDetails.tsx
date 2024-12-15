import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';
import { initialValues } from '@/helpers/produits';

interface ImmobilierDetailsProps {
  formik: FormikProps<any>;
}

const ImmobilierDetails: React.FC<ImmobilierDetailsProps> = ({ formik }) => {
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
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).type_de_bien && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).type_de_bien}</div>
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
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).adresse && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).adresse}</div>
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
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).surface_habitable && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).surface_habitable}</div>
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
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).nombre_chambres && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).nombre_chambres}</div>
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
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).nombre_pieces && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.immobilier>).nombre_pieces}</div>
      )}
    </div>
  </>;
};

export default ImmobilierDetails;