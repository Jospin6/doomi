import React from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';

interface VehicleDetailsProps {
  formik: FormikProps<any>;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ formik }) => {
  return <>
    <div className='mt-4'>
      <Input
        type="text"
        id="modele"
        inputBorder="border-gray-700"
        placeholder="Entrer la modele"
        label="Quel est ta modele ?"
        fieldName={"modele"}
        onchange={formik.handleChange}
        value={formik.values.modele} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).modele && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).modele}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="annee"
        inputBorder="border-gray-700"
        placeholder="Entrer la annee"
        label="Quel est ta annee ?"
        fieldName={"annee"}
        onchange={formik.handleChange}
        value={formik.values.annee} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).annee && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).annee}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="kilometrage"
        inputBorder="border-gray-700"
        placeholder="Entrer la kilometrage"
        label="Quel est ta kilometrage ?"
        fieldName={"kilometrage"}
        onchange={formik.handleChange}
        value={formik.values.kilometrage} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).kilometrage && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).kilometrage}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="type_vehicule"
        inputBorder="border-gray-700"
        placeholder="Entrer la type_vehicule"
        label="Quel est ta type_vehicule ?"
        fieldName={"type_vehicule"}
        onchange={formik.handleChange}
        value={formik.values.type_vehicule} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).type_vehicule && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).type_vehicule}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="couleur"
        inputBorder="border-gray-700"
        placeholder="Entrer la couleur"
        label="Quel est ta couleur ?"
        fieldName={"couleur"}
        onchange={formik.handleChange}
        value={formik.values.couleur} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).couleur && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).couleur}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="carburant"
        inputBorder="border-gray-700"
        placeholder="Entrer la carburant"
        label="Quel est ta carburant ?"
        fieldName={"carburant"}
        onchange={formik.handleChange}
        value={formik.values.carburant} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).carburant && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).carburant}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="transmission"
        inputBorder="border-gray-700"
        placeholder="Entrer la transmission"
        label="Quel est ta transmission ?"
        fieldName={"transmission"}
        onchange={formik.handleChange}
        value={formik.values.transmission} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).transmission && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).transmission}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="nombre_portes"
        inputBorder="border-gray-700"
        placeholder="Entrer la nombre_portes"
        label="Quel est ta nombre_portes ?"
        fieldName={"nombre_portes"}
        onchange={formik.handleChange}
        value={formik.values.nombre_portes} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_portes && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_portes}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="nombre_places"
        inputBorder="border-gray-700"
        placeholder="Entrer la nombre_places"
        label="Quel est ta nombre_places ?"
        fieldName={"nombre_places"}
        onchange={formik.handleChange}
        value={formik.values.nombre_places} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_places && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).nombre_places}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="plan_de_paiement"
        inputBorder="border-gray-700"
        placeholder="Entrer la plan_de_paiement"
        label="Quel est ta plan_de_paiement ?"
        fieldName={"plan_de_paiement"}
        onchange={formik.handleChange}
        value={formik.values.plan_de_paiement} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).plan_de_paiement && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).plan_de_paiement}</div>
      )} */}
    </div>

    <div className='mt-4'>
      <Input
        type="text"
        id="disponibilite"
        inputBorder="border-gray-700"
        placeholder="Entrer la disponibilite"
        label="Quel est ta disponibilite ?"
        fieldName={"disponibilite"}
        onchange={formik.handleChange}
        value={formik.values.disponibilite} />
      {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).disponibilite && (
        <div>{(formik.errors.produit as FormikErrors<typeof initialValues.vehicule>).disponibilite}</div>
      )} */}
    </div>
  </>;
};

export default VehicleDetails;