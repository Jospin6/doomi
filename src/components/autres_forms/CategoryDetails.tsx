"use client"
import React from 'react';
import { FormikProps, useFormik } from 'formik';
import { Input } from '../Input';
import * as Yup from 'yup';
import { postCategories } from '@/features/categories/categoriesApi'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/store';
import { useNavigate } from 'react-router-dom';

const CategoryDetails = () => {

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const initialValues = {
        titre: "",
        description: "",
        image: ""
    }

    const validationSchema = Yup.object({
        titre: Yup.string().required("Le titre du categorie est requis"),
        description: Yup.string().required("La description du categorie est requis"),
        image: Yup.string().required("L'image du categorie est requis")
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            dispatch(postCategories(data))
            resetForm()
            navigate("/admin")
        }
    })

    const getErrorMessage = (field: string, formik: FormikProps<any>): string | undefined => {
        const error = formik.errors[field];
        return typeof error === 'string' ? error : undefined;
    };

    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Input
                    type="text"
                    id="titre"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer le titre"
                    label="Quel est le titre ?"
                    fieldName={"titre"}
                    onchange={formik.handleChange}
                    value={formik.values.titre} />
                {getErrorMessage('titre', formik) && (
                    <div className="error">{getErrorMessage('titre', formik)}</div>
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
                <label>image</label>
                <input
                    type="file"
                    name="image"
                    onChange={(event) => {
                        formik.setFieldValue("image", event.currentTarget.files);
                    }}
                    multiple
                />
                {getErrorMessage('image', formik) && (
                    <div className="error">{getErrorMessage('image', formik)}</div>
                )}
            </div>

            <div>
                <button type="submit" className="bg-blue-500 rounded-lg text-[14px] px-[10px] py-[3px]">Ajouter</button>
            </div>
        </form>
    </>;
};

export default CategoryDetails;