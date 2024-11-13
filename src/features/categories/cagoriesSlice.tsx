import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    loading: boolean,
    categories: any[],
    error: string
}

const initialState: initialState = {
    loading: false,
    categories: [],
    error: ""
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
    }
})

export default categoriesSlice.reducer