import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchSubCategories } from './subCategoriesApi'


type subCategory = {
    id: number
    titre: string
}
type initialState = {
    loading: boolean,
    subCategories: subCategory[] | null,
    currentSubCategory: string,
    error: string
}

const initialState: initialState = {
    loading: false,
    subCategories: null,
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
        builder
            .addCase(fetchSubCategories.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(fetchSubCategories.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.subCategories = action.payload
            })
            .addCase(fetchSubCategories.rejected, (state, action: PayloadAction<any>)=>{
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { setcurrentSubCategory } = subCategoriesSlice.actions

export default subCategoriesSlice.reducer