import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {fetchProduits, fetchProduitsById, fetchUserProduits} from './produitsApi'
import {CategorieProduit, Produit} from '@/helpers/types'

type initialState = {
    loading: boolean,
    produits: CategorieProduit[],
    singleProduct: Produit | null,
    userProducts: CategorieProduit[],
    error: string
}

const initialState: initialState = {
    loading: false,
    produits: [],
    singleProduct: null,
    userProducts: [],
    error: ""
}

const produitsSlice = createSlice({
    name: "produits",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduits.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchProduits.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading= false
                state.produits = action.payload
            })
            .addCase(fetchProduits.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload || "Erreur lors de la récupération des produits";
            })
        
        builder
            .addCase(fetchProduitsById.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchProduitsById.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading= false
                state.singleProduct = action.payload
            })
            .addCase(fetchProduitsById.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload || "Erreur lors de la récupération du produit";
            })

        builder
            .addCase(fetchUserProduits.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchUserProduits.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading= false
                state.userProducts = action.payload
            })
            .addCase(fetchUserProduits.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.error = action.payload || "Erreur lors de la récupération des produits";
            })
    }
})

export default produitsSlice.reducer