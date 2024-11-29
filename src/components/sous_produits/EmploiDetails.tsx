import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface EmploiDetailsProps {
  formik: FormikProps<any>;
  getErrorMessage: any
}

const EmploiDetails: React.FC<EmploiDetailsProps> = ({ formik, getErrorMessage }) => {
  return <>
    <div>
      <Input
        type="text"
        id="type_contrat"
        inputBorder="border-[#121212]"
        placeholder="Entrer le type_contrat"
        label="Quel est le type_contrat ?"
        fieldName={"emploi.type_contrat"}
        onchange={formik.handleChange}
        value={formik.values.emploi.type_contrat} />
      {getErrorMessage('emploi.type_contrat') && (
        <div className="error">{getErrorMessage('emploi.type_contrat')}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="lieu"
        inputBorder="border-[#121212]"
        placeholder="Entrer le lieu"
        label="Quel est le lieu ?"
        fieldName={"emploi.lieu"}
        onchange={formik.handleChange}
        value={formik.values.emploi.lieu} />
      {getErrorMessage('emploi.lieu') && (
        <div className="error">{getErrorMessage('emploi.lieu')}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="secteur_activite"
        inputBorder="border-[#121212]"
        placeholder="Entrer le secteur_activite"
        label="Quel est le secteur_activite ?"
        fieldName={"emploi.secteur_activite"}
        onchange={formik.handleChange}
        value={formik.values.emploi.secteur_activite} />
      {getErrorMessage('emploi.secteur_activite') && (
        <div className="error">{getErrorMessage('emploi.secteur_activite')}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="niveau_experience"
        inputBorder="border-[#121212]"
        placeholder="Entrer le niveau_experience"
        label="Quel est le niveau_experience ?"
        fieldName={"emploi.niveau_experience"}
        onchange={formik.handleChange}
        value={formik.values.emploi.niveau_experience} />
      {getErrorMessage('emploi.niveau_experience') && (
        <div className="error">{getErrorMessage('emploi.niveau_experience')}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="date_limite"
        inputBorder="border-[#121212]"
        placeholder="Entrer le date_limite"
        label="Quel est le date_limite ?"
        fieldName={"emploi.date_limite"}
        onchange={formik.handleChange}
        value={formik.values.emploi.date_limite} />
      {getErrorMessage('emploi.date_limite') && (
        <div className="error">{getErrorMessage('emploi.date_limite')}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="site_web"
        inputBorder="border-[#121212]"
        placeholder="Entrer le site_web"
        label="Quel est le site_web ?"
        fieldName={"emploi.site_web"}
        onchange={formik.handleChange}
        value={formik.values.emploi.site_web} />
      {getErrorMessage('emploi.site_web') && (
        <div className="error">{getErrorMessage('emploi.site_web')}</div>
      )}
    </div>

    <div>
      <Input
        type="text"
        id="formation_requise"
        inputBorder="border-[#121212]"
        placeholder="Entrer le formation_requise"
        label="Quel est le formation_requise ?"
        fieldName={"emploi.formation_requise"}
        onchange={formik.handleChange}
        value={formik.values.emploi.formation_requise} />
      {getErrorMessage('emploi.formation_requise') && (
        <div className="error">{getErrorMessage('emploi.formation_requise')}</div>
      )}
    </div>
  </>;
};

export default EmploiDetails;