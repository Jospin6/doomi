import React from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';

interface ServiceHotelDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (text: string, formik: FormikProps<any>) => string | undefined
}

const ServiceHotelDetails: React.FC<ServiceHotelDetailsProps> = ({ formik, getErrorMessage }) => {
    return <>
        <div>
            <Input
                type="text"
                id="nom_service"
                inputBorder="border-[#121212]"
                placeholder="Entrer le nom_service"
                label="Quel est le nom_service ?"
                fieldName={"nom_service"}
                onchange={formik.handleChange}
                value={formik.values.nom_service} />
            {getErrorMessage('nom_service', formik) && (
                <div className="error">{getErrorMessage('nom_service', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="description"
                inputBorder="border-[#121212]"
                placeholder="Entrer le description"
                label="Quel est le description ?"
                fieldName={"description"}
                onchange={formik.handleChange}
                value={formik.values.description} />
            {getErrorMessage('description', formik) && (
                <div className="error">{getErrorMessage('description', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="statut"
                inputBorder="border-[#121212]"
                placeholder="Entrer le statut"
                label="Quel est le statut ?"
                fieldName={"statut"}
                onchange={formik.handleChange}
                value={formik.values.statut} />
            {getErrorMessage('statut', formik) && (
                <div className="error">{getErrorMessage('statut', formik)}</div>
            )}
        </div>

        <div>
            <Input
                type="text"
                id="cout"
                inputBorder="border-[#121212]"
                placeholder="Entrer le cout"
                label="Quel est le cout ?"
                fieldName={"cout"}
                onchange={formik.handleChange}
                value={formik.values.cout} />
            {getErrorMessage('cout', formik) && (
                <div className="error">{getErrorMessage('cout', formik)}</div>
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

export default ServiceHotelDetails;