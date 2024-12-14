import React, { SetStateAction, useEffect } from 'react';
import { FormikProps } from 'formik';
import { Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/store';
import { setcurrentSubCategory } from '@/features/sub_categories/subCategoriesSlice';
import { fetchSubCategories } from '@/features/sub_categories/subCategoriesApi';

interface ProduitDetailsProps {
    formik: FormikProps<any>;
    getErrorMessage: (field: string, formik: FormikProps<any>) => string | undefined;
}

const ProduitDetails: React.FC<ProduitDetailsProps> = ({ formik, getErrorMessage }) => {
    const dispatch = useDispatch<AppDispatch>();
    const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory);
    const { loading, subCategories, error } = useSelector((state: RootState) => state.subCategory);
    const user_id = useSelector((state: RootState) => state.user.user?.id);

    const handleSubCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setcurrentSubCategory(event.target.value));
        formik.setFieldValue('produit.sub_categorie_produit_id', event.target.value);
    };

    useEffect(() => {
        dispatch(fetchSubCategories());
    }, [dispatch]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (files) {
            formik.setFieldValue("produit.images", files);
        }
    };

    const renderImagePreviews = () => {
        const images: FileList | undefined = formik.values.produit.images;
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
            <input type="hidden" name='produit.user_id' value={user_id} />
            <div>
                <Input
                    type="text"
                    id="titre"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer le titre"
                    label="Quel est le titre ?"
                    fieldName={"produit.titre"}
                    onchange={formik.handleChange}
                    value={formik.values.produit.titre}
                />
                {getErrorMessage('produit.titre', formik) && (
                    <div className="error">{getErrorMessage('produit.titre', formik)}</div>
                )}
            </div>
            <div>
                <Input
                    type="number"
                    id="prix"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer le prix"
                    label="Quel est le prix ?"
                    fieldName={"produit.prix"}
                    onchange={formik.handleChange}
                    value={formik.values.produit.prix}
                />
                {getErrorMessage('produit.prix', formik) && (
                    <div className="error">{getErrorMessage('produit.prix', formik)}</div>
                )}
            </div>

            <div>
                <label>Description</label><br />
                <textarea
                    name="produit.description"
                    onChange={formik.handleChange}
                    value={formik.values.produit.description}
                    className='bg-black'
                />
                {getErrorMessage('produit.description', formik) && (
                    <div className="error">{getErrorMessage('produit.description', formik)}</div>
                )}
            </div>

            <div>
                <Input
                    type="text"
                    id="devise"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer la devise"
                    label="Quel est la devise ?"
                    fieldName={"produit.devise"}
                    onchange={formik.handleChange}
                    value={formik.values.produit.devise}
                />
                {getErrorMessage('produit.devise', formik) && (
                    <div className="error">{getErrorMessage('produit.devise', formik)}</div>
                )}
            </div>

            <div>
                <Input
                    type="text"
                    id="localisation"
                    inputBorder="border-[#121212]"
                    placeholder="Entrer la Localisation"
                    label="Quel est ta Localisation ?"
                    fieldName={"produit.localisation"}
                    onchange={formik.handleChange}
                    value={formik.values.produit.localisation}
                />
                {getErrorMessage('produit.localisation', formik) && (
                    <div className="error">{getErrorMessage('produit.localisation', formik)}</div>
                )}
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
                {getErrorMessage('produit.sub_categorie_produit_id', formik) && (
                    <div className="error">{getErrorMessage('produit.sub_categorie_produit_id', formik)}</div>
                )}
            </div>

            <div>
                <label>Images</label>
                <input
                    type="file"
                    name="produit.images"
                    onChange={handleFileChange}
                    multiple
                />
                {getErrorMessage('produit.images', formik) && (
                    <div className="error">{getErrorMessage('produit.images', formik)}</div>
                )}
            </div>

            {/* Affichage des prévisualisations des images */}
            {renderImagePreviews()}
        </>
    );
};

export default ProduitDetails;