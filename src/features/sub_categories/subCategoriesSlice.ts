import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    subCategories: any[],
    currentSubCategory: string,
    error: string
}

const initialState: initialState = {
    loading: false,
    subCategories: [],
    currentSubCategory: '0',
    error: ""
}

const subCategoriesSlice = createSlice({
    name: "subCategories",
    initialState,
    reducers: {
        setcurrentSubCategory: (state, action: PayloadAction<any>) => {
            state.currentSubCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        
    }
})

export const { setcurrentSubCategory } = subCategoriesSlice.actions

export default subCategoriesSlice.reducer