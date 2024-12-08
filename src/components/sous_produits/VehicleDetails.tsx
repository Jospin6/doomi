import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface VehicleDetailsProps {
  formik: FormikProps<any>;
  getErrorMessage: any
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ formik, getErrorMessage }) => {
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
      {getErrorMessage('vehicule.modele', formik) && (
        <div className="error">{getErrorMessage('vehicule.modele', formik)}</div>
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
      {getErrorMessage('vehicule.annee', formik) && (
        <div className="error">{getErrorMessage('vehicule.annee', formik)}</div>
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
      {getErrorMessage('vehicule.kilometrage', formik) && (
        <div className="error">{getErrorMessage('vehicule.kilometrage', formik)}</div>
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
      {getErrorMessage('vehicule.type_vehicule', formik) && (
        <div className="error">{getErrorMessage('vehicule.type_vehicule', formik)}</div>
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
      {getErrorMessage('vehicule.couleur', formik) && (
        <div className="error">{getErrorMessage('vehicule.couleur', formik)}</div>
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
      {getErrorMessage('vehicule.carburant', formik) && (
        <div className="error">{getErrorMessage('vehicule.carburant', formik)}</div>
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
      {getErrorMessage('vehicule.transmission', formik) && (
        <div className="error">{getErrorMessage('vehicule.transmission', formik)}</div>
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
      {getErrorMessage('vehicule.nombre_portes', formik) && (
        <div className="error">{getErrorMessage('vehicule.nombre_portes', formik)}</div>
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
      {getErrorMessage('vehicule.nombre_places', formik) && (
        <div className="error">{getErrorMessage('vehicule.nombre_places', formik)}</div>
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
      {getErrorMessage('vehicule.plan_de_paiement', formik) && (
        <div className="error">{getErrorMessage('vehicule.plan_de_paiement', formik)}</div>
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
      {getErrorMessage('vehicule.disponibilite', formik) && (
        <div className="error">{getErrorMessage('vehicule.disponibilite', formik)}</div>
      )}
    </div>
  </>;
};

export default VehicleDetails;