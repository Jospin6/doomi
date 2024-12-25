import React, { SetStateAction, useEffect } from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { setcurrentSubCategory } from '@/features/sub_categories/subCategoriesSlice';
import { fetchSubCategories } from '@/features/sub_categories/subCategoriesApi';

interface ProduitDetailsProps {
    formik: FormikProps<any>;
}

const ProduitDetails: React.FC<ProduitDetailsProps> = ({ formik }) => {
    const dispatch = useDispatch<AppDispatch>();
    const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory);
    const { loading, subCategories, error } = useSelector((state: RootState) => state.subCategory);

    const handleSubCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setcurrentSubCategory(event.target.value));
        formik.setFieldValue('sub_categorie_produit_id', event.target.value);
    };

    useEffect(() => {
        dispatch(fetchSubCategories());
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files) {
            const fileArray = Array.from(files);
            formik.setFieldValue("images", fileArray);
        } 
    };

    const renderImagePreviews = () => {
        const images: FileList | undefined = formik.values.images;
        if (images && images.length > 0) {
            return (
                <div className="image-previews">
                    {Array.from(images).map((file, index) => (
                        <div key={index} className="image-preview">
                            <img
                                src={URL.createObjectURL(file as Blob)} // Cast to Blob
                                alt={`Preview ${index}`}
                                className="w-32 h-32 object-cover"
                            />
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div>
                <Input
                    type="text"
                    id="titre"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer le titre"
                    label="Quel est le titre ?"
                    fieldName={"titre"}
                    onchange={formik.handleChange}
                    onblur={formik.handleBlur}
                    value={formik.values.titre}
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).titre && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).titre}</div>
                )} */}
            </div>
            <div>
                <Input
                    type="number"
                    id="prix"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer le prix"
                    label="Quel est le prix ?"
                    fieldName={"prix"}
                    onchange={formik.handleChange}
                    value={formik.values.prix}
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).prix && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).prix}</div>
                )} */}
            </div>

            <div>
                <label>Description</label><br />
                <textarea
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    className='bg-black'
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).description && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).description}</div>
                )} */}
            </div>

            <div>
                <Input
                    type="text"
                    id="devise"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer la devise"
                    label="Quel est la devise ?"
                    fieldName={"devise"}
                    onchange={formik.handleChange}
                    value={formik.values.devise}
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).devise && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).devise}</div>
                )} */}
            </div>

            <div>
                <Input
                    type="text"
                    id="localisation"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer la Localisation"
                    label="Quel est ta Localisation ?"
                    fieldName={"localisation"}
                    onchange={formik.handleChange}
                    value={formik.values.localisation}
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).localisation && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).localisation}</div>
                )} */}
            </div>

            <div>
                <label>Sous-catégorie</label>
                <select
                    name="sub_categorie_produit_id"
                    onChange={handleSubCategoryChange}
                    value={subCategory}
                    className='text-black'
                >
                    <option value="">Sélectionnez une sous-catégorie</option>
                    {subCategories && subCategories.map(subcategory => (
                        <option key={subcategory.id} value={subcategory.id}>
                            {subcategory.titre}
                        </option>
                    ))}
                </select>
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).sub_categorie_produit_id && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).sub_categorie_produit_id}</div>
                )} */}
            </div>

            <div>
                <label>Images</label>
                <input
                    type="file"
                    name="images"
                    onChange={handleFileChange}
                    multiple
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).images && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).images}</div>
                )} */}
            </div>

            {renderImagePreviews()}
        </>
    );
};

export default ProduitDetails;