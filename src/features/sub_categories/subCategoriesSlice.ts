import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    subCategories: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    subCategories: [],
    error: ""
}

const subCategoriesSlice = createSlice({
    name: "subCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default subCategoriesSlice.reducer