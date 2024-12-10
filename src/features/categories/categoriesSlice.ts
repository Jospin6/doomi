import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCategories, fetchCategoryById } from './categoriesApi';
import {CategorieProduit} from '@/helpers/types'



type initialState = {
    loading: boolean,
    categories: CategorieProduit[],
    category: CategorieProduit | null,
    error: string
}

// État initial
const initialState: initialState = {
    loading: false,
    categories: [],
    category: null,
    error: ""
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Gestion de la récupération de toutes les catégories
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload || "Erreur lors de la récupération des catégories";
            });

        // Gestion de la récupération d'une catégorie par ID
        builder
            .addCase(fetchCategoryById.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchCategoryById.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.category = action.payload;
            })
            .addCase(fetchCategoryById.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload || "Erreur lors de la récupération de la catégorie";
            });
    }
});

export default categoriesSlice.reducer