import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';

interface EmploiDetailsProps {
  formik: FormikProps<any>;
}

const EmploiDetails: React.FC<EmploiDetailsProps> = ({ formik }) => {
  return <>
    <div>
      <Input
        type="text"
        id="type_contrat"
        inputBorder="border-[#121212]"
        placeholder="Entrer le type_contrat"
        label="Quel est le type_contrat ?"
        fieldName={"type_contrat"}
        onchange={formik.handleChange}
        value={formik.values.type_contrat} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.emploi>).type_contrat && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.emploi>).type_contrat}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="lieu"
        inputBorder="border-[#121212]"
        placeholder="Entrer le lieu"
        label="Quel est le lieu ?"
        fieldName={"lieu"}
        onchange={formik.handleChange}
        value={formik.values.lieu} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.emploi>).lieu && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.emploi>).lieu}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="secteur_activite"
        inputBorder="border-[#121212]"
        placeholder="Entrer le secteur_activite"
        label="Quel est le secteur_activite ?"
        fieldName={"secteur_activite"}
        onchange={formik.handleChange}
        value={formik.values.secteur_activite} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.emploi>).secteur_activite && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.emploi>).secteur_activite}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="niveau_experience"
        inputBorder="border-[#121212]"
        placeholder="Entrer le niveau_experience"
        label="Quel est le niveau_experience ?"
        fieldName={"niveau_experience"}
        onchange={formik.handleChange}
        value={formik.values.niveau_experience} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.emploi>).niveau_experience && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.emploi>).niveau_experience}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="date_limite"
        inputBorder="border-[#121212]"
        placeholder="Entrer le date_limite"
        label="Quel est le date_limite ?"
        fieldName={"date_limite"}
        onchange={formik.handleChange}
        value={formik.values.date_limite} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.emploi>).date_limite && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.emploi>).date_limite}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="site_web"
        inputBorder="border-[#121212]"
        placeholder="Entrer le site_web"
        label="Quel est le site_web ?"
        fieldName={"site_web"}
        onchange={formik.handleChange}
        value={formik.values.site_web} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.emploi>).site_web && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.emploi>).site_web}</div>
      )} */}
    </div>

    <div>
      <Input
        type="text"
        id="formation_requise"
        inputBorder="border-[#121212]"
        placeholder="Entrer le formation_requise"
        label="Quel est le formation_requise ?"
        fieldName={"formation_requise"}
        onchange={formik.handleChange}
        value={formik.values.formation_requise} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.emploi>).formation_requise && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.emploi>).formation_requise}</div>
      )} */}
    </div>
  </>;
};

export default EmploiDetails;