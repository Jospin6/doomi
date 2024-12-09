import { createSlice } from '@reduxjs/toolkit'
import {fetchProduits, fetchProduitsById} from './produitsApi'

type initialState = {
    loading: boolean,
    produits: any[],
    singleProduct: any | null,
    error: string
}

const initialState: initialState = {
    loading: false,
    produits: [],
    singleProduct: null,
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
            .addCase(fetchProduits.fulfilled, (state, action) => {
                state.loading= false
                state.produits = action.payload
            })
            .addCase(fetchProduits.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Erreur lors de la récupération des produits";
            })
        
        builder
            .addCase(fetchProduitsById.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchProduitsById.fulfilled, (state, action) => {
                state.loading= false
                state.singleProduct = action.payload
            })
            .addCase(fetchProduitsById.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Erreur lors de la récupération du produit";
            })
    }
})

export default produitsSlice.reducer