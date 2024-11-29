import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface HotelDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (text: string, formik: FormikProps<any>) => string | undefined
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ formik, getErrorMessage }) => {
    return <>
        <div>
            <Input
                type="text"
                id="nom_hotel"
                inputBorder="border-[#121212]"
                placeholder="Entrer le nom_hotel"
                label="Quel est le nom_hotel ?"
                fieldName={"nom_hotel"}
                onchange={formik.handleChange}
                value={formik.values.nom_hotel} />
            {getErrorMessage('nom_hotel', formik) && (
                <div className="error">{getErrorMessage('nom_hotel', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="type_hebergement"
                inputBorder="border-[#121212]"
                placeholder="Entrer le type_hebergement"
                label="Quel est le type_hebergement ?"
                fieldName={"type_hebergement"}
                onchange={formik.handleChange}
                value={formik.values.type_hebergement} />
            {getErrorMessage('type_hebergement', formik) && (
                <div className="error">{getErrorMessage('type_hebergement', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="adresse"
                inputBorder="border-[#121212]"
                placeholder="Entrer le adresse"
                label="Quel est le adresse ?"
                fieldName={"emploi.adresse"}
                onchange={formik.handleChange}
                value={formik.values.adresse} />
            {getErrorMessage('adresse', formik) && (
                <div className="error">{getErrorMessage('adresse', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="contacts"
                inputBorder="border-[#121212]"
                placeholder="Entrer le contacts"
                label="Quel est le contacts ?"
                fieldName={"emploi.contacts"}
                onchange={formik.handleChange}
                value={formik.values.contacts} />
            {getErrorMessage('contacts', formik) && (
                <div className="error">{getErrorMessage('contacts', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="email"
                inputBorder="border-[#121212]"
                placeholder="Entrer le email"
                label="Quel est le email ?"
                fieldName={"email"}
                onchange={formik.handleChange}
                value={formik.values.email} />
            {getErrorMessage('email', formik) && (
                <div className="error">{getErrorMessage('email', formik)}</div>
            )}
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
            {getErrorMessage('site_web', formik) && (
                <div className="error">{getErrorMessage('site_web', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="nombre_chambres"
                inputBorder="border-[#121212]"
                placeholder="Entrer le nombre_chambres"
                label="Quel est le nombre_chambres ?"
                fieldName={"nombre_chambres"}
                onchange={formik.handleChange}
                value={formik.values.nombre_chambres} />
            {getErrorMessage('nombre_chambres', formik) && (
                <div className="error">{getErrorMessage('nombre_chambres', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="capacite_accueil"
                inputBorder="border-[#121212]"
                placeholder="Entrer le capacite_accueil"
                label="Quel est le capacite_accueil ?"
                fieldName={"capacite_accueil"}
                onchange={formik.handleChange}
                value={formik.values.capacite_accueil} />
            {getErrorMessage('capacite_accueil', formik) && (
                <div className="error">{getErrorMessage('capacite_accueil', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="tarif_moyen"
                inputBorder="border-[#121212]"
                placeholder="Entrer le tarif_moyen"
                label="Quel est le tarif_moyen ?"
                fieldName={"emploi.tarif_moyen"}
                onchange={formik.handleChange}
                value={formik.values.tarif_moyen} />
            {getErrorMessage('tarif_moyen', formik) && (
                <div className="error">{getErrorMessage('tarif_moyen', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="horaires"
                inputBorder="border-[#121212]"
                placeholder="Entrer le horaires"
                label="Quel est le horaires ?"
                fieldName={"horaires"}
                onchange={formik.handleChange}
                value={formik.values.horaires} />
            {getErrorMessage('horaires', formik) && (
                <div className="error">{getErrorMessage('horaires', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="localisation"
                inputBorder="border-[#121212]"
                placeholder="Entrer le localisation"
                label="Quel est le localisation ?"
                fieldName={"localisation"}
                onchange={formik.handleChange}
                value={formik.values.localisation} />
            {getErrorMessage('localisation', formik) && (
                <div className="error">{getErrorMessage('localisation', formik)}</div>
            )}
        </div>

        <div>
            <label>Images</label>
            <input
                type="file"
                name="images"
                onChange={(event) => {
                    formik.setFieldValue("images", event.currentTarget.files);
                }}
                multiple
            />
            {getErrorMessage('images', formik) && (
                <div className="error">{getErrorMessage('images', formik)}</div>
            )}
        </div>
    </>;
};

export default HotelDetails;