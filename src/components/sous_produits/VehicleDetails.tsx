import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';
import { initialValues } from '@/helpers/produits';

interface VehicleDetailsProps {
  formik: FormikProps<any>;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ formik }) => {
  return <>
    <div>
      <Input
        type="text"
        id="modele"
        inputBorder="border-[#121212]"
        placeholder="Entrer la modele"
        label="Quel est ta modele ?"
        fieldName={"vehicule.modele"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.modele} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).modele && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).modele}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="annee"
        inputBorder="border-[#121212]"
        placeholder="Entrer la annee"
        label="Quel est ta annee ?"
        fieldName={"vehicule.annee"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.annee} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).annee && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).annee}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="kilometrage"
        inputBorder="border-[#121212]"
        placeholder="Entrer la kilometrage"
        label="Quel est ta kilometrage ?"
        fieldName={"vehicule.kilometrage"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.kilometrage} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).kilometrage && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).kilometrage}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="type_vehicule"
        inputBorder="border-[#121212]"
        placeholder="Entrer la type_vehicule"
        label="Quel est ta type_vehicule ?"
        fieldName={"vehicule.type_vehicule"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.type_vehicule} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).type_vehicule && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).type_vehicule}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="couleur"
        inputBorder="border-[#121212]"
        placeholder="Entrer la couleur"
        label="Quel est ta couleur ?"
        fieldName={"vehicule.couleur"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.couleur} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).couleur && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).couleur}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="carburant"
        inputBorder="border-[#121212]"
        placeholder="Entrer la carburant"
        label="Quel est ta carburant ?"
        fieldName={"vehicule.carburant"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.carburant} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).carburant && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).carburant}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="transmission"
        inputBorder="border-[#121212]"
        placeholder="Entrer la transmission"
        label="Quel est ta transmission ?"
        fieldName={"vehicule.transmission"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.transmission} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).transmission && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).transmission}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="nombre_portes"
        inputBorder="border-[#121212]"
        placeholder="Entrer la nombre_portes"
        label="Quel est ta nombre_portes ?"
        fieldName={"vehicule.nombre_portes"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.nombre_portes} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_portes && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_portes}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="nombre_places"
        inputBorder="border-[#121212]"
        placeholder="Entrer la nombre_places"
        label="Quel est ta nombre_places ?"
        fieldName={"vehicule.nombre_places"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.nombre_places} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_places && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_places}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="plan_de_paiement"
        inputBorder="border-[#121212]"
        placeholder="Entrer la plan_de_paiement"
        label="Quel est ta plan_de_paiement ?"
        fieldName={"vehicule.plan_de_paiement"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.plan_de_paiement} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).plan_de_paiement && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).plan_de_paiement}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="disponibilite"
        inputBorder="border-[#121212]"
        placeholder="Entrer la disponibilite"
        label="Quel est ta disponibilite ?"
        fieldName={"vehicule.disponibilite"}
        onchange={formik.handleChange}
        value={formik.values.vehicule.disponibilite} />
      {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).disponibilite && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).disponibilite}</div>
      )}
    </div>
  </>;
};

export default VehicleDetails;