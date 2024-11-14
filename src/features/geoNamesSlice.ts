import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { geoUserName } from '@/helpers/constants'
import axios from 'axios'

type initialState = {
    loading: boolean,
    names: any[],
    error: string
}

export const getGeoNames= createAsyncThunk("geonames/getGeoNames", async (term: string) => {
    return await axios.get(`http://api.geonames.org/searchJSON?q=${term}&maxRows=10&username=${geoUserName}`)
        .then(respons => respons.data)
        .catch(error => error.message)
})

const initialState: initialState = {
    loading: false,
    names: [],
    error: ""
}

const geoNamesSlice = createSlice({
    name: "geonames",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGeoNames.pending, (state) => {
            state.loading = true
        })
        .addCase(getGeoNames.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.names = action.payload
        })
        .addCase(getGeoNames.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default geoNamesSlice.reducer