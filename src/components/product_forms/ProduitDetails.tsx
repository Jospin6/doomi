import React, { SetStateAction, useEffect } from 'react';
import { FormikErrors, FormikProps } from 'formik';
import { Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { setcurrentSubCategory } from '@/features/sub_categories/subCategoriesSlice';
import { fetchSubCategories } from '@/features/sub_categories/subCategoriesApi';
import { IoCameraOutline } from 'react-icons/io5';

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
        const images: File[] | undefined = formik.values.images;
        if (images && images.length > 0) {
            return (
                <div className="image-previews flex flex-wrap">
                    {Array.from(images).map((file, index) => (
                        <div key={index} className="image-preview">
                            <img
                                src={URL.createObjectURL(file as Blob)} // Cast to Blob
                                alt={`Preview ${index}`}
                                className="w-32 h-32 rounded-lg ml-2 object-cover"
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
                    inputBorder="border-gray-700"
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
            <div className='mt-4'>
                <Input
                    type="number"
                    id="prix"
                    inputBorder="border-gray-700"
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

            <div className='mt-4'>
                <label className='text-[12px]'>Description</label><br />
                <textarea
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    className='bg-black border-[1px] px-2 border-gray-700 rounded-lg w-full'
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).description && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).description}</div>
                )} */}
            </div>

            <div className='mt-4'>
                <Input
                    type="text"
                    id="devise"
                    inputBorder="border-gray-700"
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

            <div className='mt-4'>
                <Input
                    type="text"
                    id="localisation"
                    inputBorder="border-gray-700"
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

            <div className='mt-4'>
                <label className='block font-[500] text-[12px]'>Sous catégorie</label>
                <select
                    name="sub_categorie_produit_id"
                    onChange={handleSubCategoryChange}
                    value={subCategory}
                    className='text-white custom-select border-[1px] border-gray-700 w-full h-[35px] rounded-lg outline-none mr-2 no-spiner text-[12px] bg-transparent '
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

            <div className='mt-4 flex w-full'>
                <label htmlFor='images' className='cursor-pointer'>
                    <div className='w-32 h-32 border-[1px] border-gray-700 rounded-lg flex justify-center items-center'>
                        <IoCameraOutline className='w-16 h-16 text-gray-700' />
                    </div>
                </label>
                <input
                    type="file"
                    name="images"
                    id='images'
                    onChange={handleFileChange}
                    multiple
                    className='hidden'
                />
                {/* {formik.errors.produit && (formik.errors.produit as FormikErrors<typeof initialValues.produit>).images && (
                    <div>{(formik.errors.produit as FormikErrors<typeof initialValues.produit>).images}</div>
                )} */}
                {renderImagePreviews()}
            </div>

            
        </>
    );
};

export default ProduitDetails;